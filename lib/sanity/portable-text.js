'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PortableText as PortableTextComponent } from '@portabletext/react'
import { urlFor } from './image'
import CodeBlock from '@/components/blog/CodeBlock'

/**
 * Custom serializers for Portable Text rendering
 * Maps Sanity block types to React components
 */
const components = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value)
      if (!imageUrl) return null
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
            <Image
              src={imageUrl.width(1200).quality(90).url()}
              alt={value.alt || 'Blog image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-neutral-400">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    code: ({ value }) => {
      return <CodeBlock code={value.code} language={value.language} filename={value.filename} />
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-12 mb-4 text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-8 mb-3 text-white">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mt-6 mb-2 text-white">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-neutral-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-500 pl-4 my-6 italic text-neutral-400">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-neutral-800 text-cyan-400 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || ''
      const isExternal = href.startsWith('http')
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors"
          >
            {children}
          </a>
        )
      }
      return (
        <Link
          href={href}
          className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors"
        >
          {children}
        </Link>
      )
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-neutral-300 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-neutral-300 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
}

export function PortableText({ value }) {
  if (!value) return null
  return <PortableTextComponent value={value} components={components} />
}
