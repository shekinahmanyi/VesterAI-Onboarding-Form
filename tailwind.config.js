/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        lightBlue: '#F0F4F8',
        blue:'#001BC8',
        grayWhite: '#E7EAFF',
      },
    },
  },
  plugins: [],
}

