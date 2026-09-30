// npm run publish-draft <slug>
//
// Moves a draft out of _drafts/, moves the images it uses from src/assets/drafts/
// to src/assets/uploads/ (fixing the paths), removes `draft: true` and sets pubDate
// to today. Then commit and push to put it live.
import fs from 'node:fs';
import path from 'node:path';

const slug = process.argv[2]?.replace(/\.md$/, '');
if (!slug) {
  console.error('Usage: npm run publish-draft <slug>   (the draft filename without .md)');
  process.exit(1);
}

const source = ['blog', 'projects']
  .map((c) => path.join('src/content', c, '_drafts', `${slug}.md`))
  .find((p) => fs.existsSync(p));
if (!source) {
  console.error(`No draft called "${slug}" in src/content/blog/_drafts or src/content/projects/_drafts`);
  process.exit(1);
}
const collectionDir = path.dirname(path.dirname(source));
const target = path.join(collectionDir, `${slug}.md`);
if (fs.existsSync(target)) {
  console.error(`A published entry already exists at ${target}`);
  process.exit(1);
}

let text = fs.readFileSync(source, 'utf8')
  // Drop the template's help text (added by `npm run new`); it isn't content.
  .replace(/\n?<!-- Images: put files in src\/assets\/drafts[\s\S]*?-->\n?/, '\n')
  .replace(/^# cover: "[^"]*<file>[^"]*".*\n/m, '');

// Move every draft-only image this entry references, and point the Markdown at the new location.
const moved = [];
text = text.replace(/(?:\.\.\/)+assets\/drafts\/([^\s)"']+)/g, (ref, rel) => {
  const from = path.resolve(path.dirname(source), ref);
  const to = path.resolve('src/assets', rel);
  if (fs.existsSync(from)) {
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.renameSync(from, to);
    moved.push(rel);
  } else if (!fs.existsSync(to)) {
    console.warn(`Warning: image not found: ${ref}`);
  }
  return path.relative(path.dirname(target), to);
});

// Paths that pointed at already-published images (../../../assets/uploads/...) lose one level.
text = text.replace(/\.\.\/\.\.\/\.\.\/assets\/(?!drafts\/)/g, '../../assets/');

const today = new Date().toLocaleDateString('en-CA');
text = text
  .replace(/^draft: true\n/m, '')
  .replace(/^pubDate: .*$/m, `pubDate: ${today}`);

if (/^description: ""/m.test(text)) console.warn('Warning: description is empty. Add one before pushing.');

fs.writeFileSync(target, text);
fs.rmSync(source);
console.log(`Published ${target} (pubDate ${today})`);
if (moved.length) console.log(`Moved ${moved.length} image(s) into src/assets/uploads/`);
console.log('Next: check it with `npm run dev`, then commit and push.');
