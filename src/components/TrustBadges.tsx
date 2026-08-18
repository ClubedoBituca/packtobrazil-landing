import { CheckIcon } from './icons'

/**
 * Reforços curtos de confiança. Cada um precisa acrescentar informação: nenhum
 * repete o fecho "Facilidade e conforto" do parágrafo do hero.
 */
const badges = ['Direto na sua porta', 'Sem sair de casa', 'Entrega segura']

export function TrustBadges({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 ${className}`}>
      {badges.map((badge) => (
        <li key={badge} className="flex items-center gap-1.5 text-xs text-ink-muted sm:text-[0.8125rem]">
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
            <CheckIcon className="size-2.5" />
          </span>
          {badge}
        </li>
      ))}
    </ul>
  )
}
