# wordmark-spacing.md

The wordmark is the most particular component on the site. These are the exact rules.

## Structure

```html
<span class="wordmark">
  <span class="bryn">BRYN</span>
  <span class="bennett">BENNETT</span>
</span>
```

Stacked vertically using flex column. Both lines share the same left edge.

## CSS

```css
.wordmark {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 0.85;
}
.wordmark .bryn,
.wordmark .bennett {
  font-family: 'Psychedelic Peace', sans-serif;
  color: #d4a440;
  line-height: 0.85;
  font-weight: 400;
  -webkit-text-stroke: 0.02em #d4a440;
  paint-order: stroke fill;
  white-space: nowrap;
}
.wordmark .bryn {
  letter-spacing: 0.03em;
}
.wordmark .bennett {
  margin-top: 0.01em;
}
```

## Why these specific values

### `letter-spacing: 0.03em` on .bryn

BRYN has 4 letters and BENNETT has 7. At natural letter widths in Psychedelic Peace, BRYN is 449px wide and BENNETT is 773px wide at 200px font-size.

The visual goal: the **N in BRYN** should sit directly above the **second N in BENNETT** (since BENN = first 4 letters of BENNETT).

The right edge of "BENN" (after 4 letters) in BENNETT is at 467px. BRYN at natural width is 449px. The gap is just 18px — which works out to 0.03em of letter-spacing distributed across 3 inter-letter gaps.

`letter-spacing: 0.03em` gives you that.

### `-webkit-text-stroke: 0.02em #d4a440`

Psychedelic Peace ships in only one weight (Regular). To make it feel slightly heavier without using `font-weight: 700` (which would synthesize a bold and look muddy), we add a 0.02em stroke in the same color. This thickens every letter uniformly, preserving the drippy character.

Use `paint-order: stroke fill` so the stroke renders behind the fill (cleaner edges).

### `line-height: 0.85`

Tight stack. The two lines almost touch but don't overlap. Default line-height (1.2) leaves a giant gap.

### `margin-top: 0.01em` on .bennett

Tiny gap between BRYN and BENNETT. Without it the two lines feel cramped; with more (say 0.04em) they feel disconnected. 0.01em is the sweet spot.

### Color: `#d4a440` (ochre)

Always. Don't tint, don't shade. The ochre is locked.

## Sizing

The wordmark scales by font-size. Use these defaults:

```css
.wordmark-sm  { /* 14px — inline mentions, small footers */ }
.wordmark-md  { /* 22px — top nav, default */ }
.wordmark-lg  { /* 26px — footer */ }
.wordmark-xl  { /* 64-120px — portfolio hero, large displays */ }
```

Set both `.bryn` and `.bennett` to the same `font-size`. They were the same throughout design — never make BRYN smaller than BENNETT.

## Common mistakes to avoid

1. **Don't make BRYN smaller than BENNETT** to "balance" them. They should be the same font-size. The width difference is fine — that's the point of the layout.
2. **Don't make the stroke thicker than 0.02em**. At 0.04em the letters start merging. At 0.06em it becomes unreadable.
3. **Don't use font-weight: 700 instead of text-stroke**. The font is single-weight; the browser will synthesize a bold that looks bad.
4. **Don't apply letter-spacing to BENNETT**. Only BRYN gets the spacing tweak. BENNETT uses default letter-spacing.
5. **Don't right-align BRYN**. Both lines should start at the same left edge. The letter-spacing on BRYN handles the alignment of its right edge with BENNETT's right edge.
