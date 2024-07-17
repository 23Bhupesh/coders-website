import { Lato, Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/Background_Dusty_Texture.svg')",
      },
      fontFamily: {
        lemonmilk: ['Lemon Milk', 'sans-serif'],
        inter:['Inter', 'sans-serif'],
        leckerli: ['Leckerli One', 'cursive'],
        lato: ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        'extra-widest': '0.45em',
      },
    },
  },
  plugins: [],
};
export default config;
