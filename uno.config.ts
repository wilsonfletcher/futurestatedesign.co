import {
  defineConfig,
  presetWind,
  // presetTypography,
  presetIcons,
  transformerDirectives,
  presetAttributify,
  transformerVariantGroup,
} from 'unocss'
// import presetRemToPx from '@unocss/preset-rem-to-px'


export default defineConfig({
  shortcuts: [
    { 'foo': 'w-full mx-auto px-16px max-w-1280px md:(px-40px)' },
    { 'h0': 'text-80px tracking-[-0.01em] md:(text-100px) lg:(text-120px)' },
    { 'h1': 'text-60px lg:(text-80px)' },
    { 'h2': 'text-40px lg:(text-60px)' },
    { 'h3': 'text-32px lg:(text-48px)' },
    { 'h4': 'text-21px leading-[1.33333333] lg:(text-35px)' },
    { 'label': 'text-base leading-body' },
    { 'link': 'hover:(underline)' },
    { 'button': 'text-18px font-bold inline-block p-10px border-2px lg:(p-14px)' },
    { 'button--primary': 'border-black hover:(bg-black text-white)' },
    { 'button--secondary': 'border-black bg-black text-white hover:(bg-gray border-gray text-white)' },
    { 'body': 'text-24px leading-[calc(32/24)] lg:(text-26px leading-[calc(34/26)])' },
    { 'badge': 'text-32px font-bold p-2 inline-block' }
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetAttributify(),
    presetWind(),

    // presetRemToPx(),
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
        display: 'block',
      },
      collections: {
        custom: {
          arrow: '<svg viewBox="0 0 20 20"><path d="M5 15.751l10.26-10.26M15.149 5v10.26m-9.88-9.88h10.26" stroke="currentColor" stroke-width="1.2"/></svg>',
          close: '<svg viewBox="0 0 29 30"><path d="M1.06055 1.93945L27.0605 27.8187M27.0605 2.06021L1.06055 27.9395" stroke="currentColor" stroke-width="3"/></svg>',
          fsd: '<svg viewBox="0 0 220 68><path d="M0 28.846h8.433v-10.49H19.85v-6.535H8.433V7.1H22.23V0H0v28.846zM44.455 28.846V8.271H36.83v11.094c0 2.22-1.17 3.631-3.148 3.631-1.815 0-2.743-1.13-2.743-3.268V8.271h-7.626v13.273c0 4.72 2.421 7.947 7.344 7.947 2.824 0 4.841-1.17 6.415-3.308h.12v2.663h7.263zM46.105 12.87h2.663v10.046c0 4.921 2.542 6.334 7.545 6.334 1.372 0 2.582-.202 3.752-.485v-5.608c-2.38.162-3.833.122-3.833-1.936V12.87h3.914v-4.6h-3.914V1.615h-7.464V8.27h-2.663v4.599zM83.108 28.846V8.271h-7.626v11.094c0 2.22-1.17 3.631-3.147 3.631-1.815 0-2.743-1.13-2.743-3.268V8.271h-7.626v13.273c0 4.72 2.421 7.947 7.343 7.947 2.825 0 4.842-1.17 6.416-3.308h.12v2.663h7.263zM93.11 8.27h-7.263v20.576h7.626v-8.432c0-4.64 2.622-6.657 7.101-5.89h.161V8.028c-.242-.12-.645-.201-1.25-.201-2.623 0-4.6.968-6.254 3.55h-.121V8.271zM112.766 29.41c2.622 0 4.68-.524 6.576-1.734 2.018-1.29 3.47-3.106 3.914-4.962h-7.383c-.565 1.008-1.534 1.533-2.865 1.533-2.3 0-3.591-1.453-4.035-3.833h14.687c.08-4.075-1.09-7.746-3.591-10.046-1.897-1.734-4.358-2.783-7.586-2.783-6.495 0-10.974 4.72-10.974 10.933 0 6.294 4.519 10.893 11.257 10.893zm-.121-16.702c1.816 0 3.107 1.372 3.429 3.672h-7.101c.404-2.26 1.574-3.672 3.672-3.672zM134.723 29.532c5.648 0 10.127-2.138 10.127-7.06 0-5.73-4.761-6.576-8.514-7.1-2.34-.324-4.236-.566-4.236-1.736 0-1.049 1.049-1.492 2.179-1.492 1.251 0 2.38.322 2.582 1.855h7.182c-.283-4.034-3.551-6.374-9.805-6.374-5.043 0-9.36 2.34-9.36 6.576 0 5.164 3.994 6.092 7.464 6.617 2.663.403 5.043.605 5.043 2.3 0 1.25-1.129 1.774-2.622 1.774-1.937 0-2.986-1.008-3.107-2.703h-7.303c.041 4.72 4.277 7.343 10.37 7.343zM145.003 12.87h2.662v10.046c0 4.921 2.542 6.334 7.545 6.334 1.372 0 2.583-.202 3.753-.485v-5.608c-2.381.162-3.833.122-3.833-1.936V12.87h3.913v-4.6h-3.913V1.615h-7.465V8.27h-2.662v4.599zM174.33 28.846h7.505v-.323c-.646-.403-.767-1.331-.767-3.066V15.17c0-2.743-1.049-4.84-3.187-6.172-1.574-.969-3.591-1.372-6.738-1.372-6.456 0-9.603 3.349-9.764 7.423h7.222c.202-1.492 1.049-2.46 2.703-2.46s2.179.847 2.179 1.976c0 1.291-1.17 1.816-5.528 2.3-3.954.444-7.464 1.775-7.464 6.334 0 4.034 2.905 6.172 6.859 6.172 2.663 0 4.842-.887 6.214-2.783h.08c.162 1.13.404 1.775.686 2.259zm-4.115-3.994c-1.251 0-2.381-.605-2.381-1.977 0-1.21.686-1.856 2.905-2.34 1.291-.282 2.219-.605 2.946-.968v1.815c0 2.461-1.695 3.47-3.47 3.47zM182.67 12.87h2.663v10.046c0 4.921 2.542 6.334 7.545 6.334 1.372 0 2.582-.202 3.752-.485v-5.608c-2.38.162-3.833.122-3.833-1.936V12.87h3.914v-4.6h-3.914V1.615h-7.464V8.27h-2.663v4.599zM209.102 29.41c2.623 0 4.681-.524 6.577-1.734 2.017-1.29 3.47-3.106 3.914-4.962h-7.384c-.565 1.008-1.533 1.533-2.865 1.533-2.299 0-3.59-1.453-4.034-3.833h14.686c.081-4.075-1.089-7.746-3.591-10.046-1.896-1.734-4.357-2.783-7.585-2.783-6.496 0-10.974 4.72-10.974 10.933 0 6.294 4.518 10.893 11.256 10.893zm-.121-16.702c1.816 0 3.107 1.372 3.43 3.672h-7.101c.403-2.26 1.573-3.672 3.671-3.672zM0 60.125h12.951c8.957 0 14.445-5.164 14.445-14.363 0-9.158-5.77-14.483-14.082-14.483H0v28.846zm8.433-6.98V38.258h3.832c4.035 0 6.577 2.744 6.577 7.504 0 4.882-2.703 7.383-6.576 7.383H8.432zM39.794 60.69c2.623 0 4.68-.525 6.577-1.735 2.017-1.291 3.47-3.107 3.914-4.963H42.9c-.565 1.009-1.533 1.534-2.864 1.534-2.3 0-3.591-1.453-4.035-3.833h14.686c.08-4.075-1.09-7.746-3.59-10.046-1.897-1.735-4.358-2.784-7.586-2.784-6.496 0-10.974 4.72-10.974 10.934 0 6.293 4.518 10.893 11.256 10.893zm-.12-16.703c1.815 0 3.106 1.372 3.429 3.671h-7.101c.403-2.259 1.573-3.671 3.671-3.671zM61.751 60.81c5.649 0 10.127-2.138 10.127-7.06 0-5.729-4.76-6.576-8.513-7.1-2.34-.323-4.236-.565-4.236-1.735 0-1.049 1.049-1.493 2.178-1.493 1.251 0 2.38.323 2.583 1.856h7.181c-.282-4.034-3.55-6.374-9.804-6.374-5.043 0-9.36 2.34-9.36 6.576 0 5.164 3.994 6.092 7.464 6.616 2.663.404 5.043.605 5.043 2.3 0 1.25-1.13 1.775-2.623 1.775-1.936 0-2.985-1.009-3.106-2.703h-7.303c.04 4.72 4.277 7.342 10.37 7.342zM73.712 60.125h7.625V39.549h-7.625v20.576zm0-23.077h7.625v-5.77h-7.625v5.77zM94.16 67.306c3.067 0 5.77-.646 7.667-2.26 1.815-1.532 3.026-4.074 3.026-7.382V39.549H97.59v2.26h-.12c-1.17-1.776-2.946-2.905-5.851-2.905-5.043 0-8.392 4.599-8.392 10.49 0 6.454 4.075 9.722 8.755 9.722 2.38 0 3.995-.968 5.205-2.34h.161v1.856c0 2.138-.847 3.59-3.308 3.59-1.816 0-2.784-.887-3.067-1.734H83.63c.727 4.559 4.761 6.818 10.53 6.818zm0-13.515c-2.138 0-3.51-1.977-3.51-4.72 0-2.784 1.372-4.64 3.51-4.64 2.22 0 3.511 2.057 3.511 4.64 0 2.703-1.291 4.72-3.51 4.72zM114.859 39.55h-7.262v20.575h7.625V49.03c0-2.219 1.17-3.913 3.107-3.913 1.977 0 2.865 1.412 2.865 3.55v11.458h7.625V46.81c0-4.72-2.461-7.907-7.222-7.907-2.864 0-4.962 1.21-6.617 3.47h-.121v-2.825zM151.576 60.69c3.672 0 6.617-1.05 8.634-3.026 2.058-2.017 3.43-5.245 3.47-8.11h-3.591c-.363 4.237-2.945 7.948-8.392 7.948-6.012 0-9.925-4.76-9.925-11.82 0-6.778 3.55-11.902 9.885-11.902 4.559 0 7.424 2.461 8.109 6.052h3.551c-.767-5.326-4.842-9.199-11.58-9.199-8.594 0-13.677 6.576-13.677 15.049 0 8.754 5.326 15.008 13.516 15.008zM176.187 60.69c6.254 0 10.046-4.922 10.046-10.974 0-6.052-3.792-10.974-10.046-10.974-6.213 0-10.087 4.922-10.087 10.974 0 6.051 3.874 10.974 10.087 10.974zm0-2.744c-4.438 0-6.738-3.63-6.738-8.23 0-4.6 2.3-8.27 6.738-8.27 4.438 0 6.698 3.67 6.698 8.27s-2.26 8.23-6.698 8.23zM188.025 60.125h3.913V56.13h-3.913v3.994z" fill="currentColor" /></svg>',
          instagram: '<svg viewBox="0 0 32 32"><path d="M16 2.881c4.275 0 4.781.019 6.462.094 1.563.069 2.407.331 2.97.55a4.949 4.949 0 011.837 1.194 4.921 4.921 0 011.194 1.837c.218.563.48 1.413.55 2.969.074 1.688.093 2.194.093 6.463 0 4.274-.019 4.78-.094 6.462-.068 1.563-.33 2.406-.55 2.969a4.95 4.95 0 01-1.193 1.837 4.922 4.922 0 01-1.838 1.194c-.562.219-1.412.481-2.969.55-1.687.075-2.193.094-6.462.094-4.275 0-4.781-.019-6.463-.094-1.562-.069-2.406-.331-2.968-.55a4.949 4.949 0 01-1.838-1.194 4.922 4.922 0 01-1.193-1.837c-.22-.563-.482-1.413-.55-2.969-.075-1.688-.094-2.194-.094-6.462 0-4.275.018-4.782.093-6.463.07-1.563.332-2.406.55-2.969A4.948 4.948 0 014.732 4.72 4.921 4.921 0 016.57 3.525c.562-.219 1.412-.481 2.968-.55C11.22 2.9 11.726 2.881 16 2.881zM16 0c-4.344 0-4.887.019-6.594.094-1.7.075-2.869.35-3.881.744-1.056.412-1.95.956-2.838 1.85-.893.887-1.437 1.78-1.85 2.83C.444 6.539.17 7.7.094 9.4.019 11.113 0 11.656 0 16c0 4.344.019 4.887.094 6.594.075 1.7.35 2.868.744 3.881.412 1.056.956 1.95 1.85 2.837a7.82 7.82 0 002.83 1.844c1.02.394 2.182.669 3.882.744 1.706.075 2.25.094 6.594.094 4.343 0 4.887-.019 6.593-.094 1.7-.075 2.87-.35 3.882-.744a7.82 7.82 0 002.831-1.843 7.822 7.822 0 001.844-2.832c.394-1.019.669-2.181.744-3.881.074-1.706.093-2.25.093-6.594s-.019-4.887-.094-6.594c-.075-1.7-.35-2.868-.743-3.88a7.494 7.494 0 00-1.831-2.845A7.82 7.82 0 0026.48.845C25.462.45 24.3.175 22.6.1 20.887.019 20.344 0 16 0z" fill="currentColor"/><path d="M16 7.781A8.22 8.22 0 007.781 16 8.22 8.22 0 0016 24.219 8.22 8.22 0 0024.219 16 8.22 8.22 0 0016 7.781zm0 13.55a5.332 5.332 0 11.002-10.664A5.332 5.332 0 0116 21.331zM26.462 7.456a1.92 1.92 0 11-3.838 0 1.92 1.92 0 013.838 0z" fill="currentColor"/></svg>',
          linkedin: '<svg viewBox="0 0 32 32"><path d="M29.6313 0H2.3625C1.05625 0 0 1.03125 0 2.30625V29.6875C0 30.9625 1.05625 32 2.3625 32H29.6313C30.9375 32 32 30.9625 32 29.6938V2.30625C32 1.03125 30.9375 0 29.6313 0ZM9.49375 27.2687H4.74375V11.9937H9.49375V27.2687ZM7.11875 9.9125C5.59375 9.9125 4.3625 8.68125 4.3625 7.1625C4.3625 5.64375 5.59375 4.4125 7.11875 4.4125C8.6375 4.4125 9.86875 5.64375 9.86875 7.1625C9.86875 8.675 8.6375 9.9125 7.11875 9.9125ZM27.2687 27.2687H22.525V19.8438C22.525 18.075 22.4937 15.7937 20.0562 15.7937C17.5875 15.7937 17.2125 17.725 17.2125 19.7188V27.2687H12.475V11.9937H17.025V14.0813H17.0875C17.7188 12.8813 19.2688 11.6125 21.575 11.6125C26.3813 11.6125 27.2687 14.775 27.2687 18.8875V27.2687Z" fill="currentColor" /></svg>',
          medium: '<svg viewBox="0 0 32 32"><path d="M18.0499 15.7703C18.0499 20.7979 14.0093 24.8736 9.02511 24.8736C4.04097 24.8736 0 20.797 0 15.7703C0 10.7436 4.04067 6.66667 9.02511 6.66667C14.0096 6.66667 18.0499 10.7426 18.0499 15.7703Z" fill="currentColor" /><path d="M27.9504 15.7703C27.9504 20.5027 25.9301 24.3406 23.4378 24.3406C20.9456 24.3406 18.9253 20.5027 18.9253 15.7703C18.9253 11.0378 20.9453 7.19994 23.4375 7.19994C25.9298 7.19994 27.9501 11.0366 27.9501 15.7703" fill="currentColor" /><path d="M32 15.7703C32 20.0094 31.2895 23.4479 30.4129 23.4479C29.5363 23.4479 28.8261 20.0103 28.8261 15.7703C28.8261 11.5302 29.5366 8.09259 30.4129 8.09259C31.2892 8.09259 32 11.5299 32 15.7703Z" fill="currentColor" /></svg>',
          wf: '<svg viewBox="0 0 60 60"><path d="M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.43 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm20.54 23.192c-.805 0-1.63.14-2.473.422-.845.282-1.639.784-2.383 1.508a8.669 8.669 0 00-1.341 1.644c-.373.593-.669 1.291-.89 2.095-.08.422-.211.75-.392.98-.132.169-.324.29-.573.368v-.081h-4.04v.573l.602.18c.603.162.784.634.543 1.418l-2.714 7.99-2.684-8.02c-.14-.402-.176-.709-.105-.92.07-.211.266-.377.588-.497l.422-.151v-.573h-6.212v.573l.513.18c.28.101.497.272.648.513.15.242.296.573.437.995l.453 1.357-2.533 6.725-2.744-8.202c-.261-.764-.01-1.247.754-1.448l.482-.12v-.573h-7.207v.573l.513.15c.341.121.618.277.829.468.211.191.377.467.497.83l4.614 12.543h1.689l3.558-9.619 3.287 9.62h1.568l4.342-12.515c.12-.362.272-.643.453-.844.12-.134.29-.238.482-.327v.056h1.719v7.207c0 .683-.006 1.371-.015 2.065-.01.694-.015 1.392-.015 2.096-.02.764-.433 1.256-1.237 1.477l-.452.121v.573h7.78v-.573l-.784-.211c-.805-.181-1.206-.674-1.206-1.478 0-.683-.006-1.362-.015-2.035a134.34 134.34 0 01-.015-2.035v-7.207h3.467v-.935h-3.467c.02-.945.075-1.85.165-2.714.09-.864.216-1.618.377-2.262.1-.341.272-.543.513-.603.241-.06.482.06.724.362l.361.422c.704 1.086 1.518 1.629 2.443 1.629.583 0 1.03-.156 1.342-.468.311-.312.467-.728.467-1.251 0-.744-.326-1.271-.98-1.583a4.948 4.948 0 00-2.156-.468z" fill="currentColor" /></svg>'
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
      foo: '310px',
    },
    colors: {
      yellow: 'rgba(245, 255, 81, 1)',
      red: '#FF5C00',
      qux: 'rgba(0, 30, 32)',
    }
  }
})


