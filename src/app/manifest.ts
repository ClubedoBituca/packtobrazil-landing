import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    lang: site.locale,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    categories: ['shopping', 'business'],
    // Combinam com `--surface` claro em globals.css.
    background_color: '#f2ebdc',
    theme_color: '#f2ebdc',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
