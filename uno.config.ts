import {
  defineConfig,
  presetUno,
  // presetTypography,
  presetIcons,
  transformerDirectives,
  presetAttributify,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'foo': 'w-full mx-auto px-4 lg:px-10 max-w-[80rem]' },
    { 'h0': 'text-[5rem] font-normal leading-none tracking-[-0.01em] md:text-[6.25rem] lg:text-[7.5rem]' },
    { 'h1': 'text-[3.75rem] font-normal leading-none lg:text-[5rem]' },
    { 'h2': 'text-[2.5rem] font-normal leading-none lg:text-[3.75rem]' },
    { 'h3': 'text-[2rem] font-normal leading-none lg:text-[3rem] bg-purple' },
    { 'label': 'text-base leading-body' },
    { 'link': 'bg-lime hover:(underline)' },
    { 'button': 'text-1.125rem font-bold leading-none inline-block py-4 px-3 border-2' },
    { 'button--primary': 'border-black hover:(bg-black text-white)' },
    { 'button--secondary': 'border-black bg-black text-white hover:(bg-gray border-gray text-white)' },
    { 'body': 'text-24px leading-[calc(32/24)] lg:(text-26px leading-[calc(34/26)])' },
    { 'badge': 'text-2rem leading-none font-bold p-2 inline-block' }
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    // presetTypography({
    //   cssExtend: {
    //     // 24px/32px / 26px/34px
    //     '.h3': {
    //       background: 'red',
    //     },
    //     h1: {
    //       'font-size': '',
    //       'font-weight': 'normal',
    //       'line-height': 1,
    //     },
    //     h2: {
    //       'font-size': '1.66666667em',
    //       'font-weight': 'normal',
    //       'line-height': 1,
    //       'background': 'lime',
    //     },
    //     h3: {
    //       'font-weight': 'normal',
    //       'line-height': 1
    //     },
    //     p: {
    //       'line-height': '1.33333333'
    //     },
    //   }
    // }),
    presetIcons({
      extraProperties: {
        display: 'inline-block'
      },
      collections: {
        custom: {
          arrow: '<svg viewBox="0 0 20 20" fill="none"><path d="M5 15.751l10.26-10.26M15.149 5v10.26m-9.88-9.88h10.26" stroke="currentColor" stroke-width=".76"/></svg>',
          instagram: '<svg viewBox="0 0 32 32"><path d="M16 2.881c4.275 0 4.781.019 6.462.094 1.563.069 2.407.331 2.97.55a4.949 4.949 0 011.837 1.194 4.921 4.921 0 011.194 1.837c.218.563.48 1.413.55 2.969.074 1.688.093 2.194.093 6.463 0 4.274-.019 4.78-.094 6.462-.068 1.563-.33 2.406-.55 2.969a4.95 4.95 0 01-1.193 1.837 4.922 4.922 0 01-1.838 1.194c-.562.219-1.412.481-2.969.55-1.687.075-2.193.094-6.462.094-4.275 0-4.781-.019-6.463-.094-1.562-.069-2.406-.331-2.968-.55a4.949 4.949 0 01-1.838-1.194 4.922 4.922 0 01-1.193-1.837c-.22-.563-.482-1.413-.55-2.969-.075-1.688-.094-2.194-.094-6.462 0-4.275.018-4.782.093-6.463.07-1.563.332-2.406.55-2.969A4.948 4.948 0 014.732 4.72 4.921 4.921 0 016.57 3.525c.562-.219 1.412-.481 2.968-.55C11.22 2.9 11.726 2.881 16 2.881zM16 0c-4.344 0-4.887.019-6.594.094-1.7.075-2.869.35-3.881.744-1.056.412-1.95.956-2.838 1.85-.893.887-1.437 1.78-1.85 2.83C.444 6.539.17 7.7.094 9.4.019 11.113 0 11.656 0 16c0 4.344.019 4.887.094 6.594.075 1.7.35 2.868.744 3.881.412 1.056.956 1.95 1.85 2.837a7.82 7.82 0 002.83 1.844c1.02.394 2.182.669 3.882.744 1.706.075 2.25.094 6.594.094 4.343 0 4.887-.019 6.593-.094 1.7-.075 2.87-.35 3.882-.744a7.82 7.82 0 002.831-1.843 7.822 7.822 0 001.844-2.832c.394-1.019.669-2.181.744-3.881.074-1.706.093-2.25.093-6.594s-.019-4.887-.094-6.594c-.075-1.7-.35-2.868-.743-3.88a7.494 7.494 0 00-1.831-2.845A7.82 7.82 0 0026.48.845C25.462.45 24.3.175 22.6.1 20.887.019 20.344 0 16 0z" fill="currentColor"/><path d="M16 7.781A8.22 8.22 0 007.781 16 8.22 8.22 0 0016 24.219 8.22 8.22 0 0024.219 16 8.22 8.22 0 0016 7.781zm0 13.55a5.332 5.332 0 11.002-10.664A5.332 5.332 0 0116 21.331zM26.462 7.456a1.92 1.92 0 11-3.838 0 1.92 1.92 0 013.838 0z" fill="currentColor"/></svg>',
          linkedin: '<svg viewBox="0 0 32 32"><path d="M29.6313 0H2.3625C1.05625 0 0 1.03125 0 2.30625V29.6875C0 30.9625 1.05625 32 2.3625 32H29.6313C30.9375 32 32 30.9625 32 29.6938V2.30625C32 1.03125 30.9375 0 29.6313 0ZM9.49375 27.2687H4.74375V11.9937H9.49375V27.2687ZM7.11875 9.9125C5.59375 9.9125 4.3625 8.68125 4.3625 7.1625C4.3625 5.64375 5.59375 4.4125 7.11875 4.4125C8.6375 4.4125 9.86875 5.64375 9.86875 7.1625C9.86875 8.675 8.6375 9.9125 7.11875 9.9125ZM27.2687 27.2687H22.525V19.8438C22.525 18.075 22.4937 15.7937 20.0562 15.7937C17.5875 15.7937 17.2125 17.725 17.2125 19.7188V27.2687H12.475V11.9937H17.025V14.0813H17.0875C17.7188 12.8813 19.2688 11.6125 21.575 11.6125C26.3813 11.6125 27.2687 14.775 27.2687 18.8875V27.2687Z" fill="currentColor" /></svg>',
          medium: '<svg viewBox="0 0 32 32"><path d="M18.0499 15.7703C18.0499 20.7979 14.0093 24.8736 9.02511 24.8736C4.04097 24.8736 0 20.797 0 15.7703C0 10.7436 4.04067 6.66667 9.02511 6.66667C14.0096 6.66667 18.0499 10.7426 18.0499 15.7703Z" fill="currentColor" /><path d="M27.9504 15.7703C27.9504 20.5027 25.9301 24.3406 23.4378 24.3406C20.9456 24.3406 18.9253 20.5027 18.9253 15.7703C18.9253 11.0378 20.9453 7.19994 23.4375 7.19994C25.9298 7.19994 27.9501 11.0366 27.9501 15.7703" fill="currentColor" /><path d="M32 15.7703C32 20.0094 31.2895 23.4479 30.4129 23.4479C29.5363 23.4479 28.8261 20.0103 28.8261 15.7703C28.8261 11.5302 29.5366 8.09259 30.4129 8.09259C31.2892 8.09259 32 11.5299 32 15.7703Z" fill="currentColor" /></svg>',
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
      sans: ['neue-haas-grotesk-display', 'sans-serif'],
    },
    spacing: {
      foo: '19.375rem',
    },
    colors: {
      yellow: 'rgba(245, 255, 81, 1)',
      red: '#FF5C00',
    }
  }
})


