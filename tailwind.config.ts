import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        cedarvilleCursive: ["var(--cedarvilleCursive)"],
    
      },
      boxShadow:{
        whiteShadow: "10px 10px 0px 0px rgba(255, 255, 255, 1)",
        PurpleShadow: "10px 10px 0px 0px rgba(116, 0, 146, 1)",
        BlackShadow: "5px 5px 0px 0px rgba(142, 137, 0, 1)",
      }
    },
  },
  plugins: [],
};
export default config;
