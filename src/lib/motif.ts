// A small causal graph (DAG) drawn from a seed string, returned as SVG markup.
// The same seed always produces the same graph, so every post gets a unique,
// stable cover with no image file. Used by <CausalMotif> (on the page, themed
// with CSS variables) and by the build-time social-preview images (literal colours).

export interface MotifColors {
  background: string;
  dots: string;
  edge: string;
  node: string;
  nodeStroke: string;
  accent: string;
}

/** Colours for use inside the page: follow the site's CSS tokens. */
export const themeColors: MotifColors = {
  background: 'var(--tint)',
  dots: '#d9d9d6',
  edge: '#c9c9c5',
  node: 'var(--paper)',
  nodeStroke: '#bdbdb9',
  accent: 'var(--accent)',
};

/** The same palette as literal values, for rendering outside a browser. */
export const literalColors: MotifColors = {
  background: '#fafaf9',
  dots: '#d9d9d6',
  edge: '#c9c9c5',
  node: '#ffffff',
  nodeStroke: '#bdbdb9',
  accent: '#fa953d',
};

interface Options {
  seed: string;
  width: number;
  height: number;
  colors?: MotifColors;
  /** Extra attributes for the root <svg>, e.g. class, style, role. */
  attrs?: Record<string, string | undefined>;
}

// FNV-1a hash -> mulberry32 PRNG: tiny, fast, deterministic.
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}
function mulberry32(a: number) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const n2 = (v: number) => Math.round(v * 100) / 100;

export function motifSvg({ seed, width, height, colors = themeColors, attrs = {} }: Options): string {
  const id = hash(seed).toString(36);
  const rand = mulberry32(hash(seed));
  const pick = <T,>(xs: T[]) => xs[Math.floor(rand() * xs.length)];

  // Layered layout: causes on the left, outcome on the right.
  type Node = { x: number; y: number; layer: number };
  const counts = [pick([1, 2]), pick([2, 3]), pick([2, 3]), 1];
  const padX = width * 0.13, padY = height * 0.2;
  const layers: Node[][] = counts.map((n, layer) => {
    const x = padX + (layer * (width - 2 * padX)) / (counts.length - 1);
    return Array.from({ length: n }, (_, i) => {
      const slot = (i + 0.5) / n;
      const jitter = n > 1 ? (rand() - 0.5) * (0.35 / n) : (rand() - 0.5) * 0.3;
      return { x: x + (rand() - 0.5) * width * 0.04, y: padY + (slot + jitter) * (height - 2 * padY), layer };
    });
  });

  // Edges: every node feeds the next layer; every next-layer node has a parent.
  const edges: [Node, Node][] = [];
  for (let l = 0; l < layers.length - 1; l++) {
    const next = layers[l + 1];
    for (const a of layers[l]) {
      const targets = new Set([pick(next)]);
      if (next.length > 1 && rand() < 0.45) targets.add(pick(next));
      targets.forEach((b) => edges.push([a, b]));
    }
    for (const b of next) if (!edges.some(([, t]) => t === b)) edges.push([pick(layers[l]), b]);
  }
  // One "confounder-style" skip edge for texture.
  if (rand() < 0.7) edges.push([pick(layers[0]), pick(layers[2])]);

  // Highlight one causal path from a root to the outcome.
  const path = new Set<Node>();
  let cur = pick(layers[0]);
  path.add(cur);
  while (cur.layer < layers.length - 1) {
    const outs = edges.filter(([a, b]) => a === cur && b.layer === cur.layer + 1).map(([, b]) => b);
    cur = pick(outs);
    path.add(cur);
  }
  const onPath = ([a, b]: [Node, Node]) => path.has(a) && path.has(b) && b.layer === a.layer + 1;

  const r = height * 0.03;
  const thin = height / 200, thick = height / 125;
  const line = ([a, b]: [Node, Node], stroke: string, sw: number, marker: string) => {
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len, s = r + 3, e = r + 7;
    return `<line x1="${n2(a.x + ux * s)}" y1="${n2(a.y + uy * s)}" x2="${n2(b.x - ux * e)}" y2="${n2(b.y - uy * e)}" stroke="${stroke}" stroke-width="${n2(sw)}" marker-end="url(#${marker}-${id})"/>`;
  };
  const dot = Math.max(width, height) / 40;
  const c = colors;

  const rootAttrs = Object.entries({ xmlns: 'http://www.w3.org/2000/svg', viewBox: `0 0 ${width} ${height}`, ...attrs })
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${k}="${esc(v!)}"`)
    .join(' ');

  return `<svg ${rootAttrs}>
<defs>
<pattern id="g-${id}" width="${n2(dot)}" height="${n2(dot)}" patternUnits="userSpaceOnUse"><circle cx="${n2(dot / 2)}" cy="${n2(dot / 2)}" r="${n2(dot * 0.06)}" fill="${c.dots}"/></pattern>
<marker id="a-${id}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="${c.nodeStroke}"/></marker>
<marker id="h-${id}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="${c.accent}"/></marker>
</defs>
<rect width="${width}" height="${height}" fill="${c.background}"/>
<rect width="${width}" height="${height}" fill="url(#g-${id})"/>
${edges.filter((e) => !onPath(e)).map((e) => line(e, c.edge, thin, 'a')).join('\n')}
${edges.filter(onPath).map((e) => line(e, c.accent, thick, 'h')).join('\n')}
${layers.flat().map((n) => `<circle cx="${n2(n.x)}" cy="${n2(n.y)}" r="${n2(r)}" fill="${path.has(n) ? c.accent : c.node}" stroke="${path.has(n) ? c.accent : c.nodeStroke}" stroke-width="${n2(thin)}"/>`).join('\n')}
</svg>`;
}
