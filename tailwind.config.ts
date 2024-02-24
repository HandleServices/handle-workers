import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...defaultTheme,
    colors: {
      ...colors,
      handle: {
        background: '#E1E1E6',
        blue: '#1A73E8',
        white: '#F7F8F4',
        gray: '#7c828d',
        red: {
          500: '#FF5252',
          600: '#FF3636',
        },
      },
      'custom-gray': {
        '800': '#FFFFFF',
        '700': '#E1E1E6',
        '600': '#C4C4CC',
        '500': '#8D8D99',
        '400': '#7C7C8A',
        '300': '#323238',
        '200': '#202024',
        '100': '#121214',
      },
    },
  },
  plugins: [],
}
export default config
