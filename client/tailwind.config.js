/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,svg}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
   tailwindcssAnimate
  ],
}

