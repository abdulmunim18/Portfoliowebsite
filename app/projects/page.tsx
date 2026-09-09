import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { projects } from '@/data/projects'

export const metadata: Metadata = { title: 'Software Projects', description: 'Verified full-stack software projects by Abdul Munim, including APIs, authentication, databases, and payments.' }

export default function ProjectsPage() {
  return <><section className="page-hero"><Container><p className="eyebrow">Projects</p><h1>Real software, clearly explained.</h1><p>A focused set of verified projects is more useful than a wall of template cards.</p></Container></section><section className="section section-white"><Container className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.slug}><div className="project-visual" aria-hidden="true"><span className="project-number">PROJECT / 0{index + 1}</span></div><div><p className="eyebrow">{project.eyebrow}</p><h2>{project.title}</h2><p>{project.summary}</p><ul className="proof-list">{project.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul><div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div><Link className="text-link" href={`/projects/${project.slug}`} style={{ marginTop: '1.2rem' }}>Read case study <ArrowRight size={16} /></Link></div></article>)}</Container></section></>
}
