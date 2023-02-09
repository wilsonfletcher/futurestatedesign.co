import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import htmlBeautifier from 'astro-html-beautifier'
import svelte from '@astrojs/svelte'
import yaml from '@rollup/plugin-yaml'
import tailwind from '@astrojs/tailwind'

import rehypeExternalLinks from 'rehype-external-links'
import rehypeFigure from 'rehype-figure'
import rehypeStringify from 'rehype-stringify'
// import rehypeComponents from 'rehype-components'
import remarkDirective from 'remark-directive'
// import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
// import remarkToc from 'remark-toc'
// import astroLayouts from 'astro-layouts'

import { myRemarkPlugin, myRemarkPlugin3 } from './src/plugins'

// const layoutOptions = {
//   'pages/**/*.mdx': '/src/layouts/Page.astro',
// }

// https://astro.build/config
export default defineConfig({
  markdown: {},
  vite: {
    plugins: [yaml()],
  },
  integrations: [
    mdx({
      remarkPlugins: [
        // [astroLayouts, layoutOptions],
        // [
        //   remarkToc,
        //   {
        //     heading: 'contents',
        //   },
        // ],
        // remarkParse,
        remarkDirective,
        // remarkRehype,
        myRemarkPlugin,
        myRemarkPlugin3,
      ],
      rehypePlugins: [rehypeExternalLinks],
    }),
    htmlBeautifier(),
    tailwind({ config: { applyBaseStyles: false } }),
    svelte(),
  ],
})
