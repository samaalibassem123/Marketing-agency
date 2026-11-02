---
name: glassmorphism-design
description: Apple-inspired Liquid Glass design language, component tokens, GSAP + Motion animation architecture, and responsive guidelines for KONTRAST.
---

# Apple-Inspired Glassmorphism Design System (`glassmorphism-design`)

This skill defines the complete architectural standards, visual principles, CSS design tokens, dual animation contracts (GSAP + Framer Motion), and responsive design rules for implementing an Apple-inspired **Liquid Glass** design language across the KONTRAST digital agency platform.

---

## 1. Design Philosophy: The Apple "Liquid Glass" Standard

Apple’s glass design language (macOS Sonoma, visionOS, iOS 18) is grounded in **optical realism, optical hierarchy, and disciplined restraint**. It never resembles a generic colorful template. Instead, it feels like precisely machined, high-purity optical glass placed over dynamic content.

### Core Pillars:
1. **Material Realism over Muddy Blur:** Rather than applying opaque milky grey blurs, surfaces are ultra-translucent with calibrated tinting and subtle diffusion, letting underlying typography and 3D WebGL motion shine through.
2. **Specular Top Rim (Directional Light):** Real glass catches light from above. Every glass container has an asymmetric border: a subtle bright highlight on the top edge (`inset 0 1px 0 0 rgba(255, 255, 255, 0.16)`) and a darker hairline on the bottom edge.
3. **Strategic Hierarchy:** Never turn every element into glass. Reserve glassmorphism for **elevated layers that float over background content** (navigation bars, modal dialogs, floating action controls, dropdown flyouts, and key interactive cards). Static base layout containers remain solid `#0A0A0A` or `#111111`.
4. **Zero Saturated Neon Gradients:** The palette remains strictly monochromatic, adhering to the KONTRAST high-contrast identity.

---

## 2. Typography & Color Contracts

### 2.1 Typography: Google Fonts Manrope
All text rendered on or around glass elements must strictly use **Manrope** (`--font-manrope`). **Never use `font-mono` or monospace fonts anywhere.**
- **Hero / Display Headlines:** `font-extrabold tracking-[-0.035em] text-white uppercase`
- **Section Headers:** `font-bold tracking-tight text-white uppercase`
- **Card Titles & Button Text:** `font-semibold text-white tracking-tight`
- **Navigation & Category Badges:** `font-medium text-xs uppercase tracking-wider text-[#777777]`
- **Body Text:** `font-normal text-[#CCCCCC]` (never use pure `#777777` over dark glass where contrast drops below 4.5:1).

### 2.2 Color Palette Tokens

| Surface Role | Value | Usage |
| :--- | :--- | :--- |
| **Base Obsidian Canvas** | `#0A0A0A` | Solid bottom viewport canvas |
| **Glass Panel (Subtle)** | `rgba(255, 255, 255, 0.03)` | Large background containers, deliverable lists |
| **Glass Panel (Standard)** | `rgba(17, 17, 17, 0.75)` | Interactive cards, modal bodies, dropdowns |
| **Glass Panel (Elevated)** | `rgba(255, 255, 255, 0.08)` | Hover states, active buttons, floating badges |
| **Glass Nav Header** | `rgba(10, 10, 10, 0.82)` | Floating top navigation bar |
| **Hairline Border** | `rgba(255, 255, 255, 0.10)` | Standard 1px perimeter divider |
| **Specular Rim Highlight** | `rgba(255, 255, 255, 0.16)` | Top 1px inner rim highlight |
| **Glass Shadow (Dual)** | `0 16px 32px -8px rgba(0,0,0,0.5)` | Smooth diffuse depth |

---

## 3. CSS Design Tokens & Utilities

Defined in [`src/app/globals.css`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/app/globals.css) under `@layer base`:

```css
:root {
  /* Apple Liquid Glass Tokens */
  --glass-bg-subtle: rgba(255, 255, 255, 0.03);
  --glass-bg-card: rgba(17, 17, 17, 0.75);
  --glass-bg-nav: rgba(10, 10, 10, 0.82);
  --glass-bg-elevated: rgba(255, 255, 255, 0.08);

  --glass-border: rgba(255, 255, 255, 0.10);
  --glass-border-hover: rgba(255, 255, 255, 0.22);
  --glass-specular-rim: inset 0 1px 0 0 rgba(255, 255, 255, 0.16);

  --glass-blur-sm: 8px;
  --glass-blur-md: 16px;
  --glass-blur-lg: 24px;
  --glass-blur-xl: 40px;

  --glass-shadow-card: 0 16px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
  --glass-shadow-modal: 0 24px 64px -12px rgba(0, 0, 0, 0.75), inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
}
```

