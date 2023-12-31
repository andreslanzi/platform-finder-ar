/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', 'sans-serif']
      },
      colors: {
        primary: '#0f2027',
        secondary: '#a6c3b3',
        tertiary: '#103021',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        transparent: 'rgb(0 0 0 / 0.1)'
      },
      boxShadow: {
        card: '0px 15px 120px -20px '
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/pxfuel.jpg')"
      }
    }
  },
  plugins: []
};
