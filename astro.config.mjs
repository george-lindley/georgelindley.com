// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://georgelindley.com',
  trailingSlash: 'always',
  // Old WordPress URLs that people may have bookmarked or linked to.
  redirects: {
    '/feed': '/rss.xml',
    '/category/data-analytics': '/blog/',
    '/category/education': '/blog/',
    '/category/business-technology': '/blog/',
  },
  fonts: [
    {
      name: 'Poppins',
      cssVariable: '--font-poppins',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Helvetica', 'Arial', 'sans-serif'],
    },
  ],
});
