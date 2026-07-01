import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'
import { PortableText } from '@/lib/sanity/portable-text'
import { sanityFetch } from '@/lib/sanity/client'
import { postBySlugQuery, postSlugsQuery } from '@/lib/sanity/queries'
import { mockPosts } from '@/lib/mockData'
import { urlFor } from '@/lib/sanity/image'
import { formatDate } from '@/lib/utils'

export const revalidate = 60

export async function generateStaticParams() {
  const paths = await sanityFetch(postSlugsQuery, {}, ['post'])
  if (!paths || paths.length === 0) {
    return mockPosts.map((p) => ({ slug: p.slug.current }))
  }
  return paths.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await sanityFetch(postBySlugQuery, { slug }, ['post'])
  const fallback = mockPosts.find((p) => p.slug.current === slug)
  
  const currentPost = post || fallback

  if (!currentPost) {
    return { title: 'Post Not Found' }
  }

  return {
    title: currentPost.title,
    description: currentPost.excerpt || 'Read this post on my blog',
    openGraph: {
      title: currentPost.title,
      description: currentPost.excerpt,
      images: currentPost.coverImage
        ? [urlFor(currentPost.coverImage).width(1200).url()]
        : [],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  
  const post = await sanityFetch(postBySlugQuery, { slug }, ['post'])
  const fallback = mockPosts.find((p) => p.slug.current === slug)
  
  const currentPost = post || fallback

  if (!currentPost) {
    notFound()
  }

  const coverUrl = currentPost.coverImage
    ? urlFor(currentPost.coverImage)?.width(1000).height(500).quality(90).url()
    : null

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: currentPost.title,
    description: currentPost.excerpt,
    image: coverUrl,
    datePublished: currentPost.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Abdul Munim',
      url: 'https://abdulmunim.dev',
    },
  }

  return (
    <article className="py-20 min-h-screen">
      {/* Insert JSON-LD Script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container size="narrow">
        {/* Back Link */}
        <AnimatedSection className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            back_to_blog
          </Link>
        </AnimatedSection>

        {/* Header info */}
        <AnimatedSection className="space-y-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {currentPost.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-500">
            <div className="flex items-center gap-4">
              <time dateTime={currentPost.publishedAt}>
                {formatDate(currentPost.publishedAt, { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span>·</span>
              <span>{currentPost.readingTime || 5} min read</span>
            </div>

            {currentPost.tags && (
              <div className="flex flex-wrap gap-1.5">
                {currentPost.tags.map((tag) => (
                  <Badge key={tag} label={tag} variant="secondary" />
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Cover Image */}
        {coverUrl && (
          <AnimatedSection delay={0.1} className="mb-10">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden border border-white/10 shadow-glow bg-neutral-900">
              <Image
                src={coverUrl}
                alt={currentPost.coverImage?.alt || currentPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          </AnimatedSection>
        )}

        {/* Body (PortableText) */}
        <AnimatedSection delay={0.15} className="prose prose-invert max-w-none text-neutral-300">
          <PortableText value={currentPost.body} />
        </AnimatedSection>
      </Container>
    </article>
  )
}
