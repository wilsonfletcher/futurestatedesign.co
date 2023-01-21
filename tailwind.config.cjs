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
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem'
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
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}

// http://gridcalculator.dk/#/1280/8/40/40 / 115