/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6d5d4b',
        'primary-light': '#a38b70',
        accent: '#4a5568',
        bg: '#fdfdfd',
        text: '#4a4a4a',
        heading: '#2c2c2c',
        'card-border': '#e0e0e0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}