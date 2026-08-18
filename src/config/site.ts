/**
 * Fonte única de verdade para textos institucionais, links externos e vídeo.
 * Nenhum componente deve conter URL hardcoded — importe daqui.
 */

export const site = {
  name: 'Pack to Brazil',
  title: 'Pack to Brazil | Compras dos EUA direto para o Brasil',
  /** Meta description e Open Graph. Não é renderizada na página. */
  description:
    'Compre nos Estados Unidos e receba no Brasil: pedidos pelo app ou no grupo ao vivo, ' +
    'suíte com 60 dias de armazenamento gratuito e rastreio até a sua porta.',
  /** Frase oficial da marca — identidadevisual.md. */
  slogan: 'Dos EUA diretamente para o seu endereço, sem sair de casa!',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://packtobrazil.com',
  locale: 'pt-BR',
  instagramHandle: '@packtobrazil',
} as const

export const externalLinks = {
  /** App Store (iOS). */
  appStoreIos: 'https://apps.apple.com/br/app/pack-to-brazil/id6749604073',
  /** Google Play (Android). */
  appStoreAndroid: 'https://play.google.com/store/apps/details?id=com.company.packtobr',
  /** Grupo "Compras ao Vivo" no WhatsApp — ofertas em tempo real. */
  liveGroup: 'https://chat.whatsapp.com/DxGJh5uvoir5j39m4dzEfG?s=cl&p=i&ilr=0',
  /** Atendimento individual no WhatsApp. */
  support: 'https://wa.me/message/GJACGQ2OGLAAE1',
  /** Perfil oficial — usado no rodapé e no `sameAs` do JSON-LD. */
  instagram: 'https://www.instagram.com/packtobrazil',
} as const

/** Perfis e lojas oficiais — vira `sameAs` no JSON-LD. */
export const officialProfiles: string[] = [
  externalLinks.instagram,
  externalLinks.appStoreIos,
  externalLinks.appStoreAndroid,
].filter((url) => url.length > 0)

/**
 * Prova social exibida em destaque no hero.
 * Só é renderizada quando preenchida — deixe vazio até ter um número real,
 * para não publicar métrica não verificada.
 * Ex.: 'Mais de 1.000 famílias já receberam suas compras no Brasil'
 */
export const socialProof: string = ''

/**
 * Vídeo "Como funciona".
 * Enquanto `url` estiver vazia, a seção renderiza o card estático (sem JS de cliente).
 * Basta preencher `url` (e ajustar `provider`) para ativar o player.
 */
export const video: {
  url: string
  provider: 'youtube' | 'mp4'
  /** Proporção da moldura: 'vertical' = 9:16 (Shorts), 'wide' = 16:9. */
  orientation: 'vertical' | 'wide'
  poster: string
} = {
  /** Vídeo não listado no YouTube — embutível, mas não aparece em buscas. */
  url: 'https://youtube.com/shorts/qVHonSlTTNQ',
  provider: 'youtube',
  orientation: 'vertical',
  /** Quadro do vídeo servido localmente — ver README. */
  poster: '/video-poster.jpg',
}
