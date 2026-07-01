'use client'

import { cn } from '@/lib/utils'

/**
 * Filter controls for filtering projects by tag/technology.
 */
export default function ProjectFilter({ tags, activeTag, onTagChange }) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/[0.06]">
      <button
        onClick={() => onTagChange('all')}
        className={cn(
          'px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border',
          activeTag === 'all'
            ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-sm shadow-cyan-500/10'
            : 'bg-transparent text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
        )}
      >
        all_projects
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={cn(
            'px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border',
            activeTag === tag
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-sm shadow-cyan-500/10'
              : 'bg-transparent text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
          )}
        >
          {tag.toLowerCase().replace(/\s+/g, '_')}
        </button>
      ))}
    </div>
  )
}
