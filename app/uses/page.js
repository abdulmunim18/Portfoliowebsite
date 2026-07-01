import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import Card from '@/components/ui/Card'
import { mockUses } from '@/lib/mockData'

export const revalidate = 3600 // Cache for 1 hour

export const metadata = {
  title: 'Uses',
  description: 'A list of developer tools, hardware workspace gear, editor themes, and software setups used by Abdul Munim.',
}

export default function UsesPage() {
  const usesData = mockUses

  return (
    <div className="py-20 min-h-screen">
      <Container size="narrow">
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            My <GradientText>Setup</GradientText> & Gear
          </h1>
          <p className="text-sm font-mono text-neutral-500">
            cat developer_tools_and_uses.txt
          </p>
        </AnimatedSection>

        <div className="space-y-10">
          {usesData.map((category, catIndex) => (
            <AnimatedSection key={category.category} delay={catIndex * 0.1}>
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
                {category.category.toLowerCase().replace(/\s+/g, '_')}
              </h2>
              
              <Card hover={false} className="p-6">
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-neutral-300 text-sm leading-relaxed"
                    >
                      <span className="text-cyan-500 font-mono select-none">
                        [{itemIndex + 1}]
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  )
}
