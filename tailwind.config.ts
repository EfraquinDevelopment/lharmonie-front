import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "-xs": { max: "374px" },
        "-sm": { max: "639px" },
        "-md": { max: "767px" },
        "-lg": { max: "1023px" },
        "-xl": { max: "1279px" },
        xs: { min: "375px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "spotify-gradient":
          "linear-gradient(to bottom, #8E723C 50%, #000000 50%)",
        "mobile-spotify-gradient":
          "linear-gradient(to bottom, #8E723C 50%, #000000 50%)",
      },
      colors: {
        lharmonie: {
          primary: "#F5F5F0",
          secondary: "#232323",
          hover: "#8B4513",
        },
      },
      fontFamily: {
        sans: ["EB Garamond", "Sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
