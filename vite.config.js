import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Only use /phg-ai/ base path in production (for GitHub Pages)
  // In development, use root path
  base: process.env.NODE_ENV === 'production' ? '/phg-ai/' : '/',
  server: {
    port: 3000
  }
})
