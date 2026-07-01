import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { urlFor } from '@/lib/sanity/image'
import { formatDate } from '@/lib/utils'

/**
 * Blog post preview card.
 * Shows title, excerpt, cover image, publish date, tags, and reading time estimate.
 */
export default function BlogCard({ post }) {
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage)?.width(600).height(400).quality(85).url()
    : null

  return (
    <Card className="h-full flex flex-col">
      {/* Cover image */}
      <Link href={`/blog/${post.slug?.current}`} className="block">
        <div className="relative aspect-[1.6] overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.coverImage?.alt || post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
              <span className="text-4xl font-mono text-white/20">🖋️</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Date and Reading Time */}
        <div className="flex items-center justify-between gap-4 mb-3 text-xs text-neutral-500 font-mono">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt, { month: 'short', day: 'numeric', year: 'numeric' })}
          </time>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readingTime || 5} min read
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug?.current}`} className="block">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-neutral-400 mb-4 flex-1 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} label={tag} variant="secondary" />
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
