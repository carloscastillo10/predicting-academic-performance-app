/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom: '#003f72',
        hover: {
          custom: '#0269bd',
        },
      },
    },
  },
  plugins: [],
}
