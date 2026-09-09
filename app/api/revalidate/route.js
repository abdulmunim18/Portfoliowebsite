import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

/**
 * On-demand revalidation API route.
 * Triggered by Sanity webhooks to invalidate ISR cache for specific documents on-publish.
 */
export async function POST(req) {
  try {
    const { searchParams } = new URL(req.url)
    const secret = searchParams.get('secret')

    // Verify secret token matches config
    if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    const body = await req.json()
    const type = body?._type

    if (!type) {
      return NextResponse.json({ message: 'Type is required' }, { status: 400 })
    }

    // Map Sanity schema types to cache tags used in sanityFetch
    const tagMap = {
      project: 'project',
      post: 'post',
      skill: 'skill',
      experience: 'experience',
      siteSettings: 'settings',
      worklog: 'worklog',
      article: 'article',
    }

    const tagToRevalidate = tagMap[type]

    if (tagToRevalidate) {
      console.log(`Revalidating ISR cache tag: ${tagToRevalidate}`)
      revalidateTag(tagToRevalidate)
      return NextResponse.json({ revalidated: true, tag: tagToRevalidate })
    }

    return NextResponse.json({ revalidated: false, message: 'Type not mapped' })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
