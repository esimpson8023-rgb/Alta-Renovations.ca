import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F4EE",
          50: "#FDFCFA",
          100: "#F7F4EE",
          200: "#EFE9DF",
        },
        charcoal: {
          DEFAULT: "#1A1815",
          light: "#28251F",
          soft: "#413C34",
        },
        stone: {
          DEFAULT: "#6B6459",
          light: "#9A9184",
          pale: "#D8D2C6",
        },
        accent: {
          DEFAULT: "#AD8148",
          light: "#C39C63",
          dark: "#8A6335",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        successIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        successIconIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        errorIn: {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeIn: "fadeIn 1s ease forwards",
        bounceSlow: "bounceSlow 2.2s ease-in-out infinite",
        successIn: "successIn 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        successIconIn:
          "successIconIn 300ms cubic-bezier(0.16, 1, 0.3, 1) 70ms both",
        errorIn: "errorIn 180ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
