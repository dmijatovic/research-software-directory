/** @type {import('next').NextConfig} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // limit fontFamily
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    // extend default theme values
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.violet,
        danger: colors.red,
        warning: colors.orange,
        success: colors.teal,
        gray: colors.gray
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  variants: {
    // disable responsive container variants
    // like md:container class
    container:[],
    extend: {},
  },
  plugins: [],
}
