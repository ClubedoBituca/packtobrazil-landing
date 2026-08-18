import type { MetadataRoute } from 'next'
import { isIndexable, site } from '@/config/site'

/**
 * Agentes de IA e buscadores com regra própria.
 *
 * `User-agent: *` já libera o site inteiro, mas alguns destes bots — como
 * `Google-Extended` e `Applebot-Extended` — só consideram o uso do conteúdo em
 * respostas de IA quando existe uma regra nominal. Deixar a permissão explícita
 * é o que faz a página ser citável por esses assistentes.
 */
const aiAgents = [
  'Applebot',
  'Applebot-Extended',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'DuckAssistBot',
  'meta-externalagent',
  'Amazonbot',
  'Bingbot',
  'CCBot',
  'cohere-ai',
  'YouBot',
]

export default function robots(): MetadataRoute.Robots {
  // URL provisória: nada entra em buscador, e sem apontar o sitemap.
  if (!isIndexable) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiAgents, allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
