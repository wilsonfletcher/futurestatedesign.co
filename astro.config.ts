import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import Unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
  },
  integrations: [
    mdx(),
    Unocss({
      presets: [
        /* no presets by default */
      ]
    }),
  ],
});
