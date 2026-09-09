import type { Metadata } from 'next'
import { Container } from '@/components/v2/Container'

export const metadata: Metadata = { title: 'Building in Public', description: 'Short updates from Abdul Munim about software projects, technical learning, debugging, and AI automation.' }

export default function WorklogPage() {
  return <><section className="page-hero"><Container><p className="eyebrow">Worklog</p><h1>Building in public.</h1><p>Short, honest notes about what I am building, learning, debugging, and improving.</p></Container></section><section className="section section-white"><Container><article className="worklog-row"><time dateTime="2026-09-09">Sep 09, 2026</time><div><h2>Rebuilding Portfolio V2</h2><p>Audited the existing Next.js and Sanity codebase, removed unsupported demo content, and established a new light-first design foundation.</p><div className="tag-list"><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Portfolio</span></div></div></article></Container></section></>
}
