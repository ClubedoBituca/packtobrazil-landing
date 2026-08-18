# Pack to Brazil — Landing page

Landing page single-page em Next.js 16 (App Router) + Tailwind CSS v4.

## Rodando

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run lint
npm run typecheck
```

## O que configurar

Tudo que muda com frequência está em [`src/config/site.ts`](src/config/site.ts) — não há URL espalhada pelos componentes.

| Campo | Situação |
|---|---|
| `video.url` | Preenchido. O player carrega apenas após o clique (fachada — nenhuma requisição a terceiros no load). Vazio → a seção cai no card estático. Aceita link do YouTube (`watch`, `youtu.be`, `shorts`, `embed`) ou, com `provider: 'mp4'`, uma URL de arquivo. |
| `video.orientation` | `'vertical'` → moldura 9:16 com largura de celular; `'wide'` → 16:9 na largura do conteúdo. |
| `externalLinks.appStoreIos` | Botão "App Store". Vazio → o botão some. |
| `externalLinks.appStoreAndroid` | Botão "Google Play". Se só uma das duas lojas estiver preenchida, o slot vira um único botão "Baixar aplicativo". |
| `externalLinks.liveGroup` | Botão "Grupo ao vivo" → grupo "Compras ao Vivo" no WhatsApp. |
| `externalLinks.support` | Botão "Atendimento" → WhatsApp individual. |
| `externalLinks.instagram` | Perfil oficial: link do rodapé e `sameAs` do JSON-LD. Não é botão de comando. |
| `NEXT_PUBLIC_SITE_URL` | Domínio de produção, usado em `metadataBase`, no Open Graph, no `robots.txt`, no `sitemap.xml` e no JSON-LD. Fallback: `https://packtobrazil.com`. |

## Estrutura

```
src/app/layout.tsx        fontes (next/font), metadata, Open Graph e ícones
src/app/page.tsx          composição da página + JSON-LD
src/app/robots.ts         robots.txt (libera buscadores e agentes de IA)
src/app/sitemap.ts        sitemap.xml
src/app/manifest.ts       manifest.webmanifest
src/app/llms.txt/         resumo do site em texto puro, para agentes
src/app/llms-full.txt/    guia de importação completo, para agentes
src/components/           Hero, Logo, ThemeToggle, ShippingRoute, VideoSection, VideoPlayer, CTASection, Footer
src/config/site.ts        textos institucionais, links externos e vídeo
src/content/              guia de importação (fonte do llms.txt e do JSON-LD)
src/lib/                  contrato do tema, JSON-LD e arquivos llms.txt
public/logo/              light.png e dark.png (arte oficial por tema)
public/                   ícones, opengraph-image.jpg, planodefundo.png
identidade/               arte oficial recebida da marca (logos e PDF de origem)
docs/referencias/         lp.png (referência desktop), mobilewireframe.png
identidadevisual.md       paleta, frases e links de origem da marca
```

Todos os componentes são Server Components, exceto dois `'use client'`: `VideoPlayer.tsx`, que só existe para carregar o player sob demanda, e `ThemeToggle.tsx`, que precisa de `localStorage` e de um handler de clique.

## Tema claro e escuro

A página **abre sempre no claro**, inclusive quando o sistema está no escuro. Um botão discreto no canto superior direito alterna os temas, e a escolha fica no `localStorage`.

Peças envolvidas:

| Arquivo | Papel |
|---|---|
| [`src/lib/theme.ts`](src/lib/theme.ts) | Contrato compartilhado: tema padrão, chave do storage, cor da barra do browser e o script de inicialização. Módulo neutro de propósito — constantes importadas de um módulo `'use client'` chegam ao servidor como referência, não como valor. |
| [`src/app/layout.tsx`](src/app/layout.tsx) | Renderiza `<html data-theme="light">` e injeta o script no `<head>`, que aplica o tema salvo **antes da primeira pintura** (sem piscada). |
| [`src/components/ThemeToggle.tsx`](src/components/ThemeToggle.tsx) | O botão: troca o atributo, grava a escolha e acerta a `theme-color`. |

