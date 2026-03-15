// Tailwind CSS v4 PostCSS configuration
// Uses the new @tailwindcss/postcss package instead of tailwindcss as a plugin.
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}
