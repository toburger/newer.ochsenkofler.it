const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["layouts/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ochsenkofler: {
          primary: "#812020",
          secondary: "#e9e9e9",
          green: "#5a781c",
        },
      },
      fontFamily: {
        ochsenkofler: ["UnifrakturCook", "sans-serif"],
        body: ["'Exo 2'", "sans-serif"],
      },
      gridTemplateColumns: {
        ochsenkofler: "auto 1fr",
      },
      gridTemplateRows: {
        ochsenkofler: "auto 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
