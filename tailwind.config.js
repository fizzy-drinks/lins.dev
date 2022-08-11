/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: '#fff0',
      'pastel-green': '#0fc55c',
      'dartmouth-green': '#12743C',
    },
  },
  plugins: [],
};
