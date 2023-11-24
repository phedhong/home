import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import astroHello from "./src/integrations/astro-hello";
import lifecycleLogs from "./src/integrations/lifecycle-logs";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://phedhong.github.io',
  integrations: [astroHello(), lifecycleLogs(), mdx(), tailwind(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});