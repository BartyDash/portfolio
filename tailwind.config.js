/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowSpin: 'spin 16s infinite linear'
      },
      colors: {
        bg: '#020916',
        primary: {DEFAULT: '#81FF7E', 400: '#50fc5a'},
        lightGray: '#1F2937'
      },
      fontFamily: {
        'dm_sans': ['DM Sans', 'sans-serif']
      },
      maxWidth: {
        'mywidth': '82rem'
      },
      borderRadius: {
        'round10px': '0.625rem',
        'round20px': '1.25rem'
      },
      boxShadow: {
        'innerlight': 'inset 0 2px 0 0 rgba(255, 255, 255, 0.15)',
        'innerlightmini': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)'
      }
    },
  },
  plugins: [],
}

