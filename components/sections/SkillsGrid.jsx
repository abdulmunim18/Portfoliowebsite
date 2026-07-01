import AnimatedSection from '@/components/ui/AnimatedSection'
import Container from '@/components/ui/Container'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'

/**
 * Skills/tech stack grid grouped by category.
 * Shows proficiency bars and skill icons.
 */
export default function SkillsGrid({ skills }) {
  if (!skills || skills.length === 0) return null

  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  const categoryIcons = {
    Frontend: '🎨',
    Backend: '⚙️',
    Language: '📝',
    Database: '🗄️',
    DevOps: '🚀',
    Tools: '🛠️',
    Mobile: '📱',
    Other: '💡',
  }

  return (
    <section className="py-24 bg-white/[0.01]" aria-label="Skills">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-cyan-400 mb-2 uppercase tracking-widest">
              Tech Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Skills & <GradientText>Technologies</GradientText>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(grouped).map(([category, categorySkills], catIndex) => (
            <AnimatedSection
              key={category}
              delay={catIndex * 0.1}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">{categoryIcons[category] || '💡'}</span>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {category}
                </h3>
              </div>

              <div className="space-y-3">
                {categorySkills.map((skill) => (
                  <div key={skill._id || skill.name} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      {skill.proficiency && (
                        <span className="text-xs text-neutral-500 font-mono">
                          {skill.proficiency}%
                        </span>
                      )}
                    </div>
                    {skill.proficiency && (
                      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
