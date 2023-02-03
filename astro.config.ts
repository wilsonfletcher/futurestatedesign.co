import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import htmlBeautifier from "astro-html-beautifier";
import svelte from '@astrojs/svelte';
import yaml from '@rollup/plugin-yaml';
import tailwind from "@astrojs/tailwind";
import remarkToc from 'remark-toc';
import rehypeFigure from 'rehype-figure';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeFigure, rehypeExternalLinks],
  },
  vite: {
    plugins: [yaml()]
  },
  integrations: [
    mdx({
      // extendMarkdownConfig: true,
    }),
    htmlBeautifier(),
    tailwind({ config: { applyBaseStyles: false } }),
    svelte(),
  ]
});