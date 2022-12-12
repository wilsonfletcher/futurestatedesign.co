import {
  defineConfig,
  presetUno,
  presetTypography,
  presetIcons,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'container': 'px-2' },
    { 'c-h0': 'text-[5rem] leading-none tracking-[-0.01em] md:text-[6.25rem] lg:text-[7.5rem]' },
    { 'c-h1': 'text-[3.75rem] leading-none' },
    { 'c-h2': 'text-[5rem] leading-none tracking-[-0.01em] md:text-[6.25rem] lg:text-[7.5rem]' },
    { 'c-large-link': 'text-[3.75rem] leading-none' }
  ],
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetUno(),
    presetTypography(),
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
      sans: 'Neue Haas Grotesk Display Pro',
    },
    colors: {
      yellow: 'rgba(245, 255, 81, 1)'
    }
  }
})
