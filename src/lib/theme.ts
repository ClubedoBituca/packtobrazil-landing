/**
 * Contrato do tema, compartilhado entre o layout (servidor) e o ThemeToggle
 * (cliente). Fica num módulo neutro de propósito: constantes importadas de um
 * módulo `'use client'` chegam ao servidor como referência, não como valor.
 */

export type Theme = 'light' | 'dark'

/** Tema de quem nunca escolheu — inclusive quando o sistema está no escuro. */
export const DEFAULT_THEME: Theme = 'light'

export const THEME_STORAGE_KEY = 'theme'

/** Cor da barra do browser em cada tema (espelha `--surface` em globals.css). */
export const browserBarColor: Record<Theme, string> = {
  light: '#f1e9d9',
  dark: '#1b1e14',
}

/**
 * Roda no <head>, antes da primeira pintura, para a página não abrir no claro e
 * piscar para o escuro. Só mexe no atributo: a `theme-color` fica com o
 * ThemeToggle, que roda depois do <head> inteiro montado.
 */
export const themeInitScript =
  `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='dark')` +
  `document.documentElement.dataset.theme='dark'}catch(e){}`
