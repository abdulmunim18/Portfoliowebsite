'use client'

import { useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function PortfolioMotion() {
  useEffect(() => {
    document.documentElement.classList.add('motion-ready')
    const reveals = [...document.querySelectorAll<HTMLElement>('.reveal-on-scroll')]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.13, rootMargin: '0px 0px -7% 0px' })

    reveals.forEach((element) => observer.observe(element))

    const glowCards = [...document.querySelectorAll<HTMLElement>('.pointer-glow')]
    const moveHandlers = glowCards.map((card) => {
      const handler = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
      }
      card.addEventListener('pointermove', handler)
      return { card, handler }
    })

    return () => {
      observer.disconnect()
      moveHandlers.forEach(({ card, handler }) => card.removeEventListener('pointermove', handler))
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={19} /></button>
}
