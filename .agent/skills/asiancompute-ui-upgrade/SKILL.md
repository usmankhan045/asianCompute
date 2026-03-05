---
name: asiancompute-ui-upgrade
description: Converts the AsianCompute website (Next.js 14 + Tailwind CSS + Framer Motion) from dark mode to a professional light mode while keeping the brand's green/teal/blue logo palette. Use this skill for any light mode conversion, background color changes, card surface updates, text contrast fixes, or any work that involves making the AsianCompute site feel bright, clean, and modern instead of dark. Also triggers for theme switching, readability improvements, or making the site match a white/light aesthetic while preserving brand identity.
---

# AsianCompute — Dark to Light Mode Conversion

The brand colors (green/teal/blue) stay exactly as they are. What changes is the entire surface system: backgrounds go from near-black to clean white/light-gray, text inverts from light-on-dark to dark-on-light, glassmorphism shifts from dark-glass to frosted-white-glass, and all glow/tint effects are recalibrated for a light environment.

## Light Mode Design Decisions

**Background:** Pure white `#FFFFFF` base with `#F0FAF1` (very faint green-white) for section alternation — this subtly ties the background to the brand without looking colored.

**Cards:** `#FFFFFF` with a soft `rgba(0,0,0,0.06)` shadow instead of glass blur on dark. Glassmorphism becomes frosted white: `bg-white/70 backdrop-blur-xl border border-black/8`.

**Text:** `#0F1A0F` (near-black with a green undertone) for headings, `#374151` for body, `#6B7280` for muted. This keeps readability sharp while the green undertone in headings subliminally ties to brand.

**Brand colors on light:** Green `#3DB54A`, Blue `#1A5BB6`, Teal `#00A99D` all have sufficient contrast on white (WCAG AA compliant for large text, AA+ for interactive elements).

**Glow effects:** Recalibrated to 60% lower opacity — glows that look subtle on dark look harsh on light. A `box-shadow` of `rgba(61,181,74,0.25)` reads perfectly on white.

**Grid lines:** Switch from faint green lines to faint green dots — a dot grid on white looks editorial and premium, fitting for a B2B AI agency.

---

## COMPLETE FILE REWRITES

### `tailwind.config.ts` — Light Mode Token Registry

Replace the entire `colors` block:

```ts
colors: {
  background:  "#FFFFFF",    // pure white base
  "bg-soft":   "#F0FAF1",    // very faint green-white for alternate sections
  "bg-card":   "#FFFFFF",    // card surfaces
  "bg-subtle": "#F8FFFE",    // teal-tinted subtle bg for special sections
  primary:     "#3DB54A",    // brand green — unchanged
  secondary:   "#1A5BB6",    // brand blue — unchanged
  accent:      "#00A99D",    // brand teal — unchanged
  node:        "#7B5EA7",    // purple node — unchanged, still sparingly
  cyan:        "#00C8CC",    // bright cyan — unchanged
  text:        "#0F1A0F",    // near-black with green undertone
  "text-muted": "#6B7280",   // medium gray for secondary text
  "text-body":  "#374151",   // body text
},
```

---

### `app/globals.css` — Complete Replacement

Replace the ENTIRE file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    background-color: #FFFFFF;
    color: #0F1A0F;
    overflow-x: hidden;
  }
}

