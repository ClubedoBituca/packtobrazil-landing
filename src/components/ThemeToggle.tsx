'use client'

import { useEffect } from 'react'
import { MoonIcon, SunIcon } from './icons'
import { THEME_STORAGE_KEY, type Theme, browserBarColor } from '@/lib/theme'

function paintBrowserBar(theme: Theme) {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', browserBarColor[theme])
}

/**
 * Alterna entre claro e escuro e guarda a escolha no navegador.
 *
 * O ícone é trocado por CSS (`dark:hidden` / `hidden dark:block`), e não por
 * estado do React: assim o botão já aparece correto no HTML do servidor, sem
 * descompasso de hidratação e sem piscar no carregamento.
 */
export function ThemeToggle() {
  // O script do layout já aplicou o tema salvo; aqui só alinhamos a cor da
  // barra do browser, que depende do <head> inteiro já montado.
  useEffect(() => {
    paintBrowserBar(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  }, [])

  function toggle() {
    const root = document.documentElement
    const next: Theme = root.dataset.theme === 'dark' ? 'light' : 'dark'

    root.dataset.theme = next
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Modo privativo ou storage bloqueado: a troca vale só para esta visita.
    }

    paintBrowserBar(next)
  }

  return (
    // Como no rodapé, o `::after` leva o alvo de 36px para 44px sem alterar o
    // círculo desenhado; `fixed` já serve de bloco de contenção para ele.
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      className="theme-toggle fixed top-4 right-4 z-50 grid size-9 place-items-center rounded-full bg-surface-raised/80 text-ink-subtle ring-1 ring-hairline/15 backdrop-blur-sm transition-colors after:absolute after:-inset-1 after:content-[''] hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:top-5 sm:right-5 sm:size-10"
    >
      <MoonIcon className="size-[18px] dark:hidden" />
      <SunIcon className="hidden size-[18px] dark:block" />
    </button>
  )
}
