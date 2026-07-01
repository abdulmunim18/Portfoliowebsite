export const mockSettings = {
  heroTitle: "Hi, I'm Abdul Munim",
  heroSubtitle: "A passionate Senior Full-Stack Developer and UI/UX Designer crafting scalable, clean, and highly performant web applications.",
  heroTypingTexts: [
    "Software engineer",
    "Full-Stack Developer",
    "Next.js Specialist",
    "UI/UX Enthusiast",
    "Open Source Contributor"
  ],
  shortBio: "I am a software engineer based in Pakistan, specializing in modern web technologies, headless architectures, and performant design systems.",
  bio: [
    {
      _type: 'block',
      _key: 'b1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's1',
          text: "I am a full-stack developer with over 2 years of professional experience building and deploying robust web applications. I love bridging the gap between design and engineering, combining structured coding patterns with polished, modern user interfaces."
        }
      ]
    },
    {
      _type: 'block',
      _key: 'b2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's2',
          text: "My technical specialties include Next.js/React, Node.js, GraphQL, PostgreSQL, Python, Tailwind CSS, and cloud hosting platforms like Vercel and AWS. I focus on writing accessible, clean code and optimizing Core Web Vitals to deliver the best user experience."
        }
      ]
    }
  ],
  email: "chmunim688@gmail.com",
  siteTitle: "Abdul Munim | Senior Software Engineer & Full-Stack Developer & Designer",
  siteDescription: "Portfolio of Abdul Munim, showcasing projects, skills, experience, and writeups on full-stack web engineering."
}

export const mockProjects = [
  {
    _id: "p1",
    title: "Linear-Style Task Manager",
    slug: { current: "linear-task-manager" },
    description: "A dark-themed collaborative project management tool featuring real-time state sync, command palette controls, and optimistic UI updates.",
    coverImage: null,
    techStack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "PostgreSQL", icon: "postgresql" }
    ],
    liveUrl: "https://linear-task-manager.demo",
    repoUrl: "https://github.com/abdulmunim/linear-task-manager",
    featured: true,
    publishedAt: "2026-03-15T00:00:00Z"
  },
  {
    _id: "p2",
    title: "E-Commerce Headless Storefront",
    slug: { current: "headless-ecommerce" },
    description: "A high-performance headless shop utilizing Shopify's Storefront API, incremental static regeneration (ISR), and Stripe checkout.",
    coverImage: null,
    techStack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Stripe", icon: "stripe" },
      { name: "Tailwind CSS", icon: "tailwindcss" }
    ],
    liveUrl: "https://headless-storefront.demo",
    repoUrl: "https://github.com/abdulmunim/headless-storefront",
    featured: true,
    publishedAt: "2026-01-20T00:00:00Z"
  },
  {
    _id: "p3",
    title: "Developer Terminal Portfolio",
    slug: { current: "developer-terminal" },
    description: "A retro-modern terminal styled portfolio page utilizing pure CSS layouts, dynamic tab navigation, and built-in interactive shell games.",
    coverImage: null,
    techStack: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "CSS Modules", icon: "css" }
    ],
    liveUrl: "https://terminal-portfolio.demo",
    repoUrl: "https://github.com/abdulmunim/terminal-portfolio",
    featured: false,
    publishedAt: "2025-11-10T00:00:00Z"
  }
]

export const mockPosts = [
  {
    _id: "post1",
    title: "Mastering Next.js On-Demand ISR Revalidation",
    slug: { current: "mastering-nextjs-isr-revalidation" },
    excerpt: "Learn how to use headless CMS webhooks to trigger on-demand page builds for maximum performance and up-to-date data consistency.",
    tags: ["Next.js", "Web Dev", "Performance"],
    publishedAt: "2026-05-12T00:00:00Z",
    readingTime: 6,
    body: [
      {
        _type: 'block',
        _key: 'bp1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'sp1',
            text: "Incremental Static Regeneration (ISR) is one of the most powerful features of Next.js. It allows you to create static pages that are regenerated in the background when a request comes in. However, time-based revalidation is sometimes not fast enough. That is where On-Demand revalidation shines."
          }
        ]
      }
    ]
  },
  {
    _id: "post2",
    title: "Why Dark Mode is the Default (And How to Style It)",
    slug: { current: "why-dark-mode-is-default" },
    excerpt: "A deep dive into styling dark-themed UIs with high-contrast rules, vibrant color schemes, glassmorphism, and seamless light toggles.",
    tags: ["UI/UX", "Tailwind CSS", "Design"],
    publishedAt: "2026-04-05T00:00:00Z",
    readingTime: 4,
    body: [
      {
        _type: 'block',
        _key: 'bp2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'sp2',
            text: "Modern SaaS platforms and developer tools favor dark mode. In this post, we discuss accessibility contrast ratios, styling translucent cards, and providing toggles for accessibility compliance."
          }
        ]
      }
    ]
  }
]

