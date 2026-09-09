import type { Metadata } from 'next'
import { Container } from '@/components/v2/Container'
import ContactForm from '@/components/contact/ContactForm'
import { personal } from '@/data/personal'

export const metadata: Metadata = { title: 'Contact', description: 'Contact Abdul Munim about internships, junior developer roles, software projects, AI automation, or collaboration.' }

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ reason?: string }> }) {
  const { reason = '' } = await searchParams
  return <><section className="page-hero"><Container><p className="eyebrow">Contact</p><h1>Let&apos;s talk about the problem.</h1><p>Job opportunity, internship, software project, or automation idea - share enough context for a useful first reply.</p></Container></section><section className="section section-white"><Container className="contact-grid"><aside className="content-panel"><h2>Direct contact</h2><p>Email is the simplest option for detailed opportunities and project context.</p><p><a className="text-link" href={`mailto:${personal.email}`}>{personal.email}</a></p><div className="footer-links" style={{ marginTop: '2rem' }}><a href={personal.github} target="_blank" rel="noreferrer">GitHub</a><a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={personal.resume} target="_blank">Resume</a></div></aside><div className="content-panel"><h2>Send a message</h2><ContactForm defaultReason={reason} /></div></Container></section></>
}
