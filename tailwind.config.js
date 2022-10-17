const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'estacio-logo': "url('/imgs/estacio-logo.png')",
        'harvard-logo': "url('/imgs/harvard-logo.png')",
        'etec-logo': "url('/imgs/etec-logo.png')",
        'book-bg': "url('/imgs/book-bg.jpg')",
      }
    },
  },
  plugins: [],
}
