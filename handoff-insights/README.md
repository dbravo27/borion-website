# BorionAI — Insights Blog Handoff (Astro)

Drop-in package for the new **Insights** section: list page, post template, three first posts, and the BlogCard design system used on the homepage.

This bundle was generated from the approved design (`insights-cards.html` in the design project). All visuals, tokens, typography, and the editorial signature divider are encoded as Astro components — no design re-work needed.

---

## What's in here

```
handoff-insights/
├── src/
│   ├── components/insights/
│   │   ├── BlogCard.astro           # Card used on grid + "Continue reading"
│   │   ├── Art_CPG.astro            # SVG art: 6 data islands → decision core
│   │   ├── Art_Deck.astro           # Static deck → live interactive product
│   │   ├── Art_Handoff.astro        # Model ready · The Gap · In production
│   │   └── PostSignature.astro      # Logo + "BORION AI · RESEARCH" divider
│   ├── layouts/
│   │   └── PostLayout.astro         # Nav + Hero + Signature + <slot/> + Continue reading
│   ├── pages/insights/
│   │   ├── index.astro              # /insights — list page (navy, like homepage)
│   │   └── [slug].astro             # /insights/[slug] — dynamic post page
│   ├── content/
│   │   ├── config.ts                # Astro Content collection schema
│   │   └── insights/
│   │       ├── cpg-decision-systems.md
│   │       ├── slide-decks-to-products.md
│   │       └── critical-ai-handoff.md
│   └── styles/
│       └── blog.css                 # Tokens + article typography (h2/h3/p/blockquote/code/ul)
└── public/assets/
    ├── borion-logo-dark.png         # For cream/light surfaces (post page nav, signature)
    └── borion-logo-white.png        # For navy surfaces (Insights list page, site nav)
```

---

## Integration steps (for Claude Code)

### 1. Merge files into the existing `borion-website` repo

| Source                                          | Destination in repo                      |
| ----------------------------------------------- | ---------------------------------------- |
| `handoff-insights/src/components/insights/*`    | `src/components/insights/*`              |
| `handoff-insights/src/layouts/PostLayout.astro` | `src/layouts/PostLayout.astro`           |
| `handoff-insights/src/pages/insights/*`         | `src/pages/insights/*`                   |
| `handoff-insights/src/content/*`                | `src/content/*`                          |
| `handoff-insights/src/styles/blog.css`          | `src/styles/blog.css`                    |
| `handoff-insights/public/assets/*`              | `public/assets/*`                        |

### 2. Enable Astro Content collections

If `astro.config.mjs` doesn't already have it, the Content collection is auto-detected as long as `src/content/config.ts` exists. No config change needed.

### 3. Merge CSS tokens

`blog.css` declares brand tokens scoped to `:root`. If your existing globals (probably referenced by `src/pages/index.astro` or `src/components/CaseStudies.astro`) already define `--navy`, `--blue`, `--purple`, `--lavender`, `--white`, **do not redeclare them** — keep your existing values and only merge the **new** tokens:

```css
--lavender-soft: #e8e3f5;
--cream: #f6f4ef;
--ink: #0a0e1f;
--ink-mid: #4a5070;
--ink-dim: #7a7f96;
--line: rgba(10, 14, 31, 0.08);
--line-soft: rgba(10, 14, 31, 0.06);
--font-display: 'Inter Tight', system-ui, sans-serif;
--font-body: 'Manrope', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
```

### 4. Add an Insights teaser section on the homepage (optional)

To surface the latest three posts on `/`, drop this snippet into `src/pages/index.astro` wherever the "Insights" placeholder currently is:

```astro
---
import BlogCard from '../components/insights/BlogCard.astro';
import { getCollection } from 'astro:content';

const latest = (await getCollection('insights'))
  .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
  .slice(0, 3);

const fmt = (d) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
---
<section id="insights" class="insights-section">
  <div class="wrap">
    <div class="section-eyebrow"><span class="bar"></span>Latest from Borion</div>
    <h2>Insights on AI That Ships.</h2>
    <p class="lede">Practical intelligence on enterprise AI deployment.</p>
    <div class="insights-grid">
      {latest.map(p => (
        <BlogCard
          href={`/insights/${p.slug}`}
          eyebrow={p.data.eyebrow}
          title={p.data.title}
          date={fmt(p.data.date)}
          readMin={p.data.readMin}
          art={p.data.art}
        />
      ))}
    </div>
  </div>
</section>
```

