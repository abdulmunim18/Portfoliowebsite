import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { PortableContent } from '@/components/v2/PortableContent'
import { sanityFetch } from '@/lib/sanity/client'
import { worklogBySlugQuery } from '@/lib/sanity/queries'
import { formatCmsDate, type CmsWorklog } from '@/data/cms'

type PageProps = { params: Promise<{ slug: string }> }
export const revalidate = 60

async function getEntry(slug: string) {
  return await sanityFetch(worklogBySlugQuery, { slug }, ['worklog']) as CmsWorklog | null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const entry = await getEntry((await params).slug)
  return entry ? { title: entry.title, description: entry.excerpt } : { title: 'Worklog entry not found' }
}

export default async function WorklogEntryPage({ params }: PageProps) {
  const entry = await getEntry((await params).slug)
  if (!entry) notFound()
  return <><section className="page-hero page-hero-article"><Container><Link className="text-link" href="/worklog"><ArrowLeft size={16} /> All worklog entries</Link><p className="eyebrow" style={{ marginTop: '2rem' }}>{formatCmsDate(entry.publishedAt)}</p><h1>{entry.title}</h1>{entry.excerpt ? <p>{entry.excerpt}</p> : null}<div className="hero-actions">{entry.githubUrl ? <a className="button button-secondary" href={entry.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a> : null}{entry.externalUrl ? <a className="button button-secondary" href={entry.externalUrl} target="_blank" rel="noreferrer">Related link <ArrowUpRight size={16} /></a> : null}</div></Container></section><section className="section section-white"><Container className="article-shell"><PortableContent value={entry.body} /></Container></section></>
}
