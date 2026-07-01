'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '@/lib/sanity/image'
import Link from 'next/link'

export default function PromptLibraryClient({ initialPrompts = [] }) {
  const [prompts, setPrompts] = useState(initialPrompts)
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedId, setCopiedId] = useState(null)

  useEffect(() => {
    setPrompts(initialPrompts)
    setMounted(true)
  }, [initialPrompts])

  // Handle copy text action
  function handleCopy(id, text) {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  /* ── Derived data ── */
  const usedCategories = ['All', ...new Set(prompts.map((p) => p.category))]

  const filtered = prompts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.prompt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  // Format date helper
  function formatDate(dateStr) {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  // Resolve Sanity Image URL
  function getImageUrl(imageSource) {
    if (!imageSource) return null
    if (typeof imageSource === 'string') return imageSource // local mock paths/base64
    try {
      return urlFor(imageSource)?.width(800).quality(90).url()
    } catch {
      return null
    }
  }

  if (!mounted) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* ─── Studio Information Banner ─── */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 gap-4">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">CMS Sync Active</h4>
            <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
              This library is sync&apos;d with Sanity. To add, edit, or delete prompts, visit Sanity Studio.
            </p>
          </div>
        </div>
        <Link
          href="/studio"
          className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 rounded-lg text-xs font-medium text-neutral-300 transition-all whitespace-nowrap"
        >
          Open Studio
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>

      {/* ─── Toolbar ─── */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
          />
        </div>
      </div>

      {/* ─── Category Tabs ─── */}
      <div className="flex flex-wrap gap-2">
        {usedCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
            {cat !== 'All' && (
              <span className="ml-1.5 text-[10px] opacity-60">
                ({prompts.filter((p) => p.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ─── Prompt Cards ─── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-neutral-500">
          <svg className="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <p className="text-sm">No prompts found matching selection.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          <AnimatePresence>
            {filtered.map((item) => {
              const itemId = item._id || item.id
              const imageUrl = getImageUrl(item.outputImage)
              const hasOutput = item.outputType && item.outputType !== 'none'

              return (
                <motion.div
                  key={itemId}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/15 transition-all overflow-hidden"
                >
                  {/* Card header */}
                  <div
                    className="flex items-start gap-4 p-5 cursor-pointer"
                    onClick={() => setExpandedId(expandedId === itemId ? null : itemId)}
                  >
                    {/* Category badge */}
                    <span className="flex-shrink-0 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {item.category}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm truncate">{item.title}</h3>
                      <p className="text-neutral-500 text-xs mt-1 line-clamp-1 font-mono">{item.prompt}</p>
                    </div>

                    {/* Output indicator */}
                    {hasOutput && (
                      <span
                        className={`flex-shrink-0 px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full border ${
                          item.outputType === 'text'
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : 'bg-violet-500/10 text-violet-400 border-violet-500/20'
                        }`}
                      >
                        {item.outputType === 'text' ? 'Text' : 'Image'}
                      </span>
                    )}

                    {/* Expand icon */}
                    <svg
                      className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${
                        expandedId === itemId ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedId === itemId && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 space-y-4 border-t border-white/[0.06] pt-4">
                          {/* Full prompt */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] uppercase tracking-wider text-neutral-500">Prompt</span>
                              <button
                                onClick={() => handleCopy(itemId, item.prompt)}
                                className="flex items-center gap-1 text-[10px] text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                              >
                                {copiedId === itemId ? 'Copied!' : 'Copy Prompt'}
                              </button>
                            </div>
                            <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06] font-mono text-sm text-neutral-300 whitespace-pre-wrap leading-relaxed">
                              {item.prompt}
                            </div>
                          </div>

                          {/* Output preview (Text) */}
                          {item.outputType === 'text' && item.outputText && (
                            <div>
                              <span className="text-[10px] uppercase tracking-wider text-green-500 mb-1.5 block">
                                Output (Text)
                              </span>
                              <div className="p-4 rounded-xl bg-green-500/[0.02] border border-green-500/10 font-mono text-sm text-neutral-300 whitespace-pre-wrap leading-relaxed">
                                {item.outputText}
                              </div>
                            </div>
                          )}

                          {/* Output preview (Image) */}
                          {item.outputType === 'image' && imageUrl && (
                            <div>
                              <span className="text-[10px] uppercase tracking-wider text-violet-500 mb-1.5 block">
                                Output (Image)
                              </span>
                              <div className="rounded-xl overflow-hidden border border-violet-500/10 max-w-lg relative bg-neutral-900 aspect-video md:aspect-auto">
                                <img
                                  src={imageUrl}
                                  alt={`${item.title} output`}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            </div>
                          )}

                          {/* Date stamp */}
                          {item.publishedAt && (
                            <div className="text-[10px] text-neutral-600 pt-2">
                              Published on {formatDate(item.publishedAt)}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      )}

      {/* ─── Stats Footer ─── */}
      {prompts.length > 0 && (
        <div className="text-center text-xs text-neutral-600 pt-4">
          {prompts.length} prompt{prompts.length !== 1 ? 's' : ''} sync&apos;d from Sanity · {new Set(prompts.map(p => p.category)).size} categories
        </div>
      )}
    </div>
  )
}
