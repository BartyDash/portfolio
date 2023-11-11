/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020916',
        primary: '#81FF7E'
      },
      fontFamily: {
        'dm_sans': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

