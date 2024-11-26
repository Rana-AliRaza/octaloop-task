 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryLight: "#ED213A",
        primaryDark: "#FD1640",
      },
      backgroundColor: {
        bgPrimary: "#F5F7FA",
      },
      fontFamily: {
        zed: ["'Zen Dots'", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
