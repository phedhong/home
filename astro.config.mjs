import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import astroHello from "./src/integrations/astro-hello";
import lifecycleLogs from "./src/integrations/lifecycle-logs";
import react from "@astrojs/react";
import markdoc from '@astrojs/markdoc';

import remarkToc from 'remark-toc';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  // site: 'https://phedhong.github.io',
  integrations: [
    astroHello(), 
    lifecycleLogs(), 
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      remarkPlugins: [remarkToc],
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: false,
    }),
    tailwind(), 
    react(),
    markdoc()
  ],
  markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'dracula',
			// Learn more about this configuration here:
			// https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
		},
	},
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});