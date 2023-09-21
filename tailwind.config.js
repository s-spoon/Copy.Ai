/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      fontSize: {
        'h3': '0.875rem',
      }
    },
  },
  plugins: [],
};