### Ready-to-Use Utility Classes:
```css
/* Glass Panel */
.glass-panel {
  background-color: rgba(17, 17, 17, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
}

/* Floating Navigation */
.glass-nav {
  background-color: rgba(10, 10, 10, 0.82);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
}

/* Glass Card with Hover Lift */
.glass-card {
  background-color: rgba(17, 17, 17, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-card:hover {
  background-color: rgba(17, 17, 17, 0.88);
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow: 0 24px 48px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.22);
}

/* Glass Button */
.glass-button {
  background-color: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-button:hover {
  background-color: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.35);
}

/* Glass Input */
.glass-input {
  background-color: rgba(17, 17, 17, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
```

---

## 4. UI Component Library Integrations

### 4.1 Primary: shadcn/ui Customization Pattern

The atomic primitives in `src/components/ui/` support glass variants:

#### Glass Card (`src/components/ui/card.tsx`):
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "glass" | "glass-elevated";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", ...props }, ref) => {
    const variants = {
      solid: "bg-[#111111] border border-white/10",
      glass:
        "bg-[#111111]/75 backdrop-blur-md border border-white/10 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.14)]",
      "glass-elevated":
        "bg-white/[0.06] backdrop-blur-xl border border-white/20 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
    };

    return (
      <div
        ref={ref}
        className={cn("rounded-sm text-white transition-all duration-300", variants[variant], className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
```

#### Glass Button Variant (`src/components/ui/button.tsx`):
```tsx
const variants = {
  default: "bg-white text-[#0A0A0A] hover:bg-white/90 border border-white shadow-none",
  glass:
    "bg-white/[0.07] backdrop-blur-md text-white border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/[0.14] hover:border-white/30",
  secondary: "bg-[#111111] text-white border border-white/15 hover:bg-white hover:text-[#0A0A0A]",
  outline: "border border-white/20 text-white bg-transparent hover:bg-white hover:text-[#0A0A0A]",
  ghost: "text-white/80 hover:text-white hover:bg-white/10",
  link: "text-white underline-offset-4 hover:underline p-0 h-auto",
};
```

---

### 4.2 Material UI (MUI) Integration Guidelines

When specialized MUI components (such as date pickers or data grids) are required:
1. **Strict Theme Overrides:** Default Material ripples, blue accents (`#1976d2`), and pill radii are prohibited.
2. **Apply the Monochromatic Glass Theme:**
```typescript
import { createTheme } from "@mui/material/styles";

export const muiGlassTheme = createTheme({
  typography: {
    fontFamily: "var(--font-manrope, 'Manrope', sans-serif)",
  },
  palette: {
    mode: "dark",
    primary: { main: "#FFFFFF", contrastText: "#0A0A0A" },
    background: { default: "#0A0A0A", paper: "rgba(17, 17, 17, 0.75)" },
    text: { primary: "#FFFFFF", secondary: "#CCCCCC" },
    divider: "rgba(255, 255, 255, 0.1)",
  },
  shape: { borderRadius: 2 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(17, 17, 17, 0.80)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 24px 48px -8px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontWeight: 600,
        },
      },
    },
  },
});
```

---

## 5. Dual Animation Architecture: GSAP + Framer Motion

This project uses both **GSAP** and **Framer Motion** strategically. Each has a distinct architectural responsibility to prevent style conflicts and maximize rendering performance.

### 5.1 Clear Division of Responsibilities

| Capability | Engine | Why |
| :--- | :--- | :--- |
| **Scroll-Triggered Reveals & Parallax** | **GSAP + ScrollTrigger** | Pinning, scrub timelines, coordinated multi-element choreography, and high-precision scroll calculations |
| **Hero Kinetic Typography & Staggers** | **GSAP Timeline** | Complex word/letter staggering with easing curves (`power4.out`) |
| **Magnetic Cursor Physics** | **GSAP** | Direct transform manipulation with quickTo for cursor inertia |
| **Component-Level Micro-Interactions** | **Framer Motion** | Button hover states, card hover lifts (`whileHover`), scale physics |
| **Modal, Drawer & Tab Mount/Unmount** | **Framer Motion (`AnimatePresence`)** | Declarative lifecycle animations with exit states |

### 5.2 GSAP Best Practices & React Lifecycle Contract

1. **Scoping & Cleanup with `gsap.context()`:**
   Every GSAP animation in a React component must be scoped inside `gsap.context()` within a `useEffect`, and the returned cleanup function must call `ctx.revert()`.
2. **Transform Only:**
   Only animate GPU-accelerated properties: `x`, `y`, `scale`, `rotation`, and `opacity`. Never animate layout properties (`width`, `height`, `top`, `left`, `margin`) directly with GSAP.
3. **Never Conflict on the Same DOM Node:**
   Do **NOT** attach GSAP tweens and Framer Motion animation props to the exact same element. Separate them into parent and child elements:
   - Outer Container: GSAP ScrollTrigger reveal (`<GsapReveal>`)
   - Inner Element: Motion interactive card (`<motion.div whileHover={{ y: -3 }}>`)
4. **Responsive ScrollTrigger Refresh:**
   When DOM contents or dimensions change dynamically (e.g. accordion open or filter click), trigger `ScrollTrigger.refresh()` so trigger points stay accurate.

### 5.3 Practical GSAP + ScrollTrigger React Example

```tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function GlassFeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Responsive animation matching
      const mm = gsap.matchMedia();

      // Desktop & Tablet (> 768px): Coordinated stagger reveal
      mm.add("(min-width: 769px)", () => {
        gsap.from(".glass-card-stagger", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Mobile (<= 768px): Dampened, single-card reveal to prevent scroll stutter
      mm.add("(max-width: 768px)", () => {
        gsap.from(".glass-card-stagger", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert(); // Mandatory cleanup
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="glass-card-stagger">
            {/* Framer Motion handles the micro-interaction; GSAP handles the entrance */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 bg-[#111111]/75 backdrop-blur-md border border-white/10 hover:border-white/25 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.14)]"
            >
              <span className="text-xs uppercase tracking-wider text-[#777777] block mb-2">0{item} • CAPABILITY</span>
              <h3 className="font-bold text-xl uppercase tracking-tight text-white mb-2">Precision System</h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Optical glass cards with hardware-accelerated scroll reveals.
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 6. Mandatory Responsive Design & Mobile-First Glass Architecture

Responsive execution is mandatory across all viewports. Every layout must be designed and verified from mobile screens upward.

### 6.1 Breakpoint Matrix

| Viewport | Range | Layout Strategy |
| :--- | :--- | :--- |
| **Mobile** | `320px–480px` | Single-column fluid stack, hamburger drawer, `px-4` margins, `p-5` card padding, `backdrop-blur-sm` |
| **Tablet** | `481px–768px` | 2-column grids, `px-6` margins, `p-6` card padding, compact sticky preview bars |
| **Laptop** | `769px–1024px` | Desktop navigation bar, 2-to-3 column layouts, full 3D interactive artifacts |
| **Desktop** | `1025px–1440px` | 3-column / 12-column asymmetric editorial grids, `max-w-7xl mx-auto`, `p-8` to `p-12` card padding |
| **Large Screens** | `1441px+` | Constrained maximum content container (`max-w-7xl` or `max-w-8xl`) to prevent awkward stretch |

### 6.2 Responsive Guidelines for Glass Elements

1. **Fluid Typography with `clamp()`:**
   - Large hero titles must use responsive scaling to prevent awkward word wraps on narrow screens:
     ```css
     font-size: clamp(2.25rem, 6.5vw, 7.5rem);
     line-height: 0.95;
     ```
2. **Preventing Horizontal Overflow:**
   - Avoid fixed widths (`w-[600px]`); use `w-full max-w-xl` instead.
   - Any container hosting animated slide-ins (`x: 40`) must have `overflow-hidden` on its parent section.
   - Set `max-w-full` on all images and containers.
3. **Adaptive Padding on Glass Cards:**
   - Do NOT use massive static padding (`p-14`) on mobile. Use responsive scales:
     `className="p-6 sm:p-10 lg:p-14 glass-card"`
4. **Touch-Friendly Tap Targets:**
   - All interactive glass buttons, category filter pills, and navigation links must meet the **44x44px minimum tap target** requirement on touch devices.
5. **Modal Viewport Capping:**
   - Floating dialogs and modals must respect small screens:
     `max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm`
6. **Responsive Animation Dampening:**
   - On screens `<= 768px`, disable heavy parallax offsets and high particle counts to prevent frame drops on mobile processors.
   - Recalculate ScrollTrigger positions on window resize using `ScrollTrigger.refresh()`.

---

## 7. Performance & Fallback Requirements

1. **Backdrop-Filter Nesting Limit:**
   - **Never nest more than 2 elements with `backdrop-blur`**. Stacking blurs degrades frame rates on Intel Iris and mobile GPUs.
   - For child elements inside a glass modal, use semi-transparent solid backgrounds (`bg-white/5` or `bg-black/30`) without a secondary blur filter.
2. **GPU Isolation:**
   - On animated glass panels, use `transform-gpu` or `will-change: transform` to promote the surface to a dedicated GPU compositing layer.
3. **No-Support Fallback:**
   ```css
   @supports not (backdrop-filter: blur(1px)) {
     .glass-panel,
     .glass-card { background-color: #111111; }
     .glass-nav { background-color: #0a0a0a; }
     .glass-button { background-color: #222222; }
   }
   ```
4. **Mobile Blur Throttling:**
   - On screens `<= 640px`, cap blur radius to `backdrop-blur-sm` or `backdrop-blur-md` (max 12px) to prevent scroll stutter.

---

## 8. Final Quality Standards & Pre-Completion Verification Checklist

Before considering any component, section, or page implementation complete, execute this verification protocol:

- [ ] **Cross-Breakpoint Test:** Verify rendering at `320px`, `390px` (iPhone), `768px` (iPad), `1024px` (iPad Pro / Laptop), and `1440px` (Desktop).
- [ ] **Zero Horizontal Overflow:** Verify that `document.documentElement.scrollWidth === window.innerWidth` across all pages (no unwanted horizontal scrollbar).
- [ ] **GSAP Lifecycle Cleanup:** Verify that every component mounting a GSAP tween or ScrollTrigger calls `ctx.revert()` in its cleanup function.
- [ ] **Animation Conflict Check:** Confirm that no DOM element has both GSAP and Framer Motion animating the same style property simultaneously.
- [ ] **Touch Target Check:** Verify that all buttons, filter tabs, and drawer close buttons have tap areas `>= 44px`.
- [ ] **Contrast Compliance:** Verify text contrast on glass surfaces exceeds WCAG AA standards (4.5:1 for body copy `#CCCCCC`, 3:1 for large display titles).
- [ ] **Reduced-Motion Verification:** Confirm that with `prefers-reduced-motion: reduce`, animations are bypassed or converted to simple instant opacity transitions.
- [ ] **Automated Tool Verification:**
  ```bash
  npm run lint         # Must exit code 0 (zero errors, zero warnings)
  npx tsc --noEmit     # Must exit code 0
  npm run build        # All routes prerender statically with exit code 0
  ```

---

## 9. Good vs. Bad Implementations

### ❌ BAD (Generic "AI-Slop" & Responsive Failure):
```tsx
// Violates design system: neon border, colorful gradient, over-blurred, fixed width causing overflow, no cleanup
export function BadCard() {
  useEffect(() => {
    gsap.from(".bad-box", { x: 300 }); // Leak: No gsap.context, causes mobile horizontal overflow!
  }, []);

  return (
    <div className="bad-box w-[600px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-3xl border border-pink-500/50 rounded-3xl p-16 text-gray-400">
      <h3 className="text-pink-400">Title</h3>
    </div>
  );
}
```

### ✅ GOOD (Apple Liquid Glass, GSAP Cleaned, Fully Responsive):
```tsx
export function GoodCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".good-card-content", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-xl overflow-hidden">
      <div className="good-card-content p-6 sm:p-8 bg-[#111111]/75 backdrop-blur-md border border-white/10 hover:border-white/25 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.14)] transition-all duration-300">
        <div className="text-xs uppercase tracking-wider text-[#777777] mb-2 font-semibold">
          CAPABILITY 01
        </div>
        <h3 className="font-bold text-2xl uppercase tracking-tight text-white mb-3">
          Web Engineering
        </h3>
        <p className="text-[#CCCCCC] text-base leading-relaxed">
          Precision-crafted digital experiences engineered for measurable business performance.
        </p>
      </div>
    </div>
  );
}
```
