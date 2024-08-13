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
        offwhite: '#F8F6E2',
        red: '#EA4335',
        green: '#0F9D58',
        black: '#060606',
        yellow: '#FBBC04',
        blue: '#4285F4',
        white: '#ffffff',
        paragraph: '#C3C3C3',
      },
      fontFamily: {
        // sans: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
};
export default config;
