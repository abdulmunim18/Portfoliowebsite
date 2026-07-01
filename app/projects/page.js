import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import ProjectsList from '@/components/projects/ProjectsList'
import { sanityFetch } from '@/lib/sanity/client'
import { allProjectsQuery } from '@/lib/sanity/queries'
import { mockProjects } from '@/lib/mockData'

export const revalidate = 60 // ISR cache 60s

export const metadata = {
  title: 'Projects',
  description: 'Explore the portfolio of design systems, API products, and web applications built by Abdul Munim.',
}

export default async function ProjectsPage() {
  const projectsData = await sanityFetch(allProjectsQuery, {}, ['project'])
  const projects = projectsData && projectsData.length > 0 ? projectsData : mockProjects

  return (
    <div className="py-20 min-h-screen">
      <Container>
        <AnimatedSection className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            My <GradientText>Projects</GradientText>
          </h1>
          <p className="text-sm font-mono text-neutral-500">
            
          </p>
        </AnimatedSection>

        <ProjectsList initialProjects={projects} />
      </Container>
    </div>
  )
}
