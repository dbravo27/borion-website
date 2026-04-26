# Handoff: BorionAI Landing Page

## Overview
A single-page marketing site for **BorionAI**, an AI consulting company. The page positions BorionAI as a premium, outcome-focused engineering partner. It includes a sticky navigation bar, a hero with a composed product-style visual, three service cards, a three-column "Why Borion" section, a gradient CTA card, and a minimal footer.

## About the Design Files
The files in this bundle (`index.html`) are **design references created in HTML** — a prototype showing the intended look, layout, and behavior. They are **not production code to ship as-is**.

Your task is to **recreate this design in the target codebase's existing environment** (Next.js, Remix, Astro, plain Vite/React, etc.) using its established patterns, component libraries, design tokens, and tooling. If the target project has no environment yet, choose the most appropriate one (Next.js App Router with Tailwind is a reasonable default for a marketing site) and implement the design there.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are specified. Recreate the UI pixel-perfectly using the codebase's existing libraries and patterns. Where the codebase already provides primitives (e.g. a `<Button>` component), prefer those over hand-rolled styles, but match the visual specs below exactly.

---

## Brand & Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--navy` | `#141e42` | Primary background |
| `--navy-deep` | `#0b1230` | Card / surface base |
| `--navy-mid` | `#0d3084` | Gradient terminus, CTA gradient |
| `--blue` | `#195add` | Primary CTA, accents, link/active |
| `--purple` | `#6f5dd2` | Secondary accent, gradient stop |
| `--lavender` | `#d2ccf1` | Light-tone text/icon on dark |
| `--white` | `#ffffff` | Headings, strong text |
| `--line` | `rgba(210, 204, 241, 0.12)` | Hairline dividers |
| `--line-strong` | `rgba(210, 204, 241, 0.22)` | Card borders |
| `--muted` | `rgba(210, 204, 241, 0.72)` | Body text |
| `--dim` | `rgba(210, 204, 241, 0.55)` | Tertiary labels |
| Success accent | `#4ee79b` | Live status dots only |

### Typography
- **Headings:** `Roobert Medium` (weight 500). The prototype uses **Inter Tight Medium** as a stand-in because Roobert is paid. If you have a Roobert license, swap it in via `@font-face`.
- **Body & buttons:** `Manrope` — `SemiBold` (600) for buttons/labels, `Regular` (400) for body. Loaded via Google Fonts in the prototype.
- **Letter-spacing:** Headings `-0.02em`; body default; small uppercase eyebrows `0.04–0.14em`.
- **Line-height:** Headings `1.05`; body `1.55–1.6`.

#### Type scale
| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero H1 | `clamp(48px, 6vw, 76px)` | 500 | Tight tracking, gradient on second phrase |
| Section H2 | `clamp(36px, 4.4vw, 54px)` | 500 | |
| CTA H2 | `clamp(36px, 4.6vw, 58px)` | 500 | Centered |
| Card title (services) | `22px` | 500 | |
| Why-column title | `26px` | 500 | |
| Body / lede | `15–19px` | 400 | `--muted` |
| Eyebrow | `12–13px` | 600 | Uppercase, tracked, often blue |
| Button | `14–15px` | 600 | |

### Spacing scale
Multiples of 4. Common values used: `8, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96, 120`.
- Section vertical padding: `120px` (desktop)
- Section header → grid: `64px`
- Wrapper max-width: `1240px`, horizontal padding `32px`

### Radii
- Buttons: `10px` (sm) / `12px` (lg)
- Service cards: `20px`
- CTA card: `28px`
- Pills/badges: `999px`
- Small icon tiles: `7–12px`

### Shadows
- Primary button: `0 1px 0 rgba(255,255,255,0.18) inset, 0 8px 24px -8px rgba(25,90,221,0.6)`
- Primary button hover: `0 1px 0 rgba(255,255,255,0.22) inset, 0 14px 28px -10px rgba(25,90,221,0.75)`
- Hero visual cards: `0 24px 48px -16px rgba(0,0,0,0.4)`
- Status dot glow: `0 0 8–10px <color>`

