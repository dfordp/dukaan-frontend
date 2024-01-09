/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['InterVariable', 'sans-serif'],
        'questrial': ['Questrial', 'sans-serif'],
      },
      colors: {
        'black-85': '#D9D9D9',
      },
    }
  },
  plugins: [],
}