const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
      current: 'currentColor',
			yellow: 'rgb(245, 255, 81)',
			red: '#FF5C00',
			qux: 'rgba(25, 51, 60)',
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
        }
      })

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