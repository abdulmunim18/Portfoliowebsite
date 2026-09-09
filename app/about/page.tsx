import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { Container } from '@/components/v2/Container'
import { personal } from '@/data/personal'

export const metadata: Metadata = { title: 'About', description: 'About Abdul Munim, a final-year Computer Science student building full-stack software and AI automation.' }

export default function AboutPage() {
  return <><section className="page-hero"><Container><p className="eyebrow">About</p><h1>Software engineering with a practical product mindset.</h1><p>I am Abdul Munim, a final-year BS Computer Science student at Air University in Islamabad.</p></Container></section><section className="section section-white"><Container className="contact-grid"><div className="content-panel" style={{ padding: 0, overflow: 'hidden', minHeight: 380, position: 'relative' }}><Image src="/profile-pic.jpeg" alt="Abdul Munim" fill sizes="(max-width: 700px) 100vw, 40vw" style={{ objectFit: 'cover', objectPosition: '50% 8%' }} priority /></div><div className="content-panel"><h2>Building across software and automation</h2><p>I enjoy working at the intersection of full-stack development and AI automation. My project work includes REST APIs, authentication, authorization, databases, payment integration, responsive interfaces, and connected workflows.</p><p>My current focus is becoming stronger at production-ready engineering while building a public body of work that shows how I solve problems and what I learn along the way.</p><p>I am open to internships, junior developer roles, remote opportunities, and carefully scoped freelance projects.</p><div className="hero-actions"><a className="button button-primary" href={personal.resume} target="_blank">Download resume <Download size={17} /></a><Link className="button button-secondary" href="/contact">Get in touch <ArrowRight size={17} /></Link></div></div></Container></section></>
}
