/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#9333ea',
          600: '#8A2BE2',
        },
      },
    },
  },
  plugins: [],
};