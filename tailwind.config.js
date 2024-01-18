const colors = require('./src/styles')
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          ...colors.baseColor
        },
        accent: {
          ...colors.accentColor
        },
        donate: {
          ...colors.donateButtonColor
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
