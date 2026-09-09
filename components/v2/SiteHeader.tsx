'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { Container } from './Container'

const primary = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Worklog', href: '/worklog' },
  { label: 'About', href: '/about' },
]

const more = [
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Writing', href: '/writing' },
  { label: 'Resume', href: '/Abdul_Munim_Bscs.pdf' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <Container>
        <nav className="nav-shell" aria-label="Main navigation">
          <Link className="brand-lockup" href="/" aria-label="Abdul Munim home">
            <span className="brand-avatar"><Image src="/profile-pic.jpeg" alt="" fill sizes="40px" /></span>
            <span><strong>Abdul Munim</strong><small>Full-Stack Developer</small></span>
          </Link>
          <div className="desktop-nav">
            {primary.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>
                {item.label}
              </Link>
            ))}
            <div className="more-menu">
              <button type="button">More <ChevronDown size={14} aria-hidden="true" /></button>
              <div className="more-panel">
                {more.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
              </div>
            </div>
          </div>
          <div className="nav-actions">
            <Link className="button button-primary desktop-contact" href="/contact">
              Contact <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="menu-button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        {open ? (
          <div id="mobile-navigation" className="mobile-nav">
            {[...primary, ...more].map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link className="button button-primary" href="/contact">Contact</Link>
          </div>
        ) : null}
      </Container>
    </header>
  )
}
