# KONTRAST — Digital Growth Partner
## AI Coding Agent & Contributor Guide (`AGENTS.md`)

This document is the single source of truth for architecture rules, design constraints, coding standards, and development workflows for the **KONTRAST** codebase. All human engineers and AI coding agents operating on this project must strictly adhere to the guidelines set forth below.

---

## 1. Project Overview & Business Positioning

- **Brand:** KONTRAST
- **Identity:** Premium Full-Service Digital Growth Partner
- **Geography:** Headquarters in Tunis, Tunisia (Les Berges du Lac II) with international client operations (Europe, Gulf, Africa, North America).
- **Core Mission:** Accelerating business growth through bespoke web engineering, brand identity, performance marketing, AI automation, and cinematic media production.
- **Visual Reference Caliber:** Editorial excellence inspired by international studios (e.g. KOTA) combined with end-to-end full-service capabilities (e.g. WEBI).

---

## 2. Tech Stack & Version Contracts

| Tool / Library | Version | Usage & Architecture Role |
| :--- | :--- | :--- |
| **Next.js** | `16.4.4` | App Router, Server Components by default, Turbopack builder |
| **React & React-DOM** | `19.3.0` | React 19 concurrency model; use strict SSR boundaries |
| **Tailwind CSS** | `^4.0.0` | Configured via `@tailwindcss/turbopack` in `next.config.ts` |
| **Typography** | Manrope | Google Fonts loaded via `next/font/google` (`--font-manrope`) |
| **3D Graphics** | `three` (`^0.187.0`) | Direct Three.js WebGL inside React hooks (DO NOT use `@react-three/fiber`) |
| **Animation Engine** | `gsap` + `@gsap/react` | ScrollTrigger, magnetic micro-interactions, editorial text reveals |
| **Transitions** | `motion` (`^14.9.0`) | AnimatePresence, modal drawers, layout animations |
| **Icons** | `lucide-react` | Standard unified icon system |
| **Language** | TypeScript `^5.0` | Strict type checking (`strict: true`) with zero `any` usage |

---

## 3. Core Design System & Aesthetic Constraints

### 3.1 Pure Monochromatic Black & White Palette
The website adheres to a strict, high-contrast black-and-white art direction. **Never introduce saturated accent colors (no blue, purple, pink, yellow, or neon effects).**

- **Deep Obsidian Black (Base Canvas):** `#0A0A0A`
- **Soft Dark Panel (Cards & Elevators):** `#111111`
- **Pure White (Text & Primary Inverted CTAs):** `#FFFFFF`
- **Secondary / Muted Text:** `#777777`, `#888888`, `#A3A3A3`
- **Hairline Dividers & Borders:** `rgba(255, 255, 255, 0.1)` or `#222222`
- **Light Theme Accents (if required):** Pure white background (`#FFFFFF`) with deep black text (`#0A0A0A`) and subtle light borders (`#E5E5E5`).

### 3.2 Typography Rules
- **Font Family:** **Manrope (`font-sans`) exclusively** across all elements: display headlines, body copy, navigation, buttons, category tags, badges, step indicators, and timestamps.
- **Zero Monospace Policy:** **NEVER use `font-mono` or monospace typewriter fonts anywhere.** All metadata, badges, and numbers must use clean, modern Manrope sans-serif.
- **Hierarchy:**
  - `400`: Regular body copy, explanations, secondary descriptions.
  - `500`: Navigation links, labels, category tags.
  - `600`: Section subheadings, card titles, button labels.
  - `700–800`: Hero headlines, display numbers, large architectural titles.
- **Letter Spacing:** Tight tracking for large headlines (`tracking-[-0.035em]`), standard or slightly open tracking for uppercase badges and labels (`tracking-wider` / `tracking-widest`).

### 3.3 Geometry & UI Primitives
- **Borders & Corners:** Clean rectangular aesthetic with subtle rounded corners (`rounded-sm`).
- **No Pill Buttons:** Never use fully rounded pill buttons (`rounded-full`). All CTAs and badges must remain rectangular (`rounded-sm`).
- **Borders:** Thin, elegant 1px hairline borders (`border border-white/10`).

---

## 4. Directory Structure & Separation of Concerns

