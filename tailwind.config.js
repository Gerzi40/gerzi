/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      backgroundImage: {
        'blue-pink-purple': 'linear-gradient(to right, #3b82f6, #ec4899, #9333ea)',
      },
      colors: {
        dark : '#0f172a',
      },
      screens:{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

