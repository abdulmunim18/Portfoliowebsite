import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Project } from '@/data/projects'

export function ProjectStack({ projects }: { projects: Project[] }) {
  return <div className="reference-projects-inner">
    <div className="reference-projects-heading">
      <div className="reference-projects-glow" aria-hidden="true" />
      <h2>PROJECTS</h2>
    </div>
    <div className="reference-projects-stack">
      {projects.slice(0, 4).map((project, index) => <article className="reference-project-sticky" style={{ '--index': index + 1 } as CSSProperties} key={project.slug}>
        <div className="reference-project-card">
          <div className="reference-project-card-line" aria-hidden="true" />
          <div className="reference-project-card-title"><span className="reference-project-window-dots" aria-hidden="true"><i /><i /><i /></span><h3>{project.title}</h3></div>
          <div className="reference-project-card-body">
            <code>
              <span className="code-pink">const</span> project <span className="code-pink">=</span> {'{'}<br />
              &nbsp;&nbsp;name: <span className="code-yellow">&apos;{project.title}&apos;</span>,<br />
              &nbsp;&nbsp;tools: [<span className="code-yellow">{project.stack.map((tool) => `'${tool}'`).join(', ')}</span>],<br />
              &nbsp;&nbsp;myRole: <span className="code-orange">&apos;{project.role}&apos;</span>,<br />
              &nbsp;&nbsp;Description: <span className="code-blue">&apos;{project.summary}&apos;</span>,<br />
              {'}'};
            </code>
            <Link href={`/projects/${project.slug}`}>View case study <ArrowRight size={16} /></Link>
          </div>
        </div>
      </article>)}
    </div>
  </div>
}
