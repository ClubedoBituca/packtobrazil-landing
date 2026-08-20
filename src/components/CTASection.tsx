import { externalLinks, site } from '@/config/site'
import { TrustBadges } from './TrustBadges'
import { ArrowRightIcon, WhatsAppIcon } from './icons'

/**
 * Segunda tela: um bloco só, com a ação na frente. O convite e o botão vêm
 * primeiro — quem rolou até aqui já viu o vídeo e não precisa de mais um texto
 * antes de poder agir; a descrição e os selos ficam logo abaixo, para quem ainda
 * quer confirmar. Nada aqui compete com o CTA: ele é o único link de ação da
 * página.
 */
export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="flex min-h-[65svh] flex-col items-center justify-center px-5 pb-16 sm:pb-20"
    >
      <h2
        id="cta-heading"
        className="text-center font-display text-[1.75rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.25rem]"
      >
        Comece agora
      </h2>

      {/* Único CTA da página. O verde é o do WhatsApp (identidade da plataforma,
          não da marca), e o alvo passa de 60px de altura em qualquer tela.
          `cta-pulse` põe um halo lento em volta — é o que puxa o olho para cá
          quando a segunda tela entra; some no hover, onde o próprio botão já
          responde, e no `prefers-reduced-motion`. */}
      <a
        href={externalLinks.liveGroup}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entre no grupo do WhatsApp"
        className="cta-pulse group mt-7 flex min-h-[3.75rem] w-full max-w-[24rem] items-center justify-center gap-3 rounded-2xl bg-whats px-6 text-white transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:translate-y-0 active:scale-[0.98] sm:mt-8 sm:min-h-[4rem]"
      >
        <WhatsAppIcon className="size-6 shrink-0" />
        <span className="font-display text-base font-bold sm:text-lg">Entre no Grupo</span>
        <ArrowRightIcon className="size-[18px] shrink-0 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>

      <p className="mt-11 max-w-[32ch] text-center text-[0.9375rem] leading-relaxed text-ink-muted text-pretty sm:mt-14 sm:max-w-[46ch] sm:text-lg">
        A {site.name} facilita suas compras nos EUA e envia direto para sua casa. Facilidade e
        conforto em suas mãos.
      </p>

      <TrustBadges className="mt-6 sm:mt-7" />
    </section>
  )
}
