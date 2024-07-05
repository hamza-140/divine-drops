/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-bg": "#738C71",
      "primary-txt-dark": "#283E29",
      "primary-txt": "#FEFAE0",
      "primary-bg-dark": "#4c654d",
    },
    fontFamily: {
      Chelon: ["Chelon"],
      Bona: ["Bona"],
      Futura: ["Futura"],
    },
    extend: {},
  },
  plugins: [],
};
