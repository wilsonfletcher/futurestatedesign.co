const plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
      current: 'currentColor',
			yellow: '#F5FF51',
			qux: '#001E20',
			black: '#000',
			white: '#fff'
		},
		extend: {
			screens: {
      	md: '834px',
      	lg: '1280px'
			},
			fontWeight: {
				light: 400,
				regular: 500,
				roman: 500,
				medium: 600,
				bold: 700,
				black: 900
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
				'foo': 310,
				'cols-6': '19.375rem', // 310
    	},
			 gridTemplateColumns: {
        // Simple 16 column grid
        // '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'default': '2fr, 6fr',
      },
			typography: ({ theme }) => ({
				black: {
					css: {
						'--tw-prose-body': theme('colors.black'),
						'--tw-prose-lead': theme('colors.black'),
						'--tw-prose-links': theme('colors.black'),
						'--tw-prose-bold': theme('colors.black'),
						'--tw-prose-quotes': '#757474',
						'--tw-prose-quote-borders': theme('colors.black'),
						'--tw-prose-bullets': theme('colors.black')
					}
				},
				white: {
					css: {
						'--tw-prose-body': theme('colors.white'),
						'--tw-prose-lead': theme('colors.white'),
						'--tw-prose-links': theme('colors.white'),
						'--tw-prose-bold': theme('colors.white'),
						'--tw-prose-quotes': '#757474',
						'--tw-prose-quote-borders': theme('colors.white'),
						'--tw-prose-bullets': theme('colors.white')
					}
				},
				DEFAULT: {
          // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
          css: {
						// fontSize: rem(18),
						lineHeight: round(24 / 16),
						h2: {
							fontWeight: theme('fontWeight.regular'),
						},
						'.lead': {
							lineHeight: 1,
						},
						blockquote: {
							fontStyle: 'normal',
							maxWidth: 580,
							quotes: 'none !important'
						}
					}
				},
				lg: {
					css: {
						fontSize: rem(18),
						lineHeight: round(24 / 18),
						'.lead': {
							fontSize: em(30, 18),
							lineHeight: 1,
						},
						blockquote: {
							fontSize: em(18, 18)
						}
					}
				},
				xl: {
					css: {
						fontSize: rem(24),
						lineHeight: round(32 / 24),
						h2: {
							fontSize: em(48, 24),
							marginTop: 0,
							marginBottom: em(24, 48)
						},
						'.lead': {
							fontSize: em(48, 24),
							lineHeight: 1,
						},
						blockquote: {
							fontSize: em(18, 24)
						}
					}
				}
			}),
		},
	},
	corePlugins: {
    container: false
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
            paddingRight: 40
          }
        },
      })

			// addComponents(section)

      addUtilities({
        '.text-optimize': {
          textRendering: 'optimizeLegibility'
        }
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