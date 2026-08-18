import { externalLinks, officialProfiles, site } from '@/config/site'
import { guideSteps, guideTagline } from '@/content/import-guide'

/**
 * Grafo JSON-LD da landing page.
 *
 * Descreve a empresa, o site, o app e o serviço para buscadores e agentes de IA.
 * Só entidades que correspondem ao que a página realmente apresenta — o passo a
 * passo completo do material de importação é servido em `/llms-full.txt`.
 */

const id = (fragment: string) => `${site.url}/#${fragment}`

const ORGANIZATION = id('organization')
const WEBSITE = id('website')
const WEBPAGE = id('webpage')
const SERVICE = id('service')

/** Uma entrada por loja publicada — some sozinha se a URL for esvaziada. */
const apps = [
  { platform: 'ios', os: 'iOS', url: externalLinks.appStoreIos },
  { platform: 'android', os: 'Android', url: externalLinks.appStoreAndroid },
].filter((app) => app.url.length > 0)

/** Resumo do serviço construído a partir do material oficial de importação. */
const serviceDescription = [
  'A Pack to Brazil recebe suas compras feitas em lojas dos Estados Unidos, armazena tudo em uma suíte individual e envia para o seu endereço no Brasil.',
  guideSteps.map((step) => `${step.number}. ${step.name}: ${step.summary}`).join(' '),
].join(' ')

export function buildStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION,
        name: site.name,
        url: site.url,
        slogan: site.slogan,
        description: guideTagline,
        logo: {
          '@type': 'ImageObject',
          url: `${site.url}/icon-512.png`,
          width: 512,
          height: 512,
          caption: site.name,
        },
        image: `${site.url}/opengraph-image.jpg`,
        sameAs: officialProfiles,
        areaServed: [
          { '@type': 'Country', name: 'Brasil' },
          { '@type': 'Country', name: 'Estados Unidos' },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            url: externalLinks.support,
            availableLanguage: ['Portuguese'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: site.locale,
        publisher: { '@id': ORGANIZATION },
      },
      {
        '@type': 'WebPage',
        '@id': WEBPAGE,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: site.locale,
        isPartOf: { '@id': WEBSITE },
        about: { '@id': SERVICE },
        primaryImageOfPage: `${site.url}/opengraph-image.jpg`,
      },
      {
        '@type': 'Service',
        '@id': SERVICE,
        name: 'Importação de compras dos Estados Unidos para o Brasil',
        serviceType: 'Redirecionamento de compras e envio internacional',
        description: serviceDescription,
        provider: { '@id': ORGANIZATION },
        areaServed: { '@type': 'Country', name: 'Brasil' },
        availableChannel: [
          ...apps.map((app) => ({
            '@type': 'ServiceChannel',
            name: `Aplicativo Pack to Brazil para ${app.os}`,
            serviceUrl: app.url,
          })),
          {
            '@type': 'ServiceChannel',
            name: 'Grupo "Compras ao Vivo" no WhatsApp',
            serviceUrl: externalLinks.liveGroup,
          },
          {
            '@type': 'ServiceChannel',
            name: 'Atendimento por WhatsApp',
            serviceUrl: externalLinks.support,
          },
        ],
      },
      ...apps.map((app) => ({
        '@type': 'MobileApplication',
        '@id': id(`app-${app.platform}`),
        name: site.name,
        url: app.url,
        installUrl: app.url,
        applicationCategory: 'ShoppingApplication',
        operatingSystem: app.os,
        inLanguage: site.locale,
        publisher: { '@id': ORGANIZATION },
        offers: { '@type': 'Offer', price: 0, priceCurrency: 'BRL' },
      })),
    ],
  }
}

/**
 * Serializa o grafo para dentro de `<script type="application/ld+json">`.
 * Cada `<` vira `<` para que nenhum texto do conteúdo consiga fechar a tag.
 */
export function serializeStructuredData(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
