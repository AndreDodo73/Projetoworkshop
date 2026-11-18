# Atribuições e direitos de uso

Este documento registra a origem dos materiais e as licenças conhecidas das dependências. Não concede uma licença geral sobre a marca do Instituto, conteúdos editoriais ou imagens de pessoas.

## Identidade, fotografias e vídeos

- **Instituto Rugby Para Todos:** nome, identidade e logos presentes no projeto pertencem aos seus respectivos titulares.
- **Fotografias e SVGs em `public/assets/`:** importados do arquivo Figma fornecido pelo usuário. Os nomes de arquivos com hashes foram preservados para rastreabilidade.
- **Vídeos e posters em `public/media/`:** derivados dos dois arquivos de vídeo enviados pelo usuário. Os MP4s foram preparados para busca de frames e os posters extraídos dos vídeos.
- Os logos de patrocinadores e apoiadores continuam sendo marcas de seus respectivos titulares; sua presença não concede autorização para uso fora do contexto do projeto.
- A importação técnica não comprova autorização de publicação. Confirmar direitos de imagem, uso de marcas e autorizações aplicáveis, especialmente quando aparecem crianças e adolescentes.
- Não foram incorporadas fotografias do Unsplash nesta implementação.

## Fontes

### Hind

- Família: Hind; faces Regular, SemiBold e Bold.
- Créditos: Indian Type Foundry.
- Licença: **SIL Open Font License 1.1**.
- Arquivos: `public/fonts/hind-regular.ttf`, `hind-semibold.ttf`, `hind-bold.ttf`.
- Texto da licença: [`public/fonts/OFL-Hind.txt`](public/fonts/OFL-Hind.txt).
- Fonte do aviso de licença: <https://github.com/google/fonts/tree/main/ofl/hind>.

### Montserrat

- Família: Montserrat; arquivo variável usado pelos aliases Regular, Medium, SemiBold e Bold.
- Créditos: The Montserrat Project Authors; projeto de Julieta Ulanovsky e colaboradores.
- Licença: **SIL Open Font License 1.1**.
- Arquivo: `public/fonts/montserrat-variable.ttf`.
- Texto da licença: [`public/fonts/OFL-Montserrat.txt`](public/fonts/OFL-Montserrat.txt).
- Fontes dos créditos/licença: <https://github.com/JulietaUla/Montserrat> e <https://github.com/google/fonts/tree/main/ofl/montserrat>.

As fontes foram resolvidas a partir do contexto do Figma. A aplicação serve os arquivos locais primeiro e conserva os fallbacks remotos declarados em `src/styles/fonts.css`. Ao redistribuir as fontes, manter os avisos e cumprir a licença OFL.

## Dependências principais

As versões exatas são resolvidas pelo `pnpm-lock.yaml`. As licenças abaixo foram consultadas nos pacotes instalados:

| Dependência                        | Licença    |
| ---------------------------------- | ---------- |
| React e React DOM                  | MIT        |
| Vite                               | MIT        |
| `@vitejs/plugin-react`             | MIT        |
| Tailwind CSS e `@tailwindcss/vite` | MIT        |
| TypeScript                         | Apache-2.0 |
| oxfmt                              | MIT        |

Preservar os avisos de terceiros exigidos por essas licenças. Esta tabela não substitui uma auditoria de todas as dependências transitivas nem seus textos de licença.

## Conteúdo institucional e destinos externos

- Documentos, canais de contato, notícias, loja e formas de apoio referenciam os canais públicos do Instituto Rugby Para Todos: <https://rugbyparatodos.org.br/>.
- Os destinos específicos estão em `src/content/institutional.ts`. O cadastro de newsletter e os pagamentos acontecem fora desta aplicação.
- Nomes PayPal, Catarse e Mercado Shops identificam os destinos existentes e pertencem aos seus titulares; não há afiliação técnica adicional implícita.
- Não tratar a fala genérica atualmente usada na seção de histórias como um depoimento autorizado. Relatos e números de impacto exigem revisão e aprovação editorial antes de publicação.

## Referências de direção criativa

Nike, adidas, Red Bull e Merlin Studio foram citados como referências de narrativa esportiva, hierarquia editorial e movimento. Suas marcas e layouts não são licenciados por este arquivo e não devem ser copiados.

## Código do projeto

Este documento não atribui automaticamente uma licença open source ao código específico do site. A definição de licença e os termos de distribuição do projeto devem ser feitos pelo seu responsável.
