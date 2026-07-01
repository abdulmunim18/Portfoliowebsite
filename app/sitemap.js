import { sanityFetch } from '@/lib/sanity/client'
import { allSlugsQuery } from '@/lib/sanity/queries'
import { mockProjects, mockPosts } from '@/lib/mockData'
import { siteConfig } from '@/lib/constants'

export const revalidate = 3600 // Cache for 1 hour

/**
 * Dynamic sitemap.xml generator.
 * Fetches slugs from CMS and returns array structure for sitemap.xml.
 */
export default async function sitemap() {
  const data = await sanityFetch(allSlugsQuery, {}, ['project', 'post'])
  
  const projects = data?.projects || mockProjects.map((p) => ({ slug: p.slug.current, _updatedAt: p.publishedAt }))
  const posts = data?.posts || mockPosts.map((p) => ({ slug: p.slug.current, _updatedAt: p.publishedAt }))

  const projectUrls = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(p._updatedAt || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const postUrls = posts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p._updatedAt || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const staticUrls = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.url}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${siteConfig.url}/experience`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteConfig.url}/uses`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ]

  return [...staticUrls, ...projectUrls, ...postUrls]
}
