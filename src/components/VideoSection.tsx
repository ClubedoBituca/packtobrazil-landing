import { video } from '@/config/site'
import { VideoOverlay } from './VideoOverlay'
import { VideoPlayer } from './VideoPlayer'

/**
 * O vídeo é vertical (9:16), então a moldura encolhe para largura de celular:
 * esticada na largura do conteúdo, um 9:16 passaria de 1.500px de altura.
 */
const isVertical = video.orientation === 'vertical'
const frameWidth = isVertical ? 'max-w-[21rem]' : ''
const frameAspect = isVertical ? 'aspect-[9/16]' : 'aspect-video'

export function VideoSection() {
  return (
    <section aria-labelledby="video-heading" className="px-5 pb-4 sm:pb-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <h2
          id="video-heading"
          className="mb-5 text-center font-display text-xl font-extrabold tracking-[-0.01em] text-ink sm:mb-6 sm:text-2xl"
        >
          Veja como funciona
        </h2>

        <div
          className={`w-full rounded-[24px] bg-surface-raised/85 p-2 shadow-card ring-1 ring-glass backdrop-blur-[2px] sm:rounded-[36px] sm:p-3 ${frameWidth}`}
        >
          <div
            className={`video-screen relative w-full overflow-hidden rounded-[18px] sm:rounded-[28px] ${frameAspect}`}
          >
            {video.url ? (
              <VideoPlayer url={video.url} provider={video.provider} poster={video.poster} />
            ) : (
              <VideoOverlay />
            )}
          </div>

          <p className="px-2 py-4 text-center text-xs leading-relaxed text-ink-muted sm:py-5 sm:text-sm">
            Veja em poucos minutos como receber suas compras dos EUA no Brasil.
          </p>
        </div>
      </div>
    </section>
  )
}
