import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { myStructure } from './lib/desk-structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'portfolio-studio',
  title: 'Portfolio Manager',
  projectId,
  dataset,
  basePath: '/studio', // Mount studio inside Next.js at /studio

  plugins: [
    deskTool({
      structure: myStructure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
