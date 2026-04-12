import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Abhaya Libre', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        base:   '#F8F8F6',
        ink:    '#111111',
        ink2:   '#4A4A47',
        ink3:   '#8A8780',
        border: '#E4E0D8',
        teal:   '#529F99',
        // product pastels
        glp:    { DEFAULT: '#B8E4F0', mid: '#8ED4EA', dark: '#1A6B85' },
        nad:    { DEFAULT: '#A8D8C8', mid: '#78C8A8', dark: '#1E6650' },
        ser:    { DEFAULT: '#F2C4A0', mid: '#E0A070', dark: '#8B4A20' },
        oxy:    { DEFAULT: '#D4B8E8', mid: '#B898D8', dark: '#5A3080' },
        b12:    { DEFAULT: '#F9E07A', mid: '#ECC840', dark: '#7A6200' },
        con:    { DEFAULT: '#F0B8A8', dark: '#8B3A2A' },
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
}

export default config