The card is responsive (max-width 480px, height 560px on desktop). Use a grid like `grid-template-columns: repeat(auto-fill, minmax(360px, 1fr))` on the container.

### 5. Fill in the post bodies

The three `.md` files include the **lede + first H2 + pull quote** for each post as a faithful starting point. Look for the `<!-- TODO -->` comment in each file — that is where the rest of the body from the source PDF should be pasted as markdown.

Markdown conventions used by `blog.css`:
- `##` → H2 (32px Inter Tight)
- `###` → H3 (22px Inter Tight)
- `> ...` → pull-quote (24px Inter Tight, purple left border)
- Lists, inline code, code fences, and links are all styled

---

## Design contract — do not break

These rules govern the visual coherence of the blog with the rest of borionai.com.

### Brand palette (no new colors)
| Token | Hex |
|---|---|
| `--navy` | `#141e42` |
| `--blue` | `#195add` |
| `--purple` | `#6f5dd2` |
| `--lavender-soft` | `#e8e3f5` |
| `--cream` | `#f6f4ef` |
| `--ink` | `#0a0e1f` |

### Typography
- **Display**: Inter Tight 500 — titles, eyebrows, pull-quotes
- **Body**: Manrope 400 — paragraphs
- **Mono**: JetBrains Mono — code & data labels in card art

### Card art rules
- Always height 240px in card grid, 360px in post hero
- Background is **always** the lavender-soft → cream gradient
- Accent gradient (purple → blue) used **only** for the focal element (decision core, live product UI, in-production block)
- The `--art` prop on `BlogCard` is the only switch — never inline a custom art block per post

### Post page rhythm
1. Nav (cream) →
2. Hero (lavender gradient, 2-col title + art) →
3. **Editorial signature divider** (logo + "BORION AI · RESEARCH") →
4. Article body (cream, 720px column) →
5. Continue reading (cream, 2 cards)

The signature divider is non-negotiable — it is the publisher mark.

---

## Prompt for Claude Code (copy-paste)

```
I'm dropping in a `handoff-insights/` folder with the new Insights blog.
Please integrate it into the existing Astro repo:

1. Move every file from `handoff-insights/src/...` to the matching path under `src/...`
2. Move every file from `handoff-insights/public/assets/...` to `public/assets/...`
3. Open `src/styles/blog.css`. If the existing globals (used by index.astro
   and CaseStudies.astro) already define --navy, --blue, --purple, --lavender,
   --white — REMOVE those duplicates from blog.css and keep only the new
   tokens (--lavender-soft, --cream, --ink, --ink-mid, --ink-dim, --line,
   --line-soft, --font-display, --font-body, --font-mono).
4. Verify the Content collection is detected by running `npm run dev` and
   visiting /insights — you should see three cards.
5. Visit /insights/critical-ai-handoff — you should see the post page
   with nav, hero, signature divider, article body, and "Continue reading".
6. Add an Insights teaser section to `src/pages/index.astro` using the
   snippet in handoff-insights/README.md step 4.
7. Open each .md file in src/content/insights/ and look for the
   `<!-- TODO — Claude Code: replace this comment ... -->` markers.
   Paste the full body of each post from the source PDFs as markdown.

Constraints:
- DO NOT change any tokens or colors. The palette is fixed.
- DO NOT modify the .astro files except to fix import paths if needed.
- DO NOT change the editorial signature divider — it is the publisher mark.
- DO NOT add author bios, social share buttons, or comment widgets.
- The author for all three posts is "Claud Rodriguez, CSO".
- All three posts are dated in May 2026 (see frontmatter).

After integration, run `npm run build` and report any errors.
```

---

## Quick QA checklist

- [ ] `/insights` renders 3 cards on navy background
- [ ] Cards hover-lift on mouseover (translateY -4px + soft shadow)
- [ ] `/insights/critical-ai-handoff` renders hero + signature + body
- [ ] Pull-quotes have purple left border, Inter Tight 500
- [ ] "Continue reading" shows the other 2 cards at the bottom
- [ ] Mobile (`< 900px`): hero collapses to 1 column, nav links hide
- [ ] Author is "Claud Rodriguez, CSO" on all three posts
- [ ] Logo loads on both light (cream) and dark (navy) navs
