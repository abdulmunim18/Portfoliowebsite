const promptSchema = {
  name: 'prompt',
  title: 'Prompt Library',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. React Dynamic Table component generator',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'prompt',
      title: 'Prompt',
      type: 'text',
      description: 'The exact prompt text to copy and use',
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Coding, Writing, Design, General',
      options: {
        list: [
          { title: 'General', value: 'General' },
          { title: 'Coding', value: 'Coding' },
          { title: 'Writing', value: 'Writing' },
          { title: 'Design', value: 'Design' },
          { title: 'Marketing', value: 'Marketing' },
          { title: 'Data', value: 'Data' },
          { title: 'Education', value: 'Education' },
          { title: 'Other', value: 'Other' },
        ],
      },
      initialValue: 'General',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'outputType',
      title: 'Output Type',
      type: 'string',
      description: 'Type of preview output (optional)',
      options: {
        list: [
          { title: 'No Output', value: 'none' },
          { title: 'Text Output', value: 'text' },
          { title: 'Image Output', value: 'image' },
        ],
        layout: 'radio',
      },
      initialValue: 'none',
    },
    {
      name: 'outputText',
      title: 'Output Text',
      type: 'text',
      description: 'Paste the generated text response here (if output type is Text)',
      rows: 5,
      hidden: ({ parent }) => parent?.outputType !== 'text',
    },
    {
      name: 'outputImage',
      title: 'Output Image',
      type: 'image',
      description: 'Upload the generated image response here (if output type is Image)',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
      hidden: ({ parent }) => parent?.outputType !== 'image',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      outputType: 'outputType',
    },
    prepare({ title, category, outputType }) {
      const typeIcons = {
        none: '📝',
        text: '📄',
        image: '🖼️',
      }
      return {
        title: `${typeIcons[outputType] || '📝'} ${title}`,
        subtitle: `${category}`,
      }
    },
  },
}

export default promptSchema
