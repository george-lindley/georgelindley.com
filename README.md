# georgelindley.com

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

## Everyday tasks

| To… | Do this |
| --- | --- |
| Run locally | `npm install`, then `npm run dev` → http://localhost:4321 |
| Write a post | Add `src/content/blog/my-post-slug.md` (copy the frontmatter of an existing post). It appears at `/my-post-slug/`. |
| Add a project | Add `src/content/projects/my-project.md`; put images in `src/assets/uploads/` and reference them relatively. |
| Keep something unpublished | Put it in the collection's `_drafts/` folder with `draft: true`. Drafts show in `npm run dev`, are never built for the live site, and are git-ignored (they stay on your machine only; back them up separately). Draft-only images go in `src/assets/drafts/`. |
| Publish a draft | Move the file out of `_drafts/`, move its images from `src/assets/drafts/` to `src/assets/uploads/` and fix the paths, delete `draft: true`, push. |
| Edit About / Resume / skills | `src/data/profile.ts` |
| Nav order, analytics | `src/data/site.ts` |

Blog posts get a generated causal-graph cover (seeded by the slug) unless you set `cover:` in the frontmatter.

## Structure

```
src/
  content/        blog + projects (Markdown); schema in content.config.ts
  data/           profile (About/Resume/Contact copy) and site settings
  lib/content.ts  the only place that knows about drafts, sorting and URLs
  layouts/        Base (shell, meta, transitions) and Article (posts + projects)
  components/     Sidebar, SkillBar, Timeline, cards, CausalMotif, Icon
  styles/         global.css: tokens, prose, view-transition rules
```

No client-side JavaScript ships by default. Page transitions use cross-document
View Transitions (CSS), the mobile menu uses the Popover API, the portfolio
filter uses `:has()`, and hover-prerendering uses Speculation Rules.
