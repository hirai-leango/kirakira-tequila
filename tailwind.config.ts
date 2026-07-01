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
        night: {
          DEFAULT: '#0d0020',
          deep: '#0a0a0a',
          soft: '#1a0b38',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
          dark: '#C9A800',
        },
        kira: {
          pink: '#FF69B4',
          cyan: '#00FFFF',
          purple: '#BF5FFF',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', '"Yu Gothic"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'holo-gradient': 'linear-gradient(135deg, #FF69B4, #BF5FFF, #00FFFF, #FFD700)',
        'holo-gradient-soft':
          'linear-gradient(135deg, rgba(255,105,180,0.15), rgba(191,95,255,0.15), rgba(0,255,255,0.15), rgba(255,215,0,0.15))',
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
        'float-up': 'float-up 8s linear infinite',
        'fall-down': 'fall-down 9s linear infinite',
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'holo-shift': 'holo-shift 6s ease infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        'fall-down': {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(105vh) rotate(360deg)', opacity: '0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'holo-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.6)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.45)',
        'glow-pink': '0 0 30px rgba(255, 105, 180, 0.45)',
        'glow-cyan': '0 0 30px rgba(0, 255, 255, 0.35)',
        'glow-purple': '0 0 30px rgba(191, 95, 255, 0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config
