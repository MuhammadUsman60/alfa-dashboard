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
        alfa: {
          dark: "#0B3B36",
          primary: "#0F4F46",
          light: "#A7E3A1",
          accent: "#7ED957",
          bg: "#F4F7F6",
          card: "#FFFFFF",
          muted: "#E6EFEA"
        }
      }
    }
  },
  plugins: [],
};

export default config;

