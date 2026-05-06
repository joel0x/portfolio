/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Fraunces', 'Times New Roman', 'serif'],
        display: ['Fraunces', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: {
          50:  '#faf9f6',
          100: '#f1efe9',
          200: '#e3dfd4',
          300: '#c9c3b3',
          400: '#9c968a',
          500: '#6b675f',
          600: '#4a4842',
          700: '#2e2d2a',
          800: '#1a1917',
          900: '#0e0d0c',
        },
        copper: {
          300: '#e6b388',
          400: '#d49460',
          500: '#b87333',
        },
        ink: '#0e0d0c',
        bg:  '#faf9f6',
      },
      maxWidth: {
        page: '1240px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'pulse-copper': 'pulseCopper 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'marquee': 'marquee 50s linear infinite',
      },
      keyframes: {
        pulseCopper: {
          '0%, 100%': { boxShadow: '0 0 0 4px rgba(184, 115, 51, 0.15)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(184, 115, 51, 0.05)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
