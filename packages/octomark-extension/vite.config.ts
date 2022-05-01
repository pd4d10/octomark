import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webExtension from '@vite-preset/web-extension'

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['src/content-script.ts'],
    },
  },
  plugins: [
    react(),
    webExtension({
      manifest: {
        manifest_version: 3,
        name: 'Octomark',
        version: '0.0.1',
        permissions: ['activeTab', 'scripting'],
        background: {
          service_worker: 'src/background.ts',
        },
        action: {
          default_title: 'Octomark',
        },
      },
    }),
  ],
})
