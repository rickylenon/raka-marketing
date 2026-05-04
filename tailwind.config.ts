import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "0",
        lg: "0",
        xl: "0",
      },
      colors: {
        raka: {
          bg: "#000000",
          surfaceLow: "#111111",
          surfaceLowest: "#000000",
          surface: "#000000",
          surfaceContainer: "#1a1a1a",
          surfaceHigh: "#222222",
          surfaceHighest: "#2a2a2a",
          primary: "#ffb4a8",
          primaryContainer: "#ff5540",
          onSurface: "#ffffff",
          onSurfaceVariant: "#a3a3a3",
          onSurfaceMuted: "#737373",
          onPrimaryFixed: "#410000",
          inversePrimary: "#930100",
          outlineGhost: "rgba(96, 62, 57, 0.15)",
          red: "#ff5540",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
        display: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
        helvetica: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "var(--font-sans)",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
