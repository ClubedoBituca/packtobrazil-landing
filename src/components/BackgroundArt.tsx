import Image from 'next/image'

/**
 * Camada decorativa fixa com a arte de fundo da marca (globos EUA/Brasil,
 * rota tracejada, caixas e selos). `fixed` evita distorção em páginas altas
 * e mantém a textura consistente em qualquer viewport.
 *
 * O realce de contraste e a inversão no tema escuro ficam em `.background-art`
 * (globals.css); aqui fica só o véu, que segura o contraste do texto por cima.
 *
 * `eager` sem `preload`: a arte começa a carregar já na análise do HTML (sem o
 * atraso do lazy, que a faria aparecer depois do resto), mas não entra no <head>
 * disputando banda com o logo do hero, que é o elemento de LCP de verdade.
 *
 * O realce de contraste vem assado no arquivo — ver README. Aplicá-lo em CSS
 * significava o navegador ampliar primeiro e o `contrast(2.75)` multiplicar os
 * degraus da interpolação por 2,75; assado, a ampliação acontece depois e só
 * suaviza.
 */
export function BackgroundArt() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 select-none">
      <Image
        src="/planodefundo.webp"
        alt=""
        fill
        loading="eager"
        fetchPriority="low"
        /* Em tela vertical o `object-cover` escala pela altura, não pela largura:
           `100vw` fazia o navegador pedir um candidato 3,8x menor que o
           necessário num celular, e daí vinha a maior parte do serrilhado. Onde
           a viewport é mais alta que a arte, a largura pedida passa a ser a que
           cobre a altura — 100vh × a proporção 1672/941. */
        sizes="(max-aspect-ratio: 1672/941) 178vh, 100vw"
        className="background-art object-cover object-center"
      />
      {/* Véu na cor da página: garante o contraste do texto sobre a arte.
          O véu era mais fraco no meio (30%) que nas pontas, e como ele é `fixed`
          esse ponto fraco cai sempre no meio da viewport — justamente onde se
          lê. Com a arte atual isso derrubava os selos de confiança para 3,0:1,
          abaixo de AA, medido só nos pixels atrás das letras. Nivelado em 62%,
          eles sobem para 5,0:1; o parágrafo e a headline não se mexem, porque
          já caem sobre papel limpo. */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/62 via-surface/62 to-surface/72" />
    </div>
  )
}
