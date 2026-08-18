import Image from 'next/image'
import { PlayIcon } from './icons'

/**
 * Conteúdo visual do card de vídeo (poster + círculo de play + rótulo).
 * Compartilhado pelo estado estático (server) e pela fachada clicável (client),
 * para que os dois sejam pixel-idênticos sem duplicar markup.
 *
 * `interactive` só é verdadeiro quando existe URL configurada — sem URL o rótulo
 * não promete uma ação que a página ainda não entrega.
 */
export function VideoOverlay({
  interactive = false,
  poster = '',
}: {
  interactive?: boolean
  poster?: string
}) {
  return (
    <>
      {/* Quadro do próprio vídeo, servido daqui e não do YouTube: a fachada
          continua sem pedir nada a terceiros antes do clique. O véu escuro
          rebaixa as legendas gravadas no quadro e sustenta o botão por cima. */}
      {poster ? (
        <>
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 640px) 336px, 100vw"
            className="object-cover"
          />
          <span aria-hidden className="absolute inset-0 bg-black/55" />
        </>
      ) : null}

      <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-5">
        <span
          className={`flex size-16 items-center justify-center rounded-full bg-kraft text-cream-light ring-8 ring-kraft/25 sm:size-[76px] sm:ring-[10px] ${
            interactive
              ? 'transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105'
              : 'opacity-85'
          }`}
        >
          <PlayIcon className="ml-0.5 size-6 sm:size-7" />
        </span>
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-cream/90 sm:text-xs">
          {interactive ? 'Assistir agora' : 'Vídeo em breve'}
        </span>
      </span>
    </>
  )
}
