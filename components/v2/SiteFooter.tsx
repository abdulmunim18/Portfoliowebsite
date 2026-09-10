import Link from 'next/link'
import { CircleUserRound, GitBranch } from 'lucide-react'
import { Container } from './Container'
import { personal } from '@/data/personal'

export function SiteFooter() {
  return <footer className="site-footer reference-footer"><Container><div className="reference-footer-row"><p>© {new Date().getFullYear()} Abdul Munim</p><p>Built with purpose and clean code.</p><div><a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={18} /></a><a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><CircleUserRound size={18} /></a><Link href="/#contact">Contact</Link></div></div></Container></footer>
}