### Backgrounds & textures
- **Page background:** flat `#141e42` with a fixed dotted/line grid overlay (80×80px), masked by a radial gradient that fades it out at the edges of the viewport.
- **Hero glows:** large blurred radial gradients (blue top-center, purple bottom-right) behind content.
- **CTA card:** layered radial gradients (purple bottom-left, blue top-right) over a `135deg` linear gradient `#141e42 → #0d3084`, with an inner 40px dotted grid masked to the center.
- **Why section:** ambient radial gradients top-left (blue) and bottom-right (purple).

---

## Screens / Views

There is one screen, composed of six stacked sections. Max content width `1240px`, horizontal padding `32px`. All sections sit on the global navy background; the Why section adds an ambient gradient overlay; the CTA section uses a contained gradient card.

### 1. NAV (sticky)
- **Height:** 76px
- **Background:** `rgba(20, 30, 66, 0.72)` with `backdrop-filter: blur(14px)`
- **Border-bottom:** 1px `--line`
- **Layout:** flex row, space-between, vertically centered
- **Logo (left):** the official `borion-logo-white.png` asset rendered at 28px height (width auto). It contains the gradient "B" glyph + "Borion" wordmark + "ai" superscript baked in.
- **Links (right):** Services, About (anchors to `#why`), Contact (anchors to `#contact`). 14px, weight 500, color `--muted`, hover → white.
- **CTA:** Primary button "Get Started" → `#contact`.

### 2. HERO
- **Padding:** `96px 0 120px`
- **Layout:** 2-column grid `1.15fr 1fr`, gap `80px`, items center. Below 980px → single column, gap 60px.
- **Left column:**
  - Eyebrow pill: 18px blue dot with white inner (5px inset) and `0 0 0 3px rgba(25,90,221,0.25)` halo, label "AI consulting for operators".
  - H1: `Turn AI Into ` + `<span class="grad">Business Value</span>` (linear gradient `120deg` white → lavender → purple, `-webkit-background-clip: text`).
  - Sub: "We embed artificial intelligence into real workflows, delivering measurable operational impact." (max-width 540px, `--muted`, 19px).
  - CTAs row (gap 14px): primary "Schedule a Call" (with arrow icon) + ghost "See how we work".
  - Meta row (top margin 56px, top border 1px `--line`, padding-top 28px, gap 48px): three pairs — `40+ / Production Deployments`, `12wk / Avg. Time to Value`, `SOC 2 / Aligned Engagements`. Number is 28px Inter Tight, label is 12.5px uppercase tracked dim.
- **Right column — hero visual** (height 520px, `aria-hidden`):
  - Main card (`inset: 30px`): "Operations Console" / "Workflow Health" with a green-dot "Live" pill. Three rows showing: **Triage Agent** (`94.2%`, +6.1), **Forecasting Pipeline** (`$1.4M`, +12.8), **Knowledge Retrieval** (`182ms`, −24%). Each row: 32×32 gradient icon tile + name + sub label, value right-aligned in Inter Tight with green delta. Below rows: 110px area chart with grid lines, blue→purple stroke, faded fill, white dot at the peak.
  - Floating "orbit" card (top-right, `top:-20px right:-30px`, 200px): 38×38 gradient icon + "3 models deployed / this quarter". Animates `float-1` 6s.
  - Floating "mini" card (bottom-left, `bottom:-10px left:-20px`, 220px): "Hours saved · Q2", `8,420` (32px Inter Tight), progress bar at 78% (gradient fill). Animates `float-2` 7s.
  - All floating cards: navy gradient surface, 1px `--line-strong`, `backdrop-filter: blur(16px)`, radius 16px.

### 3. SERVICES (`#services`)
- **Section header:** flex space-between, eyebrow "SERVICES" (12px, blue, with 24px leading rule), H2 "A full path from idea to operational AI." Right-aligned lede (380px max): "Three engagements designed to move you from experimentation to systems that compound value over time."
- **Grid:** 3 columns, gap 20px. Below 980px → 1 column.
- **Card:** padding `36px 32px 32px`, radius 20px, surface `linear-gradient(180deg, rgba(210,204,241,0.045), rgba(210,204,241,0.015))`, 1px `--line` border.
- **Card structure:**
  - Top row (margin-bottom 60px): number/category label (e.g. "01 / Strategy") + 48×48 gradient icon tile.
  - Title (h3, 22px).
  - Description (15px, `--muted`, 1.55).
  - Footer (margin-top 28px, padding-top 20px, top border 1px `--line`): tag string + 28×28 circular border arrow button (↗).
