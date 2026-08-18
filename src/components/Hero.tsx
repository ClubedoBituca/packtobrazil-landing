import { Logo } from './Logo'
import { RouteFlags } from './RouteFlags'
import { ShippingRoute } from './ShippingRoute'
import { TrustBadges } from './TrustBadges'
import { site, socialProof } from '@/config/site'

/** Logo + headline andam juntos e ficam levemente à direita; a pílula das bandeiras
 *  atravessa as duas colunas e por isso fica centralizada na página.
 *
 *  Só a partir de `lg`: entre 640px e 1023px as duas colunas já ocupam a largura
 *  inteira do container, e como `translate` não entra no fluxo o deslocamento
 *  empurrava a headline para fora — sobrava 8px de margem à direita contra 32px
 *  à esquerda. Daí para cima existe folga e o deslocamento cabe. */
const brandShift = 'lg:translate-x-5'

export function Hero() {
  return (
    <section className="px-5 pt-10 pb-10 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="grid w-full grid-cols-1 justify-items-center gap-y-5 sm:grid-cols-[auto_auto] sm:justify-center sm:gap-x-8 sm:gap-y-4 lg:gap-x-10">
          <Logo
            alt={site.name}
            preload
            sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 80px"
            className={`size-20 shrink-0 sm:col-start-1 sm:row-start-2 sm:size-28 lg:size-32 ${brandShift}`}
          />

          <RouteFlags className="sm:col-span-2 sm:row-start-1" />

          <h1
            className={`max-w-[20ch] text-center font-display text-[clamp(1.75rem,6.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink text-balance sm:col-start-2 sm:row-start-2 sm:max-w-[24ch] sm:text-left ${brandShift}`}
          >
            Dos EUA diretamente para o seu endereço,{' '}
            <span className="text-accent">sem sair de casa!</span>
          </h1>
        </div>

        <p className="mt-6 max-w-[34ch] text-center text-[0.9375rem] leading-relaxed text-ink-muted text-pretty sm:mt-7 sm:max-w-xl sm:text-base">
          A {site.name} facilita suas compras nos EUA e envia direto para sua casa.
          Facilidade e conforto em suas mãos.
        </p>

        {socialProof ? (
          <p className="mt-5 rounded-full bg-accent/12 px-4 py-2 text-center text-xs font-semibold text-accent ring-1 ring-accent/25 sm:text-[0.8125rem]">
            {socialProof}
          </p>
        ) : null}

        <TrustBadges className="mt-6 sm:mt-7" />

        <ShippingRoute className="mt-9 sm:mt-11" />
      </div>
    </section>
  )
}
