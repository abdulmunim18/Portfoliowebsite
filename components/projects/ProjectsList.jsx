'use client'

import { useState } from 'react'
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

/**
 * Filterable projects grid. Manages filter tag state and displays filtered results.
 */
export default function ProjectsList({ initialProjects }) {
  const [activeTag, setActiveTag] = useState('all')

  // Extract all unique tech stack names from projects
  const allTagsSet = new Set()
  initialProjects.forEach((p) => {
    p.techStack?.forEach((tech) => allTagsSet.add(tech.name))
  })
  const tags = Array.from(allTagsSet)

  // Filter projects by tag
  const filteredProjects = activeTag === 'all'
    ? initialProjects
    : initialProjects.filter((p) =>
        p.techStack?.some((tech) => tech.name === activeTag)
      )

  return (
    <div>
      <ProjectFilter
        tags={tags}
        activeTag={activeTag}
        onTagChange={setActiveTag}
      />

      {filteredProjects.length === 0 ? (
        <AnimatedSection className="text-center py-20 text-neutral-500 font-mono text-sm">
          No projects found under &ldquo;{activeTag}&rdquo;
        </AnimatedSection>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project._id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  )
}
