export type Service = {
  title: string
  description: string
  deliverables: string[]
}

export const serviceGroups: { title: string; intro: string; services: Service[] }[] = [
  {
    title: 'Software Development',
    intro: 'Purpose-built software shaped around users, workflows, and maintainable engineering.',
    services: [
      {
        title: 'Full-Stack Web Development',
        description: 'Modern, responsive applications from interface to backend and deployment.',
        deliverables: ['Web applications', 'Dashboards and admin panels', 'Authentication and data flows'],
      },
      {
        title: 'Custom Software',
        description: 'Focused internal tools, portals, and management systems for real operational needs.',
        deliverables: ['Internal tools', 'Management systems', 'Data-driven portals'],
      },
      {
        title: 'Mobile Applications',
        description: 'Practical mobile experiences connected to secure backend systems.',
        deliverables: ['Business apps', 'Customer-facing flows', 'API-connected experiences'],
      },
      {
        title: 'Desktop Applications',
        description: 'Focused desktop software for administration, productivity, and data workflows.',
        deliverables: ['Administrative tools', 'Productivity software', 'Connected dashboards'],
      },
      {
        title: 'Backend & API Development',
        description: 'Secure server-side systems with clear business logic and dependable integrations.',
        deliverables: ['REST APIs', 'JWT and RBAC', 'Database integrations'],
      },
    ],
  },
  {
    title: 'AI & Automation',
    intro: 'Connected systems that reduce repetitive work and make information easier to act on.',
    services: [
      {
        title: 'AI Automation',
        description: 'AI-assisted workflows that connect forms, data, communication, and business processes.',
        deliverables: ['Workflow design', 'Structured AI steps', 'Testing and handoff'],
      },
      {
        title: 'n8n Workflows',
        description: 'Multi-step automations built around webhooks, APIs, databases, and reliable routing.',
        deliverables: ['Lead processing', 'Data automation', 'Notifications and email flows'],
      },
      {
        title: 'Make.com Automation',
        description: 'Trigger-and-action scenarios that move information cleanly between cloud applications.',
        deliverables: ['App connections', 'Form processing', 'Operations workflows'],
      },
      {
        title: 'AI-Powered Applications',
        description: 'Useful AI features inside clear web interfaces, internal tools, and existing products.',
        deliverables: ['AI-enabled interfaces', 'Extraction and summaries', 'AI + API integration'],
      },
    ],
  },
  {
    title: 'Integrations',
    intro: 'The connective layer that lets software, services, and teams exchange information reliably.',
    services: [
      {
        title: 'APIs, Webhooks & Third-Party Systems',
        description: 'Integration work across payments, email, databases, automation tools, and external APIs.',
        deliverables: ['API integrations', 'Webhook flows', 'External service connections'],
      },
    ],
  },
]
