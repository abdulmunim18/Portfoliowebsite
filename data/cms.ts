import type { PortableTextBlock } from '@portabletext/react'

export type CmsSlug = { current: string }

export type CmsArticle = {
  _id: string
  title: string
  slug: CmsSlug
  publishedAt: string
  excerpt?: string
  body?: PortableTextBlock[]
  tags?: string[]
  coverImage?: unknown
  seoTitle?: string
  seoDescription?: string
}

export type CmsWorklog = {
  _id: string
  title: string
  slug: CmsSlug
  publishedAt: string
  excerpt?: string
  body?: PortableTextBlock[]
  tags?: string[]
  githubUrl?: string
  externalUrl?: string
  project?: { title: string; slug?: CmsSlug }
}

export function formatCmsDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value))
}
