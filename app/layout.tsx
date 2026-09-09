import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { inter, jetbrainsMono } from '@/lib/fonts'
import { siteConfig } from '@/data/personal'
import { SiteHeader } from '@/components/v2/SiteHeader'
import { SiteFooter } from '@/components/v2/SiteFooter'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: '%s - Abdul Munim' },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  authors: [{ name: 'Abdul Munim' }],
  openGraph: { type: 'website', title: siteConfig.title, description: siteConfig.description, url: siteConfig.url, siteName: 'Abdul Munim' },
  twitter: { card: 'summary_large_image', title: siteConfig.title, description: siteConfig.description },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    '@context': 'https://schema.org', '@type': 'Person', name: 'Abdul Munim', url: siteConfig.url,
    jobTitle: 'Full-Stack Developer',
    sameAs: ['https://github.com/abdulmunim18', 'https://linkedin.com/in/abdul-munim-4944a9387'],
  }

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  )
}
