'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'

const navItems = [['About', '/#about'], ['Experience', '/#experience'], ['Skills', '/#skills'], ['Education', '/#education'], ['Blogs', '/#blogs'], ['Projects', '/#projects']] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header reference-header"><Container>
    <nav className="nav-shell reference-nav" aria-label="Main navigation">
      <Link className="reference-wordmark" href="/">ABDUL MUNIM</Link>
      <div className="desktop-nav reference-desktop-nav">{navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    </nav>
    {open ? <div className="mobile-nav reference-mobile-nav">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link></div> : null}
  </Container></header>
}
