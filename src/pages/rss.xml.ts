import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, postUrl } from '../lib/content';
import { profile } from '../data/profile';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${profile.name}: Blog`,
    description: 'Writing on causal inference, data analytics, AI and education.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.categories,
      link: postUrl(post),
    })),
  });
}
