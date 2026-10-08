import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Drafts live in a git-ignored `_drafts/` subfolder of each collection (local preview only).
// Use the bare filename as the ID so a draft's URL is the same before and after publishing.
const loader = (base: string) =>
  glob({ pattern: '**/*.md', base, generateId: ({ entry }) => entry.split('/').pop()!.replace(/\.md$/, '') });

const blog = defineCollection({
  loader: loader('./src/content/blog'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      categories: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      // Optional: by default posts get a generated cover (see CausalMotif).
      cover: image().optional(),
      // Optional labelled cover graph (see GraphCover). Nodes are named by their
      // labels; `path` is the highlighted chain, `edges` any other arrows.
      graph: z
        .object({ path: z.array(z.string()).min(2), edges: z.array(z.tuple([z.string(), z.string()])).default([]) })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: loader('./src/content/projects'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      categories: z.array(z.string()).default([]),
      cover: image().optional(),
      // Optional 32:9 image for the project page banner, when the cover would crop badly.
      banner: image().optional(),
      link: z.url().optional(),
      // Optional labelled cover graph, for projects with no screenshot (see GraphCover).
      graph: z
        .object({ path: z.array(z.string()).min(2), edges: z.array(z.tuple([z.string(), z.string()])).default([]) })
        .optional(),
      // The portfolio card's summary. Same four parts on every card, so they scan alike.
      card: z
        .object({
          role: z.string(), // "Role · tools", one muted line
          problem: z.string(), // one sentence
          action: z.string(), // what I did, one or two sentences
          outcome: z.string(), // result, or who uses it, one sentence
        })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };
