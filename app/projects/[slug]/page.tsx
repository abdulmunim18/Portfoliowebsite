import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { projects } from '@/data/projects'

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  return project ? { title: project.title, description: project.summary } : {}
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()
  return <><section className="page-hero"><Container><Link className="text-link" href="/projects"><ArrowLeft size={16} /> All projects</Link><p className="eyebrow" style={{ marginTop: '2rem' }}>{project.eyebrow}</p><h1>{project.title}</h1><p>{project.summary}</p><div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></Container></section><section className="section section-white"><Container className="detail-grid"><article className="content-panel"><h2>Overview</h2><p>Role: {project.role}. This case study currently contains only details verified in Abdul&apos;s resume.</p><h2 style={{ marginTop: '2rem' }}>Key engineering features</h2><ul className="detail-list">{project.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></article><article className="content-panel"><h2>Case study status</h2><p>Problem, architecture, challenges, screenshots, repository links, and detailed learnings will be added when they are verified. They are deliberately not invented for presentation.</p><p className="form-note">TODO: add real screenshots and GitHub/live URLs supplied by Abdul.</p></article></Container></section></>
}
