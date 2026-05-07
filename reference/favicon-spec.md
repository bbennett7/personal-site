# favicon-spec.md

## Primary favicon

A single **B** in Psychedelic Peace, vertically centered, on an ochre square with rounded corners. Olive-dark color for the B.

```css
.favicon {
  background: #d4a440;
  color: #5b5119;
  border-radius: 4px;
  font-family: 'Psychedelic Peace', sans-serif;
  -webkit-text-stroke: 0.02em #5b5119;
  paint-order: stroke fill;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
```

## Sizes to generate

Standard favicon sizes for production:

| Size | File | Purpose |
|------|------|---------|
| 16×16 | favicon-16x16.png | Browser tabs |
| 32×32 | favicon-32x32.png | Standard favicon, retina tabs |
| 48×48 | favicon.ico | Legacy IE/Windows |
| 180×180 | apple-touch-icon.png | iOS home screen |
| 192×192 | android-chrome-192x192.png | Android home screen |
| 512×512 | android-chrome-512x512.png | High-res Android, manifest |

## At-size B font sizes

When rendering the B inside the square, the font-size needs to be smaller than the container so it has padding visually:

| Container | B font-size | Border radius |
|-----------|-------------|---------------|
| 16px | 14px | 2px |
| 24px | 19px | 3px |
| 32px | 26px | 4px |
| 48px | 38px | 4px |
| 64px | 56px | 8px |
| 180px (apple) | 156px | 24px |
| 512px (android) | 444px | 64px |

The B should be vertically centered. If it appears too high (which it tends to with display fonts), apply a small `transform: translateY(0.04em)` on the B to nudge it down to optical center.

## Alternate variants (saved for future use)

These are documented in the design system but aren't the primary favicon:

- **Square · olive bg (reverse)** — ochre B on olive-dark square. For dark mode tabs or branding moments.
- **Circle · ochre bg** — olive B on ochre circle. For social avatars where round is required.
- **Circle · olive bg (reverse)** — ochre B on olive circle. Most logo-mark feeling.

## Generation

You can generate all sizes from a single high-res master (1024×1024 SVG or PNG) using:

```bash
# Using ImageMagick
convert master-1024.png -resize 16x16 favicon-16x16.png
convert master-1024.png -resize 32x32 favicon-32x32.png
convert master-1024.png -resize 180x180 apple-touch-icon.png
# etc.
```

Or use realfavicongenerator.net and feed it the master image.

## HTML to add to `<head>`

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#d4a440">
```

## site.webmanifest

```json
{
  "name": "Bryn Bennett",
  "short_name": "Bryn",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#d4a440",
  "background_color": "#ffffff",
  "display": "standalone"
}
```
