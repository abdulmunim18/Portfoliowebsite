import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownToLine, ArrowRight, CircleUserRound, ExternalLink, GitBranch, Mail } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import { ProjectStack } from '@/components/projects/ProjectStack'
import { Container } from '@/components/v2/Container'
import { LottieIllustration } from '@/components/v2/LottieIllustration'
import { PortfolioMotion } from '@/components/v2/PortfolioMotion'
import { formatCmsDate, type CmsArticle } from '@/data/cms'
import { experience } from '@/data/experience'
import { personal } from '@/data/personal'
import { projects } from '@/data/projects'
import { SkillsMarquee } from '@/components/skills/SkillsMarquee'
import { sanityFetch } from '@/lib/sanity/client'
import { allArticlesQuery } from '@/lib/sanity/queries'

export const revalidate = 60

const codeSkills = ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'n8n', 'Sanity']

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="neon-section-label"><span>{children}</span></div>
}

function WorkspaceIcon() {
  return <span className="workspace-icon" aria-hidden="true"><i /><b /></span>
}

export default async function HomePage() {
  const articles = ((await sanityFetch(allArticlesQuery, {}, ['article', 'post'])) || []) as CmsArticle[]

  return <div className="reference-home"><PortfolioMotion />
    <section className="reference-hero"><Container className="reference-hero-grid">
      <div className="reference-hero-copy">
        <p className="hero-greeting">Hello,</p>
        <h1>This is <span className="pink-text">ABDUL MUNIM</span>, I&apos;m a Professional <span className="green-text">Software Developer.</span></h1>
        <div className="hero-socials" aria-label="Social links">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><CircleUserRound /></a>
          <a href={`mailto:${personal.email}`} aria-label="Email"><Mail /></a>
        </div>
        <div className="reference-actions">
          <a className="neon-button neon-button-outline" href="#contact">Contact me <Mail size={17} /></a>
          <a className="neon-button neon-button-filled" href={personal.resume} target="_blank">Get resume <ArrowDownToLine size={17} /></a>
        </div>
      </div>
      <div className="code-window pointer-glow" aria-label="Developer profile shown as code">
        <div className="window-bar"><i /><i /><i /></div>
        <pre><code><span className="code-pink">const</span> coder = {'{'}{`\n`}  name: <span className="code-yellow">&apos;Abdul Munim&apos;</span>,{`\n`}  skills: [<span className="code-yellow">{codeSkills.map((skill) => `'${skill}'`).join(', ')}</span>],{`\n`}  hardWorker: <span className="code-orange">true</span>,{`\n`}  quickLearner: <span className="code-orange">true</span>,{`\n`}  problemSolver: <span className="code-orange">true</span>,{`\n`}  hireable: <span className="code-green">function</span>() {'{'}{`\n`}    <span className="code-pink">return</span> ({`\n`}      <span className="code-blue">this</span>.hardWorker &amp;&amp;{`\n`}      <span className="code-blue">this</span>.problemSolver &amp;&amp;{`\n`}      <span className="code-blue">this</span>.skills.length &gt;= 5{`\n`}    );{`\n`}  {'}'}{`\n`}{'}'};</code></pre>
      </div>
    </Container></section>

    <section id="about" className="reference-section"><Container>
      <SectionLabel>About me</SectionLabel>
      <div className="side-section-tag">About me</div><div className="about-grid reveal-on-scroll">
        <div className="about-copy"><p className="neon-kicker">Who I am?</p><h2>I turn ideas into useful digital products.</h2><p>My name is Abdul Munim. I am a full-stack developer and AI automation builder with a strong interest in practical, production-ready software.</p><p>I build responsive interfaces, secure APIs, database-backed applications, and connected AI workflows. I am a quick learner who enjoys solving real problems and improving every project through thoughtful engineering.</p><p>I am currently completing my BS Computer Science at Air University and I am open to opportunities that match my skills and interests.</p></div>
        <div className="about-portrait"><div className="portrait-glow" /><Image src="/profile-pic.jpeg" alt="Abdul Munim" fill sizes="(max-width: 800px) 80vw, 360px" /></div>
      </div>
    </Container></section>

    <section id="experience" className="reference-section timeline-section"><Container>
      <SectionLabel>Experiences</SectionLabel>
      <div className="timeline-layout reveal-on-scroll">
        <div className="section-illustration"><LottieIllustration type="experience" /></div>
        <div className="timeline-list">
          <article className="timeline-card pointer-glow"><p>{experience.period}</p><div className="timeline-card-row"><WorkspaceIcon /><div><h3>{experience.role}</h3><span>{experience.company}</span></div></div></article>
          <article className="timeline-card pointer-glow"><p>2024 - Present</p><div className="timeline-card-row"><WorkspaceIcon /><div><h3>FULL-STACK DEVELOPER</h3><span>Personal &amp; academic projects</span></div></div></article>
          <article className="timeline-card pointer-glow"><p>2023 - Present</p><div className="timeline-card-row"><WorkspaceIcon /><div><h3>CONTINUOUS LEARNER</h3><span>Building and learning every day</span></div></div></article>
        </div>
      </div>
    </Container></section>

    <section id="skills" className="reference-skills-section"><Container><SkillsMarquee /></Container></section>

    <section id="projects" className="reference-projects-section"><Container><ProjectStack projects={projects} /></Container></section>

    <section id="education" className="reference-section timeline-section education-section"><Container>
      <SectionLabel>Education</SectionLabel>
      <div className="timeline-layout reveal-on-scroll">
        <div className="section-illustration education-art"><LottieIllustration type="education" /></div>
        <div className="timeline-list">
          <article className="timeline-card pointer-glow"><p>2023 - 2027</p><div className="timeline-card-row"><WorkspaceIcon /><div><h3>BS COMPUTER SCIENCE</h3><span>Air University, Islamabad</span></div></div></article>
          <article className="timeline-card pointer-glow"><p>Current CGPA</p><div className="timeline-card-row"><WorkspaceIcon /><div><h3>3.0 / 4.00</h3><span>Software Engineering, DSA, Web &amp; AI</span></div></div></article>
          <article className="timeline-card pointer-glow"><p>Learning focus</p><div className="timeline-card-row"><WorkspaceIcon /><div><h3>PRODUCTION ENGINEERING</h3><span>Full-stack systems and AI automation</span></div></div></article>
        </div>
      </div>
    </Container></section>

    <section id="blogs" className="reference-section blogs-section"><Container>
      <SectionLabel>Blogs</SectionLabel>
      {articles.length ? <div className="blog-grid reveal-on-scroll">{articles.slice(0, 3).map((article) => <article className="neon-blog-card pointer-glow" key={article._id}><time>{formatCmsDate(article.publishedAt)}</time><h3>{article.title}</h3><p>{article.excerpt || 'A practical technical note from my development journey.'}</p><Link href={`/writing/${article.slug.current}`}>Read article <ArrowRight size={16} /></Link></article>)}</div> : <div className="empty-neon-card"><p>New technical articles will appear here when published from Sanity Studio.</p></div>}
      <Link className="view-more-button" href="/writing">View more <ArrowRight size={16} /></Link>
    </Container></section>

    <section id="contact" className="reference-section contact-section"><Container>
      <SectionLabel>Contact</SectionLabel>
      <div className="side-section-tag">Contact</div><div className="reference-contact-grid reveal-on-scroll">
        <div className="contact-intro"><p className="neon-kicker">Contact with me</p><h2>Have a question or an opportunity?</h2><p>I am open to internships, developer roles, freelance projects, and collaborations that align with my skills.</p><a href={`mailto:${personal.email}`}><Mail size={19} /> {personal.email}</a><a href={personal.github} target="_blank" rel="noreferrer"><GitBranch size={19} /> GitHub <ExternalLink size={14} /></a><a href={personal.linkedin} target="_blank" rel="noreferrer"><CircleUserRound size={19} /> LinkedIn <ExternalLink size={14} /></a></div>
        <div className="neon-form-shell"><ContactForm /></div>
      </div>
    </Container></section>
  </div>
}
