import Container from '@/components/ui/Container'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import ContactForm from '@/components/contact/ContactForm'
import { siteConfig } from '@/lib/constants'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Abdul Munim for collaboration inquiries, contract opportunities, or feedback.',
}

export default function ContactPage() {
  return (
    <div className="py-20 min-h-screen">
      <Container size="narrow">
        <AnimatedSection className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Get in <GradientText>Touch</GradientText>
          </h1>
          <p className="text-sm font-mono text-neutral-500">
            Kindly send us message we will back within 24 hours
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Info Column */}
          <AnimatedSection delay={0.1} className="md:col-span-1 space-y-6">
            <div>
              <h3 className="text-xs font-mono text-neutral-500 uppercase mb-2">
                direct_email
              </h3>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {siteConfig.links.email}
              </a>
            </div>

            <div>
              <h3 className="text-xs font-mono text-neutral-500 uppercase mb-2">
                social_channels
              </h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    Twitter / X ↗
                  </a>
                </li>
              </ul>
            </div>
            
            <p className="text-xs text-neutral-500 leading-relaxed">
              If you have an interesting project or a job opening that matches my skills, feel free to fill out the form or write me an email. I will try to reply within 24 hours.
            </p>
          </AnimatedSection>

          {/* Form Column */}
          <AnimatedSection delay={0.2} className="md:col-span-2">
            <ContactForm />
          </AnimatedSection>
        </div>
      </Container>
    </div>
  )
}
