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
        'Boogaloo' : ['Boogaloo'],
      },
      color : {
        'hijau' : '#2D8C14',
        "primary-color-1": "var(--primary-color-1)",
        "primary-color-2": "var(--primary-color-2)",
        "primary-color-3": "var(--primary-color-3)",
        "secondary-color-1": "var(--secondary-color-1)",
        "secondary-color-2": "var(--secondary-color-2)",
        "secondary-color-3": "var(--secondary-color-3)",
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