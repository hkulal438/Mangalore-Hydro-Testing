/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C8102E',
          'red-accent': '#E31B23',
          'red-deep': '#8B0000',
          black: '#050505',
          'black-2': '#111111',
          'gray-dark': '#1C1C1C',
          'gray-light': '#F3F3F3',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        cambria: ['Cambria', 'Georgia', '"Times New Roman"', 'serif'],
      },
      maxWidth: {
        '8xl': '1280px',
      },
      screens: {
        xs: '430px',
      },
    },
  },
  plugins: [],
};
