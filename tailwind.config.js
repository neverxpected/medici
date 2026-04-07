/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#8B0000',
          light: '#A00000',
        },
        'off-white': '#F9F6F2',
        'brand-black': '#0D0D0D',
        'brand-white': '#FFFFFF',
        kanso: {
          bg: '#F9F9F8',
          text: '#121212',
          secondary: '#6B6B6B',
          border: '#EAEAEA',
          hover: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
