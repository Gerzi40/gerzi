/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'blue-pink-purple': 'linear-gradient(to right, #3b82f6, #ec4899, #9333ea)',
      },
      colors: {
        dark : '#0f172a',
      }
    },
  },
  plugins: [],
}

