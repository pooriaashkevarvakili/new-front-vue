module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'black': '#22292f',
        'white': '#ffffff',
        'grey': '#b8c2cc',
        'grey-light': '#dae1e7',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
