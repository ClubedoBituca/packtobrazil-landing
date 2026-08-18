import { BrFlagIcon, UsFlagIcon } from './icons'

/** Selo EUA → Brasil com as bandeiras: sinaliza a rota de imediato. */
export function RouteFlags({ className = '' }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full bg-surface-raised/70 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-ink-muted ring-1 ring-hairline/12 sm:text-[0.6875rem] ${className}`}
    >
      <UsFlagIcon className="h-3 w-[18px] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-hairline/20" />
      EUA
      <span aria-hidden="true" className="text-accent">
        →
      </span>
      <span className="sr-only">para</span>
      Brasil
      <BrFlagIcon className="h-3 w-[18px] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-hairline/20" />
    </p>
  )
}
