const post = {
  name: 'post',
  title: 'Blog Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for SEO and post cards (max 200 chars)',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
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
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time. Leave empty to auto-calculate.',
    },
  ],
  orderings: [
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
      date: 'publishedAt',
    },
    prepare({ title, media, date }) {
      const dateStr = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: dateStr,
        media,
      }
    },
  },
}

export default post
