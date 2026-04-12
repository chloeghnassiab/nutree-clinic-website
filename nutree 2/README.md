# Nutree Clinic — Next.js Codebase

## Stack
- **Framework**: Next.js 14 (App Router) on Vercel Pro
- **Styling**: Tailwind CSS + CSS custom properties (design tokens in `globals.css`)
- **AI Chat**: Anthropic Claude Sonnet via `/api/chat`
- **Payments**: Square (Apple Pay / Google Pay / HSA/FSA)
- **Email**: SendGrid
- **PHI Storage**: Google Cloud (Firestore + Cloud Run) — sign BAA before storing any patient data
- **Analytics**: Plausible

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Fill in all values in .env.local

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project structure

```
src/
  app/
    page.tsx                  # Homepage /
    weight-loss/page.tsx      # /weight-loss
    nad/page.tsx              # /nad
    sermorelin/page.tsx       # /sermorelin
    oxytocin/page.tsx         # /oxytocin
    b12/page.tsx              # /b12
    consult/page.tsx          # /consult
    about/page.tsx            # /about
    faq/page.tsx              # /faq
    blog/
      page.tsx                # /blog listing
      [slug]/page.tsx         # /blog/[slug]
    pricing/page.tsx          # /pricing
    api/
      chat/route.ts           # AI chat endpoint
      lead/route.ts           # Lead capture endpoint
    layout.tsx                # Root layout (nav, footer, chat widget)
  components/
    layout/
      SiteNav.tsx             # Sticky navigation
      SiteFooter.tsx          # Footer
    ui/
      PageComponents.tsx      # All shared UI: PricingCard, FAQ, ConsultBand, etc.
      ChatWidget.tsx          # AI chat widget
  lib/
    prices.config.ts          # ← UPDATE PRICES HERE
  styles/
    globals.css               # Design tokens (CSS variables), global styles
```

---

## Updating prices

All prices live in one file: `src/lib/prices.config.ts`

Change a price there → it updates everywhere on the site automatically.

```ts
// Example: update semaglutide monthly price
semaglutide: {
  monthly: { cents: 24900, label: "$249/mo" },  // ← change both cents and label
```

---

## Design token reference

All colours are CSS custom properties defined in `src/styles/globals.css`:

| Variable | Value | Used for |
|----------|-------|----------|
| `--base` | `#F8F8F6` | Page background |
| `--ink` | `#111111` | Headlines, black buttons |
| `--ink-2` | `#4A4A47` | Body text |
| `--ink-3` | `#8A8780` | Labels, captions |
| `--teal` | `#529F99` | Nutree brand, nav CTA |
| `--glp` | `#B8E4F0` | Weight Loss / GLP-1 |
| `--nad` | `#A8D8C8` | NAD+ / Anti-Aging |
| `--ser` | `#F2C4A0` | Sermorelin / Strength |
| `--oxy` | `#D4B8E8` | Oxytocin / Well-being |
| `--b12` | `#F9E07A` | B6/B12 / Energy |
| `--con` | `#F0B8A8` | Consult CTA (always dark text on this) |

**Consult button rule**: `background: var(--con)` + `color: var(--ink)` — never white text on the blush rose background.

---

## Copy rules

- Always affirmative — state what Nutree does, never compare to competitors
- ✅ "Your price stays the same at every dose level"
- ❌ "Unlike programmes that charge more..."
- No specific dose numbers in marketing headlines
- "Provider consultation (video or phone)" — never "video consultation" alone
- Clinical independence: "Your clinician's role is to determine what is medically appropriate for you — not to recommend a specific plan"
- Prescription disclaimer on all product pages

---

## Deployment

### Vercel (recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add all environment variables from `.env.example` in the Vercel dashboard under Settings → Environment Variables.

### Google Cloud (for PHI)
Sign the Google Cloud BAA **before** storing any patient health information.

---

## Assets to migrate before cancelling Umso
These CDN assets need to be moved to Google Cloud Storage:

```
Hero video:    https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/degvoc5g3rjk380k.mp4
GLP-1 image:   https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/zl96r149zkpcxvwv.png
NAD+ image:    https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/xuvy0l9thl40cn42.png
Sermorelin:    https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/mvret1ty4jzgsyir.png
Team photo:    https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/a6ynhakmqn5x8n6r.jpg
Dr. Bilhartz: https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/9jhhz4lnjic2qnkw.jpg
Courtney:      https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/fpxeap2u4tshpqop.jpg
```

After migrating, update image `src` values in the relevant page components.

---

## TODO (next session)
- [ ] `/blog/[slug]/page.tsx` — individual blog post template
- [ ] Blog MDX migration script (`scripts/migrate-blog.ts`)
- [ ] `/glp-1` — GLP-1 explainer / microdosing page
- [ ] Admin dashboard `/admin/conversations`
- [ ] SendGrid daily digest cron
- [ ] Square payment integration
- [ ] Firestore lead storage (connect `/api/lead`)
- [ ] Confirm NAD+, Oxytocin, B12 prices → update `prices.config.ts`
- [ ] Migrate Umso assets to Google Cloud Storage
- [ ] Sign Google Cloud BAA
