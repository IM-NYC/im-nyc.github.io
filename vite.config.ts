import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // This repo is a user site: https://im-nyc.github.io
  // so the app is served from the root path.
  base: '/',
  plugins: [react()],
})
