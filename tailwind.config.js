/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./asets/js/*.js"],
  theme: {
    fontFamily: {
      'sans': ["Inter", "sans-serif"],
    },
    colors: {
      ...colors,
      "black-mamba": "#151515"
    },
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
