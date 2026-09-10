'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import type { Project } from '@/data/projects'

export function ProjectAccordion({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0)

  return <div className="project-accordion reveal-on-scroll pointer-glow">
    {projects.map((project, index) => <article className={`project-accordion-item ${active === index ? 'is-open' : ''}`} key={project.slug}>
      <button type="button" onClick={() => setActive(index)} aria-expanded={active === index}>
        <span><i /><i /><i /></span>
        <strong>{project.title}</strong>
        <ChevronDown size={17} />
      </button>
      <div className="project-accordion-content">
        <pre><code><span className="code-pink">const</span> project = {'{'}{`\n`}  name: <span className="code-yellow">&apos;{project.title}&apos;</span>,{`\n`}  tools: [<span className="code-yellow">{project.stack.map((tool) => `'${tool}'`).join(', ')}</span>],{`\n`}  myRole: <span className="code-orange">&apos;{project.role}&apos;</span>,{`\n`}  description: <span className="code-green">&apos;{project.summary}&apos;</span>{`\n`}{'}'};</code></pre>
        <Link href={`/projects/${project.slug}`}>View case study <ArrowRight size={16} /></Link>
      </div>
    </article>)}
  </div>
}
