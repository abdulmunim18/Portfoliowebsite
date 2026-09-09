import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { personal } from '@/data/personal'
import { experience } from '@/data/experience'

export const metadata: Metadata = { title: 'Experience & Education', description: 'Verified education, project experience, and resume access for Abdul Munim.' }

export default function ExperiencePage() {
  return <><section className="page-hero"><Container><p className="eyebrow">Experience</p><h1>AI automation experience, backed by full-stack work.</h1><p>Verified professional experience and education from my current resume.</p><div className="hero-actions"><a className="button button-primary" href={personal.resume} target="_blank">Download resume <Download size={17} /></a></div></Container></section><section className="section section-white"><Container><article className="experience-card"><div className="experience-meta"><p className="eyebrow">Professional experience</p><span>{experience.period}</span></div><div className="experience-heading"><div><h2>{experience.role}</h2><p><strong>{experience.company}</strong></p></div><p>{experience.location} <span>•</span> {experience.workMode}</p></div><ul className="detail-list">{experience.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul><div className="tag-list">{experience.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></article><div className="detail-grid experience-support"><article className="content-panel"><p className="eyebrow">Education / 2023 - 2027</p><h2>BS Computer Science</h2><p><strong>Air University, Islamabad</strong></p><p>CGPA: 3.0 / 4.00. Relevant coursework includes Software Engineering, Data Structures and Algorithms, Web Development, Artificial Intelligence, and App Development.</p></article><article className="content-panel"><p className="eyebrow">Project experience</p><h2>Full-stack application development</h2><p>Hands-on work across React interfaces, Node.js and Express APIs, MongoDB and PostgreSQL, JWT/RBAC, and Stripe payments.</p></article></div></Container></section></>
}
