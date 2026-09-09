const article = {
  name: 'article',
  title: 'Technical Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() },
    { name: 'publishedAt', title: 'Published at', type: 'datetime', validation: (Rule) => Rule.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: (Rule) => Rule.max(240) },
    { name: 'body', title: 'Article', type: 'blockContent' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
    { name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt text', type: 'string' }] },
    { name: 'seoTitle', title: 'SEO title', type: 'string', validation: (Rule) => Rule.max(65) },
    { name: 'seoDescription', title: 'SEO description', type: 'text', rows: 2, validation: (Rule) => Rule.max(160) },
  ],
  orderings: [{ title: 'Newest first', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
}

export default article
