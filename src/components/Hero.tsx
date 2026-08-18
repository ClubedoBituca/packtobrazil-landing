import { Logo } from './Logo'
import { RouteFlags } from './RouteFlags'
import { VideoFrame } from './VideoFrame'
import { site } from '@/config/site'

/**
 * Primeira tela: marca, promessa e vídeo — nada mais. É o bloco que precisa
 * caber inteiro no celular, então cada elemento aqui disputa altura com o vídeo.
 *
 * `min-h-[100svh]`: `svh` porque as barras do navegador mobile encolhem `vh` no
 * meio da rolagem, e `min-h` (não `h`) para que uma tela muito baixa cresça em
 * vez de cortar. Quem se ajusta à altura é o vídeo — ver `.hero-video` em
 * globals.css.
 *
 * As duas composições são bem diferentes de propósito:
 *
 * - celular: logo sobre a headline, vídeo embaixo, tudo centralizado. O selo
 *   EUA → Brasil não entra — a altura que ele custava vale mais no vídeo.
 * - desktop: o selo abre a página no topo, centralizado; abaixo, logo e headline
 *   lado a lado ocupando a largura toda de um lado e o vídeo do outro. Empilhar
 *   como no celular deixava metade da tela vazia.
 */
export function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-0.25rem)] flex-col items-center justify-center px-5 py-8 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-5xl lg:max-w-7xl">
        {/* `RouteFlags` é `inline-flex`, então `mx-auto` não o centraliza —
            quem centraliza é este `flex justify-center`. */}
        <div className="hidden justify-center lg:flex">
          <RouteFlags />
        </div>

        <div className="grid w-full items-center justify-items-center gap-6 sm:gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:justify-items-start lg:gap-x-12 xl:gap-x-16">
          <div className="flex flex-col items-center gap-4 sm:gap-5 lg:w-full lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
            <Logo
              alt={site.name}
              preload
              sizes="(min-width: 1280px) 192px, (min-width: 1024px) 144px, (min-width: 640px) 80px, 64px"
              className="size-16 shrink-0 sm:size-20 lg:size-36 xl:size-48"
            />

            <h1 className="rise max-w-[18ch] text-center font-display text-[clamp(1.6rem,5.8vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink text-balance sm:max-w-[20ch] lg:max-w-[15ch] lg:text-left lg:text-[clamp(2.75rem,4.2vw,4.25rem)]">
              Dos EUA diretamente para o seu endereço,{' '}
              <span className="text-accent">sem sair de casa!</span>
            </h1>
          </div>

          <VideoFrame className="rise [animation-delay:120ms]" />
        </div>
      </div>
    </section>
  )
}
