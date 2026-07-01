import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { urlFor } from '@/lib/sanity/image'
import { formatDate } from '@/lib/utils'

/**
 * Project card component with cover image, tech badges, and action links.
 * Used in project listings and featured projects grid.
 */
export default function ProjectCard({ project }) {
  const imageUrl = project.coverImage
    ? urlFor(project.coverImage)?.width(800).height(450).quality(85).url()
    : null

  return (
    <Card className="h-full flex flex-col">
      {/* Cover image */}
      <Link href={`/projects/${project.slug?.current}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={project.coverImage?.alt || project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
              <span className="text-4xl font-mono text-white/20">&lt;/&gt;</span>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <Link href={`/projects/${project.slug?.current}`}>
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
            {project.title}
          </h3>
        </Link>

        <p className="text-sm text-neutral-400 mb-4 flex-1 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech.name} label={tech.name} />
            ))}
            {project.techStack.length > 5 && (
              <Badge label={`+${project.techStack.length - 5}`} variant="ghost" />
            )}
          </div>
        )}

        {/* Action links */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Source Code
            </a>
          )}
          <Link
            href={`/projects/${project.slug?.current}`}
            className="ml-auto text-xs text-neutral-500 hover:text-white transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </Card>
  )
}
