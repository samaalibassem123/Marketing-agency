# KONTRAST — Premium Digital Growth Agency

> **Creative Engineering & Measurable Business Growth**  
> Full-service digital partner headquartered in Tunis, Tunisia (Les Berges du Lac II) with international client operations. Delivering bespoke web development, brand identity, performance marketing, AI automation, and cinematic production for regional and international market leaders.

---

## 🏛️ Project Architecture & Overview

This project is built from the ground up as a production-quality, award-winning-caliber digital agency web application. It combines the editorial elegance and distinctive interaction design of international creative studios (such as **KOTA**) with the comprehensive full-service positioning of top-tier growth firms (such as **WEBI**).

### Key Architectural Highlights

- **Pure Monochromatic Art Direction:** High-contrast deep obsidian (`#0A0A0A`) and soft black paneling (`#111111`) paired with pure white (`#FFFFFF`) and subtle hairline borders (`rgba(255, 255, 255, 0.1)`). Clean rectangular geometry with `rounded-sm` elements and strictly zero neon or saturated color noise.
- **Unified Editorial Typography:** Built exclusively with Google Fonts **Manrope** (`next/font/google`), providing high readability, tight letter spacing (`tracking-[-0.035em]`), and a consistent typographical scale across all devices.
- **Hardware-Accelerated 3D WebGL:** Bespoke Three.js interactive scenes (`HeroScene.tsx` and `GeometricArtifact.tsx`) with automatic viewport throttling via `IntersectionObserver` to preserve GPU resources and mobile battery life.
- **Kinetic Animations & Micro-Interactions:** GSAP-driven kinetic typography, physics-based magnetic buttons, and layout transitions via Motion.
- **Comprehensive 6-Pillar Capabilities:**
  1. *Web Development:* Corporate flagships, high-conversion landing pages, bespoke e-commerce, custom web apps, and ongoing maintenance.
  2. *Branding & Graphic Design:* Logo systems, complete visual identity guidelines, marketing collateral, and advertising creatives.
  3. *Social Media Management:* Organic growth strategies, creative content studio, Reels and short-form video production, and active community management.
  4. *Digital Marketing:* Meta Ads, Google Ads, technical SEO, and multi-channel lead generation funnels.
  5. *AI & Business Automation:* Autonomous AI agents, custom workflow automations, RAG client concierges, and real-time business dashboards.
  6. *Photo & Video Production:* Commercial product photography, corporate brand films, high-impact video ads, and social content.
- **Interactive Case Study Engine:** Centralized portfolio with interactive drawer modals showcasing the challenge, strategic solution, impact metrics (`+240%`, `0.9s`), and client testimonials.
- **Interactive 5-Stage Process Explorer:** Interactive walkthrough detailing *Discover*, *Strategize*, *Create*, *Develop*, and *Launch & Scale*.
- **Interactive Project Kickoff Studio:** Multi-service planner with currency selection (`TND`, `EUR`, `USD`) and celebration feedback.
- **Multi-Page Production Architecture:** Clean semantic routes (`/`, `/about`, `/services`, `/work`, `/contact`), dynamic `sitemap.xml`, and `robots.txt`.
- **Live Local Time Indicator:** Real-time GMT+1 Tunis timezone clock with safe client-side hydration (`useSyncExternalStore`).

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** Next.js 16.4.4 (App Router, Server Components by default)
- **Runtime:** React 19.3.0 & React-DOM 19.3.0
- **Build Tool:** Turbopack
- **Styling:** Tailwind CSS v4 with `@tailwindcss/turbopack`
- **Typography:** Manrope via `next/font/google`
- **3D Graphics:** Three.js `^0.187.0` (direct Canvas inside React hooks)
- **Animation Engine:** GSAP `^3.15.0` & `@gsap/react` `^2.1.2`
- **Transitions:** Motion `^14.9.0`
- **Icons:** Lucide React `^1.66.0`
- **Feedback Effects:** Canvas Confetti `^1.9.4`
- **Language:** TypeScript 5 (Strict Mode)

---

## 📁 Repository Structure

```
├── .agents/
│   └── skills/                         # Reusable workspace skills for AI agents
│       ├── agency-case-study/          # Workflow for portfolio case study management
│       ├── monochrome-design-system/   # Tokens, typography, and UI component standards
│       └── three-webgl-component/      # Three.js lifecycle, optimization, and disposal patterns
├── AGENTS.md                           # AI coding standards & architectural constraints
├── public/                             # Static public assets
├── src/
│   ├── app/                            # Next.js App Router (pages, layout, sitemap, robots)
│   │   ├── about/page.tsx              # Studio story, philosophy, team
│   │   ├── contact/page.tsx            # Multi-step project brief builder
│   │   ├── services/page.tsx           # Full capabilities breakdown
│   │   ├── work/page.tsx               # Portfolio archive with modal triggers
│   │   ├── globals.css                 # Design tokens and Tailwind imports
│   │   ├── layout.tsx                  # Root layout with Manrope font configuration
│   │   └── page.tsx                    # Main landing flow
│   ├── components/
│   │   ├── animations/                 # GsapReveal, MagneticButton
│   │   ├── layout/                     # Navbar, MobileMenu, Footer
│   │   ├── sections/                   # Hero, Services, SelectedWork, Process, etc.
│   │   ├── shared/                     # ProjectModal drawer
│   │   ├── three/                      # HeroScene, GeometricArtifact WebGL canvases
│   │   └── ui/                         # Atomic shadcn-style primitives (button, badge, card, etc.)
│   ├── data/                           # Central single-source-of-truth data
│   │   ├── agency.ts                   # Studio coordinates, values, stats
│   │   ├── process.ts                  # 5-stage client execution framework
│   │   ├── projects.ts                 # Case studies & metrics
│   │   └── services.ts                 # Service pillar definitions
│   ├── lib/                            # Utility functions (cn class merger)
│   └── types/                          # Central TypeScript interfaces
├── next.config.ts                      # Image remote patterns & Turbopack rules
├── package.json                        # Dependencies and scripts
└── tsconfig.json                       # TypeScript compiler options
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `18.18+` or `20+` recommended
- npm `9+`

### 2. Installation
```bash
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Quality & Verification Commands

All changes must pass three validation checks with zero errors:

```bash
# 1. ESLint (Must exit with code 0)
npm run lint

# 2. TypeScript Strict Typecheck (Must exit with code 0)
npx tsc --noEmit

# 3. Next.js Production Build
npm run build
```

---

## 🤖 AI Agent & Developer Guidelines

For detailed design rules, WebGL lifecycle contracts, React 19 hydration guidelines, and coding standards, refer to [`AGENTS.md`](./AGENTS.md).

Workspace skills located in `.agents/skills/` provide focused workflows for:
- [Adding/Editing Case Studies](.agents/skills/agency-case-study/SKILL.md)
- [Developing Three.js WebGL Scenes](.agents/skills/three-webgl-component/SKILL.md)
- [Monochrome Design System Tokens](.agents/skills/monochrome-design-system/SKILL.md)

---

## 📍 Agency Coordinates

- **Headquarters:** Immeuble Le Corbusier, Rue de la Bourse, Les Berges du Lac II, 1053 Tunis, Tunisia
- **Inquiries:** `bonjour@kontrast-agency.tn`
- **Phone:** `+216 71 860 420`
- **Timezone:** Africa/Tunis (GMT+1)
