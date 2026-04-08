# Medici Social — UI/UX Design Specification

> **Version:** 1.0 · **Last Updated:** April 2026  
> **Stack:** Next.js · Tailwind CSS · Framer Motion · TypeScript  
> This document is the single source of truth for all visual, motion, and interaction standards across the Medici Social website.

---

## 1. Core Philosophy

We follow a **2026 Dark Mode Agency** aesthetic — minimal, cinematic, and premium. Every pixel should feel intentional. The site must convey authority and sophistication through restrained color usage, deliberate motion, and rich texture.

### The 60-30-10-5 Color Rule

| Weight | Role | Token | Hex |
|--------|------|-------|-----|
| **60%** | Background | `bg-black` | `#000000` |
| **30%** | Containers & Cards | `bg-zinc-900` | `#18181b` |
| **10%** | Text & Borders | `text-white` / `text-zinc-400` / `border-zinc-800` | `#ffffff` / `#a1a1aa` / `#27272a` |
| **5%** | Accent (CTA only) | `bg-red-700` / `text-red-600` | `#b91c1c` / `#dc2626` |

**Rules:**
- Red is **strictly reserved** for CTA buttons, stat numbers, step labels, and small icon accents. Never use it for backgrounds or large surfaces.
- All cards use `bg-zinc-900 border border-zinc-800`. No exceptions.
- Headings are always `text-white`. Body/paragraph text is always `text-zinc-400`.
- Section labels (pills) use `bg-white/5 text-white/60 border border-white/10`.

### Typography

| Element | Classes |
|---------|---------|
| Hero H1 | `text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]` |
| Section H2 | `text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight` |
| Card H3 | `text-xl md:text-2xl font-semibold text-white` |
| Body text | `text-sm text-zinc-400 leading-relaxed` |
| Section subtext | `text-base text-zinc-400 mt-4 max-w-xl` |

**Font stack:** Inter (primary sans-serif), Playfair Display (available for editorial accents).

### Film Grain Texture

A fixed SVG noise overlay sits above all content for cinematic richness:

```
opacity: 0.03
mix-blend-mode: overlay
z-index: 50
pointer-events: none
```

This is defined once in `layout.tsx` and applies globally. **Do not duplicate it in individual pages.**

---

## 2. Animation Physics

All animations use Framer Motion with the `Variants` type for strict TypeScript safety.

### Easing Curves

| Name | Array | Feel | Use Case |
|------|-------|------|----------|
| `heroEase` | `[0.16, 1, 0.3, 1]` | Smooth, dramatic deceleration | Above-the-fold elements that load on page entry |
| `scrollEase` | `[0.21, 0.47, 0.32, 0.98]` | Snappy, premium snap-in | All scroll-triggered reveals below the fold |

### Standard Variants

```typescript
import { Variants } from 'framer-motion';

// Section wrapper — scroll reveal
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }
  },
};

// Stagger parent — wraps grids of cards
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Hero child element (text, buttons — above the fold)
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

// Card child (grids — below the fold)
const cardItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};
```

### Viewport Trigger

```typescript
const viewportConfig = { once: true, margin: '-100px' };
```

- `once: true` — animations fire once and never replay.
- `margin: '-100px'` — triggers 100px before the element enters the viewport for a seamless feel.

### Application Pattern

**Above the fold (Hero):**
```jsx
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  <motion.h1 variants={staggerItem}>...</motion.h1>
  <motion.p  variants={staggerItem}>...</motion.p>
  <motion.div variants={staggerItem}>/* CTA buttons */</motion.div>
</motion.div>
```

**Below the fold (all other sections):**
```jsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportConfig}
>
  {cards.map(card => (
    <motion.div key={card.id} variants={cardItem}>
      ...
    </motion.div>
  ))}
</motion.div>
```

### Hero Text Stagger

The H1 uses nested `staggerChildren: 0.08` so each word reveals sequentially:

```
"Turn" → "Views" → "Into" → [Red rotating block]
```

Each word is a `<motion.span className="inline-block">` with independent y/opacity animation.

---

## 3. Micro-Interactions & Effects

### CTA Button Hover

