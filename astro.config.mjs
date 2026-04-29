import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isDemoBuild = process.env.DEMO_BUILD === '1';

export default defineConfig({
  site: isDemoBuild ? 'https://arlexperalta.com' : 'https://corpoha85.com',
  ...(isDemoBuild ? { base: '/demo/corpoha' } : {}),
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
