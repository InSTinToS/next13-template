const sizes = require('./src/styles/custom/sizes.js')
const colors = require('./src/styles/custom/colors.js')
const border = require('./src/styles/custom/border.js')
const radius = require('./src/styles/custom/radius.js')
const screens = require('./src/styles/custom/screens.js')
const fontSize = require('./src/styles/custom/fontSize.js')
const fontFamily = require('./src/styles/custom/fontFamily.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '!./node_modules'],
  theme: {
    fontSize,
    fontFamily,
    size: sizes,
    spacing: sizes,
    borderWidth: border,
    borderRadius: radius,
    extend: { colors, screens: screens }
  },
  plugins: []
}
