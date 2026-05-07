# BUILD-NOTES.md — implementation guidance

This document is for Claude Code (or any developer) building the site. Read this first.

## Overall approach

The mocks in `/mocks` are **fully working static HTML files** — open them in a browser, they render exactly as intended. The font is embedded as base64 inside the HTML (which is why the files are large). For production, you'll extract the font to a separate file and load it with `@font-face`.

Treat the mocks as the **source of truth for visual design**. If the implementation looks different from the mock, the mock wins.

## CSS structure recommendation

Use CSS variables for the core tokens. The mocks already define them:

```css
:root {
  --ochre: #d4a440;
  --olive: #6a6028;
  --olive-dark: #5b5119;
  --olive-mid: #74683a;
  --paper: #ffffff;
  --paper-warm: #fafaf6;
  --line: rgba(106, 96, 40, 0.15);
}
```

If using Tailwind, configure these as theme colors. If not, just keep them as CSS variables in a global stylesheet.

## Font loading (Next.js)

```tsx
// app/layout.tsx
import localFont from 'next/font/local';
import { Sulphur_Point, Bitter, IBM_Plex_Mono } from 'next/font/google';

const psychedelic = localFont({
  src: './fonts/PsychedelicPeace.ttf',
  variable: '--font-wordmark',
  display: 'swap',
});

const sulphur = Sulphur_Point({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bitter = Bitter({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
```

Then set them in your CSS:

```css
.wordmark { font-family: var(--font-wordmark); }
h1, h2, h3 { font-family: var(--font-heading); }
body, p { font-family: var(--font-body); }
.meta, .label, code { font-family: var(--font-mono); }
```

## Wordmark component

The wordmark appears in nav, hero (sometimes), and footer. Build it as a single reusable component:

```tsx
// components/Wordmark.tsx
type WordmarkProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

export function Wordmark({ size = 'md', className }: WordmarkProps) {
  const sizes = {
    sm: '14px',  // small footers, inline
    md: '22px',  // top nav
    lg: '26px',  // footer
    xl: '120px', // portfolio hero
  };
  return (
    <span className={`wordmark wordmark-${size} ${className ?? ''}`}>
      <span className="bryn">BRYN</span>
      <span className="bennett">BENNETT</span>
    </span>
  );
}
```

```css
.wordmark {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 0.85;
}
.wordmark .bryn,
.wordmark .bennett {
  font-family: var(--font-wordmark);
  color: var(--ochre);
  line-height: 0.85;
  font-weight: 400;
  -webkit-text-stroke: 0.02em var(--ochre);
  paint-order: stroke fill;
  white-space: nowrap;
}
.wordmark .bryn {
  letter-spacing: 0.03em; /* aligns N to BENNETT's second N */
}
.wordmark .bennett {
  margin-top: 0.01em;
}
```

See `reference/wordmark-spacing.md` for full details on why these values.

## Navigation

The nav appears on every page. Build it as a layout component.

Key behaviors:
- Wordmark on left links to `/`
- Four nav items on right: Work, Portfolio, About, Contact
- The active page should have the flower bullet (`✻`) showing in its reserved space (use `usePathname()` from `next/navigation`)
- Hover state: ochre color + flower bullet appears with a slight rotate-and-scale animation

```css
nav.top-nav ul a {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--olive);
  position: relative;
  padding: 6px 4px 6px 18px;  /* 18px reserved for the asterisk */
  transition: color 0.3s ease;
}
nav.top-nav ul a::before {
  content: '✻';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) scale(0) rotate(-90deg);
  color: var(--ochre);
  font-size: 13px;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
  opacity: 0;
}
nav.top-nav ul a:hover,
nav.top-nav ul a.active {
  color: var(--ochre);
}
nav.top-nav ul a:hover::before,
nav.top-nav ul a.active::before {
  transform: translateY(-50%) scale(1) rotate(0deg);
  opacity: 1;
}
```

## Footer

Same on every page. Floating card with 24px rounded corners, dark olive bg, ochre accents. Three columns: brand+tagline, site nav, reach me.

The footer wrapper has `padding: 0 48px 48px` so the card sits in from the page edges.

## Page-level patterns

### Hero / page-header

The home and portfolio pages use the same `.page-header` pattern:
- Two-column grid (1fr / 1.4fr)
- Left: small label in `IBM Plex Mono` + big h1 in `Sulphur Point`
- Right: status pill (sometimes) + bold tagline in `Sulphur Point` + body prose in `Bitter`
- Bottom-aligned (`align-items: end`)

**Color flip per page**:
- Home: label = olive, h1 = ochre
- Portfolio: label = ochre, h1 = olive-dark

This is intentional — gives each page its own visual identity inside the same system.

## Important: links should NEVER be blue

Browser default link colors leak through if you don't explicitly set them. Use this global rule:

```css
a, a:link, a:visited, a:hover, a:active {
  color: inherit;
  text-decoration: none;
}
```

Then style each link contextually (nav links, footer links, in-prose links each have their own treatment).

## Responsive notes

- Desktop max width: 1240px
- Container padding: 48px desktop, 24px mobile
- Page-header grid collapses to single column at 900px
- Portfolio grid collapses to single column at 900px
- Footer grid collapses to single column at 800px
- Hero text sizes use `clamp()` so they scale fluidly

## Performance

- The Psychedelic Peace font is ~129KB. Self-host it; don't inline as base64 in production.
- Inline only the critical CSS for above-the-fold; rest can be in a stylesheet.
- Use `next/image` for any images (none in mocks yet, but case studies will have them).

## Accessibility

- Confirm contrast ratios. Ochre on white passes WCAG AA for headings (large text); ochre on white DOES NOT pass for body text — that's why body text is `--olive-mid` (#74683a) on white.
- The flower bullet `✻` is decorative — make sure it has `aria-hidden="true"` if implemented as a separate element, or use a CSS pseudo-element which screen readers ignore by default.
- Confirm focus states for keyboard navigation. Default browser focus rings are fine; can be styled if desired but make sure they're visible against the ochre/olive palette.
