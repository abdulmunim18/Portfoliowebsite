'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'

const navItems = [['About', '/#about'], ['Experience', '/#experience'], ['Skills', '/#skills'], ['Education', '/#education'], ['Blogs', '/#blogs'], ['Projects', '/#projects']] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const goToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    if (pathname !== '/') return
    const sectionId = href.split('#')[1]
    const section = document.getElementById(sectionId)
    if (!section) return
    event.preventDefault()
    window.history.replaceState(null, '', `#${sectionId}`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <header className="site-header reference-header"><Container>
    <nav className="nav-shell reference-nav" aria-label="Main navigation">
      <Link className="reference-wordmark" href="/">ABDUL MUNIM</Link>
      <div className="desktop-nav reference-desktop-nav">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={(event) => goToSection(event, href)}>{label}</Link>)}</div>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    </nav>
    {open ? <div className="mobile-nav reference-mobile-nav">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={(event) => goToSection(event, href)}>{label}</Link>)}<Link href="/#contact" onClick={(event) => goToSection(event, '/#contact')}>Contact</Link></div> : null}
  </Container></header>
}
