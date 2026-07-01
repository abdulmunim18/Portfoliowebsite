import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import ProjectGallery from '@/components/projects/ProjectGallery'
import { PortableText } from '@/lib/sanity/portable-text'
import { sanityFetch } from '@/lib/sanity/client'
import { projectBySlugQuery, projectSlugsQuery } from '@/lib/sanity/queries'
import { mockProjects } from '@/lib/mockData'
import { urlFor } from '@/lib/sanity/image'
import { formatDate } from '@/lib/utils'

export const revalidate = 60

// Generate paths for dynamic routes (SSG)
export async function generateStaticParams() {
  const paths = await sanityFetch(projectSlugsQuery, {}, ['project'])
  if (!paths || paths.length === 0) {
    // Generate fallback paths from mock data during build
    return mockProjects.map((p) => ({ slug: p.slug.current }))
  }
  return paths.map((p) => ({ slug: p.slug }))
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = await sanityFetch(projectBySlugQuery, { slug }, ['project'])
  const fallback = mockProjects.find((p) => p.slug.current === slug)
  
  const currentProject = project || fallback

  if (!currentProject) {
    return { title: 'Project Not Found' }
  }

  return {
    title: currentProject.title,
    description: currentProject.description || 'Project details',
    openGraph: {
      title: currentProject.title,
      description: currentProject.description,
      images: currentProject.coverImage
        ? [urlFor(currentProject.coverImage).width(1200).url()]
        : [],
    },
  }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  
  // Fetch from CMS
  const project = await sanityFetch(projectBySlugQuery, { slug }, ['project'])
  // Fallback to mock data for dev/build
  const fallback = mockProjects.find((p) => p.slug.current === slug)
  
  const currentProject = project || fallback

  if (!currentProject) {
    notFound()
  }

  const coverUrl = currentProject.coverImage
    ? urlFor(currentProject.coverImage)?.width(1200).height(675).quality(90).url()
    : null

  return (
    <article className="py-20 min-h-screen">
      <Container size="narrow">
        {/* Back Link */}
        <AnimatedSection className="mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            back_to_projects
          </Link>
        </AnimatedSection>

        {/* Title & Metadata */}
        <AnimatedSection className="space-y-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {currentProject.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
            {currentProject.publishedAt && (
              <span className="text-xs text-neutral-500 font-mono">
                published_at: {formatDate(currentProject.publishedAt, { year: 'numeric', month: 'short' })}
              </span>
            )}
            
            {/* Tech badges */}
            {currentProject.techStack && (
              <div className="flex flex-wrap gap-1.5">
                {currentProject.techStack.map((tech) => (
                  <Badge key={tech.name} label={tech.name} />
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Cover Image */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-glow bg-neutral-900">
            {coverUrl ? (
              <Image
                src={coverUrl}
                alt={currentProject.coverImage?.alt || currentProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                <span className="text-4xl font-mono text-white/20">&lt;/&gt;</span>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Action Links */}
        <AnimatedSection delay={0.15} className="flex gap-4 mb-10 pb-8 border-b border-white/[0.06]">
          {currentProject.liveUrl && (
            <Button href={currentProject.liveUrl} external size="md">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </Button>
          )}
          {currentProject.repoUrl && (
            <Button href={currentProject.repoUrl} external variant="secondary" size="md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </Button>
          )}
        </AnimatedSection>

        {/* Project Description Block */}
        {currentProject.body && (
          <AnimatedSection delay={0.2} className="prose prose-invert max-w-none text-neutral-300 mb-12">
            <PortableText value={currentProject.body} />
          </AnimatedSection>
        )}

        {/* Extra Gallery Screenshots */}
        {currentProject.gallery && currentProject.gallery.length > 0 && (
          <AnimatedSection delay={0.25} className="mt-12">
            <ProjectGallery images={currentProject.gallery} />
          </AnimatedSection>
        )}
      </Container>
    </article>
  )
}
