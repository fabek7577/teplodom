/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        yellow: "#FFB12A",
      },
      backgroundImage: {
        linarOrange:
          "linear-gradient(180deg, rgb(255, 165, 9), rgb(246, 108, 79));",
        linarGreen:
          "linear-gradient(180deg, rgb(151, 232, 181), rgb(92, 182, 127));",
        linarYellow:
          "linear-gradient(180deg, rgb(255, 243, 1), rgb(255, 179, 3));",
        linarBrown:
          "linear-gradient(180deg, rgb(183, 152, 145), rgb(148, 113, 107));",
      },
    },
  },
  plugins: [],
});
