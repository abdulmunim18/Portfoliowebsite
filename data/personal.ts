export const personal = {
  name: 'Abdul Munim',
  role: 'Full-Stack Developer & AI Automation Builder',
  statement:
    'I build practical web applications, secure APIs, and AI-powered workflows.',
  context:
    'Final-year Computer Science student at Air University, focused on full-stack engineering, automation, and reliable software products.',
  location: 'Islamabad, Pakistan',
  email: 'chmunim688@gmail.com',
  github: 'https://github.com/abdulmunim18',
  linkedin: 'https://linkedin.com/in/abdul-munim-4944a9387',
  resume: '/Abdul_Munim_Bscs.pdf',
  availability: ['Internships', 'Junior roles', 'Remote opportunities', 'Freelance projects'],
} as const

export const siteConfig = {
  title: 'Abdul Munim - Full-Stack Developer & AI Automation',
  description:
    'Portfolio of Abdul Munim, a full-stack developer and AI automation builder creating practical applications, APIs, and connected workflows.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulmunimportfolio.vercel.app',
} as const
