/** @type {import('tailwindcss').Config} */

const colors = require('./styles/colors')

module.exports = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'title': ['Inter', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
    },
    colors: {
      ...colors,
      'primary': colors.purple,
      'secondary': colors.gray,
      success: colors.gold
      // 'primaryBg': colors.purple[500],
      // 'secondaryBg': colors.gray[900],
    },
  },
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'], 
  plugins: [],
}

