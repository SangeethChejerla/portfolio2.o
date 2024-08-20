/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './@/**/*.{ts,tsx}',
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(var(--primary-hue) 100% 95%)',
          100: 'hsl(var(--primary-hue) 95% 90%)',
          200: 'hsl(var(--primary-hue) 90% 80%)',
          300: 'hsl(var(--primary-hue) 85% 70%)',
          400: 'hsl(var(--primary-hue) 80% 60%)',
          500: 'hsl(var(--primary-hue) 75% 50%)',
          600: 'hsl(var(--primary-hue) 70% 40%)',
          700: 'hsl(var(--primary-hue) 65% 30%)',
          800: 'hsl(var(--primary-hue) 60% 20%)',
          900: 'hsl(var(--primary-hue) 55% 10%)',
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
        'slide-from-down-and-fade-1':
          'slideFromDownAndFade 0.6s ease-in-out 0.1s both',
        'slide-from-down-and-fade-2':
          'slideFromDownAndFade 0.6s ease-in-out 0.2s both',
        'slide-from-down-and-fade-3':
          'slideFromDownAndFade 0.6s ease-in-out 0.3s both',
        'slide-from-down-and-fade-4':
          'slideFromDownAndFade 0.6s ease-in-out 0.4s both',
        'slide-from-down-and-fade-5':
          'slideFromDownAndFade 0.6s ease-in-out 0.5s both',
        'slide-from-down-and-fade-6':
          'slideFromDownAndFade 0.6s ease-in-out 0.6s both',
      },
    },

    safelist: [
      {
        pattern:
          /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ['hover', 'ui-selected'],
      },
      {
        pattern:
          /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ['hover', 'ui-selected'],
      },
      {
        pattern:
          /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ['hover', 'ui-selected'],
      },
      {
        pattern:
          /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
      {
        pattern:
          /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
      {
        pattern:
          /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
    ],
  },
  plugins: [typography],
};
