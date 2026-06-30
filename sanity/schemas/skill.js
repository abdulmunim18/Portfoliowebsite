const skill = {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Backend', value: 'Backend' },
          { title: 'Language', value: 'Language' },
          { title: 'Database', value: 'Database' },
          { title: 'DevOps', value: 'DevOps' },
          { title: 'Tools', value: 'Tools' },
          { title: 'Mobile', value: 'Mobile' },
          { title: 'Other', value: 'Other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon identifier (e.g., "react", "python", "nodejs"). Used for display.',
    },
    {
      name: 'proficiency',
      title: 'Proficiency',
      type: 'number',
      description: 'Skill level from 1 to 100',
      validation: (Rule) => Rule.min(1).max(100),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within category',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
}

export default skill
