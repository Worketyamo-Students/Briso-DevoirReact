/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary_color: '#952A2A',
      secondary_color: '',
      border_color: '',
      nav_color : '#404040CC',
      bd_color : '#EEDDDD'
    },
    fontFamily:{
      'popins': ['Poppins', 'sans-serif'],
      'open': ['Open', 'sans-serif'],
      'source': ['Source', 'sans-serif-pro'],
    },
    extend: {},
  },
  plugins: [],
}