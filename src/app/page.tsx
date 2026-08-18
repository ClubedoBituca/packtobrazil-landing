import { BackgroundArt } from '@/components/BackgroundArt'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Separator } from '@/components/Separator'
import { ThemeToggle } from '@/components/ThemeToggle'
import { buildStructuredData, serializeStructuredData } from '@/lib/structured-data'

export default function LandingPage() {
  return (
    <>
      {/* Grafo JSON-LD: empresa, site, serviço e app, para buscadores e agentes. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(buildStructuredData()),
        }}
      />

      <BackgroundArt />
      <ThemeToggle />
      <div className="flex min-h-dvh flex-col">
        {/* Faixa de acento no topo — dá o primeiro sinal de energia da página */}
        <div
          aria-hidden
          className="h-1 w-full shrink-0 bg-gradient-to-r from-strip via-accent to-strip"
        />
        <main className="flex-1">
          <Hero />
          <Separator />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
