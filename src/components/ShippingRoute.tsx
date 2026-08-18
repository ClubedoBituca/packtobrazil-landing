const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/**
 * Representação discreta do fluxo origem → pacote → transporte → destino.
 * Linhas tracejadas em CSS + ícones SVG inline: escala sem overflow e sem JS.
 */
export function ShippingRoute({ className = '' }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Rota do pacote: origem nos Estados Unidos, coleta, transporte aéreo e entrega no Brasil"
      className={`flex w-full max-w-2xl items-center gap-2 text-ink-muted sm:gap-4 ${className}`}
    >
      <Pin />
      <span aria-hidden className="h-px flex-1 border-t border-dashed border-hairline/45" />
      <span aria-hidden className="flex items-center gap-2 sm:gap-3">
        <Box />
        <Plane />
      </span>
      <span aria-hidden className="h-px flex-1 border-t border-dashed border-hairline/45" />
      <Pin />
    </div>
  )
}

function Pin() {
  return (
    <svg
      aria-hidden
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-[18px] shrink-0 sm:size-5"
      {...stroke}
    >
      <path d="M12 21.5s7-6.1 7-11.1a7 7 0 1 0-14 0c0 5 7 11.1 7 11.1Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  )
}

function Box() {
  return (
    <svg
      aria-hidden
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-[18px] shrink-0 sm:size-5"
      {...stroke}
    >
      <path d="M12 2.5 21 7v10l-9 4.5L3 17V7l9-4.5Z" />
      <path d="M3 7l9 4.5L21 7M12 11.5v10" />
    </svg>
  )
}

function Plane() {
  return (
    <svg
      aria-hidden
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-[18px] shrink-0 -rotate-[35deg] sm:size-5"
      {...stroke}
    >
      <path d="M12 2.2c.9 0 1.5.7 1.5 1.6v5.5l7.4 4.3v1.9l-7.4-2.3v4.4l2.3 1.7v1.5L12 20l-3.8.8v-1.5l2.3-1.7v-4.4L3.1 15.5v-1.9l7.4-4.3V3.8c0-.9.6-1.6 1.5-1.6Z" />
    </svg>
  )
}
