// @ts-check
import { defineConfig } from '@norm/cli'
import react from '@vitejs/plugin-react'

export default defineConfig({
  projects: {
    'packages/octomark': {
      type: 'web-app',
      vite: {
        plugins: [react()],
      },
    },
    'packages/octomark-extension': {
      type: 'web-extension',
      manifest: {
        manifest_version: 3,
        name: 'OctoMark',
        version: '0.0.1',
        permissions: ['activeTab', 'scripting'],
        background: {
          service_worker: '/src/background.ts',
        },
        action: {
          default_title: 'OctoMark',
        },
      },
      vite: {
        build: {
          rollupOptions: {
            input: ['/src/content-script.ts'],
          },
        },
      },
    },
  },
})
