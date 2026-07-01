import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'
import PrintButton from '@/components/ui/PrintButton'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline'
import { sanityFetch } from '@/lib/sanity/client'
import { allExperienceQuery, siteSettingsQuery } from '@/lib/sanity/queries'
import { mockExperiences, mockSettings } from '@/lib/mockData'

export const revalidate = 3600 // Cache for 1 hour

export const metadata = {
  title: 'Experience',
  description: 'View the professional work history and technical achievements of Abdul Munim.',
}

export default async function ExperiencePage() {
  const experiencesData = await sanityFetch(allExperienceQuery, {}, ['experience'])
  const settingsData = await sanityFetch(siteSettingsQuery, {}, ['settings'])

  const experiences = experiencesData && experiencesData.length > 0 ? experiencesData : mockExperiences
  const settings = settingsData || mockSettings

  return (
    <div className="py-20 min-h-screen">
      <Container size="narrow">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Work <GradientText>Experience</GradientText>
            </h1>
            <p className="text-sm font-mono text-neutral-500">
             
            </p>
          </div>

          <div className="flex gap-3">
            {settings.resumeFile?.asset?.url ? (
              <Button href={settings.resumeFile.asset.url} external size="md">
                Download PDF
              </Button>
            ) : (
              <Button href="/Abdul_Munim_Bscs.pdf" external size="md">
                Download PDF
              </Button>
            )}
            <PrintButton />
          </div>
        </AnimatedSection>


        {/* Timeline wrapper */}
        <ExperienceTimeline experiences={experiences} />
      </Container>
    </div>
  )
}
