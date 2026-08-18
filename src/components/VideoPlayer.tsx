'use client'

import { useState } from 'react'
import { VideoOverlay } from './VideoOverlay'

type VideoPlayerProps = {
  url: string
  provider: 'youtube' | 'mp4'
  poster?: string
}

/**
 * Fachada de vídeo: até o clique nada é carregado (nenhum iframe, nenhum player).
 * Só é renderizado quando existe uma URL configurada em `config/site.ts`.
 */
export function VideoPlayer({ url, provider, poster }: VideoPlayerProps) {
  const [active, setActive] = useState(false)

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        aria-label="Assistir ao vídeo: como funciona a Pack to Brazil"
        className="group absolute inset-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-screen"
      >
        <VideoOverlay interactive poster={poster} />
      </button>
    )
  }

  if (provider === 'youtube') {
    return (
      <iframe
        src={toYouTubeEmbedUrl(url)}
        title="Como funciona a Pack to Brazil"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />
    )
  }

  return (
    <video
      src={url}
      poster={poster || undefined}
      controls
      autoPlay
      playsInline
      className="absolute inset-0 size-full object-cover"
    />
  )
}

/** Aceita links de watch, youtu.be ou embed e devolve sempre a URL de embed. */
function toYouTubeEmbedUrl(url: string): string {
  const id = extractYouTubeId(url)
  const base = id ? `https://www.youtube-nocookie.com/embed/${id}` : url
  return `${base}${base.includes('?') ? '&' : '?'}autoplay=1&rel=0`
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/,
  )
  return match?.[1] ?? null
}
