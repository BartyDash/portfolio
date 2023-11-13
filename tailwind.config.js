/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020916',
        primary: '#81FF7E',
        lightGray: '#1F2937'
      },
      fontFamily: {
        'dm_sans': ['DM Sans', 'sans-serif']
      },
      maxWidth: {
        'mywidth': '82rem'
      },
      borderRadius: {
        'round10px': '0.625rem'
      },
      boxShadow: {
        'innerlight': 'inset 0 2px 0 0 rgba(255, 255, 255, 0.15)'
      }
    },
  },
  plugins: [],
}

