import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { serviceGroups } from '@/data/services'
import { ServiceCard } from '@/components/services/ServiceCard'

export const metadata: Metadata = { title: 'Software Development & AI Automation Services', description: 'Full-stack development, custom software, APIs, AI automation, n8n, Make.com, and integration services from Abdul Munim.' }

export default function ServicesPage() {
  return <>
    <section className="page-hero"><Container><p className="eyebrow">Services</p><h1>Software, AI & automation services.</h1><p>I build complete digital solutions - from modern web applications and custom software to AI-powered automation.</p><div className="hero-actions"><Link className="button button-primary" href="/contact?reason=Freelance%20Project">Discuss a project <ArrowRight size={17} /></Link></div></Container></section>
    <section className="section section-white"><Container>{serviceGroups.map((group) => <section className="service-group" key={group.title}><div className="service-group-head"><h2>{group.title}</h2><p>{group.intro}</p></div><div className="service-list">{group.services.map((service, index) => <ServiceCard service={service} index={index} key={service.title} />)}</div></section>)}</Container></section>
    <section className="section"><Container><div className="cta-panel"><div><p className="eyebrow" style={{ color: '#aebeff' }}>Project inquiry</p><h2>Start with the problem, not a package.</h2><p>Scope varies, so I will ask a few focused questions and suggest a practical next step.</p></div><Link className="button button-primary" href="/contact?reason=Software%20Development">Request a conversation <ArrowRight size={17} /></Link></div></Container></section>
  </>
}
