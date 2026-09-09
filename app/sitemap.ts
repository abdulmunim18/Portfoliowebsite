import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/personal'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/skills', '/projects', '/experience', '/services', '/worklog', '/writing', '/contact']
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: route === '/worklog' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : .7 })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
  ]
}
