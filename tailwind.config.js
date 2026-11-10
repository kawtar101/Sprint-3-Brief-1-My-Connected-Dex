/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./data.js"],
  theme: {
    extend: {
      // Thème NEUTRE de départ.
      // TODO (Partie 1) : remplacez ces valeurs par les couleurs et les polices de votre univers.
      colors: {
        brand: {
          DEFAULT:  "#E3350D",
          light: "#FCE8E3",
        },
         ground: "#F7F7F7",
        ink: "#242424",
        line: "#D9D9D9",
        muted: "#737373"
      },
      fontFamily: {
        display: ["Arial", "sans-serif"],
        body: ["Arial", "sans-serif"],
       
      },
      borderRadius: {
        card: "1rem",
      },
    },
  },
  plugins: [],
};
