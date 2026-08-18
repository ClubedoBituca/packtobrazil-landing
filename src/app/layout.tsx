import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { isIndexable, site } from '@/config/site'
import { DEFAULT_THEME, browserBarColor, themeInitScript } from '@/lib/theme'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const ogImage = {
  url: '/opengraph-image.jpg',
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.slogan}`,
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  category: 'shopping',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  // No domínio definitivo, sem restrição de trecho ou de imagem: buscadores e
  // assistentes podem citar a página por inteiro. Fora dele, `noindex` —
  // ver `isIndexable` em config/site.ts.
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-snippet': -1,
          'max-image-preview': 'large',
          'max-video-preview': -1,
        },
      }
    : { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [ogImage],
  },
}

export const viewport: Viewport = {
  // A página abre sempre no claro; o ThemeToggle troca o atributo `data-theme`
  // e reescreve esta `theme-color` quando a pessoa muda de tema.
  colorScheme: 'light',
  themeColor: browserBarColor[DEFAULT_THEME],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-theme={DEFAULT_THEME}
      suppressHydrationWarning
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <head>
        {/* Aponta os agentes para a versão em texto puro do conteúdo do site. */}
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title={`${site.name} — resumo em texto para agentes`}
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Sem JavaScript o botão não faz nada: some, e a página fica clara. */}
        <noscript>
          <style>{'.theme-toggle{display:none}'}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
