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
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  safelist: [{ pattern: /prose-(lime|yellow)/ }],
  theme: {
    extend: {
      backgroundImage: {
        minus:
          'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nIzAwMCcgZD0nTTAgMTMuNVYxMGgyNHYzLjV6Jy8+PC9zdmc+)',
        plus: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAgMEgxMy41VjI0SDEwVjBaJyBmaWxsPSdibGFjaycgLz48cGF0aCBkPSdNMCAxMy41TDQuMTczNzFlLTA4IDEwSDI0VjEzLjVIMFonIGZpbGw9J2JsYWNrJyAvPjwvc3ZnPg==)',
        arrow:
          'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIHZpZXdCb3g9JzAgMCA0OCA0OCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAgMjRIMzgnIHN0cm9rZT0nIzM0M0EzRicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLz48cGF0aCBkPSdNMjQgMTBMMzggMjRMMjQgMzgnIHN0cm9rZT0nIzM0M0EzRicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLz48L3N2Zz4K)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        yellow: '#F5FF51',
        qux: '#001E20',
        gray: {
          light: '#f7f7f7',
          DEFAULT: '#8F8F8F',
        },
        red: {
          DEFAULT: '#ff0000',
          light: '#FF5C00',
        },
        lime: {
          DEFAULT: '#2CE07D'
        },
        screens: {
          md: '760px',
          lg: '1280px',
        },
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
        base: [rem(16), rem(24)],
        lg: [rem(18), rem(24)],
        '3xl': [rem(32), rem(34)],
        '4xl': [rem(35), rem(40)],
        '5xl': [rem(48), rem(50)],
        '6xl': [rem(64), rem(62)],
        '7xl': [rem(72), rem(68)],
        '8xl': [rem(90), rem(80)],
        '9xl': [rem(110), rem(90)],
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
        container: rem(1280),
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
        default: '3fr, 7fr',
      },
      typography: ({ theme }) => ({
        lime: {
          css: {
            '--tw-prose-quote-borders': theme('colors.lime.DEFAULT'),
            figcaption: {
              color: theme('colors.gray'),
              borderLeftColor: theme('colors.lime.DEFAULT'),
            },
          },
        },
        yellow: {
          css: {
            '--tw-prose-quote-borders': theme('colors.yellow'),
            figcaption: {
              color: theme('colors.gray'),
              borderLeftColor: theme('colors.yellow'),
            },
          },
        },
        DEFAULT: {
          // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
          css: {
            '--tw-prose-body': theme('colors.current'),
            '--tw-prose-headings': theme('colors.current'),
            '--tw-prose-lead': theme('colors.current'),
            '--tw-prose-links': theme('colors.gray'),
            '--tw-prose-bold': theme('colors.current'),
            '--tw-prose-quotes': theme('colors.current'),
            '--tw-prose-bullets': theme('colors.current'),
            '--tw-prose-counters': theme('colors.current'),
            '--tw-prose-hr': theme('colors.gray.DEFAULT'),
            lineHeight: round(24 / 16),
            fontWeight: theme('fontWeight.light'),
            '[class~="lead"]': {
              fontSize: em(32, 16),
              lineHeight: round(36 / 32),
              fontWeight: theme('fontWeight.light'),
            },
            // p: {
            //   em: {
            //     fontStyle: 'normal',
            //   },
            // },
            blockquote: {
              fontWeight: theme('fontWeight.light'),
              fontStyle: 'normal',
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
              marginBottom: 0,
            },
            figcaption: {
              borderLeftWidth: '0.3125rem',
              paddingLeft: '0.5em',
              maxWidth: rem(730),
              fontSize: 18,
              lineHeight: round(20 / 18),
            },
          },
        },
        xl: {
          css: [
            {
              fontSize: rem(22),
              lineHeight: round(29 / 22),
              p: {
                marginTop: em(32, 22),
                marginBottom: em(32, 22),
              },
              '[class~="lead"]': {
                fontSize: em(48, 22),
                lineHeight: round(54 / 48),
                marginTop: em(32, 48),
                marginBottom: em(32, 48),
              },
              '[class~="h3"]': {
                fontSize: em(35, 22),
                lineHeight: round(40 / 35),
                marginTop: em(32, 35),
                marginBottom: em(32, 35),
              },
              h1: {
                fontSize: em(90, 22),
                lineHeight: round(80 / 90),
                marginTop: em(16, 90),
                marginBottom: em(16, 90),
              },
              h2: {
                fontSize: em(48, 22),
                lineHeight: round(50 / 48),
                marginTop: em(32, 48),
                marginBottom: em(32, 48),
              },
              h3: {
                fontSize: em(35, 22),
                lineHeight: round(40 / 35),
                marginTop: em(32, 35),
                marginBottom: em(32, 35),
              },
              h4: {
                fontSize: em(35, 22),
                lineHeight: round(40 / 35),
                marginTop: em(32, 35),
                marginBottom: em(32, 35),
              },
              img: {
                marginTop: em(32, 22),
                marginBottom: em(32, 22),
              },
              blockquote: {
                fontSize: em(35, 22),
                lineHeight: round(44 / 35),
                paddingLeft: em(12, 35),
                borderLeftWidth: em(8, 35),
                marginTop: em(32, 35),
                marginBottom: em(32, 35),
              },
              figure: {
                marginTop: em(32, 22),
                marginBottom: em(32, 22),
              },
              figcaption: {
                fontSize: em(16, 22),
                lineHeight: round(22 / 16),
                paddingLeft: em(12, 16),
                borderLeftWidth: em(8, 16),
                marginTop: em(32, 16),
                maxWidth: rem(580)
              },
              ul: {
                marginTop: em(32, 22),
                marginBottom: em(32, 22),
                paddingLeft: em(32, 22),
              },
              li: {
                marginTop: em(16, 22),
                marginBottom: em(16, 22),
              },
              hr: {
                marginTop: em(32, 22),
                marginBottom: em(32, 22),
              },
            },
          ],
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
            maxWidth: rem(1280),
            paddingLeft: rem(40),
            paddingRight: rem(40),
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

// http://gridcalculator.dk/#/1280/10/40/40 / 115
