/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom: '#003f72',
        container: '#e9ecef',
        hover: {
          custom: '#0269bd',
        },
      },
    },
  },
  plugins: [],
}
