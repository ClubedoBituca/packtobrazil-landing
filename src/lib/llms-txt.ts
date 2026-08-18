import { externalLinks, site } from '@/config/site'
import {
  guideFaq,
  guideIntro,
  guidePillars,
  guideSteps,
  guideTagline,
} from '@/content/import-guide'

/**
 * Texto que a página oferece a agentes de IA, no formato llms.txt
 * (https://llmstxt.org): markdown enxuto, sem navegação nem marcação de layout.
 *
 * `/llms.txt` é o resumo; `/llms-full.txt` traz o passo a passo completo do
 * material oficial de importação.
 */

const channels = [
  externalLinks.appStoreIos && `- [Aplicativo iOS](${externalLinks.appStoreIos})`,
  externalLinks.appStoreAndroid && `- [Aplicativo Android](${externalLinks.appStoreAndroid})`,
  `- [Grupo "Compras ao Vivo" no WhatsApp](${externalLinks.liveGroup}) — ofertas em tempo real`,
  `- [Atendimento no WhatsApp](${externalLinks.support})`,
  `- [Instagram ${site.instagramHandle}](${externalLinks.instagram})`,
].filter(Boolean) as string[]

function header(): string[] {
  return [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.slogan} ${guideTagline}`,
  ]
}

export function buildLlmsTxt(): string {
  return [
    ...header(),
    '',
    '## O que é',
    '',
    'A Pack to Brazil é um serviço de redirecionamento de compras: você compra em lojas',
    'dos Estados Unidos, os produtos chegam a uma suíte individual em nome do cliente e,',
    'quando você pedir, tudo é montado em uma caixa e enviado ao seu endereço no Brasil.',
    'O pedido, o estoque, a simulação de frete, o pagamento e o rastreio acontecem no',
    'aplicativo da marca; as ofertas ao vivo saem no grupo "Compras ao Vivo" do WhatsApp.',
    '',
    '## Diferenciais',
    '',
    ...guidePillars.map((p) => `- **${p.title}** — ${p.text}`),
    '',
    '## Como funciona, em 5 passos',
    '',
    ...guideSteps.map((step) => `${step.number}. **${step.name}** — ${step.summary}`),
    '',
    '## Canais oficiais',
    '',
    ...channels,
    '',
    '## Detalhamento',
    '',
    `- [Guia completo de importação](${site.url}/llms-full.txt) — prazos de armazenamento,`,
    '  taxas, montagem da caixa, coleta semanal e tributos alfandegários.',
    '',
  ].join('\n')
}

export function buildLlmsFullTxt(): string {
  const steps = guideSteps.flatMap((step) => [
    `### Passo ${step.number} — ${step.name}`,
    '',
    step.summary,
    '',
    ...step.details.map((detail) => `- ${detail}`),
    '',
  ])

  const faq = guideFaq.flatMap((item) => [`### ${item.question}`, '', item.answer, ''])

  return [
    ...header(),
    '',
    'Documento completo para leitura por agentes. Fonte: material oficial',
    '"Como fazer sua importação", da Pack to Brazil.',
    '',
    '## Guia de importação',
    '',
    guideIntro,
    '',
    ...steps,
    '## Perguntas frequentes',
    '',
    ...faq,
    '## Canais oficiais',
    '',
    ...channels,
    '',
  ].join('\n')
}
