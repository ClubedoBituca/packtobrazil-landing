'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { SoundOffIcon } from './icons'

type VideoPlayerProps = {
  url: string
  poster?: string
}

/**
 * O vídeo começa sozinho assim que a página abre. Ele **tenta** começar com som:
 * na montagem o mudo é retirado e o `play()` é refeito; se o navegador recusar —
 * que é o caso normal, porque autoplay com áudio exige gesto do usuário —, o
 * mudo volta na hora e o vídeo segue tocando. Onde o som passa (Chrome com
 * engajamento alto no domínio, permissão de áudio concedida no site), o
 * visitante já entra ouvindo, com os controles à mostra.
 *
 * Quando o som não passa, o primeiro clique devolve ele, volta ao começo e
 * entrega os controles nativos; até lá, um selo "Ativar som" cobre o quadro
 * inteiro, então qualquer toque no vídeo funciona.
 *
 * Volta ao começo de propósito: quem chega, lê a headline e só depois toca já
 * perdeu o que foi dito, e a versão muda serve como prévia, não como exibição.
 *
 * `prefers-reduced-motion` desliga o autoplay: o quadro fica parado no poster e
 * com os controles nativos à mostra, porque um vídeo de 2min41 que começa
 * sozinho e não tem como ser pausado é exatamente o que esse ajuste pede para
 * não acontecer (WCAG 2.2.2). Pelo mesmo motivo o clique de ativar o som traz os
 * controles junto — antes dele o vídeo está mudo e é curto de consequência;
 * depois dele existe um botão de pausa de verdade.
 */
export function VideoPlayer({ url, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [soundOn, setSoundOn] = useState(false)

  /** Controles nativos à mostra — por clique no selo ou por reduced-motion. */
  const handedOver = soundOn || reducedMotion

  /* O HTML entregue pelo servidor sempre traz `autoplay`: no servidor não dá
     para saber a preferência do visitante, e adivinhar errado custaria o
     autoplay de todo mundo. Quando a preferência é "reduce", o vídeo já pode
     ter começado antes da hidratação — tirar o atributo não pausa o que está
     tocando, então aqui o pause é imperativo. */
  useEffect(() => {
    const video = videoRef.current
    if (!video || !reducedMotion) return

    video.autoplay = false
    video.pause()
    video.currentTime = 0
  }, [reducedMotion])

  /* Tentativa de entrar com som. O elemento nasce mudo no HTML de propósito:
     mudo é o único autoplay garantido, então a reprodução começa de qualquer
     jeito e o que se arrisca aqui é só o áudio. Tirar o mudo sem gesto do
     usuário faz o navegador pausar o vídeo e rejeitar o `play()` — daí o
     `catch` devolver o mudo e retomar. O efeito roda uma vez; se falhar, quem
     traz o som é o clique no selo. */
  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return
    // `reducedMotion` só chega na renderização seguinte à hidratação, porque no
    // servidor ele é `false` por padrão. Aqui a media query é lida direto para
    // não arriscar um instante de som em quem pediu para não ter movimento.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cancelled = false
    video.muted = false
    video
      .play()
      .then(() => {
        if (cancelled) return
        setSoundOn(true)
      })
      .catch(() => {
        if (cancelled) return
        video.muted = true
        void video.play().catch(() => {})
      })

    return () => {
      cancelled = true
    }
  }, [reducedMotion])

  function handOver() {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    video.currentTime = 0
    setSoundOn(true)
    // O clique é o gesto que libera o som, mas a promessa ainda pode ser
    // recusada (política de autoplay mais dura, aba em background).
    void video.play().catch(() => {})
  }

  return (
    <>
      <video
        ref={videoRef}
        src={url}
        poster={poster || undefined}
        autoPlay={!reducedMotion}
        muted
        playsInline
        controls={handedOver}
        preload="auto"
        className="absolute inset-0 size-full object-cover"
      />

      {handedOver ? null : (
        <button
          type="button"
          onClick={handOver}
          aria-label="Ativar o som do vídeo e assistir desde o começo"
          className="group absolute inset-0 flex cursor-pointer items-end justify-center pb-5 focus-visible:outline-none sm:pb-6"
        >
          <span className="flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-cream backdrop-blur-[2px] transition duration-200 group-hover:bg-black/70 group-focus-visible:ring-2 group-focus-visible:ring-cream group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-screen">
            <SoundOffIcon className="size-4 shrink-0" />
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] sm:text-xs">
              Ativar som
            </span>
          </span>
        </button>
      )}
    </>
  )
}

/**
 * `useSyncExternalStore` em vez de um `useState` + efeito: o valor do servidor é
 * declarado (`false`, o autoplay), e a troca de preferência no meio da sessão
 * chega sem re-render manual.
 */
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)')
      query.addEventListener('change', onStoreChange)
      return () => query.removeEventListener('change', onStoreChange)
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  )
}
