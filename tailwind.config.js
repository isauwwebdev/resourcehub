/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': {
          DEFAULT: '#922827',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#922827',  // Our custom red
          700: '#831f1e',  // Darker shade
          800: '#741b1a',  // Even darker
          900: '#651817',  // Darkest shade
          950: '#450f0f',  // Deep dark shade
        },
        'custom-gold': '#FFD700'
      }
    },
  },
  plugins: [],
}
