import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import htmlBeautifier from "astro-html-beautifier";
import svelte from '@astrojs/svelte';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [
    mdx(),
    htmlBeautifier(),
    tailwind({ config: { applyBaseStyles: false } }),
    svelte(),
  ]
});