/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,pug}",
    "./layouts/**/*.vue",
    "./pages/**/*.{vue,pug}",
    "./sources/**/*.{vue,pug}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      cursive: ["Caprasimo", "cursive"],
      cherry: ["Cherry Bomb One", "cursive"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
        slideInDown: "slideInDown 3s ease-in-out",
        slideInRight: "slideInRight 3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(120%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
