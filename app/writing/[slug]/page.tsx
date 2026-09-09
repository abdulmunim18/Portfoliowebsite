import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { PortableContent } from '@/components/v2/PortableContent'
import { sanityFetch } from '@/lib/sanity/client'
import { articleBySlugQuery } from '@/lib/sanity/queries'
import { formatCmsDate, type CmsArticle } from '@/data/cms'

type PageProps = { params: Promise<{ slug: string }> }
export const revalidate = 60

async function getArticle(slug: string) {
  return await sanityFetch(articleBySlugQuery, { slug }, ['article']) as CmsArticle | null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle((await params).slug)
  if (!article) return { title: 'Article not found' }
  return { title: article.seoTitle || article.title, description: article.seoDescription || article.excerpt }
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle((await params).slug)
  if (!article) notFound()
  return <><section className="page-hero page-hero-article"><Container><Link className="text-link" href="/writing"><ArrowLeft size={16} /> All writing</Link><p className="eyebrow" style={{ marginTop: '2rem' }}>{formatCmsDate(article.publishedAt)}</p><h1>{article.title}</h1>{article.excerpt ? <p>{article.excerpt}</p> : null}{article.tags?.length ? <div className="tag-list">{article.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div> : null}</Container></section><section className="section section-white"><Container className="article-shell"><PortableContent value={article.body} /></Container></section></>
}
