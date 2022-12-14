import {
  defineConfig,
  presetUno,
  presetTypography,
  presetIcons,
  transformerDirectives,
  presetAttributify,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'foo': 'w-full mx-auto px-4 lg:px-10 max-w-[80rem] border' },
    { 'c-h0': 'text-[5rem] leading-none tracking-[-0.01em] md:text-[6.25rem] lg:text-[7.5rem]' },
    { 'c-h1': 'text-[3.75rem] leading-none' },
    { 'c-h2': 'text-[5rem] leading-none' },
    { 'c-h3': 'text-[3rem] leading-none' },
    { 'c-label': 'text-base leading-body' },
    { 'c-link': 'text-[1.625rem] leading-none' },
    { 'c-link-large': 'text-[3.75rem] leading-none' },
    { 'button': 'text-[1.125rem] leading-none inline-block p-3 border-2' },
    { 'button--primary': 'bg-yellow' },
    { 'lead': 'text-[3rem]' }
  ],
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography({
      cssExtend: {
        h1: {
          'font-size': '12px',
          'line-height': 1
        },
        'hr': {
          color: 'red'
        }
      }
    }),
    presetIcons({
      collections: {
        custom: {
          external: '<svg width="18" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke- width="2" d = "M1.293 16.293L16.189 1.396M16.793 1v14.897M2 1.103h14.897" /></svg>'
        }
      }
    }),
  ],
  theme: {
    breakpoints: {
      md: '834px',
      lg: '1280px'
    },
    fontFamily: {
      sans: "'neue-haas-grotesk-display', sans-serif",
    },
    spacing: {
      foo: '19.375rem',
    },
    colors: {
      yellow: 'rgba(245, 255, 81, 1)'
    }
  }
})
