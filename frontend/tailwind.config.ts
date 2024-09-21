import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'luckiest': ['"Luckiest Guy"', 'cursive'], // Add Luckiest Guy here
        'geistSans': ['var(--font-geist-sans)', 'sans-serif'], // Already in use
        'geistMono': ['var(--font-geist-mono)', 'monospace'], // Already in use
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Your existing color configuration here...
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
