import AnimatedSection from '@/components/ui/AnimatedSection'
import Container from '@/components/ui/Container'
import GradientText from '@/components/ui/GradientText'
import BlogCard from '@/components/blog/BlogCard'
import Button from '@/components/ui/Button'

/**
 * Latest blog posts section for the homepage.
 * Displays the 3 most recent blog posts.
 */
export default function LatestPosts({ posts }) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="py-24" aria-label="Latest Blog Posts">
      <Container>
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-mono text-cyan-400 mb-2 uppercase tracking-widest">
                Blog
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Latest <GradientText>Posts</GradientText>
              </h2>
            </div>
            <Button href="/blog" variant="ghost" className="hidden sm:inline-flex">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimatedSection key={post._id} delay={index * 0.1}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 text-center sm:hidden">
          <Button href="/blog" variant="secondary">
            View All Posts
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  )
}
