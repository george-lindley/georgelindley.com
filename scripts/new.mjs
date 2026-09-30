// npm run new "Post title"             -> src/content/blog/_drafts/post-title.md
// npm run new project "Project title"  -> src/content/projects/_drafts/project-title.md
//
// New entries start as drafts: visible in `npm run dev`, never pushed or published.
// When it's ready: npm run publish-draft <slug>
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const kind = args[0] === 'project' ? 'projects' : 'blog';
const title = (kind === 'projects' ? args.slice(1) : args).join(' ').trim();

if (!title) {
  console.error('Usage: npm run new "Post title"   or   npm run new project "Project title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize('NFKD').replace(/[̀-ͯ]/g, '')
  .replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const collection = path.join('src/content', kind);
const target = path.join(collection, '_drafts', `${slug}.md`);
for (const existing of [path.join(collection, `${slug}.md`), target]) {
  if (fs.existsSync(existing)) {
    console.error(`Already exists: ${existing}`);
    process.exit(1);
  }
}

// Offer the categories already in use, so new posts stay consistent with old ones.
const categories = new Set();
for (const dir of [collection, path.join(collection, '_drafts')]) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const m = fs.readFileSync(path.join(dir, f), 'utf8').match(/^categories: (\[.*\])$/m);
    if (m) JSON.parse(m[1]).forEach((c) => categories.add(c));
  }
}

const today = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD in local time
const frontmatter = [
  '---',
  `title: ${JSON.stringify(title)}`,
  'description: ""  # 1–2 sentences: shown on cards, in search results and link previews',
  `pubDate: ${today}  # set to the publish day by publish-draft`,
  `categories: []  # in use: ${[...categories].sort().join(', ') || 'none yet'}`,
  ...(kind === 'projects' ? ['# link: "https://…"  # live project URL, shown as a button'] : []),
  '# cover: "../../../assets/drafts/uploads/<file>.png"  # optional; omit for a generated cover',
  'draft: true',
  '---',
  '',
  'Start writing here.',
  '',
  '<!-- Images: put files in src/assets/drafts/uploads/ and reference them as',
  '     ![What the image shows](../../../assets/drafts/uploads/my-image.png)',
  '     publish-draft moves them and fixes these paths. -->',
  '',
].join('\n');

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, frontmatter);
console.log(`Created ${target}`);
console.log(`Preview:  npm run dev  ->  http://localhost:4321/${kind === 'projects' ? 'project/' : ''}${slug}/`);
console.log(`Publish:  npm run publish-draft ${slug}`);

// Open it in VS Code when the `code` command is available; silently skip otherwise.
try { execFileSync('code', [target], { stdio: 'ignore' }); } catch {}
