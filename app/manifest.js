import { siteConfig } from '@/lib/constants'

/**
 * PWA/Web Manifest metadata configuration.
 */
export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: 'Portfolio',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
