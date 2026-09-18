/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        japanCrimson: "#BC002D",
        japanCrimsonLight: "#FCE8EC",
        washiBg: "#FDFBF7",
        washiSurface: "#FFFFFF",
        sumiInk: "#1F1F24",
        sumiGray: "#5F5E6B",
        matchaGreen: "#2E7D32",
        indigoJlpt: "#1A237E"
      }
    },
  },
  plugins: [],
}
