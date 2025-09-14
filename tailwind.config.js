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
          50: '#fef7e6',
          100: '#fdecc0',
          200: '#fcdd96',
          300: '#fccd6c',
          400: '#fcbf4d',
          500: '#FCAD1D',
          600: '#f59e0b',
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
        },
        secondary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1ab',
          400: '#5bb882',
          500: '#3abf81',
          600: '#29573b',
          700: '#1f4530',
          800: '#1a3a28',
          900: '#163022',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}