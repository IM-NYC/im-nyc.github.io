/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        muted: '#9ca3af',
        accent: '#38bdf8', // neon cyan
      },
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'sans-serif'],
        display: ['system-ui', 'SF Pro Display', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'soft-xl':
          '0 25px 50px -12px rgba(0,0,0,0.65), 0 0 0 1px rgba(148,163,184,0.08)',
      },
    },
  },
  plugins: [],
}
