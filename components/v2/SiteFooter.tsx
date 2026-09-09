import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { personal } from '@/data/personal'
import { Container } from './Container'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div>
          <Link className="wordmark" href="/">AM<span>.</span></Link>
          <p>Full-stack software, APIs, and practical AI automation.</p>
        </div>
        <div className="footer-links">
          <Link href="/projects">Projects</Link><Link href="/services">Services</Link>
          <Link href="/worklog">Worklog</Link><Link href="/about">About</Link>
        </div>
        <div className="footer-links">
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          <a href={`mailto:${personal.email}`}>Email <ArrowUpRight size={14} /></a>
        </div>
      </Container>
      <Container className="footer-bottom">
        <span>© {new Date().getFullYear()} Abdul Munim</span>
        <span>Built with Next.js, Sanity, and care.</span>
      </Container>
    </footer>
  )
}
