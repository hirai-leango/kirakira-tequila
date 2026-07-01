import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8CD6E',
          dark: '#A8871F',
        },
        brand: {
          black: '#0A0A0A',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: [
          '"Shippori Mincho"',
          '"Hiragino Mincho ProN"',
          '"Yu Mincho"',
          'serif',
        ],
        sans: [
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          '"Noto Sans JP"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
