import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import Unocss from 'unocss/astro';
import alpinejs from '@astrojs/alpinejs';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [mdx(), Unocss(), alpinejs(), compress()]
});