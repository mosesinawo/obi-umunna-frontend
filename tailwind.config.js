/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        colorPrimary:"#A4764C",
        greenPrimary:"#0B6F4F",
        
      }
      // backgroundImage: {
      //   "about-us": "url('./src/data/img/aboutus.png')",
      // },
    },
  },
  plugins: [],
};

