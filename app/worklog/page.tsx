import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { sanityFetch } from '@/lib/sanity/client'
import { allWorklogsQuery } from '@/lib/sanity/queries'
import { formatCmsDate, type CmsWorklog } from '@/data/cms'

export const metadata: Metadata = { title: 'Building in Public', description: 'Short updates from Abdul Munim about software projects, technical learning, debugging, and AI automation.' }
export const revalidate = 60

const fallbackEntries: CmsWorklog[] = [{ _id: 'portfolio-v2', title: 'Rebuilding Portfolio V2', slug: { current: 'rebuilding-portfolio-v2' }, publishedAt: '2026-09-09T00:00:00.000Z', excerpt: 'Audited the existing Next.js and Sanity codebase, removed unsupported demo content, and established a new design foundation.', tags: ['Next.js', 'TypeScript', 'Portfolio'] }]

export default async function WorklogPage() {
  const cmsEntries = ((await sanityFetch(allWorklogsQuery, {}, ['worklog'])) || []) as CmsWorklog[]
  const entries = cmsEntries.length ? cmsEntries : fallbackEntries
  return <><section className="page-hero"><Container><p className="eyebrow">Worklog</p><h1>Building in public.</h1><p>Short, honest notes about what I am building, learning, debugging, and improving.</p></Container></section><section className="section section-white"><Container>{entries.map((entry) => <article className="worklog-row" key={entry._id}><time dateTime={entry.publishedAt}>{formatCmsDate(entry.publishedAt)}</time><div><h2>{entry.title}</h2>{entry.excerpt ? <p>{entry.excerpt}</p> : null}{entry.tags?.length ? <div className="tag-list">{entry.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div> : null}{entry.body ? <Link className="text-link" href={`/worklog/${entry.slug.current}`}>Read update <ArrowRight size={15} /></Link> : null}</div></article>)}</Container></section></>
}
