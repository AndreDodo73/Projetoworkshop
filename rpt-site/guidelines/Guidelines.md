# Guidelines — continuidade no Cursor

## Antes de começar

1. Ler `AGENTS.md`, `design-system.md` e o código relacionado à tarefa.
2. Preservar o design aprovado e as alterações pontuais do usuário.
3. Manter mudanças focadas. Não substituir o projeto por outro template nem refatorar tudo para uma alteração pequena.
4. Perguntar antes de modificar hero, identidade visual, fluxos de doação ou dados institucionais de forma substancial.

## Ambiente e comandos

- React 19, TypeScript, Vite 8 e Tailwind CSS v4.
- Node 22 e pnpm 10.34.3 documentados em `.mise.toml`.
- Usar o `pnpm-lock.yaml` existente.

No Cursor, fora do ambiente supervisionado do Figma Make:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Dentro do Figma Make, o servidor é gerenciado pela plataforma: não iniciar outra instância.

Checks do projeto:

```sh
pnpm format <arquivos-alterados>
pnpm exec tsc --noEmit
pnpm build
```

`pnpm format` altera os arquivos. Não há scripts de lint nem suíte de testes persistida no `package.json`; não afirmar que existem ou que um build substitui testes de interação.

O `vite.config.ts` inclui integrações do Make e importa `.figma/make/site.json`. Preservar essa pasta no primeiro handoff. Se for removê-la para uma configuração independente, revisar os imports e plugins em uma tarefa separada.

## Organização

- `src/main.tsx` importa `src/index.css`.
- Manter os `@import` CSS no topo: Tailwind, fontes e tema.
- Fontes em `src/styles/fonts.css`; tokens em `src/styles/theme.css`.
- Reutilizar as classes e componentes existentes antes de criar novos.
- Usar `@layer base` para defaults de elementos, sem sobrepor inadvertidamente utilitários do Tailwind.
- Tailwind v4 já está configurado. Não criar `tailwind.config.js` ou PostCSS por hábito.
- Não renomear os ativos com hashes sem atualizar todas as referências.
- Arquivos em `public/` usam URLs a partir da raiz, como `/assets/...` e `/fonts/...`.

## O que deve permanecer

- Hero original: composição, grid, gradientes, fontes e vídeo do menino segurando a bola.
- Vídeo parado até o scroll, sem reprodução autônoma.
- Indicadores grandes, com contagem visível até o total.
- Patrocinadores e apoiadores destacados.
- Histórias humanas como eixo da narrativa.
- Serviços, metodologia, prêmios, transparência, ouvidoria, conteúdos e formas de apoio.
- Português principal, com inglês e francês.
- A edição da cor “HISTÓRIA 01” não deve se propagar às demais histórias.

## Acessibilidade e movimento

- Usar links para navegação e botões para ações.
- Manter foco visível e funcionamento por teclado, toque e mouse.
- `details` deve continuar acessível via `summary`; não remover o foco nem o comportamento nativo.
- Estados de seleção precisam de `aria-pressed`, `aria-expanded` ou `aria-current`, conforme o caso.
- Respeitar `prefers-reduced-motion`, inclusive se a preferência mudar com a página aberta.
- Cancelar `requestAnimationFrame`, listeners e observers ao desmontar componentes.
- Não anunciar todos os frames da contagem para leitores de tela.
- Nenhum texto essencial deve depender de hover ou de uma animação completar.
- Não esconder o próprio alvo do `IntersectionObserver` com uma máscara totalmente fechada; animar o filho.
- Garantir que itens remontados na troca de idioma sejam observados para revelação.

## Conteúdo e integrações

- Não inventar nomes, falas, medalhas, mudanças de país ou números de impacto.
- Associar fotos às pessoas somente quando houver identificação confirmada.
- Preservar o ano dos documentos e indicadores; não transformar dados históricos em dados atuais.
- Links de documentos, notícias, redes, newsletter, loja e doações estão em `src/content/institutional.ts`.
- Doação pontual usa destinos oficiais do PayPal; apoio recorrente abre a campanha no Catarse.
- O site não confirma pagamentos, inscrições, pedidos ou envio de mensagens.
- A newsletter abre o formulário externo oficial. O código local não coleta nem persiste e-mails.
- Não inserir credenciais no frontend.
- Não implementar formulário com sucesso simulado. Persistência ou integrações privadas exigem backend e tratamento real de erro.
- Links externos com `target="_blank"` precisam de `rel="noopener noreferrer"` e indicação contextual.
- Confirmar novamente a disponibilidade dos serviços externos antes de publicar.

## Pendências conhecidas antes de produção

1. Substituir a fala e o texto genéricos compartilhados pelas histórias por relatos autorizados e trajetórias individuais reais.
2. Validar os números de impacto e informar seus períodos de apuração.
3. Revisar a associação de cada fotografia ao conteúdo e as autorizações de imagem, sobretudo de menores.
4. Revisar todas as traduções com o Instituto.
5. Sincronizar `document.documentElement.lang` com o idioma selecionado e planejar rotas/SEO por idioma, se desejado; isso não está implementado.
6. Configurar título, metadados, favicon, imagem social e indexação de produção. Hoje há configuração do Make em `.figma/make/site.json`; conferir também `index.html`.
7. Atualizar o ano fixo do rodapé, atualmente 2025.
8. Auditar contraste, foco, leitura assistiva, menu mobile e performance em dispositivos reais. Não assumir conformidade WCAG apenas pela presença dos atributos.
9. Rever direitos de uso dos logos, fotos e vídeos conforme `ATTRIBUTIONS.md`.

## Checklist de regressão

- Em 1440 px: hero com 904 px de altura; título 88/100 px e coluna de 496 px.
- Aguardar sem rolar: vídeo permanece no frame inicial.
- Rolar e parar: frame avança e fica parado. Subir: frame retrocede.
- Indicadores começam em zero, mostram valores intermediários e terminam nos valores exatos.
- Serviços expandem; links de contato possuem o serviço no assunto.
- Mudar valor/frequência da doação altera o link correto, sem simular confirmação.
- Os seis PDFs e os links de cadastro/notícias abrem os destinos esperados.
- PT/EN/FR traduzem seções e não deixam cards invisíveis após a troca.
- Menu “Mais” e menu mobile funcionam por teclado; Escape fecha os menus.
- Conferir 1440, 1024, 768, 390 e 320 px: sem conteúdo importante cortado.
- Com movimento reduzido: vídeo estático, sem contagem animada, conteúdo visível e patrocinadores parados.
- Confirmar carregamento das fontes locais e das imagens, sem depender de links temporários do Figma.
