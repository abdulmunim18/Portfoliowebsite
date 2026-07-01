import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

/**
 * Generate optimized image URL from Sanity image reference
 * @param {object} source - Sanity image object
 * @returns {object} Image URL builder with chainable methods (.width(), .height(), .url())
 */
export function urlFor(source) {
  if (!source) return null
  return builder.image(source)
}
