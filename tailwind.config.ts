import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: "#FF6B35", // Vibrant Orange
          light: "#FF8C5A",
          dark: "#E55A2B",
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#2C3E50", // Deep Navy
          light: "#34495E",
          dark: "#1A252F",
        },
        // Accent Colors
        accent: {
          DEFAULT: "#F4A261", // Warm Peach
          light: "#F7B685",
        },
        // Background Colors
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#F8F9FA",
          dark: "#E9ECEF",
        },
        // Text Colors
        text: {
          primary: "#2C3E50",
          secondary: "#6C757D",
          tertiary: "#ADB5BD",
          inverse: "#FFFFFF",
        },
        // Semantic Colors
        success: "#28A745",
        error: "#DC3545",
        warning: "#FFC107",
        info: "#17A2B8",
        // Border
        border: "#DEE2E6",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        heading: ["Georgia", "Times New Roman", "serif"],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      spacing: {
        128: "8rem",
        144: "9rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
