import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import config from './config.json' assert { type: 'json' };

export default defineConfig({
  name: 'default',
  title: 'shareme_jsm',

  projectId: config.sanityProjectId,
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
