import { PlayIcon } from './icons'

/**
 * Card estático do lugar do vídeo — só aparece quando `video.url` está vazia em
 * `config/site.ts`. Com URL configurada quem ocupa a moldura é o `VideoPlayer`,
 * que já entra tocando.
 *
 * Não promete uma ação que a página não entrega: o círculo é opaco, não clicável
 * e o rótulo diz "Vídeo em breve".
 */
export function VideoOverlay() {
  return (
    <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-5">
      <span className="flex size-16 items-center justify-center rounded-full bg-kraft text-cream-light opacity-85 ring-8 ring-kraft/25 sm:size-[76px] sm:ring-[10px]">
        <PlayIcon className="ml-0.5 size-6 sm:size-7" />
      </span>
      <span className="text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-cream/90 sm:text-xs">
        Vídeo em breve
      </span>
    </span>
  )
}
