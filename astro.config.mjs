import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-read-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: 'hybrid',
  adapter: vercel(),
});
