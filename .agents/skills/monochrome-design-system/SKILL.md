---
name: monochrome-design-system
description: Rules, design tokens, typography specifications, and UI component standards for maintaining KONTRAST's pure monochromatic black-and-white visual identity.
---

# Monochrome Design System Skill

Use this skill when creating or updating UI components, pages, sections, or styles to maintain the high-contrast monochromatic design system of KONTRAST.

## 1. Color Palette Tokens

The design system is strictly monochromatic. Never use saturated accent colors (no blue, purple, pink, or neon).

| Token Name | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| **Deep Obsidian Black** | `#0A0A0A` | Primary background canvas |
| **Soft Surface Black** | `#111111` | Card backgrounds, elevated surfaces, inputs |
| **Pure White** | `#FFFFFF` | Primary headings, primary inverted CTA buttons |
| **Secondary Gray** | `#CCCCCC` | High-readability secondary body copy |
| **Muted Gray** | `#777777` | Captions, category labels, metadata tags, inactive states |
| **Dark Border Subtle** | `rgba(255, 255, 255, 0.1)` | 1px hairline component & grid dividers |
| **Light Theme Canvas** | `#F7F7F7` | Optional inverted light sections |
| **Light Theme Border** | `#E5E5E5` | Dividers in light sections |

## 2. Typography Rules (Manrope)

All typography uses **Manrope** from Google Fonts, loaded through `next/font/google` in [`layout.tsx`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/app/layout.tsx). **Never use `font-mono` or monospace fonts anywhere in the project.**

- **Display Headings (`font-extrabold` / weight 800):**
  - Tracking: `tracking-[-0.035em]`
  - Case: Uppercase with full stop (e.g. `SELECTED WORK.`)
  - Class: `font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.035em] uppercase text-white`
- **Section Headings (`font-bold` / weight 700):**
  - Class: `font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white`
- **Card & Subsection Titles (`font-semibold` / weight 600):**
  - Class: `font-semibold text-xl sm:text-2xl text-white tracking-tight`
- **Meta & Step Indicators (`font-sans` / weight 500 or 600):**
  - Class: `text-xs uppercase tracking-wider text-[#777777] font-semibold`
- **Body Paragraphs (`font-normal` / weight 400):**
  - Class: `text-base sm:text-lg text-[#CCCCCC] font-normal leading-relaxed`

## 3. UI Component Standards (shadcn-Style)

### Button Architecture (`src/components/ui/button.tsx`)
- **Default (High Contrast):** `bg-white text-black hover:bg-neutral-200 rounded-sm font-semibold`
- **Outline (Architectural):** `border border-white/20 text-white hover:bg-white/10 rounded-sm font-semibold`
- **Ghost:** `text-white hover:bg-white/10 rounded-sm`
- **Corner Radius:** Strictly `rounded-sm`. **Never use `rounded-full` (no pill buttons).**

### Badge Architecture (`src/components/ui/badge.tsx`)
- Used for metadata, category tags, and timestamps.
- Class: `inline-flex items-center rounded-sm border border-white/15 px-2.5 py-0.5 text-xs font-medium tracking-wide text-white/90 bg-white/5`

### Cards & Panels (`src/components/ui/card.tsx`)
- Always use `#111111` for surface panels on top of `#0A0A0A` background.
- Pair with `border border-white/10 rounded-sm`.

## 4. Micro-Interactions & Animations

1. **Magnetic Buttons:** Wrap high-priority interactive buttons with `<MagneticButton>` ([`MagneticButton.tsx`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/components/animations/MagneticButton.tsx)) for smooth cursor-following physics.
2. **Gsap Staggered Reveals:** Use `<GsapReveal>` ([`GsapReveal.tsx`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/components/animations/GsapReveal.tsx)) to reveal headings and cards as they enter the scroll viewport.
3. **Accessibility:** Always maintain high text contrast (minimum 4.5:1 ratio for regular text, 3:1 for large display titles) against `#0A0A0A`.

