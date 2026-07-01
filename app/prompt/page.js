import Container from '@/components/ui/Container'
import GradientText from '@/components/ui/GradientText'
import PromptLibraryClient from '@/components/prompt/PromptLibraryClient'
import { sanityFetch } from '@/lib/sanity/client'
import { allPromptsQuery } from '@/lib/sanity/queries'
import { mockPrompts } from '@/lib/mockData'

export const revalidate = 60 // Revalidate prompts page every 60s

export const metadata = {
  title: 'Prompt Library',
  description: 'A personal prompt library to save, organize, and review AI prompts with optional output previews.',
}

export default async function PromptLibraryPage() {
  const promptsData = await sanityFetch(allPromptsQuery, {}, ['prompt'])
  const prompts = promptsData && promptsData.length > 0 ? promptsData : mockPrompts

  return (
    <div className="py-20 min-h-screen">
      <Container>
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            <GradientText>Prompt Library</GradientText>
          </h1>
          <p className="text-sm font-mono text-neutral-500">
            prompts — save, categorize &amp; preview your AI prompts
          </p>
        </div>

        <PromptLibraryClient initialPrompts={prompts} />
      </Container>
    </div>
  )
}
