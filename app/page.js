import { sanityFetch } from '@/lib/sanity/client'
import {
  siteSettingsQuery,
  featuredProjectsQuery,
  allSkillsQuery,
  latestPostsQuery,
} from '@/lib/sanity/queries'
import {
  mockSettings,
  mockProjects,
  mockSkills,
  mockPosts,
} from '@/lib/mockData'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import SkillsGrid from '@/components/sections/SkillsGrid'
import LatestPosts from '@/components/sections/LatestPosts'

// Set page revalidation to 60s (ISR)
export const revalidate = 60

export default async function HomePage() {
  // Fetch CMS data with fallback to mock data on error/empty
  const settingsData = await sanityFetch(siteSettingsQuery, {}, ['settings'])
  const projectsData = await sanityFetch(featuredProjectsQuery, {}, ['project'])
  const skillsData = await sanityFetch(allSkillsQuery, {}, ['skill'])
  const postsData = await sanityFetch(latestPostsQuery, {}, ['post'])

  const settings = settingsData || mockSettings
  const projects = projectsData && projectsData.length > 0 ? projectsData : mockProjects.slice(0, 2)
  const skills = skillsData && skillsData.length > 0 ? skillsData : mockSkills
  const posts = postsData && postsData.length > 0 ? postsData : mockPosts

  return (
    <div className="flex flex-col min-h-screen">
      <Hero settings={settings} />
      <FeaturedProjects projects={projects} />
      <SkillsGrid skills={skills} />
      <LatestPosts posts={posts} />
    </div>
  )
}