- **Hover:** translateY(-4px), border → `--line-strong`, surface tints toward blue (`rgba(25,90,221,0.08)`), top edge gets a subtle horizontal gradient sheen, arrow nudges (+2,-2) and turns white.
- **Three cards (verbatim copy):**
  1. **AI Strategy & Roadmap** — "From experimentation to a clear path to full AI integration." Tag: "Discovery · Prioritization · ROI modeling".
  2. **Custom AI Development** — "Solutions designed for your workflows, not generic demos." Tag: "Agents · RAG · Fine-tuning · Evaluations".
  3. **AI Operations & Scaling** — "Deploy, monitor, and scale AI systems that grow with your business." Tag: "Observability · Guardrails · Cost control".

### 4. WHY BORION (`#why`)
- **Section background:** layered radial gradients (blue top-left, purple bottom-right) with 1px `--line` borders top and bottom.
- **Section header:** eyebrow "WHY BORION", H2 "An engineering partner, not a slide deck.", lede "We work alongside your teams. Every engagement ends with systems running in production and your people equipped to own them."
- **Grid:** 3 columns, divided by 1px vertical rules. Below 980px → 1 column with horizontal rules instead.
- **Column structure:**
  - Number badge (e.g. "01") in 13px Inter Tight blue, followed by a 1px horizontal line filling remaining space.
  - 44×44 gradient icon tile (margin-bottom 24px).
  - Title (26px, weight 500).
  - Body (15px, `--muted`, 1.6).
- **Three columns (verbatim copy):**
  1. **Practical Impact** — "We measure success in hours saved, revenue moved, and decisions improved — not model benchmarks. Every project ships with a defined business outcome and a way to verify it."
  2. **Trust Through Clarity** — "Plain language, weekly demos, and shared ownership. You always know what we're building, why it matters, and what it costs to run. No black boxes, no consulting theater."
  3. **Built for Real Workflows** — "We start by mapping how your teams actually work — the systems, edge cases, and people involved. AI that ignores the messy middle never gets used. Ours is built to fit."

### 5. CTA SECTION (`#contact`)
- **Section padding:** `80px 0 120px`.
- **Card:** radius 28px, padding `80px 64px` (mobile `56px 28px`), centered text.
- **Background stack (back to front):**
  1. `linear-gradient(135deg, #141e42 0%, #0d3084 100%)`
  2. `radial-gradient(ellipse at 100% 0%, rgba(25,90,221,0.45), transparent 60%)`
  3. `radial-gradient(ellipse at 0% 100%, rgba(111,93,210,0.4), transparent 60%)`
  4. Inner 40px dotted grid (`rgba(255,255,255,0.04)` lines), masked to center via radial mask.
  5. Top blurred white-glow ellipse (subtle highlight).
- **Border:** 1px `--line-strong`.
- **Content:**
  - Eyebrow pill with green dot + "Now booking Q3 engagements".
  - H2 "Ready to operationalize AI?" (max-width 720px).
  - Sub: "A 30-minute conversation is enough to know whether we're a fit. We'll come prepared with hypotheses about where AI will pay off in your operation." (max-width 520px).
  - Actions: primary "Let's Talk" (with arrow) + ghost "Review Services".

### 6. FOOTER
- **Padding:** `48px 0 56px`, top border 1px `--line`.
- **Layout:** flex space-between, wraps on mobile.
- **Items:** logo (same `borion-logo-white.png`, rendered at 26px height) · link row (Services, About, Contact, Privacy) · copyright "© BorionAI 2026. All rights reserved." (13px, `--dim`).

---

## Components (reusable)

### Logo
Use the provided **`borion-logo-white.png`** asset (located at `assets/borion-logo-white.png` in this bundle). It's the official mark — a lavender/purple gradient "B" glyph with the white "Borion" wordmark and small "ai" superscript. Display at:
- **Nav:** `height: 28px`, width auto.
- **Footer:** `height: 26px`, width auto.

Do not recreate the logo in CSS or SVG. Drop the PNG into the project's static assets folder and reference it directly. If your codebase uses an `<Image>` or similar component, prefer that. A vector (SVG) version should be requested from the brand owner for production; the PNG is provided here for layout fidelity.