Em [`src/app/globals.css`](src/app/globals.css) as cores fixas da marca ficam num bloco `@theme`, e os **papéis semânticos** — `surface`, `ink`, `ink-muted`, `ink-subtle`, `accent`, `hairline`… — num `@theme inline` que aponta para variáveis redefinidas em `:root[data-theme='dark']`.

Na prática: os componentes usam `text-ink`, `bg-surface`, `text-accent` e nunca uma cor crua, então nenhuma classe `dark:` é necessária. Para ajustar um tema, mexa só nos valores em `:root` e no bloco `[data-theme='dark']` correspondente.

A variante `dark:` do Tailwind foi redefinida para ler o atributo (`@custom-variant dark ([data-theme='dark'] &)`) e é usada só no logo, que precisa trocar de arquivo. As duas artes ficam no HTML e o CSS mostra a do tema em uso.

Só a clara recebe `preload` (o `priority` do `next/image` foi deprecado no Next 16). A escura fica no `loading="lazy"` padrão e, escondida por `display:none`, nem chega a ser baixada — é o que a doc do `next/image` recomenda para este padrão, já que pré-carregar as duas baixaria as duas. O `fetchPriority="high"` nela é o que acelera o caso em que ela é a visível. A arte de fundo é `eager` mas **não** entra no preload: decorativa, não deve disputar banda com o logo, que é o elemento de LCP.

Sem JavaScript o botão some (`<noscript>`) e a página fica no claro.

### Arte de fundo

O PNG original é lavado demais para aparecer sozinho — cru, a diferença entre o traço e o papel é de ~11 níveis de luminância. Em `.background-art` (globals.css) um par `brightness(0.7) contrast(2.75)` derruba a faixa até em volta do pivô do `contrast` e depois a reabre: os traços escurecem enquanto o fundo permanece na cor creme da marca. Escurecer sem esse par (só `brightness`) deixaria a página encardida, e só `contrast` empurraria tudo para o branco.

O véu por cima (`BackgroundArt.tsx`) segura o contraste do texto; o rodapé, que tem a menor tipografia da tela, ganha ainda uma faixa `bg-surface/80` própria.

### Contraste

Todos os textos passam em WCAG AA nos dois temas — mínimo medido 4,72:1 no claro e 5,04:1 no escuro; elementos de interface, 3,79:1 (mínimo 3:1).

A medição está em `audit.py` (scratchpad da sessão): para cada elemento ele torna os glifos transparentes e esconde os filhos decorativos, fotografa a caixa e usa o **pior** pixel do fundo. Sem isso a amostra pega o próprio texto ou os tracejados e produz falso positivo — vale repetir esse cuidado se os valores de fundo forem mexidos de novo.

### Regerando os assets de marca

As artes em `public/` saem dos originais em `identidade/`. Ao substituir um logo lá, regere `public/logo/{light,dark}.png` mantendo a proporção atual (o conteúdo ocupa 523/600 da tela quadrada), que é o que preserva o tamanho óptico da marca no hero. Basta um PNG de 384px por tema: o `next/image` gera as demais densidades.

## Leitura por crawlers e agentes

| Recurso | Para que serve |
|---|---|
| `/llms.txt` | Resumo do serviço, diferenciais, os 5 passos e canais oficiais. Formato [llmstxt.org](https://llmstxt.org). |
| `/llms-full.txt` | Guia de importação completo + FAQ, extraído do material oficial da marca. |
| JSON-LD na home | `Organization`, `WebSite`, `WebPage`, `Service` e `MobileApplication`, num único `@graph`. |
| `/robots.txt` | Libera o site para buscadores e, nominalmente, para agentes de IA (inclusive `Google-Extended` e `Applebot-Extended`, que só valem quando citados). |
| `/sitemap.xml`, `/manifest.webmanifest` | Descoberta e metadados de instalação. |

O texto dessas rotas vem de [`src/content/import-guide.ts`](src/content/import-guide.ts), transcrito do PDF `identidade/COMO FAZER SUA IMPORTAÇÃO.pdf`. **Ao atualizar o PDF, atualize esse arquivo** — é ele que alimenta `/llms.txt`, `/llms-full.txt` e a descrição do serviço no JSON-LD.
