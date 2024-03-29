/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: "#EB568E",
        primaryBlue: '#144EE3',
        primaryBlack: '#0B101B',
        primaryGrey: '#181E29',
        primaryLite: '#C9CED6',
        primaryGreen: '#1EB036',
        primaryBrown: '#B0901E',
        stroke: '#353C4A'
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
}

