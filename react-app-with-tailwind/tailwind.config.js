module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '300px',
      }, 
      fontFamily: {
        "roboto": ['Roboto Condensed', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        'arrow': 'transparent transparent red transparent',
      }
    },
  },
  plugins: [],
}