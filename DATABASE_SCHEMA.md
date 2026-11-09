# 🗄️ Schema do Banco de Dados — FORGEE Academy

> **Revisão:** Documento atualizado para refletir o **banco real** (Supabase / PostgreSQL), conferido contra todas as chamadas do frontend.
> O banco é criado por **migrations em SQL** (não usa Prisma). Se este documento divergir do banco, o banco real vence.
> Projeto Supabase: **FORGEE Academy** (região `sa-east-1`).

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Convenções](#convenções)
3. [Autenticação e Acesso](#autenticação-e-acesso)
4. [Modelos e Mapeamento com o Frontend](#modelos-e-mapeamento-com-o-frontend)
5. [Relacionamentos](#relacionamentos)
6. [Regras de Consistência (constraints)](#regras-de-consistência-constraints)
7. [Enums](#enums)
8. [Configuração Supabase](#configuração-supabase)
9. [Pendências Recomendadas](#pendências-recomendadas)

---

## Visão Geral

O banco de dados cobre **7 módulos principais**:

| Módulo | Tabelas | Telas Frontend |
|---|---|---|
| Alunos & Cadastro | `alunos`, `dados_saude`, `parq`, `objetivos`, `dados_fisicos`, `termos_responsabilidade` | `NovoAluno.tsx`, `Alunos.tsx` |
| Planos & Pagamentos | `planos`, `planos_alunos`, `pagamentos` | `Configuracoes.tsx` (TabPlanos), `NovoAluno.tsx`, `Alunos.tsx` |
| Check-ins | `checkins` | `CheckIns.tsx`, `ModoRecepcao.tsx` |
| Administração | `usuarios` (perfil da equipe; login fica no Supabase Auth) | `Configuracoes.tsx` (TabPerfil), `LoginAdmin.tsx` |
| Configurações | `configuracoes_academia` | `Configuracoes.tsx` (TabGeral + TabSistema) |
| Notificações | `notificacoes` | Ainda sem tela (reservada) |
| Auditoria | `logs_auditoria` | Ainda sem tela (somente leitura para o frontend) |

---

## Convenções

- Tabelas e colunas em **`snake_case`** (ex.: `data_nasc`, `plano_aluno_id`). O frontend usa `camelCase` e converte em `src/lib/academy.ts`.
- Enums em **MAIÚSCULAS** (`ATIVO`, `PAGO`). Os rótulos da tela ("Em dia", "Pago") são só apresentação.
- Dinheiro em `numeric` (ex.: `89.90`). Datas de vencimento/pagamento em `date`; momentos (check-in, criação) em `timestamptz`.
- Métricas por dia usam o fuso **America/Sao_Paulo**.
- Toda tabela do schema `public` tem **RLS ativo**. Funções `SECURITY DEFINER` ficam no schema `private`.
- IDs numéricos (`bigint generated always as identity`), exceto `usuarios.id` (uuid, igual ao id do Supabase Auth) e `configuracoes_academia.id` (sempre `1`).

---

## Autenticação e Acesso

- **Login e senha ficam no Supabase Auth** (`auth.users`). A tabela `public.usuarios` **não tem coluna de senha**.
- `public.usuarios.id` é igual a `auth.users.id` (FK com `ON DELETE CASCADE`). Quem tem linha em `usuarios` é considerado **equipe**.
- **Primeiro administrador restrito:** o gatilho `on_auth_user_created` (função `private.handle_new_user`) só cria o perfil `ADMINISTRADOR` automaticamente se o e-mail for o autorizado (`andre@jabuticabadesign.com`) **e** ainda não existir nenhum usuário em `usuarios`. Qualquer outro cadastro no Auth **não** vira equipe.
- `private.is_staff()` (`SECURITY DEFINER`, `search_path = ''`) diz se o usuário logado tem linha em `usuarios`. Todas as policies usam essa função.
- **Perfil do próprio usuário:** só **nome** e **telefone** podem ser alterados (privilégio de coluna: `UPDATE (nome, telefone)`). **Cargo, e-mail, id e datas não podem ser editados pelo frontend.**
- **Troca de e-mail:** feita pelo Supabase Auth (`auth.updateUser({ email })`, com confirmação por e-mail). O gatilho `on_auth_user_email_changed` (função `private.sync_usuario_email`) copia o novo e-mail para `usuarios.email` quando o Auth efetiva a troca.
- **Troca de senha:** `auth.updateUser({ password })` no Supabase Auth, após reautenticar com a senha atual.
- O frontend usa **somente a chave publicável**. Nunca usar `service_role` no frontend.

### Permissões das tabelas

| Tabela | Equipe logada (`authenticated`) | Observação |
|---|---|---|
| `alunos`, `dados_saude`, `parq`, `objetivos`, `dados_fisicos`, `planos_alunos`, `pagamentos`, `checkins`, `termos_responsabilidade`, `notificacoes`, `planos`, `configuracoes_academia` | Ler, inserir, alterar, apagar | Policies `*_equipe` com `private.is_staff()` |
| `usuarios` | Ler, inserir, apagar; alterar **só** `nome` e `telefone` | Ver [Pendências](#pendências-recomendadas) |
| `logs_auditoria` | **Somente leitura** | Escrita futura por função/gatilho privado |
| `alunos_financeiro` (view) | Somente leitura | `security_invoker = true` |

- O papel `authenticated` **não tem** `TRUNCATE`, `TRIGGER` nem `REFERENCES` nas tabelas do `public` (e novas tabelas criadas pelo `postgres` já nascem sem esses privilégios).

> ⚠️ **Estado atual (temporário):** existe a migration `acesso_aberto_temporario_sem_login`, que libera leitura e escrita ao papel `anon` (sem login) em quase todas as tabelas, apenas para teste do painel sem login. **Enquanto ela existir, qualquer pessoa com a chave publicável do site consegue ler e apagar dados de alunos.** Para desfazer, rode `supabase/reverter-acesso-aberto.sql` e volte `VITE_REQUIRE_AUTH` para `true`.

---

## Modelos e Mapeamento com o Frontend

### 👤 `alunos`

| Campo DB | Campo Frontend | Tela | Observação |
|---|---|---|---|
| `nome` | `nome` | NovoAluno § 1 | Obrigatório |
| `data_nasc` | `dataNasc` | NovoAluno § 1 | `date`, `type="date"` |
| `cpf` | `cpf` | NovoAluno § 1 | Único, formato "000.000.000-00" |
| `rg` | `rg` | NovoAluno § 1 | |
| `sexo` | `sexo` | NovoAluno § 1 | Texto livre ("Feminino" \| "Masculino" \| "Outro") |
| `estado_civil` | `estadoCivil` | NovoAluno § 1 | Texto livre |
| `profissao` | `profissao` | NovoAluno § 1 | |
| `telefone` | `telefone` | NovoAluno § 1 | WhatsApp |
| `email` | `email` | NovoAluno § 1 | Único |
| `endereco` | `endereco` | NovoAluno § 1 | Campo único completo |
| `contato_emerg` | `contatoEmerg` | NovoAluno § 1 | |
| `tel_emerg` | `telEmerg` | NovoAluno § 1 | |
| `foto_url` | `fotoAluno` (File) | NovoAluno § 1 | Guarda o **caminho** no bucket privado `fotos-alunos`; a tela gera URL assinada de 1 hora |
| `status` | `isActive` | Alunos.tsx | Enum `aluno_status`, padrão `ATIVO` |
| `matricula` | `student.id` | Alunos.tsx | Gerada pelo banco (`#1001`, `#1002`…), única |
| `qr_code_token` | valor QR Code | ModoRecepcao | Gerado pelo banco (uuid), único |

**Status financeiro** (calculado pela view `alunos_financeiro`, **não é coluna gravada**). Considera apenas o **plano atual** do aluno: o plano `ATIVO` (se houver) ou, se não houver, o plano mais recente. Planos antigos não contam. Datas no fuso America/Sao_Paulo. Regras, na ordem:
1. Algum pagamento `ATRASADO` → `"Em atraso"`
2. Sem plano → `"Sem plano"`
3. Plano atual `VENCIDO` → `"Em atraso"`
4. Plano `ATIVO` com `data_venc` já passada → `"Em atraso"`
5. Plano `ATIVO` com vencimento em até `dias_alerta_vencimento` dias → `"Vencendo"`
6. Plano `ATIVO` com vencimento depois disso → `"Em dia"`
7. Plano `CANCELADO` ou `SUSPENSO` → `"Sem plano"`

Colunas da view: `id`, `nome`, `matricula`, `status_cadastro`, `status_financeiro` (sempre uma linha por aluno).

---

### 🩺 `dados_saude`

Um registro por aluno (`aluno_id` único). Todas as colunas são texto opcional.

| Campo DB | Pergunta no Frontend |
|---|---|
| `doenca` | "Possui alguma doença diagnosticada?" |
| `cardiaco` | "Problemas cardíacos?" |
| `pressao` | "Pressão alta ou baixa?" (opções: NÃO/ALTA/BAIXA) |
| `diabetes` | "Possui diabetes?" |
| `desmaios` | "Desmaios ou tonturas frequentes?" |
| `respiratorio` | "Problemas respiratórios?" |
| `articular` | "Problemas articulares?" |
| `cirurgia` | "Já realizou cirurgia?" |
| `medicacao` | "Faz uso de medicação contínua?" |
| `gestante` | "Está gestante?" (opções: SIM/NÃO/N/A) |
| `limitacao` | "Possui limitação física?" |
| `recomendacao_medica` | "Possui recomendação médica para prática de exercícios?" |

---

### ❓ `parq`

Um registro por aluno (`aluno_id` único).

| Campo DB | Pergunta no Frontend |
|---|---|
| `q1` | "Algum médico já disse que você possui problema cardíaco?" |
| `q2` | "Sente dor no peito ao realizar atividade física?" |
| `q3` | "Sentiu dor no peito no último mês?" |
| `q4` | "Perde o equilíbrio por tontura ou já perdeu a consciência?" |
| `q5` | "Possui problema ósseo ou articular que pode piorar com exercício?" |
| `q6` | "Seu médico já recomendou restrição de atividade física?" |
| `possui_restricao` | Coluna **gerada** pelo banco (verdadeira se algum `q1..q6` for "SIM"); a tela usa para o alerta laranja |

---

### 🎯 `objetivos`

Um registro por aluno (`aluno_id` único).

| Campo DB | Tipo/Opções no Frontend |
|---|---|
| `objetivo` | ObjectiveButton: "Emagrecimento" \| "Hipertrofia" \| "Condicionamento Físico" \| "Reabilitação" \| "Saúde Geral" \| "Outro" |
| `treinou_antes` | DSSelect: "Sim, regularmente" \| "Sim, esporadicamente" \| "Nunca treinei" |
| `tempo_pratica` | Texto livre (ex: "6 meses") |
| `vezes_semana` | DSSelect: "1x" \| "2x" \| "3x" \| "4x" \| "5x ou mais" |
| `horario_pref` | Texto livre (ex: "manhã") |

---

### 💪 `dados_fisicos`

Várias avaliações por aluno (histórico).

| Campo DB | Hint/Unidade | Observação |
|---|---|---|
| `peso` | KG | `numeric`, deve ser maior que zero (ou vazio) |
| `altura` | CM | `numeric`, deve ser maior que zero (ou vazio) |
| `imc` | Calculado | Coluna **gerada** pelo banco: `peso / (altura/100)²`, 1 casa decimal |
| `gordura` | % | Entre 0 e 100 (ou vazio) |
| `medidas` | texto | Circunferências livres |
| `avaliado_em` | — | `timestamptz`, padrão `now()` |

---

### 📋 `planos`

| Campo DB | Campo Frontend | Observação |
|---|---|---|
| `nome` | `plan.name` | Maiúsculas: "BASIC", "PREMIUM", "ELITE". **Único sem diferenciar maiúsculas/minúsculas** (o cadastro de aluno busca o plano pelo nome) |
| `subtitulo` | `plan.subtitle` | Ex: "Plano mais popular" |
| `preco` | `plan.price` | `numeric`, maior ou igual a zero |
| `beneficios` | `plan.benefits` | `jsonb` (precisa ser array de textos) |
| `destaque` | `plan.featured` | Toggle no PlanCard, checkbox no CriarPlanoModal |

Dados iniciais: BASIC (89,90), PREMIUM (199,90), ELITE (299,90). Plano em uso por algum aluno **não pode ser apagado** (`ON DELETE RESTRICT`).

---

### 🔗 `planos_alunos`

Criado ao cadastrar novo aluno (NovoAluno.tsx — Seção 6):

| Campo DB | Campo Frontend | Observação |
|---|---|---|
| `plano_id` | `tipoPlano` | Referência ao plano escolhido |
| `valor` | `valorPlano` | Valor negociado, maior ou igual a zero |
| `data_inicio` | `dataInicio` | `date`, obrigatório |
| `data_venc` | `dataVenc` | `date`, obrigatório |
| `forma_pgto` | `formaPgto` | "PIX" \| "Cartão de Débito" \| "Cartão de Crédito" \| "Boleto" \| "Dinheiro" |
| `status` | — | Enum `status_plano_aluno`, padrão `ATIVO` |

---

### 💳 `pagamentos`

Exibido em `Alunos.tsx` → `StudentProfile` → "HISTÓRICO DE PAGAMENTOS":

| Campo DB | Frontend | Observação |
|---|---|---|
| `aluno_id` | — | Obrigatório |
| `plano_aluno_id` | — | Opcional (pagamento avulso). Quando preenchido, o plano **precisa ser do mesmo aluno** |
| `valor` | `payment.amount` | Exibido como `R$ 89,90` |
| `data_pagamento` | `payment.date` | Exibido como `dd/mm/aaaa`. **Obrigatória quando `status = PAGO`** |
| `forma_pgto` | `payment.method` | "PIX", "Boleto", "Cartão"… |
| `status` | `payment.status` | "Pago" \| "Atrasado" \| "Pendente" \| "Cancelado" |
| `comprovante` | — | Caminho no bucket `comprovantes` (ainda sem tela) |

---

### ✅ `checkins`

Exibido em `CheckIns.tsx` e registrado via `ModoRecepcao.tsx`:

| Campo DB | Frontend | Observação |
|---|---|---|
| `entrada` | `checkIn.time` + `checkIn.date` | `timestamptz`, padrão `now()` |
| `tipo` | — | `MANUAL` (digitado) \| `QR_CODE` (leitura/simulação) \| `AUTO` (reservado) |
| `identificador` | `inputValue` | Matrícula, token ou e-mail digitado no Modo Recepção |

**Métricas** (calculadas no frontend a partir das consultas):
- "HOJE" → check-ins com `entrada` a partir das 00:00 do dia
- "SEMANA" → últimos 7 dias
- "MÊS" → mês atual

**Dashboard "Turistas"** → alunos cujo último check-in é anterior a `agora − dias_sem_checkin_risco` dias.

---

### ⚙️ `configuracoes_academia`

Tabela com **uma única linha** (`id = 1`, garantido por `CHECK`).

| Campo DB | Tab Frontend | Observação |
|---|---|---|
| `nome` | TabGeral | "Nome da Academia" |
| `cnpj` | TabGeral | Único |
| `telefone` | TabGeral | |
| `email` | TabGeral | |
| `endereco` | TabGeral | |
| `cidade` | TabGeral | |
| `estado` | TabGeral | |
| `cep` | TabGeral | |
| `logo_url` | — | Caminho no bucket `logo-academia` (ainda sem tela) |
| `horario_abertura` | TabSistema | `time`, padrão "06:00" |
| `horario_fechamento` | TabSistema | `time`, padrão "22:00" |
| `dias_sem_checkin_risco` | TabSistema | Maior que 0, padrão 10 |
| `dias_alerta_vencimento` | TabSistema | Maior ou igual a 0, padrão 5 |
| `pin_recepcao` | ModoRecepcao | Exatamente 4 números, padrão "1234" (ver [Pendências](#pendências-recomendadas)) |

---

### 👥 `usuarios`

| Campo DB | Tab Frontend | Observação |
|---|---|---|
| `id` | — | Igual a `auth.users.id` |
| `nome` | TabPerfil | "Nome Completo" — **editável pelo usuário** |
| `email` | TabPerfil | Espelho do e-mail do Supabase Auth. **Não é editável direto**; muda pelo Auth e o gatilho sincroniza |
| `telefone` | TabPerfil | **Editável pelo usuário** |
| `cargo` | — | Enum `cargo_usuario`: `ADMINISTRADOR`, `RECEPCAO`, `INSTRUTOR`. **Não é editável pelo frontend** |

> Não existe coluna de senha. "Senha Atual" e "Nova Senha" da tela são tratadas direto pelo Supabase Auth.

---

### 🔔 `notificacoes` e 🧾 `logs_auditoria`

- `notificacoes`: `aluno_id` opcional (`ON DELETE SET NULL`), `tipo` (enum `tipo_notificacao`), `titulo`, `mensagem`, `lida`.
- `logs_auditoria`: `usuario_id` opcional (`ON DELETE SET NULL`), `acao`, `entidade`, `entidade_id`, `detalhes` (`jsonb`). **Nenhuma tela grava nela hoje**; o frontend só pode ler.

---

## Relacionamentos

```
auth.users (Supabase Auth)
  └── usuarios (1:1, mesmo id)
        └── logs_auditoria (1:N)

alunos
  ├── dados_saude (1:1)
  ├── parq (1:1)
  ├── objetivos (1:1)
  ├── dados_fisicos (1:N) — múltiplas avaliações
  ├── planos_alunos (1:N) — histórico de planos (no máximo 1 ATIVO)
  │     ├── planos (N:1)
  │     └── pagamentos (1:N) — do MESMO aluno
  ├── checkins (1:N)
  ├── pagamentos (1:N) — acesso direto para queries
  ├── termos_responsabilidade (1:1)
  └── notificacoes (1:N)
```

Apagar um aluno apaga em cascata todos os dados ligados a ele (`ON DELETE CASCADE`), exceto `notificacoes` (fica sem aluno).

---

## Regras de Consistência (constraints)

O banco recusa dado inválido mesmo que o frontend erre:

| Regra | Como é garantida |
|---|---|
| Pagamento não aponta para plano de outro aluno | `UNIQUE (id, aluno_id)` em `planos_alunos` + FK composta `pagamentos (plano_aluno_id, aluno_id) → planos_alunos (id, aluno_id)`; ao apagar o plano, só `plano_aluno_id` vira nulo |
| No máximo um plano `ATIVO` por aluno | Índice único parcial `planos_alunos_um_ativo_por_aluno` em `(aluno_id) WHERE status = 'ATIVO'` |
| Pagamento `PAGO` exige data | `CHECK pagamentos_pago_exige_data (status <> 'PAGO' OR data_pagamento IS NOT NULL)` |
| Nome de plano único | Índice único `planos_nome_lower_key` em `lower(nome)` |
| CPF, e-mail, matrícula e token do aluno únicos | `UNIQUE` em `alunos` |
| Uma linha de configuração | `CHECK (id = 1)` |
| PIN com 4 números | `CHECK (pin_recepcao ~ '^[0-9]{4}$')` |
| Valores financeiros não negativos | `CHECK (valor >= 0)`, `CHECK (preco >= 0)` |
| Medidas físicas válidas | `CHECK` em `peso`, `altura`, `gordura` |
| `updated_at` sempre atualizado | Gatilho `private.set_updated_at` |

Todas as chaves estrangeiras têm índice.

---

## Enums

| Enum (banco) | Valores | Uso |
|---|---|---|
| `aluno_status` | `ATIVO`, `INATIVO`, `INADIMPLENTE`, `SUSPENSO` | Status do cadastro do aluno |
| `status_plano_aluno` | `ATIVO`, `VENCIDO`, `CANCELADO`, `SUSPENSO` | Status do contrato do plano |
| `status_pagamento` | `PENDENTE`, `PAGO`, `ATRASADO`, `CANCELADO` | Status da cobrança |
| `tipo_checkin` | `MANUAL`, `AUTO`, `QR_CODE` | Como o check-in foi registrado |
| `tipo_notificacao` | `INFO`, `AVISO`, `URGENTE`, `PAGAMENTO`, `VENCIMENTO` | Categoria da notificação |
| `cargo_usuario` | `ADMINISTRADOR`, `RECEPCAO`, `INSTRUTOR` | Cargo da equipe |

---

## Configuração Supabase

O banco é gerenciado por **migrations SQL** aplicadas no projeto Supabase (não há Prisma). Principais migrations, em ordem:

1. `forgee_academy_schema` — tabelas, enums, índices, gatilhos, RLS, policies, view e buckets
2. `secure_first_administrator` e `restrict_first_admin_email` — primeiro admin restrito ao e-mail autorizado
3. `usuarios_perfil_somente_nome_e_telefone` — usuário só altera nome e telefone; e-mail sincronizado do Auth
4. `logs_auditoria_somente_leitura` — sem insert/update/delete pelo frontend
5. `pagamento_so_aponta_para_plano_do_mesmo_aluno` — FK composta
6. `um_plano_ativo_por_aluno_e_pago_com_data` — índice parcial, check de pagamento e nome de plano único
7. `revogar_privilegios_extras_do_front` — sem `TRUNCATE`, `TRIGGER`, `REFERENCES`
8. `corrigir_view_alunos_financeiro` — plano atual, atraso por data vencida, fuso de São Paulo

Variáveis de ambiente do frontend (arquivo `.env.local`, fora do Git): `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`. **Nunca** colocar `service_role` ou senhas do banco no frontend nem em arquivos versionados.

### Supabase Storage Buckets

Todos **privados** (acesso por URL assinada). Acesso de leitura/escrita apenas para a equipe (`private.is_staff()`).

| Bucket | Uso |
|---|---|
| `fotos-alunos` | Upload de foto no NovoAluno.tsx — `alunos.foto_url` (caminho `{aluno_id}/{uuid}.{ext}`) |
| `comprovantes` | Comprovantes de pagamento — `pagamentos.comprovante` |
| `assinaturas` | Assinaturas digitais — `termos_responsabilidade.assinatura` |
| `logo-academia` | Logo da academia — `configuracoes_academia.logo_url` |

---

## Pendências Recomendadas

Em ordem de gravidade. Nada abaixo foi alterado ainda, de propósito:

1. **Acesso aberto temporário sem login** (migration `acesso_aberto_temporario_sem_login`). Expõe e permite apagar dados de saúde, financeiros e de alunos para qualquer pessoa com a chave pública. Desfazer antes de colocar dados reais: `supabase/reverter-acesso-aberto.sql`.
2. **Policies não separam por cargo.** Hoje qualquer pessoa da equipe (inclusive `INSTRUTOR` e `RECEPCAO`) lê dados de saúde e financeiros, altera planos e configurações, e pode inserir/apagar linhas em `usuarios` (inclusive trocar o cargo de outra pessoa). Recomendado: ADMINISTRADOR para financeiro, configurações e equipe; RECEPCAO para check-in e cadastro; INSTRUTOR só leitura de saúde/treino.
3. **PIN de recepção em texto puro** (`configuracoes_academia.pin_recepcao`) e legível por toda a equipe logada. Recomendado: guardar hash e validar por função privada.
4. **Limite de 1000 linhas por consulta.** O painel, os check-ins e a lista de alunos carregam tudo de uma vez; com mais de 1000 registros as métricas (check-ins de hoje, turistas) ficam erradas. Recomendado: contar no banco (view ou função) em vez de contar no navegador.
5. **Auditoria ainda vazia.** `logs_auditoria` é somente leitura; falta criar gatilhos/funções privadas que registrem ações importantes (cadastro, pagamento, mudança de cargo).
6. **Status de planos e pagamentos não mudam sozinhos.** Nada passa `ATIVO → VENCIDO` ou `PENDENTE → ATRASADO` automaticamente (a view já trata data vencida como "Em atraso"). Recomendado: tarefa agendada (`pg_cron`) ou fluxo de renovação.
7. **Cadastro de aluno em várias etapas no navegador.** Se a internet cair no meio, o frontend tenta desfazer; o ideal é uma função única no banco que grave tudo numa transação.
8. **Cadastro aberto no Auth.** Qualquer pessoa pode criar conta no Supabase Auth; só vira equipe quem tem linha em `usuarios`. Recomendado: desativar novos cadastros públicos depois que o primeiro admin existir e convidar a equipe por convite.
9. **Storage:** sem limite de tamanho nem tipo de arquivo nos buckets. Recomendado: limitar a imagens e a poucos MB.
