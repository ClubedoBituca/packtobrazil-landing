import { externalLinks } from '@/config/site'
import { CtaCard, type CtaCardProps } from './CtaCard'
import { AppleIcon, GooglePlayIcon, UsersIcon, WhatsAppIcon } from './icons'

type Cta = Omit<CtaCardProps, 'className'>

const stores = [
  {
    href: externalLinks.appStoreIos,
    label: 'App Store',
    hint: 'Baixe no iPhone e iPad',
    icon: AppleIcon,
  },
  {
    href: externalLinks.appStoreAndroid,
    label: 'Google Play',
    hint: 'Baixe no Android',
    icon: GooglePlayIcon,
  },
].filter((store) => store.href.length > 0)

/**
 * Com uma única loja configurada, o CTA principal é um só bloco
 * ("Baixar aplicativo"). Ao preencher a segunda loja em `config/site.ts`,
 * o mesmo slot passa a exibir os dois blocos automaticamente.
 */
const appCtas =
  stores.length === 1
    ? [{ ...stores[0], label: 'Baixar aplicativo', hint: 'Comece em poucos toques' }]
    : stores

/**
 * Os quatro botões de comando, na ordem em que a pessoa costuma precisar deles:
 * primeiro baixar o app, depois os dois canais de WhatsApp.
 *
 * Os dois canais dividem o verde do WhatsApp porque são o mesmo aplicativo; o
 * que os separa é o ícone (grupo x conversa) e o texto de apoio.
 */
const allCtas: Cta[] = [
  ...appCtas.map((cta) => ({ ...cta, variant: 'app' as const })),
  {
    href: externalLinks.liveGroup,
    label: 'Grupo ao vivo',
    hint: 'Ofertas em tempo real no WhatsApp',
    icon: UsersIcon,
    variant: 'whats',
  },
  {
    href: externalLinks.support,
    label: 'Atendimento',
    hint: 'Fale com a gente no WhatsApp',
    icon: WhatsAppIcon,
    variant: 'whats',
  },
]

const ctas = allCtas.filter((cta) => cta.href.length > 0)

export function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="px-5 pt-12 pb-14 sm:pt-16 sm:pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-px flex-1 bg-hairline/15" />
          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-ink-subtle">
            Próximo passo
          </span>
          <span aria-hidden className="h-px flex-1 bg-hairline/15" />
        </div>

        <h2
          id="cta-heading"
          className="mt-6 text-center font-display text-2xl font-extrabold tracking-[-0.01em] text-ink sm:text-[2rem]"
        >
          Comece agora
        </h2>

        <div className="mt-7 grid gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4">
          {ctas.map((cta) => (
            <CtaCard key={cta.href} {...cta} />
          ))}
        </div>
      </div>
    </section>
  )
}
