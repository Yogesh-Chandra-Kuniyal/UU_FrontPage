/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*{.html,.js,.php}"],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#af2896',
        'custom-blue': '#509bf5',
        'custom-green': 'rgb(207, 216, 185)',
        'custome-brightBlue': '#03a9f4',
        'custom-violet':'rgba(87, 148, 255, 1)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'custom-sans': ['"Helvetica Neue"', 'helvetica', 'arial', '"Hiragino Kaku Gothic ProN"', 'Meiryo', '"MS Gothic"', 'sans-serif'],
      },
      dropShadow: {
        'custom': '0 5px 15px rgba(0, 0, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

