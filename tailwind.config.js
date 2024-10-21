/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors:{
        Diamond:'#49fa57',
        Darkgrey:"#263032",
        Dark:"#131819",
        whitex:"#fbfbfb",
        maincolor:"#242535",
      },
      fontFamily: {
        Primary: ['Poppins', 'sans-serif'],
        logo: ['Game Of Squids','Poppins','sans-serif'],
      },

      
    },

  },
  plugins: [
    require('preline/plugin'),
  ],
}