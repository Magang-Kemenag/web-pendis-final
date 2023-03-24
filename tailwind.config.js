/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "base-blue": "#3B8686",
        "hover-blue": "#0B486B",
        "base-green": "#A8DBA8",
        "dark-green": "#79BD9A",
        ftitle: "#333333",
        fbody: "#666666",
        ffield: "#b3b3b3",
        fdisable: "#cccccc",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
