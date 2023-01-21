import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import htmlBeautifier from "astro-html-beautifier";
import svelte from '@astrojs/svelte';
import yaml from '@rollup/plugin-yaml';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  vite: {
    plugins: [yaml()]
  },
  integrations: [
    mdx(),
    htmlBeautifier(),
    tailwind({ config: { applyBaseStyles: false } }),
    svelte(),
  ]
});