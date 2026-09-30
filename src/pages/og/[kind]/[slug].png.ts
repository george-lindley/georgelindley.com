// Build-time social-preview images (og:image, 1200x630) for posts and projects
// that have no cover image: the same seeded causal graph as their on-page cover.
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { getPosts, getProjects } from '../../../lib/content';
import { motifSvg, literalColors } from '../../../lib/motif';

export const getStaticPaths = (async () => {
  const posts = (await getPosts()).filter((p) => !p.data.cover).map((p) => ({ kind: 'blog', slug: p.id }));
  const projects = (await getProjects()).filter((p) => !p.data.cover).map((p) => ({ kind: 'project', slug: p.id }));
  return [...posts, ...projects, { kind: 'site', slug: 'default' }].map((params) => ({ params }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const seed = params.kind === 'site' ? 'georgelindley.com' : params.slug!;
  const svg = motifSvg({ seed, width: 1200, height: 630, colors: literalColors });
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
