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

export function AppleIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M16.36 12.79c.02 2.5 2.19 3.33 2.22 3.34-.02.05-.35 1.19-1.15 2.35-.69 1-1.41 2-2.54 2.02-1.11.02-1.47-.66-2.74-.66-1.27 0-1.66.64-2.72.68-1.09.04-1.92-1.08-2.62-2.08-1.43-2.06-2.52-5.83-1.05-8.37.73-1.27 2.03-2.07 3.44-2.09 1.07-.02 2.08.72 2.74.72.65 0 1.88-.89 3.17-.76.54.02 2.06.2 3.03 1.63-.08.05-1.78 1.04-1.78 3.22ZM14.5 5.2c.58-.7.97-1.68.86-2.65-.85.03-1.88.57-2.48 1.27-.54.62-1 1.61-.88 2.56.95.07 1.92-.48 2.5-1.18Z" />
    </svg>
  )
}

export function GooglePlayIcon({ className, ...props }: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M3.6 2.3c-.2.24-.32.6-.32 1.06v17.28c0 .46.12.82.33 1.06l9.1-9.7L3.6 2.3Zm10.2 8.03 2.9-3.1L6.1 1.4c-.4-.23-.78-.28-1.07-.16l8.77 9.09Zm0 3.34-8.78 9.1c.3.11.68.06 1.08-.17l10.6-5.83-2.9-3.1Zm4.1-1.67 2.5-1.38c.62-.34.94-.79.94-1.28 0-.5-.32-.94-.94-1.28l-2.5-1.38-3.13 3.34 3.13 3.34Z" />
    </svg>
  )
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

/** Grupo de pessoas — usado no CTA do grupo de ofertas ao vivo. */
export function UsersIcon({ className, ...props }: IconProps) {
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
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.8 19.4a6.4 6.4 0 0 1 12.4 0" />
      <path d="M16.2 5.1a3.4 3.4 0 0 1 0 6.6M17.6 14.4a6.4 6.4 0 0 1 3.6 5" />
    </svg>
  )
}
