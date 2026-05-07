# COPY.md — final text content

This is the actual text for each page. Edit before launch as needed, but these are the locked-in versions from the design process.

---

## `/` Home page

### Top nav
- Wordmark (links to /)
- Work
- Portfolio
- About
- Contact

### Hero
- **Eyebrow** (olive): `// Hi, I'm Bryn`
- **Headline** (ochre, big): `Senior fullstack engineer.`
- **Status pill**: `Open to new roles · Q3 2026`
- **Tagline** (Sulphur Point bold): `Building AI product systems that actually work in production.`
- **Body** (Bitter): `Six years shipping code at small companies — most recently *Digg*, before that *Sensible Weather*. Based in Los Angeles.`

(Italics on company names = Bitter italic + bold + ochre color)

### Selected work section
- **Eyebrow**: `// Selected work`
- **Section title**: `A few things I've shipped recently.`

Items:
1. **Mine** — Digg · 2024 · Greenfield NestJS service replacing a legacy Lambda content moderation pipeline. Owned end-to-end: domain modeling, API design, deployment, observability.
2. **Quarry** — Digg · 2024 · Admin dashboard for moderation review workflows. Reduced average review time by up to 75% and gave the ops team real-time visibility into pipeline health.
3. **Moderation pipeline v2** — Digg · 2024 · RAG-based autonomous moderation layer. Brought undetected harmful content from 55% to 5% with 95% recall and 87% precision.
4. **Multi-peril coverage** — Sensible Weather · 2023 · Underwriting expansion from rain-only to multi-peril: snow, smoke, AQI. Required reworking the pricing engine and integrating multiple weather data providers.

CTA: `View all work →` → `/work`

### Selected portfolio section
- **Eyebrow**: `// Selected portfolio`
- **Section title**: `A few things I've made on my own time.`

Items:
1. **askdumbquestions.ai** — Side project · 2026 · A field-notes-from-AI-engineering site. Honest writing about what actually happens when you build production AI systems. Custom design system, locked typography, growing essay library.
2. **howdowe.ai** — Side project · 2026 · A curated AI tool finder with editorial voice — the opposite of a comprehensive directory. Designed around the question "how do we actually do this?" rather than "what tools exist?"
3. **Astro History** — Side project · 2026 · A cross-cultural celestial interpretation app — what different traditions saw when they looked at the same sky. Currently in design phase; wordmark uses a ringed-planet "o" glyph.

CTA: `View all portfolio →` → `/portfolio`

### About teaser section
- **Eyebrow**: `// About`
- **Section title**: `A bit about me.`

Body (Bitter, 3 paragraphs):
1. I'm a senior fullstack engineer based in **Laurel Canyon, Los Angeles**. I've spent the last six years shipping production code at small companies — most recently at Digg, where I went from team-era execution to architecting and owning a new service layer through a hard pivot.
2. I care about *AI systems that actually work in production* — not demos, not benchmarks, but pipelines that handle real volume, fail gracefully, and get better over time. I think the best engineering happens at the seam between domains, where systems thinking and product instinct meet.
3. Outside of work I'm [into a bunch of things](/about) — gardening, vintage music, and figuring out what the next decade of AI products will actually look like.

---

## `/portfolio` Portfolio page

### Hero
- **Eyebrow** (ochre): `// Portfolio`
- **Headline** (olive-dark, big): `Things I make on my own time.`
- **Tagline** (Sulphur Point bold): `Side projects, design experiments, sites I built because I wanted to.`
- **Body** (Bitter): `Not paid work — that lives on /work. Some are live, some in progress, some still drawings on paper. All of them are real.`

### Cards (5 items, featured + 4 in grid)

**Featured: askdumbquestions.ai** (Live, dark olive bg)
- Meta: `2026 · Personal site / writing platform`
- Tagline: A field-notes-from-AI-engineering site. Honest writing about what actually happens when you build production AI systems.
- Body: Started as a place to write down the questions you're afraid to ask in a meeting — the ones that turn out to be the most important. Now expanding into a full Field Notes section: short essays from the trenches of building with LLMs, RAG pipelines, agent systems. Custom design system in Bricolage Grotesque + Newsreader, forest/sage/stone palette. Fully built out: index, archive, notes, about, design system pages.
- Tags: Next.js · MDX · Vercel · Custom design system
- Links: askdumbquestions.ai → · Case study →

