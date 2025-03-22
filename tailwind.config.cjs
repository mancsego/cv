/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffffde',
        secondary: '#8a909e',
        'react-gray': '#242424'
      },
      backgroundImage: {
        me: "url('/src/assets/me.jpeg')"
      }
    }
  },
  plugins: []
}
