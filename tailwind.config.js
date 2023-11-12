/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['inter']
      },

      colors: {
        "ungu": '#5D50C6',
        "pink": '#F85E9F',
        "orange": '#FF5722',
        "yellow": '#FACD49'
      }

    },
  },
  plugins: [],
}

