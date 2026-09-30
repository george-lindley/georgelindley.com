// Site-level settings: navigation order and third-party switches.

export const nav = [
  { id: 'about', label: 'About', href: '/' },
  { id: 'resume', label: 'Resume', href: '/resume/' },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio/' },
  { id: 'blog', label: 'Blog', href: '/blog/' },
  { id: 'contact', label: 'Contact', href: '/contact/' },
] as const;

export type Section = (typeof nav)[number]['id'];

/** GoatCounter site code (the `<code>` in <code>.goatcounter.com). Empty = analytics off. */
export const goatcounter = 'georgelindley';
