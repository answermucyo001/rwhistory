/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#080808",
          800: "#0D0D0D",
          700: "#151515",
          600: "#222222",
          500: "#333333",
        },
        gold: {
          DEFAULT: "#D4AF37",
          deep: "#C9A227",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F2F2F2",
          muted: "#A5A5A5",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}
