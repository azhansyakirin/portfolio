/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#e5e8ea',
        'background': '#080a0b',
        'primary': '#454657',
        'secondary': '#454657',
        'accent': '#7a7995',
      },
      fontFamily: {
        monolisa: ['MonoLisa'],
        jetbrains: ['Jetbrains'],
        jetbrainsItalic: ['JetbrainsItalic'],
        lato: ['Lato']
      }
    },
  },
  plugins: [],

}