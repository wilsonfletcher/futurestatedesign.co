import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import Unocss from 'unocss/astro';
import alpinejs from '@astrojs/alpinejs';
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [mdx(), Unocss(), alpinejs(), htmlBeautifier()]
});