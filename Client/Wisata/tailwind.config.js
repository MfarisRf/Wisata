/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'f1f1e8': '#F1F1E8',
        'bfdcae': '#BFDCAE',
      },
      backgroundImage : {
        'texture': "url('../assets/images/Teksturs.png')",
      },
      textColor : {
        '2d8c14': '#2D8C14',
        '456761': '#456761',
      },
      fontfamily : {
        'poppins' : ['Poppins'],
        'Boogaloo' : ['Boogaloo']
      },
      color : {
        'hijau' : '#2D8C14',
      },
      spacing: {
        '90': '90px',
        '25': '25%',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}