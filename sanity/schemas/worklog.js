const worklog = {
  name: 'worklog',
  title: 'Worklog Entry',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() },
    { name: 'publishedAt', title: 'Published at', type: 'datetime', validation: (Rule) => Rule.required() },
    { name: 'excerpt', title: 'Short summary', type: 'text', rows: 3, validation: (Rule) => Rule.max(300) },
    { name: 'body', title: 'Entry', type: 'blockContent' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
    { name: 'projectRef', title: 'Related project', type: 'reference', to: [{ type: 'project' }] },
    { name: 'githubUrl', title: 'GitHub URL', type: 'url' },
    { name: 'externalUrl', title: 'External URL', type: 'url' },
    { name: 'coverImage', title: 'Optional image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt text', type: 'string' }] },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
  ],
  orderings: [{ title: 'Newest first', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
}

export default worklog
