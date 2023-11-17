/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
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
      },
      fontfamily : {
        'poppins': ['Poppins', 'sans-serif']
      },
      color : {
        'hijau' : '#2D8C14',
      },
    },
  },
  plugins: [],
}