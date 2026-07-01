import Image from 'next/image'
import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'
import { PortableText } from '@/lib/sanity/portable-text'
import { sanityFetch } from '@/lib/sanity/client'
import { siteSettingsQuery } from '@/lib/sanity/queries'
import { mockSettings } from '@/lib/mockData'
import { urlFor } from '@/lib/sanity/image'

export const revalidate = 3600 // Cache for 1 hour

export const metadata = {
  title: 'About',
  description: 'Learn more about Abdul Munim, his programming philosophy, and experience.',
}

export default async function AboutPage() {
  const settingsData = await sanityFetch(siteSettingsQuery, {}, ['settings'])
  const settings = settingsData || mockSettings

  const profileImageUrl = settings.profileImage
    ? urlFor(settings.profileImage)?.width(500).height(200).quality(90).url()
    : '/profile-pic.jpeg' // Local fallback if available

  return (
    <div className="py-20 min-h-screen">
      <Container size="narrow">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-white mb-4">
            About <GradientText>Me</GradientText>
          </h1>
          <p className="text-sm font-mono text-neutral-500 mb-12">
           
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Profile photo container */}
          <AnimatedSection delay={0.1} className="md:col-span-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-glow bg-neutral-900 group">
              <Image
                src={profileImageUrl}
                alt={settings.profileImage?.alt || settings.heroTitle || 'Abdul Munim'}
                fill
                className="object-cover object-[50%_5%] transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Bio text container */}
          <AnimatedSection delay={0.2} className="md:col-span-2 space-y-6">
            <div className="prose prose-invert max-w-none text-neutral-300">
              <PortableText value={settings.bio} />
            </div>

            {/* Resume Call-to-action */}
            <div className="pt-6 flex flex-wrap gap-4">
              {settings.resumeFile?.asset?.url ? (
                <Button href={settings.resumeFile.asset.url} external size="md">
                  Download Resume (PDF)
                </Button>
              ) : (
                <Button href="/Abdul_Munim_Bscs.pdf" external size="md">
                  Download Resume (PDF)
                </Button>
              )}
              <Button href="/contact" variant="secondary" size="md">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  )
}
