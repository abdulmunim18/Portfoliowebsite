import type { Metadata } from 'next'
import { Container } from '@/components/v2/Container'
import { skillGroups } from '@/data/skills'

export const metadata: Metadata = { title: 'Technical Skills', description: 'Grouped technical capabilities across frontend, backend, databases, AI automation, and development tools.' }

export default function SkillsPage() {
  return <><section className="page-hero"><Container><p className="eyebrow">Skills</p><h1>Capabilities backed by practical work.</h1><p>No proficiency percentages - just the tools and engineering areas I can discuss and demonstrate.</p></Container></section><section className="section section-white"><Container className="skills-grid">{skillGroups.map((group) => <article className="info-card" key={group.title}><h2>{group.title}</h2><p>{group.description}</p><div className="tag-list">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></article>)}</Container></section></>
}
