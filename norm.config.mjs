// @ts-check
import { defineConfig, defineProjectConfig } from '@norm/cli'
import react from '@vitejs/plugin-react'

const appConfig = defineProjectConfig({
  type: 'web-app',
  overrides: {
    plugins: [react()],
  },
})

export default defineConfig({
  projects: {
    'packages/octomark': appConfig,
  },
})
