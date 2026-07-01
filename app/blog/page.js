import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import BlogCard from '@/components/blog/BlogCard'
import { sanityFetch } from '@/lib/sanity/client'
import { allPostsQuery } from '@/lib/sanity/queries'
import { mockPosts } from '@/lib/mockData'

export const revalidate = 60 // ISR cache 60s

export const metadata = {
  title: 'Blog',
  description: 'Technical writeups on modern frontend systems, headless APIs, and software engineering practices.',
}

export default async function BlogPage() {
  const postsData = await sanityFetch(allPostsQuery, {}, ['post'])
  const posts = postsData && postsData.length > 0 ? postsData : mockPosts

  return (
    <div className="py-20 min-h-screen">
      <Container>
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Technical <GradientText>Blog</GradientText>
          </h1>
          <p className="text-sm font-mono text-neutral-500">
            
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimatedSection key={post._id} delay={index * 0.05}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  )
}
