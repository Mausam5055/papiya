/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        signature: ['Dancing Script', 'cursive'],
      },
      colors: {
        primary: {
          light: '#fef9c3', // yellow-50
          dark: '#1e3a8a', // blue-900
        },
      },
    },
  },
  plugins: [],
};