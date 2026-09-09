import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/personal'
import { projects } from '@/data/projects'
import { sanityFetch } from '@/lib/sanity/client'
import { v2ContentSlugsQuery } from '@/lib/sanity/queries'

type CmsRoute = { slug: string; _updatedAt: string }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/about', '/skills', '/projects', '/experience', '/services', '/worklog', '/writing', '/contact']
  const content = await sanityFetch(v2ContentSlugsQuery) as { articles?: CmsRoute[]; worklogs?: CmsRoute[] } | null
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: route === '/worklog' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : .7 })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
    ...(content?.articles || []).map((article) => ({ url: `${siteConfig.url}/writing/${article.slug}`, lastModified: new Date(article._updatedAt), changeFrequency: 'monthly' as const, priority: .7 })),
    ...(content?.worklogs || []).map((entry) => ({ url: `${siteConfig.url}/worklog/${entry.slug}`, lastModified: new Date(entry._updatedAt), changeFrequency: 'weekly' as const, priority: .6 })),
  ]
}
