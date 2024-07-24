import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
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
        aerospace_yellow: {
          DEFAULT: '#ffae03',
          100: '#342400',
          200: '#684700',
          300: '#9c6b00',
          400: '#d08e00',
          500: '#ffae03',
          600: '#ffc037',
          700: '#ffd069',
          800: '#ffdf9b',
          900: '#ffefcd',
        },
        fulvous: {
          DEFAULT: '#e67f0d',
          100: '#2e1a03',
          200: '#5d3405',
          300: '#8b4e08',
          400: '#b9680b',
          500: '#e67f0d',
          600: '#f39b37',
          700: '#f6b469',
          800: '#f9cd9b',
          900: '#fce6cd',
        },
        aerospace_orange: {
          DEFAULT: '#fe4e00',
          100: '#330f00',
          200: '#661f00',
          300: '#992e00',
          400: '#cc3d00',
          500: '#fe4e00',
          600: '#ff7033',
          700: '#ff9466',
          800: '#ffb899',
          900: '#ffdbcc',
        },
        chili_red: {
          DEFAULT: '#e9190f',
          100: '#2f0503',
          200: '#5e0a06',
          300: '#8d1009',
          400: '#bc150c',
          500: '#e9190f',
          600: '#f3453b',
          700: '#f6736c',
          800: '#f9a29d',
          900: '#fcd0ce',
        },
        rose: {
          DEFAULT: '#ff0f80',
          100: '#360019',
          200: '#6c0032',
          300: '#a2004c',
          400: '#d80065',
          500: '#ff0f80',
          600: '#ff3f99',
          700: '#ff6fb2',
          800: '#ff9fcc',
          900: '#ffcfe5',
        },
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
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0',
          },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
        'background-position-spin': {
          '0%': { backgroundPosition: 'top center' },
          '100%': { backgroundPosition: 'bottom center' },
        },
        meteor: {
          '0%': { transform: 'rotate(-215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(-215deg) translateX(-700px)',
            opacity: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
        gradient: 'gradient 8s linear infinite',
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        grid: 'grid 15s linear infinite',
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
        backgroundPositionSpin: 'background-position-spin 3000ms infinite alternate',
        meteor: 'meteor 5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
