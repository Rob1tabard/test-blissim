/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blissimBlue: {
          DEFAULT: "#283149",
          400: "#404b69",
          200: "#dbedf3",
        },
        blissimAccent: {
          DEFAULT: "#00818a",
        },
      },
    },
  },
  plugins: [],
};
