/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // Add smaller breakpoint
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    // Extend styles
    extend: {
      fontFamily: {
        roboto: ["'Roboto', 'sans-serif'"],
      },
    },
  },
  plugins: [],
};
