/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        reactDark: "#1e1e1e",
        reactGray: "#2d2d2d",
        reactLightGray: "#3a3a3a",
        reactText: "#d4d4d4",
        reactBlue: "#61dafb",
        reactWhite: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};