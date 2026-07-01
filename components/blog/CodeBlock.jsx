'use client'

import { useState } from 'react'

/**
 * Syntax-highlighted code block with file label and copy-to-clipboard button.
 */
export default function CodeBlock({ code, language, filename }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative my-6 rounded-xl border border-white/[0.08] bg-neutral-900/50 backdrop-blur-sm overflow-hidden font-mono text-sm leading-relaxed shadow-glow">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] bg-neutral-950/40">
        <div className="flex items-center gap-2">
          {/* Mock window buttons */}
          <div className="flex gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          {filename && (
            <span className="text-xs text-neutral-400 font-mono select-none">
              {filename}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {language && (
            <span className="text-xs text-neutral-500 font-mono select-none uppercase">
              {language}
            </span>
          )}
          
          <button
            onClick={copyToClipboard}
            className="p-1 rounded hover:bg-white/5 text-neutral-500 hover:text-neutral-300 transition-all active:scale-95"
            aria-label="Copy code block"
          >
            {copied ? (
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="overflow-x-auto p-4 select-text">
        <pre className="text-neutral-300">
          <code className={`language-${language || 'text'}`}>{code}</code>
        </pre>
      </div>
    </div>
  )
}
