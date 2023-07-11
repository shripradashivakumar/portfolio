/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      colors: {
        "dark-text": "#594D3F",
        "primary-light": "#fff6ea",
        "dark-bg-1": "#726556",
        dark: "#ada295",
        "light-ring": "#ffdcba",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    keyframes: {
      typing: {
        from: { width: "0" },
        to: { width: "9ch" },
      },
      blink: {
        from: { "border-color": "transparent" },
        to: { "border-color": "black" },
      },
    },
    animation: {
      typing: "typing 3s steps(40) ",
    },
  },
  plugins: [],
};
