import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { sanityFetch } from '@/lib/sanity/client'
import { allArticlesQuery } from '@/lib/sanity/queries'
import { formatCmsDate, type CmsArticle } from '@/data/cms'

export const metadata: Metadata = { title: 'Technical Writing', description: 'Technical articles by Abdul Munim about full-stack development, APIs, software architecture, and AI automation.' }
export const revalidate = 60

export default async function WritingPage() {
  const articles = ((await sanityFetch(allArticlesQuery, {}, ['article', 'post'])) || []) as CmsArticle[]

  return <><section className="page-hero"><Container><p className="eyebrow">Writing</p><h1>Long-form technical notes.</h1><p>Detailed articles about full-stack development, APIs, software architecture, and AI automation.</p></Container></section><section className="section section-white"><Container>{articles.length ? <div className="writing-list">{articles.map((article) => <article className="content-panel cms-card" key={article._id}><p className="eyebrow">{formatCmsDate(article.publishedAt)}</p><h2>{article.title}</h2>{article.excerpt ? <p>{article.excerpt}</p> : null}{article.tags?.length ? <div className="tag-list">{article.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div> : null}<Link className="text-link" href={`/writing/${article.slug.current}`}>Read article <ArrowRight size={16} /></Link></article>)}</div> : <div className="empty-state"><h2>No articles published yet.</h2><p>New articles published from Sanity Studio will appear here automatically.</p></div>}</Container></section></>
}
