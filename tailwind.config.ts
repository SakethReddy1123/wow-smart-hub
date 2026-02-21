import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4B1F6F",
          deep: "#4B1F6F",
          magenta: "#D81B60",
          pink: "#F8BBD0",
          white: "#FFFFFF",
        },
        wow: {
          purple: "#4B1F6F",
          magenta: "#D81B60",
          pink: "#F8BBD0",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #4B1F6F 0%, #6B2D8F 40%, #D81B60 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #4B1F6F 0%, #7B3FA3 50%, #D81B60 100%)",
        "gradient-soft":
          "linear-gradient(180deg, rgba(248, 187, 208, 0.15) 0%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(75, 31, 111, 0.12)",
        card: "0 8px 32px rgba(75, 31, 111, 0.15)",
        hover: "0 12px 40px rgba(216, 27, 96, 0.2)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
