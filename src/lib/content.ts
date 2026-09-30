import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;

// Drafts are visible in `astro dev` (so you can preview them) and never in a production build.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;
const newestFirst = (a: Post | Project, b: Post | Project) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

export async function getPosts(): Promise<Post[]> {
  return (await getCollection('blog', visible)).sort(newestFirst);
}

export async function getProjects(): Promise<Project[]> {
  return (await getCollection('projects', visible)).sort(newestFirst);
}

export const postUrl = (post: Post) => `/${post.id}/`; // root-level, matching the old WordPress URLs
export const projectUrl = (project: Project) => `/project/${project.id}/`;

export function readingMinutes(markdown = '') {
  return Math.max(1, Math.round(markdown.split(/\s+/).length / 220));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
