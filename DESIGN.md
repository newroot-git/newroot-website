# Elemental Studios — Design System (v2)

*Fresh direction. Clean, modern, friendly. Doddly structure, W4W warmth, Elemental identity.*

---

## Direction

**5 adjectives:** Clean, warm, friendly, confident, grounded

Not dark-tech. Not agency-generic. A site that feels approachable and professional — like talking to someone who actually knows what they're doing and doesn't need to prove it with flashy effects. The warm ground says "we're human." The clean structure says "we're competent." The green says "we're grounded."

**Structural reference:** Doddly — clear section hierarchy, professional grid layouts, nothing gimmicky
**Visual reference:** W4W — warm cream background, floating browser mockups, vibrant accents

---

## Colors

| Token | Hex | Use |
|-------|-----|-----|
| Background | `#F5F2EC` | Warm cream page background |
| Surface | `#EBE8E1` | Cards, panels, subtle separation |
| Surface Dark | `#DDD9D0` | Hover states, active elements |
| Foreground | `#1A1A1A` | Headlines, primary text |
| Body | `#3A3632` | Body copy, descriptions |
| Muted | `#7A756E` | Subtext, labels, secondary info |
| Accent | `#2D5A3D` | Forest green — brand identity, section headers, tags |
| Accent Light | `#E6F0EA` | Green tint backgrounds, hover states |
| CTA | `#E05A2D` | Warm terracotta — action buttons, key highlights |
| CTA Hover | `#C74B20` | CTA pressed/hover |
| CTA Light | `#FDF0EA` | CTA tint backgrounds |
| White | `#FFFFFF` | Card backgrounds, contrast sections |
| Dark | `#1A1A1A` | Footer only |

### Usage Rules
- Background alternates between `background` (#F5F2EC) and `white` (#FFFFFF) for section rhythm
- Accent (forest green) = brand moments, section labels, nav hover states, feature icons
- CTA (terracotta) = buttons ONLY. One per viewport. Scarcity = urgency.
- Dark background = footer only. Everything else is warm and light.
- Green + terracotta = earth + fire. Elemental.

---

## Typography

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Display | Space Grotesk | 600–700 | Headlines, section headers, nav logo |
| Body / UI | Inter | 400–600 | All body text, nav links, CTAs, descriptions |

### Scale
- Hero H1: `clamp(48px, 6vw, 76px)` / `leading-[1.05]` / `tracking-[-0.03em]`
- Section H2: `clamp(32px, 4vw, 52px)` / `leading-[1.1]` / `tracking-[-0.02em]`
- Section H3: `clamp(20px, 2.5vw, 28px)` / `leading-[1.2]`
- Body large: `18px` / `leading-relaxed`
- Body: `16px` / `leading-relaxed`
- Small / label: `13–14px` / `tracking-wide` / Inter 500 uppercase
- Stat number: `clamp(40px, 5vw, 64px)` / Space Grotesk 700

---

## Spacing

- Section padding: `py-24` to `py-32` (desktop), `py-16` to `py-20` (mobile)
- Max content width: `max-w-7xl mx-auto` (1280px)
- Component gap: `gap-6` to `gap-8`
- Content column: `max-w-3xl mx-auto` for centered text
- Side padding: `px-6 md:px-8 lg:px-12`

---

## Border Radius

| Element | Value |
|---------|-------|
| Cards | `rounded-2xl` |
| Buttons | `rounded-lg` |
| Inputs | `rounded-lg` |
| Browser mockups | `rounded-xl` |
| Tags / labels | `rounded-md` |

---

## Buttons

### Primary CTA
- `h-12 px-8 rounded-lg`
- `bg-cta text-white` / hover: `bg-cta-hover` + subtle shadow
- Inter 500, `text-[15px]`
- No shimmer. Clean glow shadow on hover.

### Secondary
- `h-12 px-8 rounded-lg`
- `border border-foreground/15 bg-transparent` / hover: `bg-surface`
- Inter 500, foreground color

---

## Effects & Motion

- **Framer Motion** for all animations
- **Entry:** `opacity: 0 → 1`, `y: 30 → 0`, `duration: 0.6s`, `ease: [0.16, 1, 0.3, 1]`
- **Stagger:** `delay: i * 0.08` for grid children
- **Hover cards:** `y: -4`, subtle shadow increase
- **Floating mockups:** Gentle continuous float (`y` oscillation, 6-10s cycles)
- **Stats:** Count-up on scroll entry
- **No shimmer, no gradients, no WebGL**
- Timing: smooth and unhurried. 0.5–0.7s transitions.

---

## Section Structure (Doddly-inspired)

| # | Section | Background |
|---|---------|-----------|
| 1 | Navigation | Transparent → white/80 blur |
| 2 | Hero | `background` with floating browser mockups |
| 3 | Value Statement | `white` — big centered text |
| 4 | Stats Row | `white` — continuation |
| 5 | Services Grid | `background` — 3 cards |
| 6 | How We Work | `white` — process steps |
| 7 | Testimonials | `background` |
| 8 | CTA Banner | `accent` (forest green) — white text |
| 9 | Footer | `dark` — dark ground |

---

## Anti-patterns

- No dark backgrounds (except CTA banner + footer)
- No shimmer/sheen on buttons
- No gradient text or backgrounds
- No emojis
- No rounded-full on tags/badges
- No single-side colored border accents
- No stock photography
- No buzzword headlines
