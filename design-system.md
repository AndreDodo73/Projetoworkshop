# Design System — Forge Identity
**Fitness & Performance Brand**
 
---
 
## 1. Concept and Style
 
This design system is built on the tension between **raw human power** and **technological precision**. The visual language communicates transformation — not as aspiration, but as an ongoing, unfinished process. Every visual decision reinforces the idea that identity is forged, not given.
 
The system operates in deep darkness, punctuated by combustion-grade orange and ember-red — colors that feel thermal, kinetic, and alive. Typography is unapologetically heavy. Compositions are confrontational. Imagery is dramatic and lit from within.
 
**Keywords:** `combustion` · `high-contrast` · `editorial-athletic` · `dark-dominant` · `structured-bold` · `transformation`
 
---
 
## 2. Color System
 
### 2.1 Primitive Colors
 
#### Neutrals (Dark Scale)
| Token | HEX | Usage |
|---|---|---|
| `neutral-950` | `#0A0A0A` | Background absolute |
| `neutral-900` | `#111111` | Background primary |
| `neutral-850` | `#181818` | Surface dark |
| `neutral-800` | `#1E1E1E` | Card background |
| `neutral-700` | `#2A2A2A` | Elevated surface |
| `neutral-600` | `#3A3A3A` | Dividers, borders |
| `neutral-400` | `#6B6B6B` | Muted text |
| `neutral-200` | `#B0B0B0` | Secondary text |
| `neutral-100` | `#D9D9D9` | Body text on dark |
| `neutral-50` | `#F0F0F0` | High-emphasis text |
| `neutral-0` | `#FFFFFF` | Primary text / logo |
 
#### Core Chromatic Palette
| Token | HEX | Description |
|---|---|---|
| `orange-vivid` | `#E8400A` | Core brand — combustion orange |
| `orange-hot` | `#FF4D0D` | Hover / active state |
| `orange-muted` | `#C03200` | Pressed / deep accent |
| `red-ember` | `#B22A00` | Secondary accent — darker fire |
| `red-glow` | `#FF2200` | Cinematic light leak / FX only |
| `gray-steel` | `#5C6B7A` | Cold contrast on select refs |
 
---
 
### 2.2 Semantic Colors
 
| Role | Token | HEX | Description |
|---|---|---|---|
| **Primary** | `color-primary` | `#E8400A` | Main brand action — CTAs, highlights, key words |
| **Primary Hover** | `color-primary-hover` | `#FF4D0D` | Interactive state |
| **Primary Pressed** | `color-primary-pressed` | `#C03200` | Pressed/active state |
| **Background** | `color-bg` | `#111111` | Default dark background |
| **Surface** | `color-surface` | `#1E1E1E` | Cards, panels, overlays |
| **Text Primary** | `color-text-primary` | `#FFFFFF` | Headlines, primary labels |
| **Text Secondary** | `color-text-secondary` | `#B0B0B0` | Subheadings, descriptive text |
| **Text Muted** | `color-text-muted` | `#6B6B6B` | Captions, metadata |
| **Text Accent** | `color-text-accent` | `#E8400A` | Emphasized keywords in headlines |
| **Border Subtle** | `color-border` | `#2A2A2A` | Component separation |
| **Success** | `color-success` | `#2E7D32` | Confirmation states |
| **Warning** | `color-warning` | `#F57C00` | Attention states |
| **Error** | `color-error` | `#C62828` | Destructive / alert states |
 
#### Color Logic
- The system is **dark-first**: backgrounds never exceed `neutral-800`.
- Orange (`#E8400A`) functions as the single energetic force — used sparingly but with full intensity.
- Mixed-weight headlines use white for supporting words and orange for charged/active words.
- Color is used **narratively**: orange appears where transformation, motion, or emphasis is implied.
 
---
 
## 3. Typography
 
### 3.1 General Style
Condensed, extended-weight grotesque or athletic sans-serif for display. Tight, structured, neutral sans for body. The typographic voice is **loud in headlines, disciplined in text**.
 
### 3.2 Hierarchy
 
| Level | Style | Weight | Size Range | Use |
|---|---|---|---|---|
| `display` | Extended condensed grotesque | Black / 900 | 72–120px | Hero statements, campaign headlines |
| `h1` | Condensed bold grotesque | Bold / 700–800 | 48–72px | Section titles |
| `h2` | Condensed bold | Bold / 700 | 32–48px | Sub-section headers |
| `h3` | Grotesque medium-bold | SemiBold / 600 | 20–28px | Card titles, feature labels |
| `overline` | Uppercase tracking wide | Medium / 500 | 10–12px | Category labels, eyebrows |
| `body` | Neutral sans | Regular / 400 | 14–16px | Paragraphs, descriptions |
| `caption` | Neutral sans | Regular / 400 | 11–13px | Metadata, footnotes |
| `label` | Uppercase narrow tracking | Medium / 500 | 11–13px | Button labels, tags |
 
