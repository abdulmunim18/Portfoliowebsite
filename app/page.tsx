import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Bot, Code2, Database, Download, ExternalLink, Layers3, Mail } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { SectionHeading } from '@/components/v2/SectionHeading'
import { personal } from '@/data/personal'
import { projects } from '@/data/projects'
import { skillGroups } from '@/data/skills'
import { experience } from '@/data/experience'

const servicePreview = [
  ['Full-Stack Development', 'Applications built from responsive interface to backend systems.'],
  ['AI Automation', 'Connected workflows using AI, APIs, webhooks, n8n, and Make.com.'],
  ['API & Backend Development', 'Secure APIs, authentication, authorization, and database logic.'],
  ['AI-Powered Applications', 'Practical product interfaces with useful AI-assisted capabilities.'],
]

export default function HomePage() {
  return (
    <>
      <section className="hero"><Container className="hero-grid">
        <div>
          <p className="eyebrow">Abdul Munim / Software Engineer</p>
          <p className="hero-role">Full-Stack Developer <span>•</span> AI Automation Builder</p>
          <h1>I build software that <span>solves real problems.</span></h1>
          <p className="hero-lead">{personal.statement}</p><p className="hero-context">{personal.context}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">View projects <ArrowRight size={17} /></Link>
            <a className="button button-secondary" href={personal.resume} target="_blank">Resume <Download size={17} /></a>
            <Link className="button button-secondary" href="/contact">Contact me <Mail size={17} /></Link>
          </div>
          <div className="availability"><strong><span className="pulse" /> Open to internships, junior roles, and freelance work</strong></div>
        </div>
        <div className="portrait-stage" aria-label="Portrait of Abdul Munim with full-stack technology symbols">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame"><Image src="/profile-pic.jpeg" alt="Abdul Munim" fill priority sizes="(max-width: 900px) 72vw, 390px" /></div>
          <span className="orbit-node node-code" aria-hidden="true"><Code2 size={20} /></span>
          <span className="orbit-node node-data" aria-hidden="true"><Database size={20} /></span>
          <span className="orbit-node node-stack" aria-hidden="true"><Layers3 size={20} /></span>
          <span className="orbit-node node-ai" aria-hidden="true"><Bot size={20} /></span>
        </div>
      </Container></section>

      <Container className="mobile-connect" aria-label="Connect with Abdul Munim">
        <a href={personal.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a>
        <a href={`mailto:${personal.email}`}>Email <Mail size={14} /></a>
      </Container>

      <section className="section section-white"><Container>
        <div className="section-topline">
          <SectionHeading eyebrow="01 / Selected work" title="Engineering proof, not filler." description="Two verified full-stack projects from my current resume." />
          <Link className="text-link" href="/projects">All projects <ArrowRight size={16} /></Link>
        </div>
        <div className="project-grid">{projects.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <div className="project-visual" aria-hidden="true"><span className="project-number">PROJECT / 0{index + 1}</span></div>
            <div><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.summary}</p>
              <ul className="proof-list">{project.facts.slice(0, 2).map((fact) => <li key={fact}>{fact}</li>)}</ul>
              <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              <Link className="text-link" href={`/projects/${project.slug}`} style={{ marginTop: '1.2rem' }}>View case study <ArrowRight size={16} /></Link>
            </div>
          </article>
        ))}</div>
      </Container></section>

      <section className="section"><Container>
        <div className="section-topline"><SectionHeading eyebrow="02 / Experience" title="Working with AI-powered workflows." description="Current professional experience, verified from my resume." /><Link className="text-link" href="/experience">Full experience <ArrowRight size={16} /></Link></div>
        <article className="experience-card experience-card-compact"><div className="experience-meta"><p className="eyebrow">{experience.company}</p><span>{experience.period}</span></div><div className="experience-heading"><div><h3>{experience.role}</h3><p>{experience.location} <span>•</span> {experience.workMode}</p></div></div><ul className="detail-list">{experience.responsibilities.slice(0, 2).map((item) => <li key={item}>{item}</li>)}</ul><div className="tag-list">{experience.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></article>
      </Container></section>

      <section className="section section-white"><Container>
        <SectionHeading eyebrow="03 / Capabilities" title="A practical full-stack toolkit." description="Grouped by the work I can show and explain, with no percentage bars." />
        <div className="skills-grid">{skillGroups.map((group) => (
          <article className="info-card" key={group.title}><h3>{group.title}</h3><p>{group.description}</p><div className="tag-list">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></article>
        ))}</div>
      </Container></section>

      <section className="section"><Container>
        <div className="section-topline"><SectionHeading eyebrow="04 / Services" title="Software, AI & automation." description="Complete digital solutions shaped around real workflows and clear outcomes." /><Link className="text-link" href="/services">Explore services <ArrowRight size={16} /></Link></div>
        <div className="service-preview">{servicePreview.map(([title, description], index) => (
          <article className="service-card" key={title}><span className="service-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p><Link className="text-link" href="/services">Learn more <ArrowRight size={15} /></Link></article>
        ))}</div>
      </Container></section>

      <section className="section"><Container><div className="cta-panel">
        <div><p className="eyebrow" style={{ color: '#aebeff' }}>Let&apos;s build something useful</p><h2>Have a role, project, or automation in mind?</h2><p>Tell me what you are trying to achieve and where software can help.</p></div>
        <div className="hero-actions"><Link className="button button-primary" href="/contact">Start a conversation <ArrowRight size={17} /></Link><a className="button button-secondary" href={personal.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={16} /></a></div>
      </div></Container></section>
    </>
  )
}
