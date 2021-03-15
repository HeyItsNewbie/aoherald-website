module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './comp/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ao-brown': '#531405'
      }
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
