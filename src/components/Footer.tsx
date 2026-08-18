import { Logo } from './Logo'
import { externalLinks, site } from '@/config/site'

// A página é estática, então o ano é resolvido no build — basta um deploy por
// ano para o rodapé não envelhecer.
const year = new Date().getFullYear()

export function Footer() {
  return (
    // Faixa translúcida na cor da página: o texto do rodapé é o menor da tela e
    // precisa de um fundo estável por cima da arte realçada.
    <footer className="border-t border-hairline/12 bg-surface/80 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-7 sm:flex-row sm:justify-between sm:gap-4 sm:py-8">
        <div className="flex items-center gap-3">
          <Logo
            sizes="(min-width: 640px) 40px, 36px"
            className="size-9 opacity-60 sm:size-10"
          />
          {/* O `::after` amplia a área de toque de 16px para 40px de altura sem
              desenhar nada e sem mexer no layout — este link tem a menor caixa
              clicável da tela. */}
          <a
            href={externalLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded text-xs font-semibold text-accent transition-colors after:absolute after:inset-x-0 after:-inset-y-3 after:content-[''] hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:text-[0.8125rem]"
          >
            {site.instagramHandle}
          </a>
        </div>

        <p className="text-center text-xs text-ink-subtle sm:text-right sm:text-[0.8125rem]">
          © {year} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
