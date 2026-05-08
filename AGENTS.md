# agent.md — brynbennett.dev

## This is NOT the Next.js you know

This project uses Next.js 16 (App Router). APIs, conventions, and file structure may differ from training data. Read `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Project

Personal site for **Bryn Bennett** at `brynbennett.dev`. 5-page portfolio targeting senior/staff roles at tier-1 AI/tech companies. Design is finalized — do not deviate from it.

## Stack

- **Next.js 16** App Router, TypeScript, Tailwind CSS v4
- **Hosting**: Vercel (free tier)
- **Package manager**: pnpm only — never npm or yarn

## Pages

| Route | Status |
|-------|--------|
| `/` | Mock provided (`mocks/01-home.html`) |
| `/portfolio` | Mock provided (`mocks/02-portfolio.html`) |
| `/work` | No mock — same nav/footer/system |
| `/about` | No mock |
| `/contact` | No mock — static mailto link for v1 |

## Design system

Full spec in `DESIGN-SYSTEM.md`. Implementation notes in `BUILD-NOTES.md`. Mocks are the source of truth — if implementation differs from mock, the mock wins.

**Colors** (7 tokens, no additions):
- `--ochre: #D4A440` — wordmark, accents
- `--olive: #6A6028` — borders, nav
- `--olive-dark: #5B5119` — headlines, footer bg
- `--olive-mid: #74683A` — body text
- `--paper: #FFFFFF` — page bg
- `--paper-warm: #FAFAF6` — card bg
- `--line: rgba(106, 96, 40, 0.15)` — borders

**Fonts** (3 roles, no mixing):
- Psychedelic Peace — wordmark only (self-host from `fonts/PsychedelicPeace.ttf`)
- Sulphur Point — headings, nav, labels
- Bitter — body, prose
- IBM Plex Mono — meta, dates, code, eyebrows

## Key rules

- Links are never blue — set `color: inherit; text-decoration: none` globally, style contextually
- Wordmark is static — never animate it
- One micro-interaction: flower bullet `✻` on nav hover/active (CSS only, `aria-hidden`)
- Cards lift 2px on hover — that's the only other hover effect
- Body text is `--olive-mid` on white, not `--ochre` (ochre fails WCAG AA for body)
- Font subset: Psychedelic Peace only needs `BRYNET` characters — subset it

## Branches

Always create branches using conventional branch naming — `feat/<description>` for new features, `fix/<description>` for bug fixes (e.g. `feat/portfolio-page`, `fix/nav-hover-state`).

## Commits

**Never commit on the user's behalf.** Do not run `git commit` under any circumstances unless explicitly directed in that message. When work is ready, stop and let the user commit using `/commit-review`.

## Performance targets

- Static export (`output: 'export'` in next.config.ts)
- Server Components everywhere; `'use client'` only for active nav state
- Font display: swap + preload for Psychedelic Peace
- No inline base64 fonts in production (mocks use it for preview only)
