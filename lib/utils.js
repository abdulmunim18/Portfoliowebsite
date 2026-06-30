import clsx from 'clsx'

/**
 * Merge class names conditionally (wrapper around clsx)
 */
export function cn(...inputs) {
  return clsx(inputs)
}

/**
 * Format a date string to a human-readable format
 * @param {string} dateString - ISO date string
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(dateString, options = {}) {
  if (!dateString) return ''
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }
  return new Date(dateString).toLocaleDateString('en-US', defaultOptions)
}

/**
 * Format a date range (e.g., "Jan 2023 — Present")
 */
export function formatDateRange(startDate, endDate) {
  const opts = { year: 'numeric', month: 'short' }
  const start = formatDate(startDate, opts)
  const end = endDate ? formatDate(endDate, opts) : 'Present'
  return `${start} — ${end}`
}

/**
 * Calculate estimated reading time from text content
 * @param {string} text - Plain text content
 * @param {number} wpm - Words per minute (default 200)
 * @returns {number} Estimated reading time in minutes
 */
export function calculateReadingTime(text, wpm = 200) {
  if (!text) return 1
  const wordCount = text.trim().split(/\s+/).length
  const time = Math.ceil(wordCount / wpm)
  return Math.max(1, time)
}

/**
 * Extract plain text from Portable Text blocks for reading time calculation
 * @param {Array} blocks - Portable Text block array
 * @returns {string} Plain text string
 */
export function portableTextToPlainText(blocks = []) {
  return blocks
    .filter((block) => block._type === 'block')
    .map((block) => {
      return block.children
        ?.filter((child) => child._type === 'span')
        .map((span) => span.text)
        .join('')
    })
    .join('\n\n')
}

/**
 * Truncate text to a maximum length with ellipsis
 */
export function truncateText(text, maxLength = 150) {
  if (!text || text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

/**
 * Generate a simple slug from a string
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Simple rate limiter for API routes
 * Stores request counts in memory (resets on redeploy, which is fine for a personal site)
 */
const rateLimitMap = new Map()

export function rateLimit(ip, limit = 5, windowMs = 60000) {
  const now = Date.now()
  const windowStart = now - windowMs

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [])
  }

  const requests = rateLimitMap.get(ip).filter((time) => time > windowStart)
  rateLimitMap.set(ip, requests)

  if (requests.length >= limit) {
    return false
  }

  requests.push(now)
  return true
}
