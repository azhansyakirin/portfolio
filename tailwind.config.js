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
        'app-black-1': '#292929',
        'app-black-2': '#212121',
        'app-black-3': '#373737',
      },
      fontFamily: {
        notosans: ['NotoSansMono-Regular'],
        jetbrains: ['Jetbrains'],
        jetbrainsItalic: ['JetbrainsItalic'],
        lato: ['Lato'],
        sourceSerif: ['Source-Serif-4'],
        caveat: ['Caveat'],
        lora: ['Lora'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [require("daisyui")],
}