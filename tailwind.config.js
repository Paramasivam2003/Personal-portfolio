/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "my-font" : "Pacifico",
      "sec-font" : "EB Garamond",
    }
  },
  plugins: [],
}