### Button
Two variants:
- **`primary`** — solid `#195add` background, white text, blue glow shadow, hover lifts 1px and brightens to `#2a6bee`.
- **`ghost`** — translucent lavender background `rgba(210,204,241,0.06)`, 1px `--line-strong` border, hover increases both.

Sizes: default `padding 11px 20px / 14px` and `lg` `padding 15px 26px / 15px / radius 12px`. Optional trailing arrow icon.

### Eyebrow pill
Rounded-full chip with optional dot/status indicator on the left. Used in hero and CTA. 12–12.5px text, lavender on translucent surface.

### Section header
Two-column flex (heading block left + lede right), stacks below 980px. Heading block contains a tracked uppercase eyebrow with a 24px leading rule and an H2.

### Service card
See section 3 spec. Hover state required.

### Stat card / floating dashboard tiles
The hero visual is decorative. You can either:
1. Re-build it as React components with the same DOM structure (preferred for fidelity), or
2. Inline an SVG/image export of the composed visual.

If interactive, the floating cards animate vertically (translateY ±10–14px, 6–7s ease-in-out infinite).

---

## Interactions & Behavior

- **Sticky nav** with backdrop blur; remains visible during scroll.
- **Smooth in-page anchor scrolling** for `a[href^="#"]` with an 80px top offset (accounts for the nav).
- **Reveal-on-scroll:** elements with `.reveal` start at `opacity:0; translateY(20px)` and animate to `opacity:1; translateY(0)` over 0.8s ease when they enter the viewport (IntersectionObserver, threshold 0.12, observe-once).
- **Service card hover:** translate, border/background tint, arrow nudge, sheen on top edge — see token spec.
- **Button hover:** translateY(-1px) + brighter background + intensified shadow.
- **Floating hero cards:** `float-1` (6s) and `float-2` (7s, delay 0.5s), simple sinusoidal Y-translate.
- **Status dots:** persistent green glow (no animation), 6px dots with `0 0 8–10px #4ee79b`.

No multi-step forms, no modals, no auth, no API calls — this is a marketing page. CTAs ultimately link to a contact/scheduling destination of the developer's choice (Calendly, HubSpot form, mailto, etc.).

---

## Responsive behavior

Single breakpoint at **980px**. Above: full grid layout as described. Below:
- Hero collapses to single column; hero visual height 460px.
- Services grid → 1 column.
- Why grid → 1 column with horizontal rules between rows.
- Section header stacks (heading above lede), gap 20px.
- Nav text links hide; only logo + Get Started button remain visible. (Add a mobile menu if the target codebase has one — not in scope here.)
- CTA card padding shrinks to `56px 28px`.
- Hero meta row wraps with reduced gap (28px).

The page is otherwise fluid; type uses `clamp()` for the major heads.

---

## State Management
None required. This is a static marketing page. The only dynamic piece is the IntersectionObserver-driven reveal class on scroll — convert to your codebase's preferred pattern (e.g. Framer Motion's `whileInView`, or a small `useInView` hook).

---

## Assets
- **No raster images, photography, or third-party logos.** All visuals are CSS gradients + inline SVG icons.
- **Icons** are inline SVGs drawn with `stroke="currentColor"`, `stroke-width: 1.8–2`, rounded line caps. List of icons used:
  - Nav/CTA arrow (right arrow): `M5 12h14M13 5l7 7-7 7`
  - Service icons: sun/target, code-flow, clock-circle
  - Why icons: line chart, shield-check, grid-with-plus
  - Hero row icons: pulse line, 4-square grid, sun rays
  - Hero orbit icon: stacked layers
  - Card-arrow (↗): `M7 17L17 7M9 7h8v8`
- Replace with the codebase's icon library (Lucide is closest visually) at the same stroke weight and size.
- **Fonts:** Manrope from Google Fonts (weights 400, 500, 600, 700). Inter Tight as the heading stand-in until Roobert Medium is licensed.

---

## Files in this bundle
- `index.html` — the full prototype, single self-contained file with inline `<style>` and a small `<script>` for IntersectionObserver + smooth scroll. Read this for any spec ambiguity; it is the source of truth for visual details.
- `assets/borion-logo-white.png` — official white-on-dark BorionAI logo. Used in nav (28px tall) and footer (26px tall).
- `README.md` — this document.
