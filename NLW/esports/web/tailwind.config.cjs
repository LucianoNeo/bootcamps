/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/bg.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 0.58%, #43E7AD 44.94%, #E1D55D 100%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
      colors: {

      },
    },
  },
  plugins: [],
}