@layer utilities {
  /* Light glassmorphism — frosted white panel */
  .glass {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(61, 181, 74, 0.15);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  }

  /* On hover: lift with green-tinted border and deeper shadow */
  .glass-hover {
    transition: all 0.3s ease;
  }
  .glass-hover:hover {
    background: rgba(255, 255, 255, 0.92);
    border-color: rgba(61, 181, 74, 0.35);
    box-shadow: 0 8px 40px rgba(61, 181, 74, 0.12), 0 2px 12px rgba(0,0,0,0.08);
    transform: translateY(-1px);
  }

  /* Signature gradient text — green → teal → blue */
  .gradient-text {
    background: linear-gradient(135deg, #3DB54A 0%, #00A99D 45%, #1A5BB6 85%, #7B5EA7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* Glow on light background — lower opacity than dark mode */
  .glow-effect {
    box-shadow:
      0 0 20px rgba(61, 181, 74, 0.20),
      0 0 40px rgba(0, 169, 157, 0.12),
      0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .glow-effect-hover {
    transition: box-shadow 0.3s ease, transform 0.2s ease;
  }
  .glow-effect-hover:hover {
    box-shadow:
      0 0 30px rgba(61, 181, 74, 0.35),
      0 0 60px rgba(0, 169, 157, 0.18),
      0 8px 32px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
}

/* Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #F0FAF1; }
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3DB54A, #00A99D, #1A5BB6);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #4FCF5C, #00C8CC, #2563EB);
}
```

---

### `components/BackgroundGrid.tsx` — Complete Replacement

Switches to a dot grid pattern — looks premium and editorial on white:

```tsx
"use client";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
      <div
        className="h-full w-full"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(61, 181, 74, 0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
```

---

### `components/MouseGlow.tsx` — Complete Replacement

On light backgrounds the glow must be very subtle — it creates a soft highlight effect:

```tsx
"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(61, 181, 74, 0.06), transparent 50%)`,
        willChange: "background",
      }}
    />
  );
}
```

---

### `components/FloatingShapes.tsx` — Complete Replacement

On light mode, blobs are very soft pastel tints — they add depth without competing with content:

```tsx
"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft green blob — top left */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "rgba(61, 181, 74, 0.07)" }}
        animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft blue blob — top right */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(26, 91, 182, 0.06)" }}
        animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 0.85, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft teal blob — bottom center */}
      <motion.div
        className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl"
        style={{ background: "rgba(0, 169, 157, 0.06)" }}
        animate={{ x: [0, 40, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
```

---

### `components/ScrollProgress.tsx`

No change needed — gradient classes already use brand tokens ✓

---

### `components/Navigation.tsx` — Light Nav Bar

The nav needs a white/frosted background when scrolled, and dark text:

**Scrolled state** — update the conditional class:
```tsx
// Before
isScrolled ? "glass border-b border-white/10 backdrop-blur-xl" : "bg-transparent"

// After
isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-black/8 shadow-sm" : "bg-white/60 backdrop-blur-sm"
```

**Nav link colors** — update from light text to dark text:
```tsx
// Before
"text-text-muted hover:text-primary"

// After
"text-gray-600 hover:text-primary"
```

**Active link:**
```tsx
// Before
"text-primary font-semibold"

// After — keep, primary is now green on white ✓
"text-primary font-semibold"
```

**Submenu dropdown:**
```tsx
// Before
className="absolute top-full left-0 mt-2 w-56 glass rounded-xl p-2"

// After
className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl p-2 shadow-lg border border-black/8"
```

**Submenu links:**
```tsx
// Before
className="block px-4 py-2 rounded-lg text-text-muted hover:text-primary hover:bg-white/5 transition-colors"

// After
className="block px-4 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
```

**Mobile menu panel:**
```tsx
// Before
className="lg:hidden glass border-t border-white/10"

// After
className="lg:hidden bg-white border-t border-black/8 shadow-lg"
```

---

### `components/sections/Hero.tsx`

The hero section background is the page background (now white) — the background image is overlaid. Increase its opacity slightly so it reads on white:

```tsx
// Before
className="object-cover object-center opacity-20 dark:opacity-[0.07]"

// After — slightly more visible on white
className="object-cover object-center opacity-10"
```

**Subtitle text** — needs to be dark for light mode:
```tsx
// Before
<motion.h2 className="text-xl sm:text-3xl ... text-text leading-tight">

// After — use explicit dark color
<motion.h2 className="text-xl sm:text-3xl ... text-gray-800 leading-tight">
```

**Scroll arrow:**
```tsx
<ArrowDown className="w-6 h-6 text-primary/70" />
```

---

### `components/sections/Problem.tsx`

**Section background** — add a very faint green tint to alternate sections:
```tsx
// Add to the <section> element
className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20 bg-[#F0FAF1]"
```

**Intro card** — update glass to white card:
```tsx
// Before
className="glass glass-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 ..."

// After
className="glass glass-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16"
// glass class now renders as white/75 frosted panel automatically via globals.css
```

**Problem cards** — update gradient backgrounds to light pastel tints:
```tsx
const problems = [
  { color: "from-primary/8 to-transparent",   ... }, // faint green
  { color: "from-secondary/8 to-transparent", ... }, // faint blue
  { color: "from-accent/8 to-transparent",    ... }, // faint teal
];
```

**Card heading and text** — add explicit dark text class since bg is now light:
```tsx
// Card title
<h3 className="text-2xl font-bold mb-4 text-gray-900">{problem.title}</h3>

// Bullet items
<li className="flex items-start gap-3 text-gray-600">
```

---

### `components/sections/Services.tsx`

**Section background** — white:
```tsx
className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20 bg-white"
```

**Section subtitle:**
```tsx
<p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto">
```

**Service card titles and descriptions:**
```tsx
<h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
<p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
```

---

### `components/sections/HowItWorks.tsx`

**Section background** — alternate faint green tint:
```tsx
className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20 bg-[#F0FAF1]"
```

**Step card text:**
```tsx
<p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
```

**Step number text:**
```tsx
<span className="text-sm text-gray-400 font-medium">Step {step.number}</span>
```

**Step title:**
```tsx
<h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
```

---

### `components/sections/Results.tsx`

**Section background** — white:
```tsx
className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 bg-white"
```

**Metric labels:**
```tsx
<p className="text-gray-500 text-xs sm:text-lg">{result.label}</p>
```

---

### `components/sections/Workflows.tsx`

**Section background** — alternate faint teal tint:
```tsx
className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20 bg-[#F0FFFE]"
```

**Workflow card description:**
```tsx
<p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
```

**Pipeline step chips:**
```tsx
className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200"
```

**Modal panel** — white panel:
```tsx
className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl border border-black/10 shadow-2xl"
```

**Modal header border:**
```tsx
className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-black/8"
```

**Modal title:**
```tsx
<div className="text-base sm:text-xl font-bold truncate text-gray-900">
<div className="text-sm text-gray-500 truncate">
```

**Backdrop:**
```tsx
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
```

---

### `components/sections/CaseStudies.tsx`

**Section background** — white:
```tsx
className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20 bg-white"
```

**Card texts:**
```tsx
<h3 className="text-xl font-bold mb-2 text-gray-900">{study.challenge}</h3>
<p className="text-gray-500 text-sm mb-6">{study.solution}</p>
```

**Before/After labels:**
```tsx
<span className="text-xs text-gray-400">Before: </span>
<span className="text-sm text-gray-400 line-through">{study.before}</span>
// After label
<span className="text-xs text-gray-400">After: </span>
<span className="text-sm text-primary font-semibold">{study.after}</span>
```

---

### `components/sections/AboutFounders.tsx`

**Section background** — alternate faint green tint:
```tsx
className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20 bg-[#F0FAF1]"
```

**Founder card texts:**
```tsx
<h3 className="text-xl sm:text-2xl font-bold mb-1 text-gray-900">{founder.name}</h3>
<p className="text-primary font-medium mb-3 sm:mb-4">{founder.role}</p>
<p className="text-gray-600 leading-relaxed text-sm sm:text-base">{founder.bio}</p>
```

---

### `components/sections/Testimonials.tsx`

**Section background** — white:
```tsx
className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 bg-white"
```

**Testimonial card text:**
```tsx
<p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
  "{testimonial.content}"
</p>

<div className="font-bold text-base sm:text-lg text-gray-900">{testimonial.name}</div>
<div className="text-gray-500 text-sm sm:text-base">
  {testimonial.role} at {testimonial.company}
</div>
```

---

### `components/sections/FinalCTA.tsx`

**Section background** — strong brand gradient for visual impact at page end:
```tsx
// Before — dark overlay
<div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/6 to-secondary/8" />

// After — bold brand gradient section, white text
<div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90" />
```

This makes the final CTA a full-color section — green→teal→blue — which creates a strong visual bookend and ensures the CTA text is readable (white on gradient):

**All text in this section** — ensure white:
```tsx
// Section heading stays white (brand section is full color)
<motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
  Stop Working In Your Business.
  <br />
  <span className="text-white/90">Let AI Work For You.</span>
</motion.h2>

<motion.p className="text-base sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
```

**CTA button** — white button on gradient background:
```tsx
className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-white text-primary font-bold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
```

**Status dots and labels** — white:
```tsx
<div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
<span className="text-white/70">No credit card required</span>
// repeat for other dots
```

**"Ready to Scale?" badge:**
```tsx
className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30"
```

---

### `components/Footer.tsx` — Light Footer

**Footer container** — light gray background:
```tsx
// Before
className="relative border-t border-white/10 bg-background/50 backdrop-blur-sm z-10"

// After
className="relative border-t border-black/8 bg-gray-50 z-10"
```

**Footer body text and links:**
```tsx
// Company description
<p className="text-gray-500 mb-6 leading-relaxed">

// Contact links
className="flex items-center gap-3 text-gray-500 hover:text-primary transition-colors"

// Footer nav links
className="text-gray-500 hover:text-primary transition-colors"

// Column headings
<h4 className="text-lg font-semibold mb-4 text-gray-900">Company</h4>
```

**Copyright text:**
```tsx
<p className="text-gray-400 text-sm">© {currentYear} AsianCompute. All rights reserved.</p>
```

**Divider line:**
```tsx
className="border-t border-black/8 pt-8"
```

---

### Sub-pages — Section Backgrounds and Text

For `app/about/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`, `app/case-studies/page.tsx`, `app/how-it-works/page.tsx`, `app/blog/page.tsx`, `app/support/page.tsx`, `app/documentation/page.tsx`:

**Page `<main>` element:**
```tsx
// Before
className="relative min-h-screen pt-20"

// After
className="relative min-h-screen pt-20 bg-white"
```

**Hero text on sub-pages:**
```tsx
// Subtitle paragraphs
className="text-xl text-gray-500 leading-relaxed"

// Main headings use gradient-text (auto) or text-gray-900
```

**Glass cards on sub-pages** — `.glass` class now renders as frosted white automatically ✓

**Contact form inputs** — light mode styling:
```tsx
className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
```

**Error message box:**
```tsx
className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm"
```

---

## Section Alternation Pattern

Use this alternating background pattern for visual rhythm on the homepage:

| Section | Background |
|---------|-----------|
| Hero | `#FFFFFF` |
| Problem | `#F0FAF1` (faint green-white) |
| Services | `#FFFFFF` |
| How It Works | `#F0FAF1` |
| Results | `#FFFFFF` |
| Workflows | `#F0FFFE` (faint teal-white) |
| Case Studies | `#FFFFFF` |
| About Founders | `#F0FAF1` |
| Testimonials | `#FFFFFF` |
| Final CTA | Full brand gradient (green→teal→blue) |
| Footer | `#F9FAFB` (gray-50) |

This creates a breathing, structured page without needing heavy separators.

---

## Global Replacements After File Edits

Run these across the full project to catch anything remaining:

| Find | Replace |
|------|---------|
| `text-text-muted` | `text-gray-500` |
| `text-text` (standalone, not in class names) | `text-gray-900` |
| `border-white/10` | `border-black/8` |
| `border-white/20` | `border-black/12` |
| `bg-background/50` | `bg-white/80` |
| `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.75)` |

---

## Verification Checklist

- [ ] Body background = white (not dark navy)
- [ ] Nav bar = white/frosted when scrolled, visible on white page
- [ ] Nav links = dark gray text, green on active/hover
- [ ] Background dot grid = faint green dots on white (not lines on dark)
- [ ] Mouse glow = very subtle green tint (barely visible, feels natural)
- [ ] Floating blobs = pastel soft (not vivid on white)
- [ ] "AsianCompute" hero headline = green→teal→blue gradient on white ✓
- [ ] Hero subtitle = dark text, readable on white
- [ ] Problem section = faint green-white background
- [ ] Problem cards = white frosted glass with green border on hover
- [ ] Card headings = dark gray/black
- [ ] Card body text = medium gray
- [ ] Services section = white background
- [ ] How It Works = faint green-white background
- [ ] Timeline = green→teal→blue line visible against light bg
- [ ] Results = white background, dark metric labels
- [ ] Workflows = faint teal-white background
- [ ] Workflow modal = white panel with dark text
- [ ] Case Studies = white background
- [ ] Founders section = faint green-white background
- [ ] Testimonials = white background, dark quote text
- [ ] Final CTA = full green→teal→blue gradient section, white text
- [ ] CTA button = white button with green text (on gradient bg)
- [ ] Footer = light gray background, dark text, green hover links
- [ ] Scrollbar track = faint green-white
- [ ] Contact form inputs = white with gray border, green focus
- [ ] `npm run build` — zero errors

See `references/component-colors.md` for per-component class reference.