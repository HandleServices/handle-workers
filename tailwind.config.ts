import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      handle: {
        blue: '#1A73E8',
      },
      background: '#E1E1E6',
    },
  },
  plugins: [],
}
export default config
