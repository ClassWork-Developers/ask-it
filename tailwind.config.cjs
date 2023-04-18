/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        exo: ['Exo 2'],
        hindi: ['Hind Siliguri']
        
      },
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '920px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  darkMode: 'class',
}
