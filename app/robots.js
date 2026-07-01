import { siteConfig } from '@/lib/constants'

/**
 * Standard robots.txt metadata configuration.
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/api/'], // Don't crawl Sanity Studio or API endpoints
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
