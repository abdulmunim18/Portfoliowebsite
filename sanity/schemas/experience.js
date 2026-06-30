const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if this is your current position',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'Role description, responsibilities, and achievements',
    },
    {
      name: 'techUsed',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
    },
    {
      name: 'companyUrl',
      title: 'Company Website',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (use 1 for most recent)',
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
      title: 'role',
      subtitle: 'company',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      }
    },
  },
}

export default experience
