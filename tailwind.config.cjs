/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffffde',
        secondary: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