### 3.3 Weight Distribution
- Display and headlines are **heavy and compressive** — wide letterforms, maximum weight.
- Body text is intentionally light to create **dramatic contrast** with headline weight.
- Never use medium weight for headlines; the jump from Regular body to Black headline is intentional.
 
### 3.4 Spacing Tendencies
- Display: `letter-spacing: -0.02em` — tight, compressed
- Overline: `letter-spacing: 0.12em` — widely tracked uppercase
- Body: `letter-spacing: 0` — neutral, readable
- Line-heights: Display `0.9–1.0` · H1 `1.0–1.1` · Body `1.5–1.6`
 
---
 
## 4. Spacing and Layout
 
### 4.1 Base Grid
**8pt base grid** — all spacing values are multiples of 8.
 
| Token | Value | Description |
|---|---|---|
| `space-1` | `4px` | Micro — icon padding, tight gaps |
| `space-2` | `8px` | Small — inline element gaps |
| `space-3` | `16px` | Default — component internal |
| `space-4` | `24px` | Medium — between related elements |
| `space-5` | `32px` | Large — card padding, section gaps |
| `space-6` | `48px` | XL — section separators |
| `space-7` | `64px` | 2XL — hero padding |
| `space-8` | `96px` | 3XL — major section breaks |
| `space-9` | `128px` | 4XL — full-bleed vertical rhythm |
 
### 4.2 Layout Structure
- **12-column grid**, with 24px gutters on desktop, 16px on mobile.
- Margins: 80px on desktop / 24px on mobile.
- Layouts alternate between **full-bleed image sections** and **contained text panels**.
- Content blocks favor **2-column asymmetry** (e.g. 5col image + 7col text, or reversed).
- Hero sections break the grid intentionally — typography overflows into imagery.
 
### 4.3 Density
**High-impact, low-clutter.** Not sparse — theatrical. Sections breathe generously between each other (`96–128px`), but internal components are compact.
 
---
 
## 5. Shapes and UI Language
 
### 5.1 Border Radius
| Context | Value | Description |
|---|---|---|
| Buttons (primary) | `0px` | Sharp — aggressive, no softening |
| Cards | `4–8px` | Barely rounded — structural rigidity |
| Images | `6–12px` | Subtle rounding on editorial images |
| Badges / tags | `2–4px` | Near-sharp |
| Inputs | `4px` | Minimal softness |
 
> The system avoids pill shapes entirely. Rounding is earned, not default.
 
### 5.2 Stroke Usage
- Borders are **rarely used decoratively** — when present, they are thin (1px), dark, and structural.
- Active / hover states may introduce a **1px orange bottom border** or a left-side accent rule.
- Icon strokes: thin (1.5–2px), precise.
 
### 5.3 Component Style
- **Flat with selective elevation** — no gradients on UI elements (only on imagery and backgrounds).
- CTA buttons: solid fill with no shadow, all-caps label, heavy weight.
- Ghost buttons: 1px border, no fill, text in white or orange.
- Cards: `surface` background, thin border, no box-shadow by default.
- Interactive states use **color shifts** (orange → brighter orange) not shadow lift.
 
---
 
## 6. Visual Details
 
### 6.1 Shadows
- UI components: **no shadow** — flatness reinforces the industrial edge.
- Hero/editorial imagery: **dramatic cinematic shadows** cast from directional orange/red light.
- Overlay panels: `box-shadow: 0 8px 40px rgba(0,0,0,0.6)` — deep, far-reaching.
 
### 6.2 Borders
- Surface separators: `1px solid #2A2A2A` — nearly invisible, structural only.
- Decorative rules: Used as typographic dividers — thin horizontal lines in `neutral-600`.
- No visible border on primary buttons — shape alone defines the component.
 
### 6.3 Decorations and FX
| Element | Description |
|---|---|
| **Light leaks** | Directional orange/red beams bleeding across images — editorial, cinematic |
| **Dot matrix / halftone** | Low-opacity pixel grid patterns over image areas — tech / military aesthetic |
| **Text-behind-subject** | Large outlined or low-opacity type placed behind the figure — layered depth |
| **Glow edges** | Subtle orange rim-light around subjects — photographic, not CSS-generated |
| **Grain overlay** | Subtle noise texture at 8–12% opacity over dark backgrounds — tactile, grounded |
| **Geometric shapes** | Angular forms (chevrons, arrows) used as graphic dividers or background accents |
 
