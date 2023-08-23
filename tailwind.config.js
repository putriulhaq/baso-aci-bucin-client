/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        custom:{
          '2b2a4c':'#2B2A4C',
          'B31312':'#B31312',
          'EEE2DE':'#EEE2DE',
          '7E1717':'#7E1717',
          'F0EEED':'#F0EEED'
        }
      }
    },
  },
  plugins: [],
}

