// Geometry for the labelled causal graphs (pills joined by arrows). The homepage
// places its nodes by hand; post covers describe only their edges and let
// `layered` place them, causes on the left and the outcome on the right.

export type GraphNode = { id: string; label: string; x: number; y: number };
export type GraphEdge = [from: string, to: string];

/** A graph by its edges. `path` is the highlighted chain (its arrows are implied); `edges` are the rest. */
export type GraphSpec = { path: string[]; edges?: GraphEdge[] };

/** Half-width and half-height of a node's pill, in viewBox units (13px label). */
export const pill = (label: string) => ({ hw: label.length * 3.9 + 18, hh: 18 });

export type Point = { x: number; y: number };

/**
 * Clip an edge to both pill outlines, so arrowheads touch the edge. With a
 * control point the edge is a quadratic curve; without one, a straight line.
 */
export function clip(a: GraphNode, b: GraphNode, ctrl: Point = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }) {
  // Distance to a pill's outline along a direction, as a fraction of that direction.
  const exit = (n: GraphNode, dx: number, dy: number) => { const { hw, hh } = pill(n.label); return Math.min(hw / Math.abs(dx || 1e-6), hh / Math.abs(dy || 1e-6)); };
  const sx = ctrl.x - a.x, sy = ctrl.y - a.y; // leaving a, towards the control point
  const ex = b.x - ctrl.x, ey = b.y - ctrl.y; // arriving at b, from the control point
  const s = exit(a, sx, sy) + 0.02 * Math.hypot(b.x - a.x, b.y - a.y) / Math.hypot(sx, sy);
  const e = exit(b, ex, ey) + 0.045 * Math.hypot(b.x - a.x, b.y - a.y) / Math.hypot(ex, ey);
  return { x1: a.x + sx * s, y1: a.y + sy * s, cx: ctrl.x, cy: ctrl.y, x2: b.x - ex * e, y2: b.y - ey * e, angle: (Math.atan2(ey, ex) * 180) / Math.PI };
}

/**
 * Lay out a graph given only by its edges, in columns (layers) by causal depth.
 * Nodes are named by their labels. Each column's highlighted node sits mid-column,
 * and columns alternate slightly up and down so the highlighted path zigzags.
 */
export function layered({ path, edges = [] }: GraphSpec, width: number, height: number) {
  const all: GraphEdge[] = [...path.slice(1).map((to, i): GraphEdge => [path[i], to]), ...edges];
  const ids = [...new Set(all.flat())];
  const parents = (id: string) => all.filter(([, to]) => to === id).map(([from]) => from);
  const children = (id: string) => all.filter(([from]) => from === id).map(([, to]) => to);

  // Depth = longest chain of causes behind a node. Then pull each root forward to
  // sit just before its nearest effect, so a side cause isn't stranded far left.
  const depth = new Map<string, number>();
  const visit = (id: string, seen: string[] = []): number => {
    if (seen.includes(id)) throw new Error(`Cover graph has a cycle through "${id}"`);
    if (!depth.has(id)) depth.set(id, Math.max(-1, ...parents(id).map((p) => visit(p, [...seen, id]))) + 1);
    return depth.get(id)!;
  };
  ids.forEach((id) => visit(id));
  for (const id of ids) if (!parents(id).length) depth.set(id, Math.min(...children(id).map((c) => depth.get(c)!)) - 1);

  const hot = new Set(path);
  const columns = Math.max(...depth.values()) + 1;
  const column = (l: number) => {
    const members = ids.filter((id) => depth.get(id) === l);
    const others = members.filter((id) => !hot.has(id));
    const lead = members.filter((id) => hot.has(id));
    const mid = Math.floor(others.length / 2);
    return [...others.slice(0, mid), ...lead, ...others.slice(mid)]; // highlighted node in the middle
  };

  const edgeOf = (l: number) => Math.max(...column(l).map((id) => pill(id).hw)) + 12;
  const left = edgeOf(0), right = width - edgeOf(columns - 1);
  const top = height * 0.12 + 18, bottom = height * 0.88 - 18;
  const nodes: GraphNode[] = [];
  for (let l = 0; l < columns; l++) {
    const members = column(l);
    const x = columns === 1 ? width / 2 : left + (l * (right - left)) / (columns - 1);
    // A lone node zigzags; a column of several spans the full height.
    const zig = members.length > 1 ? 0 : (l % 2 ? 1 : -1) * (bottom - top) * 0.22;
    members.forEach((id, i) => {
      const spread = members.length > 1 ? (i / (members.length - 1) - 0.5) * (bottom - top) : 0;
      const y = Math.min(bottom, Math.max(top, (top + bottom) / 2 + spread + zig));
      nodes.push({ id, label: id, x, y });
    });
  }

  // An arrow that skips a column can run through whatever sits in it. If it
  // passes too close to a node, bend it just enough to clear that node, on the
  // side it was already passing. (A quadratic curve's midpoint moves half as far
  // as its control point, hence the doubling.)
  const at = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const controls: Record<string, Point> = {};
  const clearance = 18 + 14;
  for (const [from, to] of all) {
    const a = at[from], b = at[to];
    const lineY = (n: GraphNode) => a.y + ((n.x - a.x) / (b.x - a.x)) * (b.y - a.y);
    const near = nodes.filter((n) => n.x > a.x + 1 && n.x < b.x - 1).sort((m, n) => Math.abs(m.y - lineY(m)) - Math.abs(n.y - lineY(n)))[0];
    if (!near) continue;
    const gap = lineY(near) - near.y;
    if (Math.abs(gap) >= clearance) continue;
    const side = gap > 0 ? 1 : -1;
    controls[`${from}>${to}`] = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 + 2 * (side * clearance - gap) };
  }
  return { nodes, edges: all, controls };
}
