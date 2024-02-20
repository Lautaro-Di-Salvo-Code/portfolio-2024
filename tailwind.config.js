/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "yoCodeando": "url('/assets/yoCodeando.webp')"
      }
    },
    maxWidth:{
      "maximoAnchosmallwide": "900px",
      "maximoAnchoNormal": "900px",
      "maximoAnchoUltrawide": "1200px",
      "maxw-img": "10rem"
    },
    maxHeight:{
      "maximoAlto-img": "197px"

    },
    fontSize:{
      "tamaño-letra-titulosDeSecciones": "2rem"
    },
   backgroundColor:{
    "color-botonesproyectos": "#4d4dad",
    "hovercolor-botonesproyectos":"#7373d7",
   },
    screens:{
      // super small
      "ssm": "300px",
      // very small
      "vsm": "400px",
      // small
      "sm": "600px",
      // medium
      "md": "800px",
      // largue
      "lg": "1200px",
      // very largue
      "vlg": "1400px",
      // super largue
      "slg": "1600px",
    }
  },
  plugins: [],
  
}

