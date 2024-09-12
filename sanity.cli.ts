import {defineCliConfig} from 'sanity/cli'
import config from './config.json' assert { type: 'json' };

export default defineCliConfig({
  api: {
    projectId: config.sanityProjectId,
    dataset: 'production'
  }
})
