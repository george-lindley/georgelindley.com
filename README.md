# georgelindley.com

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

## Everyday tasks

| To… | Do this |
| --- | --- |
| Run locally | `npm install`, then `npm run dev` → http://localhost:4321 |
| Write a post | `npm run new "Post title"` creates a draft in `src/content/blog/_drafts/` with the frontmatter filled in (or duplicate an existing post). |
| Add a project | `npm run new project "Project title"` (or duplicate one in `src/content/projects/`). |
| Keep something unpublished | Anything in a `_drafts/` folder with `draft: true` shows in `npm run dev` only. Drafts are git-ignored: they stay on this machine, so back them up separately. Draft images go in `src/assets/drafts/uploads/`. |
| Publish a draft | `npm run publish-draft <slug>` moves it (and its images) out of drafts, removes `draft: true` and sets today's date. Then commit and push. |
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
