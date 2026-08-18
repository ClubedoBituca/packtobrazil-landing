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
 */
export function BackgroundArt() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 select-none">
      <Image
        src="/planodefundo.png"
        alt=""
        fill
        loading="eager"
        fetchPriority="low"
        sizes="100vw"
        className="background-art object-cover object-center"
      />
      {/* Véu na cor da página: garante o contraste do texto sobre a arte */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/30 to-surface/70" />
    </div>
  )
}
