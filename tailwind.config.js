const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "#18181B",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
