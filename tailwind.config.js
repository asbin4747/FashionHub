const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
       backgroundImage: {
      'heading-image': "url(/body5.jpg)",
      'night-sky': "url(/nightsky.jpg)",
      
    },
    colors: {
      stone: colors.warmGray,
      sky: colors.lightBlue,
      neutral: colors.trueGray,
      gray: colors.coolGray,
      slate: colors.blueGray,
      red:colors.red,
      lime:colors.lime,
      cyan:colors.cyan,
      emerald: colors.emerald,
      indigo: colors.indigo,
      fuchsia: colors.fuchsia,
      violet: colors.violet,
      zinc: colors.zinc,
      pink: colors.pink,
      rose: colors.rose,
  }, 
  
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
