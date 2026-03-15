import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // For GitHub Pages project site: https://<user>.github.io/<repo>/
  // Here the repo is "im-nyc.github.io-1", so the base path must match.
  // If you later host at a root domain or user site, change this to '/'.
  base: '/im-nyc.github.io-1/',
  plugins: [react()],
})
