/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },

      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        opacity: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },

      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        // staggered opacity animation with delay of 0.5s for each element in the array of children of the parent element with class name "staggered"
        opacity: "opacity 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
