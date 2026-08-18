import { CheckIcon } from './icons'

/**
 * Reforços curtos de confiança. Cada um precisa acrescentar informação: nenhum
 * repete o fecho "Facilidade e conforto" do parágrafo acima.
 *
 * Levam `text-ink`, e não o `text-ink-muted` dos textos de apoio: são letras
 * miúdas por cima da arte de fundo, que é `fixed` e pode parar em qualquer
 * altura da rolagem. Em `ink-muted` mediam 3,4:1 contra o pior pixel atrás das
 * letras; o véu reforçado sozinho não resolvia, e a tinta escura sozinha também
 * não — só as duas juntas.
 */
const badges = ['Direto na sua porta', 'Sem sair de casa', 'Rastreio pelo app']

export function TrustBadges({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 ${className}`}>
      {badges.map((badge) => (
        <li key={badge} className="flex items-center gap-1.5 text-xs text-ink sm:text-[0.8125rem]">
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
            <CheckIcon className="size-2.5" />
          </span>
          {badge}
        </li>
      ))}
    </ul>
  )
}