```
src/
├── app/                        # Next.js App Router (RSC page routes & SEO endpoints)
│   ├── about/page.tsx          # Studio narrative, methodology, multidisciplinary team
│   ├── contact/page.tsx        # Multi-step project brief builder & estimator
│   ├── services/page.tsx       # Comprehensive 6-pillar capabilities breakdown
│   ├── work/page.tsx           # Full client archive with interactive case study modals
│   ├── globals.css             # Tailwind v4 imports & design token variables
│   ├── layout.tsx              # Root HTML layout with Manrope font & global metadata
│   ├── page.tsx                # High-impact agency overview & landing flow
│   ├── robots.ts               # Production search crawler configuration
│   └── sitemap.ts              # Dynamic XML sitemap generator
├── components/
│   ├── animations/             # Reusable animation primitives (MagneticButton, GsapReveal)
│   ├── layout/                 # Site shell components (Navbar with Tunis clock, Footer)
│   ├── sections/               # Composite page sections (Hero, Services, SelectedWork, Process, etc.)
│   ├── shared/                 # Multi-route shared modals (ProjectModal)
│   ├── three/                  # WebGL Canvas components (HeroScene, GeometricArtifact)
│   └── ui/                     # Atomic shadcn-style UI primitives (button, badge, card, input, textarea)
├── data/                       # Single source of truth for all content and schemas
│   ├── agency.ts               # Agency coordinates, team, principles, and statistics
│   ├── process.ts              # 5-stage client execution framework
│   ├── projects.ts             # Portfolio case studies with metrics, testimonials, and assets
│   └── services.ts             # Full breakdown of the 6 agency capability pillars
├── lib/                        # Pure utility functions (cn() class merging)
└── types/                      # Central TypeScript type definitions & interfaces
```

---

## 5. WebGL & Three.js Architecture Rules

Because Next.js 16 uses React 19, third-party component libraries such as `@react-three/fiber` introduce peer-dependency conflicts. All 3D experiences are built with direct Three.js Canvas within standard React lifecycle hooks.

### Every Three.js Canvas component MUST adhere to this contract:
1. **Viewport Optimization (`IntersectionObserver`):**
   - The render loop (`requestAnimationFrame`) must be paused when the canvas is scrolled out of the active viewport.
   - It must resume cleanly when the canvas re-enters the viewport.
2. **Explicit GPU Memory Cleanup:**
   - Every `useEffect` mounting a Three.js scene must return a cleanup function.
   - The cleanup function must call:
     - `cancelAnimationFrame(animId)`
     - `geometry.dispose()` for all geometries
     - `material.dispose()` for all materials and shaders
     - `texture.dispose()` for all loaded textures
     - `renderer.dispose()`
     - Remove the canvas DOM element from its container.
3. **Pointer & Touch Safety:**
   - Always apply `pointer-events-none` to background WebGL canvas containers so they do not block user clicks on DOM buttons and links.
   - Container elements must have `position: "relative"` or `position: "absolute"` explicitly defined.

---

## 6. React 19 & Next.js Hydration Rules

1. **Client vs. Server Components:**
   - Default to Server Components for layouts, content sections, and SEO pages.
   - Use `'use client'` only on files that require state (`useState`), effects (`useEffect`), browser APIs (`window`, `IntersectionObserver`), or interactive event listeners.
2. **No Synchronous `setState` in Effects:**
   - Never call `setState` synchronously within the top-level body of a `useEffect`. Doing so triggers React 19 cascading re-render warnings.
   - For client-only hydration values (such as local timezones), use `React.useSyncExternalStore` or an explicit asynchronous subscription.
3. **Internal Navigation:**
   - Never use standard `<a href="...">` for internal routes. Always use Next.js `<Link href="...">` to preserve single-page app prefetching and client-side transitions.

---

## 7. Development & Verification Protocol

When developing or modifying features, follow this incremental workflow:

### Step 1: Pre-Change Inspection
- Read existing implementations and data contracts before modifying files.
- Never make assumptions about existing prop names or types.

### Step 2: Explain Approach
- Detail the implementation approach and list the exact files that will be touched.

### Step 3: Implementation
- Follow SOLID principles.
- Preserve existing working functionality.
- Keep components modular and reusable.
- Never add unnecessary dependencies.

### Step 4: Verification (Mandatory)
Before concluding any task, run and verify the following commands:
1. **ESLint:**
   ```bash
   npm run lint
   ```
   *Must exit with code 0 (zero errors, zero warnings).*
2. **TypeScript Typecheck:**
   ```bash
   npx tsc --noEmit
   ```
   *Must exit with code 0.*
3. **Production Build:**
   ```bash
   npm run build
   ```
   *Must exit with code 0, verifying that all static routes render successfully.*

