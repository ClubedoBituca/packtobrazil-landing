import type { SVGProps } from 'react'

/**
 * Ícones inline em `currentColor`, decorativos por padrão (`aria-hidden`).
 * Evita adicionar uma biblioteca de ícones só para esta landing page.
 */
type IconProps = SVGProps<SVGSVGElement>

const base = {
  'aria-hidden': true,
  focusable: false as const,
  xmlns: 'http://www.w3.org/2000/svg',
}

export function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12.04 2.5c-5.23 0-9.48 4.24-9.48 9.47 0 1.67.44 3.3 1.27 4.74L2.5 21.5l4.94-1.29a9.44 9.44 0 0 0 4.6 1.18h.01c5.22 0 9.47-4.25 9.47-9.48a9.42 9.42 0 0 0-2.77-6.7 9.4 9.4 0 0 0-6.7-2.71Zm0 17.32h-.01a7.86 7.86 0 0 1-4-1.1l-.29-.16-2.93.77.78-2.86-.19-.3a7.83 7.83 0 0 1-1.2-4.2 7.88 7.88 0 0 1 13.45-5.56 7.8 7.8 0 0 1 2.3 5.57c0 4.34-3.54 7.84-7.91 7.84Zm4.32-5.87c-.24-.12-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.12-.17.24-.65.8-.8.97-.14.16-.29.18-.53.06a6.4 6.4 0 0 1-1.9-1.17 7.1 7.1 0 0 1-1.3-1.63c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.54-1.35-.75-1.84-.19-.47-.39-.4-.53-.41h-.48c-.16 0-.42.06-.64.3-.22.24-.84.83-.84 2.02 0 1.2.86 2.35.98 2.51.12.16 1.68 2.65 4.09 3.62.57.25 1.02.4 1.37.5.57.19 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

export function ArrowRightIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4.5 12.5 9.5 17.5 19.5 7" />
    </svg>
  )
}

/** Bandeira dos EUA simplificada. */
export function UsFlagIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 16" className={className} {...props}>
      <rect width="24" height="16" fill="#c8102e" />
      <g fill="#fff">
        <rect y="1.23" width="24" height="1.23" />
        <rect y="3.69" width="24" height="1.23" />
        <rect y="6.15" width="24" height="1.23" />
        <rect y="8.62" width="24" height="1.23" />
        <rect y="11.08" width="24" height="1.23" />
        <rect y="13.54" width="24" height="1.23" />
      </g>
      <rect width="10.5" height="8.62" fill="#0a3161" />
      <g fill="#fff">
        <circle cx="2.2" cy="2.1" r="0.62" />
        <circle cx="5.25" cy="2.1" r="0.62" />
        <circle cx="8.3" cy="2.1" r="0.62" />
        <circle cx="3.7" cy="4.3" r="0.62" />
        <circle cx="6.75" cy="4.3" r="0.62" />
        <circle cx="2.2" cy="6.5" r="0.62" />
        <circle cx="5.25" cy="6.5" r="0.62" />
        <circle cx="8.3" cy="6.5" r="0.62" />
      </g>
    </svg>
  )
}

/** Bandeira do Brasil simplificada. */
export function BrFlagIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 16" className={className} {...props}>
      <rect width="24" height="16" fill="#009c3b" />
      <path d="M12 1.6 22.4 8 12 14.4 1.6 8Z" fill="#ffdf00" />
      <circle cx="12" cy="8" r="3.3" fill="#002776" />
      <path d="M8.9 6.9a9 9 0 0 1 6.2 2.4" stroke="#fff" strokeWidth="0.9" fill="none" />
    </svg>
  )
}

export function PlayIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...base}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M9 6.2 18.4 12 9 17.8Z" />
    </svg>
  )
}

/** Ícone do botão de tema quando a página está clara (leva para o escuro). */
export function MoonIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
    </svg>
  )
}

/** Ícone do botão de tema quando a página está escura (leva para o claro). */
export function SunIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.22 4.22l1.56 1.56M18.22 18.22l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.22 19.78l1.56-1.56M18.22 5.78l1.56-1.56" />
    </svg>
  )
}

