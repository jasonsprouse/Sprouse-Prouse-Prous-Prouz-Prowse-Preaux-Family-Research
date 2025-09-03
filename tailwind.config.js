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
        primary: {
          DEFAULT: '#8b5a3c',
          light: '#b07a5b',
          dark: '#6b4423',
        },
        secondary: '#2c3e50',
        accent: '#d4a574',
        gold: '#f4d03f',
        bg: {
          DEFAULT: '#fefefe',
          secondary: '#f8f9fa',
        },
        text: {
          DEFAULT: '#2c3e50',
          light: '#5d6d7e',
        },
        heading: '#1a252f',
        'card-border': '#e8ecf0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8b5a3c 0%, #b07a5b 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #d4a574 0%, #f4d03f 100%)',
        'gradient-bg': 'linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(44, 62, 80, 0.04)',
        'medium': '0 4px 16px rgba(44, 62, 80, 0.08)',
        'large': '0 8px 32px rgba(44, 62, 80, 0.12)',
        'extra-large': '0 16px 64px rgba(44, 62, 80, 0.16)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
        'pulse-soft': 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}