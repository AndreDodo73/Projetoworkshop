# Instituto Rugby Para Todos — Design system

Guia da interface implementada para continuidade no Cursor. Os arquivos CSS e os componentes são a fonte de verdade; este documento descreve as decisões atuais, não uma biblioteca de componentes já publicada.

## 1. Direção visual

- Identidade do Instituto RPT: laranja, amarelo, preto, branco e fotografias originais.
- Linguagem esportiva e editorial: títulos fortes, fotografias grandes, contraste e espaçamento generoso.
- Nike, adidas e Red Bull são referências de princípios de comunicação e movimento, não fontes de marcas, layouts ou ativos.
- Preservar o design aprovado. Não reinterpretar o hero nem substituir fontes, logos ou mídia sem pedido explícito.
- Prioridade narrativa: Paraisópolis, pessoas, trajetórias e oportunidades criadas pelo projeto.

## 2. Arquivos e responsabilidades

| Arquivo                                    | Responsabilidade                                              |
| ------------------------------------------ | ------------------------------------------------------------- |
| `src/styles/fonts.css`                     | Sete aliases de fontes importadas do Figma                    |
| `src/styles/theme.css`                     | Tokens CSS compartilhados                                     |
| `src/index.css`                            | Entrada global, Tailwind v4, layout principal e movimento     |
| `src/App.tsx`                              | Composição da página, navegação e conteúdo principal PT/EN/FR |
| `src/components/Hero.tsx`                  | Hero, traduções próprias e vídeo controlado pelo scroll       |
| `src/components/AnimatedNumber.tsx`        | Contagem progressiva dos indicadores                          |
| `src/components/InstitutionalSections.tsx` | Serviços, metodologia, governança, apoio e conteúdos          |
| `src/components/InstitutionalSections.css` | Estilos das seções institucionais                             |
| `src/content/institutional.ts`             | Traduções institucionais, documentos e links oficiais         |
| `public/assets/`                           | Imagens, logos e SVGs originais                               |
| `public/media/`                            | Vídeos e primeiros frames locais                              |
| `public/fonts/`                            | Arquivos de fontes e licenças OFL                             |

## 3. Cores

Definidas em `src/styles/theme.css`.

| Token        | Valor     | Uso                                                         |
| ------------ | --------- | ----------------------------------------------------------- |
| `--orange`   | `#f39200` | Marca, destaque do hero, ações                              |
| `--yellow`   | `#fead34` | Números, superfícies de apoio, destaques sobre fundo escuro |
| `--ink`      | `#151615` | Texto principal e fundos de alto contraste                  |
| `--charcoal` | `#252626` | Cards e gradientes                                          |
| `--paper`    | `#f4f4f4` | Fundo claro e texto sobre superfícies escuras               |
| `--grey`     | `#7b7b7c` | Informação secundária                                       |

Verificar contraste por combinação e tamanho de texto; a existência de um token não garante conformidade WCAG. O laranja claro não é indicado automaticamente para textos pequenos em fundo branco.

## 4. Tipografia

- Títulos: `"Montserrat:Bold"`, peso 700.
- Navegação e apoios: `"Montserrat:Medium"`, 500, e `"Montserrat:SemiBold"`, 600.
- Texto corrido: `"Hind:Regular"`, 400; ênfases em `"Hind:Bold"`, 700.
- `"Montserrat:Regular"`, 400, e `"Hind:SemiBold"`, 600, também estão disponíveis.
- Colocar os nomes com `:` entre aspas. Não trocar os aliases por famílias genéricas sem revisar cada callsite.
- Os quatro arquivos locais atendem aos sete aliases. As fontes locais são a primeira opção; os endereços do Figma são fallbacks.

Exemplo:

```css
.example-title {
  font:
    700 38px/1.1 "Montserrat:Bold",
    Arial,
    sans-serif;
}
```

Não aplicar o estilo dos rótulos a todos os `span` de um indicador. Usar `.metric > span`; o número possui um `span` interno que deve herdar o tamanho de `strong`.

## 5. Grid e responsividade

