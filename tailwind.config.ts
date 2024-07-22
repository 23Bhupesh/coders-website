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
        roboto: ['Roboto', 'sans-serif'],
        halfmoon: ['Halfmoon', 'sans-serif'],
        moshitomono: ['Moshito Mono', 'monospace'],
      },
      letterSpacing: {
        'extra-widest': '0.45em',
      },keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
