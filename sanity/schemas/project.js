const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief summary shown on project cards (max 200 chars)',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'body',
      title: 'Full Description',
      type: 'blockContent',
      description: 'Detailed project write-up with rich text, images, and code blocks',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe the image for accessibility',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
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
      ],
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
      description: 'Technologies used in this project',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      description: 'Link to the live project',
    },
    {
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'url',
      description: 'Link to the source code',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this project on the homepage',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Published Date (Newest)',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      featured: 'featured',
    },
    prepare({ title, media, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        media,
      }
    },
  },
}

export default project
