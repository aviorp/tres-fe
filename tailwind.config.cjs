const colors = require('tailwindcss/colors');


const config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        black: "#18181b",
        "alert-success": "#064e3b",
        info: "#1e40af",
        ringWidth: {
          DEFAULT: "0px", // Set the default ring width to 0 to remove focus rings
        },
        ringColor: {
          DEFAULT: "transparent", // Set the default ring color to transparent
        },
        primary: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
      },
    
    },
  },
};

module.exports = config;
