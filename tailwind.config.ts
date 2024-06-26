import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export type DefaultColors = typeof colors

function handleTheme() {
  return {
    handle: {
      background: {
        DEFAULT: '#E1E1E6',
        blue: '#D1E3FA',
        intern: '#F4F5F8',
      },
      white: '#F7F8F4',
      blue: {
        DEFAULT: '#1A73E8',
        '500': {
          15: '#1A73E815',
          20: '#1A73E820',
        },
      },
      gray: {
        DEFAULT: '#7c828d',
        '700': '#323238',
        icons: '#7887A4',
      },
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
  }
}

const config: Config = {
  mode: 'jit',
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  ...handleTheme(), // to import handle color as tailwind config.
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        ...handleTheme(),
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        iconsOverlay: `
          url('../app/auth/(complete)/complete_register/assets/icons_overlay.svg'),
          linear-gradient(theme('colors.handle.blue.DEFAULT'), theme('colors.handle.blue.DEFAULT'))
        `,
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export type Colors = typeof colors

export default config
