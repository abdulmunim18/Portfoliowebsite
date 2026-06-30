import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

/**
 * Fetch data from Sanity with error handling and optional caching tags
 * @param {string} query - GROQ query string
 * @param {object} params - Query parameters
 * @param {string[]} tags - Cache tags for revalidation
 * @returns {Promise<any>} Query result or fallback value
 */
export async function sanityFetch(query, params = {}, tags = []) {
  // During build without CMS credentials, return null gracefully
  if (!projectId) {
    console.warn('Sanity project ID not configured. Using fallback data.')
    return null
  }

  try {
    return await client.fetch(query, params, {
      next: {
        tags,
        revalidate: 60,
      },
    })
  } catch (error) {
    console.error('Sanity fetch error:', error.message)
    return null
  }
}