- Referência desktop: 1440 px.
- Alinhamento principal: margens de 7,5% (108 px na referência) e conteúdo frequentemente limitado a 1224 px.
- Seções: espaçamento vertical em torno de 120 px no desktop e 75–80 px no mobile.
- Breakpoints principais: 980 px e 640 px.
- O cabeçalho tem um ajuste adicional entre 981 e 1250 px para acomodar os links.
- Não confundir ausência de scrollbar horizontal com ausência de recorte: inspecionar também textos, CTAs e menus.

### Hero aprovado — preservar

- `src/components/Hero.tsx`.
- Vídeo ativo: `/media/hero-rugby.mp4`, menino segurando a bola.
- Poster: `/media/hero-rugby-poster.jpg`.
- O vídeo de corrida permanece como alternativa local; não é o ativo selecionado.
- Em 1440 px: header de 120 px, hero de 904 px.
- Título: Montserrat Bold, 88 px, entrelinha de 100 px e coluna de 496 px.
- Texto de apoio: Montserrat Bold, 24 px, entrelinha de 40 px.
- CTA laranja: Hind Bold, 16 px, arredondamento de 32 px.
- Gradientes originais com `mix-blend-mode: multiply`, à esquerda e à direita.
- Sem parallax, zoom ou autoplay. Primeiro frame estático; o scroll escolhe os frames. Ao parar, o frame fica parado; ao subir, o vídeo retrocede.
- Com `prefers-reduced-motion: reduce`, manter o primeiro frame.

### Indicadores

- Faixa escura, números amarelos e rótulos claros.
- Quatro colunas no desktop; duas em telas menores.
- Tamanho do número no desktop: `clamp(52px, 6.1vw, 96px)`.
- Contagem de zero até o total, disparada por visibilidade: 180 ms de espera e 2200 ms de progressão.
- Formatação por idioma; o valor final deve coincidir com o texto recebido.
- Leitores de tela recebem o total, não cada atualização da animação.

## 6. Componentes e interação

- `.pill`: CTA arredondado, variantes `.light-pill` e `.dark-pill`.
- `.text-link`: ação editorial com seta e sublinhado.
- Cards de projeto: hover, foco e expansão por toque/clique.
- Serviços: detalhes nativos com `details` e `summary`, contato por e-mail.
- Documentos: links reais para PDFs, com ano e indicação de idioma.
- Apoio: seleção de valor/frequência altera o destino externo. Não há checkout local.
- Newsletter: abre o cadastro oficial externo; não há armazenamento de inscrições neste projeto.
- Menu “Mais”: `details`, acesso por teclado, fechamento com Escape e ao selecionar um destino.
- Preservar a edição pontual do rótulo da primeira história: `var(--paper)` somente quando `activeStory === 0`.

## 7. Movimento

- Curva compartilhada: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`.
- Motion atual usa CSS, `IntersectionObserver` e `requestAnimationFrame`; não há Framer Motion, Motion ou GSAP instalados.
- Entradas progressivas, máscaras de imagem, transições de histórias e pequenas respostas em botões.
- Revelações são observadas no contêiner; recortar a imagem filha, não o alvo observado, para não impedir o disparo.
- A colagem usa animação vinculada ao scroll somente quando suportada pelo navegador, com fallback estático.
- Faixa de patrocinadores possui pausa explícita e pausa no hover.
- Respeitar movimento reduzido em CSS e JavaScript. Não ocultar conteúdo quando as animações estiverem desativadas.

## 8. Conteúdo e publicação

- Português é o idioma principal; todas as novas seções devem contemplar inglês e francês.
- Traduções atuais ficam em três locais: `App.tsx`, `Hero.tsx` e `content/institutional.ts`.
- A troca de idioma é estado React, sem rotas `/pt`, `/en` e `/fr`.
- Não criar depoimentos, biografias, conquistas ou estatísticas sem confirmação.
- A seção de histórias ainda requer revisão editorial: os quatro cards compartilham uma fala e um texto genéricos. Não tratá-los como depoimentos reais aprovados.
- Indicadores e períodos de apuração precisam de validação do Instituto antes da publicação.
- Consultar também `guidelines/Guidelines.md` e `ATTRIBUTIONS.md`.