#### FX Principles
- All effects serve the **transformation narrative** — fire, heat, energy, emergence.
- Never apply decorative FX to UI components (buttons, inputs, cards).
- FX are restricted to **hero zones, campaign imagery, and editorial backgrounds**.
 
---
 
## 7. Contrast and Accessibility
 
### 7.1 Contrast Levels
| Pairing | Ratio | Status |
|---|---|---|
| White text on `#111111` | ~18:1 | ✅ AAA |
| White text on `#1E1E1E` | ~14:1 | ✅ AAA |
| `#E8400A` on `#111111` | ~5.2:1 | ✅ AA |
| `#B0B0B0` on `#111111` | ~7.6:1 | ✅ AA |
| `#6B6B6B` on `#111111` | ~3.1:1 | ⚠ Use for large/decorative text only |
 
### 7.2 Readability Approach
- **White is the primary reading color** — all body text defaults to `#FFFFFF` or `#D9D9D9`.
- Orange is used for **scannable highlights**, never long-form text.
- Muted gray (`#6B6B6B`) is reserved for metadata, captions, and non-essential text — never body copy.
- **All interactive elements** (links, buttons) must pass AA contrast in both default and hover states.
 
### 7.3 Hierarchy Through Color
- The eye is guided: dark background → white headline → orange keyword → muted body.
- Color emphasis follows a strict **one-accent rule per visual block**: one word or phrase in orange per headline unit.
- Avoid competing accents within the same visual zone.
 
---
 
## 8. Token Summary (Design Tokens Reference)
 
```css
/* Colors */
--color-bg:              #111111
--color-surface:         #1E1E1E
--color-primary:         #E8400A
--color-primary-hover:   #FF4D0D
--color-primary-pressed: #C03200
--color-text-primary:    #FFFFFF
--color-text-secondary:  #B0B0B0
--color-text-muted:      #6B6B6B
--color-text-accent:     #E8400A
--color-border:          #2A2A2A
 
/* Spacing */
--space-1: 4px
--space-2: 8px
--space-3: 16px
--space-4: 24px
--space-5: 32px
--space-6: 48px
--space-7: 64px
--space-8: 96px
--space-9: 128px
 
/* Radius */
--radius-sharp:  0px
--radius-subtle: 4px
--radius-card:   8px
 
/* Typography Scale */
--text-display: 96px / Black / -0.02em
--text-h1:      64px / Bold  / -0.01em
--text-h2:      40px / Bold  / 0
--text-h3:      24px / SemiBold / 0
--text-body:    15px / Regular / 0
--text-caption: 12px / Regular / 0
--text-label:   11px / Medium  / 0.10em / uppercase
--text-overline:11px / Medium  / 0.14em / uppercase
```
 
---
 
## 9. Implementation Guidelines
 
### 9.1 Typography Stack
```css
/* Primary Display Font */
font-family: 'Oswald', sans-serif;
/* Use for: Headlines, CTAs, section titles */

/* Body & UI Font */
font-family: 'Inter', sans-serif;
/* Use for: Body text, labels, forms, captions */
```
 
### 9.2 Component Patterns
 
#### Primary CTA Button
- Background: `#E8400A`
- Text: `#FFFFFF`, uppercase, 11-13px, letter-spacing: 0.10-0.12em
- Font: Oswald Bold or Inter Medium
- Padding: 12-16px vertical, 24-32px horizontal
- Border-radius: `0px` (sharp)
- Hover: Background → `#FF4D0D`
- Pressed: Background → `#C03200`
 
#### Ghost Button
- Background: transparent
- Border: 1px solid `#2A2A2A`
- Text: `#B0B0B0`, same typography as primary
- Hover: Border → `#E8400A`, Text → `#FFFFFF`
 
#### Input Fields
- Background: `#0D0D0D` (darker than surface)
- Border: 1px solid `#303030`
- Border-radius: `4-8px`
- Padding: 14-16px
- Text: `#FFFFFF`
- Placeholder: `#606060`
- Focus: Border → `#E8400A`, ring: 1px `#E8400A`
 
#### Cards
- Background: `#1E1E1E`
- Border: 1px solid `#2A2A2A` (optional)
- Border-radius: `6-8px`
- Padding: 24-32px
- No shadow by default
 
### 9.3 Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 768px) {
  --space-section: 64px;
  --margin-container: 24px;
  --text-h1: 48px;
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  --space-section: 80px;
  --margin-container: 48px;
  --text-h1: 56px;
}

/* Desktop */
@media (min-width: 1025px) {
  --space-section: 96px;
  --margin-container: 80px;
  --text-h1: 64px;
}
```
 
---
 
*Design System — Forge Identity | v1.0 | FORGEE Academia — Indaiatuba, SP*
