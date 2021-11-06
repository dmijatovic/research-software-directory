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
        primary: {
          light: '#E5F5FB',
          DEFAULT: "#009DDD",
          dark: '#006d99'
        },
        // secondary: colors.violet,
        secondary:{
          light:'#834789',
          DEFAULT: '#330837',
          dark: '#200323'
        },
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
