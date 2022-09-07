/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        "oxford-blue": "#0a192f",
        "dark-magenta": "#9d0885",
        "darker-magenta": "#620653",
        "russian-violet": "#4E106F",
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
