import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'raynote-black': '#0A0A0A',
        'flame-orange': '#FF5722',
        'vivid-magenta': '#D500F9',
        'acid-green': '#76FF03',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'archivo': ['Archivo Black', 'sans-serif'],
      },
      backgroundImage: {
        'prism-gradient': 'linear-gradient(135deg, #FF5722 0%, #D500F9 50%, #76FF03 100%)',
      },
    },
  },
  plugins: [],
}

export default config
