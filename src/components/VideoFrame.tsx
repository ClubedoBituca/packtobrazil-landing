import { video } from '@/config/site'
import { VideoOverlay } from './VideoOverlay'
import { VideoPlayer } from './VideoPlayer'

/**
 * Moldura do vídeo dentro da primeira tela — sem título e sem legenda: o quadro
 * fala por si, e qualquer linha extra aqui empurraria o conjunto para fora da
 * tela. A descrição para leitor de tela está no `aria-label` do selo de som.
 *
 * A largura vem de `.hero-video` (globals.css), calculada a partir da ALTURA
 * disponível: um 9:16 esticado pela largura do container não caberia em uma tela
 * só. `aspect-video` continua atendendo um vídeo horizontal, caso a orientação
 * mude em `config/site.ts`.
 */
const isVertical = video.orientation === 'vertical'
const frameWidth = isVertical ? 'hero-video' : 'w-full max-w-[40rem]'
const frameAspect = isVertical ? 'aspect-[9/16]' : 'aspect-video'

export function VideoFrame({ className = '' }: { className?: string }) {
  return (
    <div
      className={`mx-auto rounded-[24px] bg-surface-raised/85 p-1.5 shadow-card ring-1 ring-glass backdrop-blur-[2px] sm:rounded-[32px] sm:p-2.5 ${frameWidth} ${className}`}
    >
      <div
        className={`video-screen relative w-full overflow-hidden rounded-[18px] sm:rounded-[26px] ${frameAspect}`}
      >
        {video.url ? (
          <VideoPlayer url={video.url} poster={video.poster} />
        ) : (
          <VideoOverlay />
        )}
      </div>
    </div>
  )
}
