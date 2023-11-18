import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/phedhong.github.io',
  base: '/MyAstro',
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});

