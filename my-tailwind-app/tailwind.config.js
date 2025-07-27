// tailwind.config.js
module.exports = {
  content: ["./public/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-out forwards",
        slideIn: "slideIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { opacity: 0, transform: "translateY(50px)" },
          '100%': { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
