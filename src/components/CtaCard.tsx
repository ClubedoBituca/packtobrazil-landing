import type { ComponentType, SVGProps } from 'react'
import { ArrowRightIcon } from './icons'

export type CtaVariant = 'app' | 'whats'

export type CtaCardProps = {
  href: string
  label: string
  hint: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  variant: CtaVariant
  className?: string
}

/** `app` inverte no tema escuro (creme sobre a página escura) para continuar
 *  sendo o bloco mais forte; os outros dois já contrastam nos dois temas. */
const variants: Record<CtaVariant, string> = {
  app: 'bg-cta-app text-cta-app-ink',
  whats: 'bg-whats text-white',
}

/** Bloco de ação no estilo da referência: ícone, título, subtítulo e seta. */
export function CtaCard({
  href,
  label,
  hint,
  icon: Icon,
  variant,
  className = '',
}: CtaCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex min-h-[4.5rem] items-center gap-3.5 rounded-2xl px-4 py-4 shadow-cta transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:px-5 ${variants[variant]} ${className}`}
    >
      {/* `bg-current` faz o chip acompanhar a cor do texto de cada variante,
          inclusive quando o card claro/escuro inverte. */}
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-current/12">
        <Icon className="size-[22px]" />
      </span>

      <span className="min-w-0 flex-1 text-left">
        <span className="block font-display text-[0.9375rem] font-bold leading-tight sm:text-base">
          {label}
        </span>
        <span className="mt-0.5 block text-xs leading-snug opacity-80">{hint}</span>
      </span>

      <ArrowRightIcon className="size-[18px] shrink-0 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  )
}
