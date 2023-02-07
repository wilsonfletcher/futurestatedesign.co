const plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      yellow: '#F5FF51',
      qux: '#001E20',
      grose: '#F5FF51',
      cableGreen: '#19333C',
      swamp: '#001E20',
      black: '#000',
      osloGray: '#808E8F',
      gray: {
        DEFAULT: '#8F8F8F',
      },
      alabaster: '#F7F7F7',
      white: '#fff',
      red: {
        DEFAULT: '#ff0000',
        light: '#FF5C00',
      },
    },
    extend: {
      screens: {
        md: '760px',
        lg: '1280px',
      },
      fontWeight: {
        light: 400,
        regular: 500,
        roman: 500,
        medium: 600,
        bold: 700,
        black: 900,
      },
      fontFamily: {
        sans: ['neue-haas-grotesk-display', 'sans-serif'],
      },
      width: {
        'cols-2': 310,
        'cols-5': 735,
      },
      maxWidth: {
        'cols-2': 310,
        'cols-5': 735,
      },
      spacing: {
        foo: 310,
        'cols-6': '19.375rem', // 310
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        // '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        default: '2fr, 6fr',
      },
      typography: ({ theme }) => ({
        black: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.black'),
            '--tw-prose-links': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-quotes': '#757474',
            '--tw-prose-quote-borders': theme('colors.yellow'),
            '--tw-prose-bullets': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
            '--tw-prose-hr': '#8F8F8F',
            p: {
              em: {
                color: '#8F8F8F',
              },
            },
            figcaption: {
              borderLeftColor: theme('colors.yellow'),
            },
          },
        },
        white: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-lead': theme('colors.white'),
            '--tw-prose-links': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-quotes': '#757474',
            '--tw-prose-quote-borders': theme('colors.white'),
            '--tw-prose-bullets': theme('colors.white'),
            '--tw-prose-counters': theme('colors.white'),
          },
        },
        DEFAULT: {
          // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
          css: {
            lineHeight: round(24 / 16),
            // '[class~="lead"]': {
            // 	lineHeight: 1,
            // },
            p: {
              em: {
                fontStyle: 'normal',
              },
            },
            blockquote: {
              fontStyle: 'normal',
              maxWidth: 580,
              quotes: 'none !important',
            },
            h1: {
              fontWeight: theme('fontWeight.regular'),
            },
            h2: {
              fontWeight: theme('fontWeight.regular'),
            },
            h3: {
              fontWeight: theme('fontWeight.regular'),
            },
            h4: {
              fontWeight: theme('fontWeight.regular'),
            },
            figcaption: {
              borderLeftWidth: '0.3125rem',
              paddingLeft: '0.5em',
              maxWidth: 580,
              fontSize: 18,
              lineHeight: round(20 / 18),
            },
          },
        },
        lg: {
          css: {
            fontSize: rem(18),
            lineHeight: round(24 / 18),
            '[class~="lead"]': {
              fontSize: em(30, 18),
              lineHeight: round(30 / 30),
              marginTop: em(15, 30),
              marginBottom: em(15, 30),
            },
            h3: {
              fontSize: em(30, 18),
              lineHeight: round(30 / 30),
            },
            blockquote: {
              fontSize: em(18, 18),
              lineHeight: round(18 / 18),
              paddingLeft: em(10, 18),
            },
          },
        },
        xl: {
          css: {
            fontSize: rem(24),
            lineHeight: round(32 / 24),
            // p: {
            // 	marginTop: em(32, 24),
            // 	marginBottom: em(32, 24),
            // },
            '[class~="intro"]': {
              fontSize: em(48, 24),
              lineHeight: round(50 / 48),
              marginTop: em(24, 48),
              marginBottom: em(24, 48),
            },
            '[class~="lead"]': {
              fontSize: em(35, 24),
              lineHeight: round(40 / 35),
              marginTop: em(24, 35),
              marginBottom: em(24, 35),
            },
            'h1, .h1': {
              fontSize: em(110, 24),
              lineHeight: round(110 / 110),
              marginTop: em(16, 110),
              marginBottom: em(16, 110),
            },
            h2: {
              fontSize: em(60, 24),
              lineHeight: round(60 / 60),
              marginTop: em(60, 60),
              marginBottom: em(60, 60),
            },
            h3: {
              fontSize: em(48, 24),
              lineHeight: round(48 / 48),
              marginTop: em(24, 48),
              marginBottom: em(24, 48),
            },
            h4: {
              fontSize: em(35, 24),
              lineHeight: round(44 / 35),
              marginTop: em(24, 35),
              marginBottom: em(24, 35),
            },
            blockquote: {
              fontSize: em(18, 24),
              lineHeight: round(18 / 18),
              paddingLeft: em(10, 18),
            },
            figcaption: {
              fontSize: em(18, 24),
              lineHeight: round(20 / 18),
              paddingLeft: em(10, 18),
            },
          },
        },
      }),
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      // const section = {
      // 	'.section': {
      // 		backgroundColor: 'red',
      // 	}
      // }

      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen md': {
            maxWidth: 1280,
            paddingLeft: 40,
            paddingRight: 40,
          },
        },
      })

      // addComponents(section)

      addUtilities({
        '.text-optimize': {
          textRendering: 'optimizeLegibility',
        },
      })
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
      // strategy: 'class', // only generate classes
    }),
    require('@tailwindcss/typography'),
  ],
}

// http://gridcalculator.dk/#/1280/8/40/40 / 115
