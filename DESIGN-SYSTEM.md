# DESIGN-SYSTEM.md — locked design decisions

## Wordmark

- **Typeface**: Psychedelic Peace (Regular, single weight)
- **Color**: Ochre `#D4A440` (solid)
- **Treatment**:
  - `-webkit-text-stroke: 0.02em #d4a440`
  - `paint-order: stroke fill`
  - This thickens the strokes uniformly, giving a slight bolding without distorting the drippy character. The font ships single-weight only — this is the workaround.
- **Layout**:
  - BRYN and BENNETT same font-size
  - Stacked vertically, left-aligned (both share left edge)
  - BRYN gets `letter-spacing: 0.03em` to align its N with the second N in BENNETT
  - Gap between BRYN and BENNETT: `margin-top: 0.01em` on .bennett
  - `line-height: 0.85` on both (tight stack)

## Color palette

| Token | Hex | Role |
|-------|-----|------|
| `--ochre` | `#D4A440` | Wordmark, accents, ochre highlights, italics |
| `--olive` | `#6A6028` | Borders, nav links, secondary metadata |
| `--olive-dark` | `#5B5119` | Headlines, body emphasis, footer bg |
| `--olive-mid` | `#74683A` | Body text |
| `--paper` | `#FFFFFF` | Page background |
| `--paper-warm` | `#FAFAF6` | Card backgrounds, secondary surfaces |
| `--line` | `rgba(106, 96, 40, 0.15)` | All borders and rules |

## Type system

Three fonts in three roles. Don't mix the roles.

### Heading: Sulphur Point
- Weights: 300, 400, 700
- Used for: h1, h2, h3, nav links, button labels, work/portfolio item titles
- Letter-spacing: -0.01em to -0.02em on big sizes for tighter feel
- Most h1s are 700

### Body: Bitter
- Weights: 400 (regular), 700 (bold), italic both
- Used for: paragraphs, descriptions, prose
- Line-height: 1.6 for body, 1.7 for important prose
- Italic + bold combined for emphasis

### Meta: IBM Plex Mono
- Weights: 400, 500
- Used for: labels (`// Section`), dates, status, code, eyebrows, footer column titles
- Almost always uppercase with `letter-spacing: 0.18em` to `0.25em`
- Small sizes: 10-11px

## Type scale (rough)

| Size | Use |
|------|-----|
| 64px Sulphur Point 700 | Page hero h1 |
| 32-36px Sulphur Point 700 | Section titles |
| 22-24px Sulphur Point 700 | Card/work item titles, page-header tagline |
| 17-18px Bitter 400 | Body intro paragraphs |
| 15-16px Bitter 400 | Body / card descriptions |
| 13px Sulphur Point 700 | Nav links (uppercase) |
| 11-12px IBM Plex Mono 500 | Section labels (uppercase, tracked) |
| 10-11px IBM Plex Mono 500 | Tiny meta (uppercase, tracked) |

## Layout

- Container max-width: 1240px
- Container side padding: 48px desktop, 24px mobile
- Section vertical padding: 80-100px between major sections, 64px within
- Border between sections: 1px solid `--line`

## Components

### Status pill (in heroes)
- IBM Plex Mono 11px uppercase, letter-spacing 0.22em, color olive
- 8px ochre dot before the text, separated by 10px gap
- Used to show "Open to new roles · Q3 2026" or similar

### Section label (eyebrow)
- IBM Plex Mono 11px uppercase, letter-spacing 0.25em, color ochre
- Format: `// Section name` (with the slashes)
- 14-16px margin-bottom before the section title

### Work/portfolio item card
- Background: paper-warm
- Border: 1px solid line, radius 16px
- Padding: 36px 32px
- Hover: lifts 2px with light shadow

### Status pills (portfolio cards)
- 4px 10px padding, 3px radius
- IBM Plex Mono 10px uppercase, letter-spacing 0.2em
- Three states:
  - **Live** — bg ochre, text olive-dark
  - **In progress** — bg `rgba(212, 164, 64, 0.2)`, text olive-dark
  - **Concept** — bg `rgba(106, 96, 40, 0.15)`, text olive-mid

### Footer (Variant A — locked)
- Wrapper: `padding: 0 48px 48px` (so card sits in from edges)
- Card: dark-olive bg, paper-warm text, 24px rounded corners on all four corners
- Padding: 64px 56px 48px
- Three-column grid: 1.5fr / 1fr / 1fr
- Bottom row: divider line + `© 2026 Bryn Bennett` left, `brynbennett.dev` right

### Nav hover (locked)
- 18px reserved space on left of every nav item
- Asterisk `✻` fades in with rotate-and-scale animation (`cubic-bezier(0.34, 1.56, 0.64, 1)`)
- Color shifts to ochre on hover
- Active page: same as hover state
- No layout shift — the 18px space is permanent

## What NOT to do

- Don't add more colors. The 7-color palette is the entire system.
- Don't introduce new fonts. The 3-font system is the entire type system.
- Don't make the wordmark animate or move. It's static everywhere it appears.
- Don't use blue or purple anywhere — link colors must be set explicitly.
- Don't reproduce the giant wordmark on every page. It lives big on /portfolio only. Other pages use the role-statement headline.
- Don't add hover effects to everything. The flower bullet is the one micro-interaction. Cards lift slightly on hover. That's it.
