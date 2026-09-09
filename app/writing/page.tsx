import type { Metadata } from 'next'
import { Container } from '@/components/v2/Container'

export const metadata: Metadata = { title: 'Technical Writing', description: 'Technical articles by Abdul Munim about full-stack development, APIs, software architecture, and AI automation.' }

export default function WritingPage() {
  return <><section className="page-hero"><Container><p className="eyebrow">Writing</p><h1>Long-form technical notes.</h1><p>Detailed articles will live here separately from short Worklog updates.</p></Container></section><section className="section section-white"><Container><div className="empty-state"><h2>No articles published yet.</h2><p>I will only publish real, reviewed technical writing here - no generated filler.</p></div></Container></section></>
}
