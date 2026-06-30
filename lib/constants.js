export const siteConfig = {
  name: 'Abdul Munim',
  title: 'Abdul Munim — Software Developer',
  description: 'Software Developer specializing in building exceptional digital experiences. Explore my projects, skills, and technical blog.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulmunim.dev',
  ogImage: '/og-default.png',
  links: {
    github: 'https://github.com/abdulmunim',
    linkedin: 'https://linkedin.com/in/abdulmunim',
    twitter: 'https://twitter.com/abdulmunim',
    email: 'contact@abdulmunim.dev',
  },
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export const skillCategories = [
  'Frontend',
  'Backend',
  'DevOps',
  'Tools',
  'Language',
  'Database',
  'Mobile',
  'Other',
]
