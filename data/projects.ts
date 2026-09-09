export type Project = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  role: string
  stack: string[]
  facts: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'vehicle-rental-platform',
    title: 'Vehicle Rental Platform',
    eyebrow: 'Full-stack application',
    summary:
      'A rental platform for vehicle discovery, bookings, role-aware access, and secure online payments.',
    role: 'Full-stack developer',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe'],
    facts: [
      '15+ REST APIs across authentication, vehicle management, and booking workflows.',
      'JWT-based RBAC for Admin and Customer roles across 10+ protected routes.',
      'Stripe integration for online payment processing.',
    ],
  },
  {
    slug: 'library-management-system',
    title: 'Library Management System',
    eyebrow: 'Full-stack application',
    summary:
      'A responsive system for managing books, users, issues, returns, and day-to-day administrative workflows.',
    role: 'Full-stack developer',
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Neon'],
    facts: [
      'Book, user, issuing, and return management flows.',
      'Administrative interface for records and transactions.',
      'REST API-backed responsive React interface.',
    ],
  },
]
