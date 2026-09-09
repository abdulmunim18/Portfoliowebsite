'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const builder = urlFor(value)
      if (!builder) return null
      return (
        <figure>
          <Image src={builder.width(1200).quality(88).url()} alt={value.alt || 'Article image'} width={1200} height={675} sizes="(max-width: 900px) 100vw, 820px" />
          {value.caption ? <figcaption>{value.caption}</figcaption> : null}
        </figure>
      )
    },
    code: ({ value }) => (
      <div className="code-block">
        {value.filename ? <p>{value.filename}</p> : null}
        <pre><code>{value.code}</code></pre>
      </div>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#'
      return href.startsWith('http') ? <a href={href} target="_blank" rel="noreferrer">{children}</a> : <Link href={href}>{children}</Link>
    },
  },
}

export function PortableContent({ value }: { value?: PortableTextBlock[] }) {
  if (!value?.length) return null
  return <div className="portable-content"><PortableText value={value} components={components} /></div>
}
