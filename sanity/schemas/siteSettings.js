const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one instance
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline on the homepage',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      description: 'Subtitle text below the main headline',
    },
    {
      name: 'heroTypingTexts',
      title: 'Hero Typing Texts',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Texts for the terminal typing animation (e.g., "Full Stack Developer", "Open Source Enthusiast")',
    },
    {
      name: 'bio',
      title: 'About Page Bio',
      type: 'blockContent',
      description: 'Full bio content for the About page',
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 2,
      description: 'Brief bio for the footer and meta descriptions',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
    {
      name: 'resumeFile',
      title: 'Resume / CV (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'X/Twitter URL', type: 'url' },
        { name: 'email', title: 'Email Address', type: 'string' },
      ],
    },
    {
      name: 'currentStatus',
      title: 'Current Status',
      type: 'string',
      description: 'Shows as "Currently building..." on the homepage. Leave empty to hide.',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'siteTitle',
      title: 'Site Title (SEO)',
      type: 'string',
      description: 'Used in browser tab and search results',
    },
    {
      name: 'siteDescription',
      title: 'Site Description (SEO)',
      type: 'text',
      rows: 2,
      description: 'Meta description for search engines',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
}

export default siteSettings