All primary and secondary buttons use:

```
// Primary (red)
bg-red-700 hover:bg-red-600 hover:scale-[1.02] transition-all duration-300

// Secondary (outline)
border border-zinc-800 hover:bg-zinc-900 hover:scale-[1.02] transition-all duration-300
```

### Card Hover Lift (Framer Motion)

Stats, services, and process cards:

```jsx
whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
```

### Image Grayscale Reveal (Case Studies)

Images are muted by default, full color on card hover:

```
transition-all duration-500
grayscale-[50%] brightness-75
group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105
```

Requires `group` on the parent card.

### Mouse-Tracking Spotlight (SpotlightCard)

A Linear.app-style radial light that follows the cursor across card surfaces.

**Usage:**
```jsx
import SpotlightCard from './components/SpotlightCard';

<SpotlightCard className="bg-zinc-900 border border-zinc-800 rounded-xl ...">
  {/* Card content */}
</SpotlightCard>
```

**How it works internally:**
```tsx
// Track cursor relative to card
const rect = ref.current.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

// Render gradient at cursor position
<div style={{
  opacity: isHovered ? 1 : 0,
  background: `radial-gradient(
    400px circle at ${x}px ${y}px,
    rgba(255,255,255,0.06),
    transparent 40%
  )`,
}} />
```

- `pointer-events-none`, `z-10`
- Fades in/out over `500ms`
- Apply to any `bg-zinc-900` card for the premium effect

### Testimonial Carousel

- Auto-rotates every **5 seconds**
- `AnimatePresence mode="wait"` for smooth cross-fade
- Dot indicators: active = `bg-red-600 w-6`, inactive = `bg-zinc-700 w-2`

---

## 4. Media Standards

### Background Video — Mandatory Attributes

Every `<video>` element must include ALL of the following:

```jsx
<video
  autoPlay          // React camelCase (not autoplay)
  muted             // REQUIRED for mobile autoplay
  loop              // Infinite loop
  playsInline       // CRITICAL: prevents iOS full-screen takeover
  preload="auto"    // Eager first-frame loading
  poster="/images/[name]-poster.webp"  // WebP fallback < 10KB
  className="... pointer-events-none"  // Prevents accidental interaction
>
  <source src="/videos/[name].mp4" type="video/mp4" />
</video>
```

**Never omit `playsInline` or `muted`.** iOS Safari will block autoplay or force full-screen without them.

### Poster Images

- Format: **WebP** (compressed)
- Target size: **Under 10 KB**
- Generate from video first frame using `sharp`:
  ```
  sharp('input.png').resize(420).webp({ quality: 50 }).toFile('output.webp')
  ```

### Video File Rules

| Rule | Standard |
|------|----------|
| Format | `.mp4` (H.264) or `.mov` |
| Max file size | **2 MB** for background/ambient videos |
| Resolution | 720p for mobile, 1080p max for desktop |
| Overlay for background videos | `opacity-35` on video + `bg-black/40` overlay div |

### Image Optimization

- Use `next/image` (`<Image>`) for all static images — enables automatic WebP/AVIF, lazy loading, and responsive `srcSet`.
- Logo ticker images: `brightness-0 invert opacity-40` for monochrome treatment.
- Case study images: local files in `/public/images/`, not external URLs.

---

## 5. Component Checklist

When creating any new component, verify:

- [ ] `'use client'` directive at top (if using hooks, motion, or interactivity)
- [ ] Cards use `bg-zinc-900 border border-zinc-800 rounded-xl`
- [ ] Text follows hierarchy: `text-white` (headings), `text-zinc-400` (body)
- [ ] Red accent (`red-600`/`red-700`) is used **only** for CTAs and data highlights
- [ ] Scroll animations use `whileInView` + `viewportConfig` (not `animate`)
- [ ] Hero/above-fold uses `animate` (not `whileInView`)
- [ ] All variants typed with `Variants` from `framer-motion`
- [ ] Buttons have `hover:scale-[1.02] transition-all duration-300`
- [ ] Videos include all 6 mandatory attributes
- [ ] No `white` or light backgrounds anywhere on the site
