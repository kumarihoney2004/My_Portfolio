/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Toggle dark mode by adding/removing 'dark' class on <html>
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        // Primary accent — indigo/violet
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        // Dark mode surface colors
        dark: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#141428',
          600: '#1a1a35',
          500: '#252545',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, hsla(252,100%,75%,0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%,  hsla(240,100%,70%,0.10) 0px, transparent 50%),
          radial-gradient(at 0%  50%, hsla(270,100%,75%,0.10) 0px, transparent 50%)
        `,
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'fadeInUp':    'fadeInUp 0.6s ease forwards',
        'spin-slow':   'spin 20s linear infinite',
        'blob':        'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        fadeInUp: {
          '0%':   { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blob: {
          '0%':   { transform: 'translate(0px,   0px)   scale(1)' },
          '33%':  { transform: 'translate(30px, -50px)  scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px)  scale(0.9)' },
          '100%': { transform: 'translate(0px,   0px)   scale(1)' },
        },
      },
      boxShadow: {
        'glow':       '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-lg':    '0 0 60px rgba(99, 102, 241, 0.4)',
        'card':       '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-dark':  '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
