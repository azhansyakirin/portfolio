/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        'text': '#e5e8ea',
        'background': '#080a0b',
        'primary': '#454657',
        'secondary': '#454657',
        'accent': '#7a7995',
      },
      fontFamily: {
        notosans: ['NotoSansMono-Regular'],
        jetbrains: ['Jetbrains'],
        jetbrainsItalic: ['JetbrainsItalic'],
        lato: ['Lato']
      }
    },
  },
  plugins: [require("daisyui")],
}