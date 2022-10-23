/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: colors.yellow[600],
        highlight: colors.neutral[500],
        'highlight-dark': colors.neutral[300],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
