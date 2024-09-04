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
          'hero-gradient': 'linear-gradient(180deg, rgba(255,245,1,1) 10%, rgba(88,252,57,1) 27%, rgba(56,167,252,1) 40%, rgba(245,24,246,1) 62%, rgba(212,28,254,1) 68%, rgba(244,132,37,1) 80%, rgba(254,233,1,1) 100%)',
        },

      fontFamily: {
        cedarvilleCursive: ["var(--cedarvilleCursive)"],
    
      },
      boxShadow:{
        whiteShadow: "10px 10px 0px 0px rgba(255, 255, 255, 1)",
        PurpleShadow: "10px 10px 0px 0px rgba(116, 0, 146, 1)",
        BlackShadow: "5px 5px 0px 0px rgba(142, 137, 0, 1)",
        DarkBlackShadow: "5px 5px 0px 0px rgba(0, 0, 0, 1)",
      }
    },
  },
  plugins: [],
};
export default config;
