
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        es: ["es"], 
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};