export const mockSkills = [
  { _id: "s1", name: "React / Next.js", category: "Frontend", proficiency: 95, order: 1 },
  { _id: "s2", name: "Tailwind CSS", category: "Frontend", proficiency: 98, order: 2 },
  { _id: "s3", name: "TypeScript", category: "Language", proficiency: 90, order: 3 },
  { _id: "s4", name: "Node.js / Express", category: "Backend", proficiency: 88, order: 4 },
  { _id: "s5", name: "PostgreSQL", category: "Database", proficiency: 85, order: 5 },
  { _id: "s6", name: "Docker", category: "DevOps", proficiency: 75, order: 6 },
  { _id: "s7", name: "Git / GitHub", category: "Tools", proficiency: 95, order: 7 }
]

export const mockExperiences = [
  {
    _id: "e1",
    company: "Pixel Perfect Agency",
    role: "Senior Frontend Engineer",
    startDate: "2024-03-01",
    endDate: null,
    companyUrl: "https://pixelperfect.demo",
    description: [
      {
        _type: 'block',
        _key: 'e1_b1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'e1_s1',
            text: "Lead developer on headless CMS web portals, building Vercel-optimized Next.js pages and improving site load speeds by 40%."
          }
        ]
      }
    ],
    techUsed: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ],
    order: 1
  },
  {
    _id: "e2",
    company: "Techno Solutions",
    role: "Full-Stack Developer",
    startDate: "2021-06-01",
    endDate: "2024-02-28",
    companyUrl: "https://technosolutions.demo",
    description: [
      {
        _type: 'block',
        _key: 'e2_b1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'e2_s1',
            text: "Designed and engineered secure REST APIs, implemented payment gateways with Stripe, and managed PostgreSQL databases."
          }
        ]
      }
    ],
    techUsed: [
      { name: "Node.js" },
      { name: "React" },
      { name: "PostgreSQL" }
    ],
    order: 2
  }
]

export const mockUses = [
  { category: "Hardware", items: ["MacBook Pro 16\" (M3 Max, 36GB RAM)", "LG 34\" UltraWide Monitor", "Keychron K2 Mechanical Keyboard"] },
  { category: "Software & Editor", items: ["VS Code (with Tokyo Night theme)", "Warp Terminal", "Figma for UI drafts"] },
  { category: "Services & Deployment", items: ["Vercel for web hosting", "Sanity.io for headless CMS", "Resend for contact emails"] }
]

export const mockPrompts = [
  {
    _id: "pr1",
    title: "Tailwind Component Design Refiner",
    category: "Design",
    prompt: "Analyze the following React component code styled with Tailwind CSS. Identify areas where styling can be modernised for a dark/glassmorphic look. Use harmonious colors, subtle gradients, border-white/10 overlays, backdrop blur effects, and smooth micro-animations. Provide the fully corrected and refactored code without explanation.",
    outputType: "text",
    outputText: "```jsx\n// Example glassmorphism refinement:\n<div className=\"bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-glow\">\n  ...\n</div>\n```",
    publishedAt: "2026-06-28T12:00:00Z"
  },
  {
    _id: "pr2",
    title: "Next.js 15 Async Params Migrator",
    category: "Coding",
    prompt: "I am upgrading a Next.js App Router project to the latest version. Dynamic parameters in pages, layouts, and route handlers are now Promises and must be awaited. Scan the provided page component, find parameter destructuring patterns, and convert them to use asynchronous params with proper types. Return only the refactored code.",
    outputType: "text",
    outputText: "```typescript\nexport default async function Page({\n  params,\n}: {\n  params: Promise<{ slug: string }>\n}) {\n  const { slug } = await params;\n  // ... rest of logic\n}\n```",
    publishedAt: "2026-06-25T10:00:00Z"
  }
]

