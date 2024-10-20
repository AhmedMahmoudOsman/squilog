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
        Diamond:'#C0F0FB',
        Darkgrey:"#263032",
        Dark:"#131819",
        whitex:"#fbfbfb",
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