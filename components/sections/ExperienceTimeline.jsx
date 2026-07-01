import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'
import { PortableText } from '@/lib/sanity/portable-text'
import { formatDateRange } from '@/lib/utils'

/**
 * Vertical timeline component for work experience.
 * Each entry shows role, company, dates, description, and tech used.
 */
export default function ExperienceTimeline({ experiences }) {
  if (!experiences || experiences.length === 0) return null

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <AnimatedSection key={exp._id} delay={index * 0.1} direction="left">
            <div className="relative pl-12 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-neutral-950 z-10" />

              {/* Content card */}
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        {exp.company} ↗
                      </a>
                    ) : (
                      <span className="text-cyan-400 text-sm">{exp.company}</span>
                    )}
                  </div>
                  <span className="text-xs text-neutral-500 font-mono whitespace-nowrap">
                    {formatDateRange(exp.startDate, exp.endDate)}
                  </span>
                </div>

                {/* Description */}
                {exp.description && (
                  <div className="text-sm text-neutral-400 mb-4 prose-sm">
                    <PortableText value={exp.description} />
                  </div>
                )}

                {/* Tech used */}
                {exp.techUsed && exp.techUsed.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.techUsed.map((tech) => (
                      <Badge key={tech.name} label={tech.name} variant="ghost" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
