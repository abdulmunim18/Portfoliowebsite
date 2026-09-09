'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import type { Service } from '@/data/services'

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reason = service.title.includes('AI') || service.title.includes('n8n') || service.title.includes('Make.com')
    ? 'AI Automation'
    : 'Software Development'

  return (
    <motion.article
      className="reference-service-card"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.012 }}
    >
      <p className="service-kicker">Service</p>
      <h3>{service.title}</h3>
      <p className="service-copy">{service.description}</p>
      <ul className="service-features">
        {service.deliverables.map((item) => (
          <li key={item}><span><Check size={13} strokeWidth={2.4} /></span>{item}</li>
        ))}
      </ul>
      <motion.div whileTap={{ scale: 0.97 }} className="service-cta-wrap">
        <Link className="service-request-button" href={`/contact?reason=${encodeURIComponent(reason)}`}>
          Request This Service <ArrowRight size={17} />
        </Link>
      </motion.div>
    </motion.article>
  )
}
