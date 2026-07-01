import AnimatedSection from '@/components/ui/AnimatedSection'
import Container from '@/components/ui/Container'
import GradientText from '@/components/ui/GradientText'
import ProjectCard from '@/components/projects/ProjectCard'
import Button from '@/components/ui/Button'

/**
 * Featured projects section for the homepage.
 * Displays up to 4 featured project cards in a grid.
 */
export default function FeaturedProjects({ projects }) {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="py-24" aria-label="Featured Projects">
      <Container>
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-mono text-cyan-400 mb-2 uppercase tracking-widest">
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Featured <GradientText>Projects</GradientText>
              </h2>
            </div>
            <Button href="/projects" variant="ghost" className="hidden sm:inline-flex">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project._id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 text-center sm:hidden">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  )
}
