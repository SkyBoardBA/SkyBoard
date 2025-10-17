/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#003333",
          gold: "#FFC000",
        },
      },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
};
