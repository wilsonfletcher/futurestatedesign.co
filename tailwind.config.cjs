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
      fontSize: {
        lg: [rem(18), rem(24)],
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
        '1px': '1px',
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
        default: {
          css: {
            '--tw-prose-body': theme('colors.current'),
            '--tw-prose-headings': theme('colors.current'),
            '--tw-prose-lead': theme('colors.current'),
            '--tw-prose-links': theme('colors.current'),
            '--tw-prose-bold': theme('colors.current'),
            '--tw-prose-quotes': theme('colors.gray.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.yellow'),
            '--tw-prose-bullets': theme('colors.current'),
            '--tw-prose-counters': theme('colors.current'),
            '--tw-prose-hr': theme('colors.gray.DEFAULT'),
            figcaption: {
              borderLeftColor: theme('colors.black'),
            },
          },
        },
        DEFAULT: {
          // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
          css: {
            lineHeight: round(24 / 16),
            // '[class~="lead"]': {
            // 	lineHeight: 1,
            // },
            // p: {
            //   em: {
            //     fontStyle: 'normal',
            //   },
            // },
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
            img: {
              marginTop: 0,
              marginBottom: 0
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
          css: [
            {
              fontSize: rem(18),
              lineHeight: round(24 / 18),
              p: {
                marginTop: em(24, 18),
                marginBottom: em(24, 18),
              },
              '[class~="lead"]': {
                fontSize: em(32, 18),
                lineHeight: round(34 / 32),
                marginTop: em(24, 32),
                marginBottom: em(24, 32),
              },
              '[class~="h3"]': {
                fontSize: em(24, 18),
                lineHeight: round(34 / 24),
                marginTop: em(24, 24),
                marginBottom: em(24, 24),
              },
              h3: {
                fontSize: em(30, 18),
                lineHeight: round(30 / 30),
              },
              img: {
                marginTop: 0,
                marginBottom: 0
              },
              blockquote: {
                fontSize: em(18, 18),
                lineHeight: round(18 / 18),
                paddingLeft: em(10, 18),
              },
              hr: {
                marginTop: em(24, 18),
                marginBottom: em(24, 18),
              }
            },
          ]
        },
        xl: {
          css: [
            {
              fontSize: rem(24),
              lineHeight: round(32 / 24),
              p: {
                marginTop: em(32, 24),
                marginBottom: em(32, 24),
              },
              '[class~="lead"]': {
                fontSize: em(48, 24),
                lineHeight: round(50 / 48),
                marginTop: em(32, 48),
                marginBottom: em(32, 48),
              },
              '[class~="h3"]': {
                fontSize: em(35, 24),
                lineHeight: round(40 / 35),
                marginTop: em(32, 35),
                marginBottom: em(32, 35),
              },
              h1: {
                fontSize: em(110, 24),
                lineHeight: round(110 / 110),
                marginTop: em(16, 110),
                marginBottom: em(16, 110),
              },
              h2: {
                fontSize: em(48, 24),
                lineHeight: round(50 / 48),
                marginTop: em(32, 48),
                marginBottom: em(32, 48),
              },
              h3: {
                fontSize: em(35, 24),
                lineHeight: round(40 / 35),
                marginTop: em(32, 35),
                marginBottom: em(32, 35),
              },
              h4: {
                fontSize: em(35, 24),
                lineHeight: round(40 / 35),
                marginTop: em(32, 35),
                marginBottom: em(32, 35),
              },
              img: {
                marginTop: 0,
                marginBottom: 0
              },
              blockquote: {
                fontSize: em(18, 24),
                lineHeight: round(18 / 18),
                paddingLeft: em(10, 18),
              },
              figure: {
                marginTop: em(32, 24),
                marginBottom: em(32, 24),
              },
              figcaption: {
                fontSize: em(18, 24),
                lineHeight: round(20 / 18),
                paddingLeft: em(10, 18),
              },
              ul: {
                marginTop: em(32, 24),
                marginBottom: em(32, 24),
                paddingLeft: em(32, 24),
              },
              li: {
                marginTop: em(16, 24),
                marginBottom: em(16, 24),
              },
              hr: {
                marginTop: em(32, 24),
                marginBottom: em(32, 24),
              }
            },
          ]
        }
      })
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
