// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://georgelindley.com',
  trailingSlash: 'always',

  // Old WordPress URLs that people may have bookmarked or linked to.
  redirects: {
    '/feed': '/rss.xml',
    '/category/data-analytics': '/blog/',
    '/category/education': '/blog/',
    '/category/business-technology': '/blog/',
    // Renamed the day it went up, when the post was cut to its first half.
    '/does-official-english-make-people-speak-better-than-they-write': '/why-native-english-speakers-dont-top-ielts/',
  },

  // Code blocks here are maths and printed output, not code, so they take the site's
  // own light .prose pre style rather than Shiki's dark theme.
  markdown: { syntaxHighlight: false },

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

  integrations: [
    // Every real page, minus the 404 and the old-WordPress redirect stubs.
    sitemap({ filter: (page) => !/\/(404|feed|category)\b/.test(new URL(page).pathname) }),
  ],
});