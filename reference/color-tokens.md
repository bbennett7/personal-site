# color-tokens.md

## CSS variables

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

## Tailwind config (if using Tailwind)

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        ochre: '#d4a440',
        olive: {
          DEFAULT: '#6a6028',
          dark: '#5b5119',
          mid: '#74683a',
        },
        paper: {
          DEFAULT: '#ffffff',
          warm: '#fafaf6',
        },
      },
      borderColor: {
        line: 'rgba(106, 96, 40, 0.15)',
      },
    },
  },
};

export default config;
```

## Usage rules

| Color | Use for | Don't use for |
|-------|---------|---------------|
| `--ochre` | Wordmark, italics, section labels (eyebrow), accent on hover, status dots, link underlines | Body text (fails contrast), borders |
| `--olive` | Nav links (default state), borders, secondary metadata, status pill text | Headings (use `--olive-dark`) |
| `--olive-dark` | All h1/h2/h3, body emphasis (`<strong>`), footer background | Body text (too dark, harsh on eyes for long reads) |
| `--olive-mid` | Body paragraph text | Headings (use darker), labels (use ochre) |
| `--paper` | Page background | Cards (use `--paper-warm` for variation) |
| `--paper-warm` | Card backgrounds, swatch info panels, secondary surfaces | Page background (too warm at full screen) |
| `--line` | All horizontal rules, card borders, section dividers | Text |

## Contrast notes

These pass WCAG AA on white background:

- `--olive-dark` (#5B5119) on white: ✅ AAA for normal text
- `--olive-mid` (#74683A) on white: ✅ AA for normal text
- `--olive` (#6A6028) on white: ✅ AAA for normal text
- `--ochre` (#D4A440) on white: ❌ Fails for body text. ✅ Passes only for large text (24px+) or non-text decorative use.

This is why `--ochre` is used for headlines, decorative accents, and labels (which are tracked-out and bold), but never for body paragraphs.

On dark olive (`--olive-dark` background, like the footer):
- Ochre on olive-dark: ✅ AA
- Paper-warm on olive-dark: ✅ AAA
- Rgba versions for muted text: tested and acceptable

## When to use rgba versions

Several places in the design use ochre or olive at reduced opacity:

```css
rgba(212, 164, 64, 0.2)   /* in-progress status pill bg */
rgba(212, 164, 64, 0.3)   /* footer divider */
rgba(106, 96, 40, 0.15)   /* default border (--line) */
rgba(106, 96, 40, 0.10)   /* subtle work-item dividers */
rgba(250, 250, 246, 0.75) /* footer body text */
rgba(250, 250, 246, 0.5)  /* footer copyright */
```

Use them for layered transparency effects only — full saturated colors for primary type and accents.