**howdowe.ai** (In progress)
- Meta: `2026 · Curated AI tool finder`
- Tagline: The opposite of a comprehensive directory. Built around "how do we actually do this?" not "what tools exist?"
- Body: An editorial-voice AI tool finder. Wordmark locked on Bagel Fat One + Space Grotesk. Currently working through the architecture and the editorial voice — what it sounds like when a tool finder has actual taste.
- Tags: React · Editorial design · In design

**Astro History** (Concept)
- Meta: `2026 · Cross-cultural celestial app`
- Tagline: What did different cultures see when they looked at the same sky?
- Body: A reference app that compares celestial interpretations across traditions — Babylonian, Vedic, Mesoamerican, Chinese, Western. Wordmark shortlisted to Playfair Display, Italiana, Tenor Sans with a ringed-planet "o" glyph. Currently in design phase.
- Tags: React Native · Editorial design · Concept phase

**insidethe.ai** (In progress)
- Meta: `2025 · Transformer visualizer`
- Tagline: A visual book about how transformers actually work, written for engineers who want to think clearly.
- Body: Long-running side project. Section pillars: "Inside the process," "Inside the chip," "Inside the algorithms," "Inside the agent." Closer to a visual essay collection than a tutorial. Continuing as I learn.
- Tags: D3 · React · Long-form

**brynbennett.dev** (Live)
- Meta: `2026 · This site`
- Tagline: The site you're on. Custom design system, custom wordmark, intentional typography.
- Body: Designed and built around a single drippy psychedelic wordmark in Psychedelic Peace, paired with a restrained Sulphur Point + Bitter + IBM Plex Mono type system. Ochre + dried herb olive palette. Inspired by 60s Fillmore handbills.
- Tags: React · Vercel · Custom typography

---

## `/work` Work page (no mock — write the case studies later)

### Hero
- **Eyebrow** (ochre): `// Work`
- **Headline** (olive-dark): `Things I've shipped at companies.`
- **Tagline**: TBD — write the positioning sentence
- **Body**: Brief intro about your professional work history

### Detailed case studies needed
1. Mine (Digg)
2. Quarry (Digg)
3. Moderation pipeline v2 (Digg)
4. Multi-peril coverage (Sensible Weather)
5. (Optional) Earlier roles compressed into a "previously" section

For each: problem, approach, technical decisions, outcome, what you'd do differently. Aim for 400-800 words per case study. Include the metrics (75% reduction, 95% recall, etc.) where you have them.

---

## `/about` About page (no mock yet)

### What it should contain
- Career arc — 200-300 word narrative of how you got here
- What you care about technically (AI systems in production, the seam between domains)
- Personal context — Laurel Canyon, partner Grace, music wall, gluten-free, garden, plants
- A photo (recommended — natural light, plain-ish background, doesn't need to be a professional shoot)
- Easter egg: 1 sentence on why the wordmark looks the way it does — explains the 60s Fillmore poster reference for anyone who notices
- Mention `askdumbquestions.ai` here as where you write
- Link to Twitter/X if you have one

---

## `/contact` Contact page (no mock yet)

### Minimal content
- Email: `hi@brynbennett.dev` (use a button or large prominent link)
- LinkedIn URL
- GitHub URL
- Optional: Cal.com or similar for scheduling
- Brief note on what you're open to: "Recruiting conversations, AI engineering questions, collaborations"
- Brief note on response time: "Usually within a few days"

---

## Footer (every page)

### Brand column
- Wordmark
- Tagline: `Senior fullstack engineer based in Los Angeles. Building AI product systems. Open to new roles.`

### Site column
- // Site (label)
- Work
- Portfolio
- About
- Contact

### Reach me column
- // Reach me (label)
- hi@brynbennett.dev (mailto link)
- LinkedIn
- GitHub

### Bottom row
- © 2026 Bryn Bennett
- brynbennett.dev
