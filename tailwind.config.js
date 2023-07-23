/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    colors:{
      'primary': '#ffc045',
      'primary-hover': '#f5b029',
      'secondary': '#3d2514',
      'secondary-hover': '#231105',
      'red-primary': '#bf2222',
      'red-primary-hover': '#990e0e',
      'white-rosto': '#fff',
      'white-rosto-200': '#dcdcdc',
      'white-rosto-400': '#bebebe',

    },
    fontFamily: {
      'secondary': ['"Alfa Slab One"'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

