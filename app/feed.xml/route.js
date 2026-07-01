import { sanityFetch } from '@/lib/sanity/client'
import { allPostsQuery } from '@/lib/sanity/queries'
import { mockPosts } from '@/lib/mockData'
import { siteConfig } from '@/lib/constants'

export const revalidate = 3600 // Cache for 1 hour

/**
 * Generates an RSS XML feed for blog posts.
 */
export async function GET() {
  const postsData = await sanityFetch(allPostsQuery, {}, ['post'])
  const posts = postsData && postsData.length > 0 ? postsData : mockPosts

  const feedItemsXml = posts
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug.current}`
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${url}</link>
          <guid isPermaLink="true">${url}</guid>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <description><![CDATA[${post.excerpt}]]></description>
        </item>
      `
    })
    .join('')

  const feedXml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${siteConfig.title}</title>
        <link>${siteConfig.url}</link>
        <description>${siteConfig.description}</description>
        <language>en-us</language>
        <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
        ${feedItemsXml}
      </channel>
    </rss>
  `

  return new Response(feedXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
    },
  })
}
