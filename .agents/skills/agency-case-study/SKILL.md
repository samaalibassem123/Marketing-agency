---
name: agency-case-study
description: Step-by-step workflow for adding, modifying, or archiving client case studies in the KONTRAST digital agency portfolio.
---

# Agency Case Study Management Skill

Use this skill when adding, modifying, or archiving client projects and case studies for the KONTRAST portfolio.

## 1. Data Schema & Location

All case studies are strictly typed and centralized in [`src/data/projects.ts`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/data/projects.ts) using the `ProjectItem` interface from [`src/types/index.ts`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/types/index.ts).

### Schema Contract:
```typescript
export interface ProjectItem {
  id: string;               // Unique kebab-case identifier (e.g. "finexis-capital")
  slug: string;             // URL-friendly slug
  title: string;            // Display title of the project
  client: string;           // Client / Brand name
  industry: string;         // Industry classification (e.g. "FinTech & Private Equity")
  year: string;             // Year of completion (e.g. "2025")
  services: string[];       // Array of delivered services (must match agency service pillars)
  shortDescription: string; // One-sentence summary for card previews
  fullDescription: string;  // Detailed narrative for the case study modal
  image: string;            // Primary high-res cover image URL
  secondaryImages?: string[]; // Optional array of supporting gallery images
  challenge: string;        // Client problem statement
  solution: string;         // Strategic and technical solution delivered
  impact: {                 // High-impact measurable results
    metric: string;         // e.g. "+240%", "0.9s", "3.4x"
    label: string;          // e.g. "International Sales", "Page Load Speed"
  }[];
  testimonial?: {           // Client quote
    quote: string;
    author: string;
    role: string;
  };
  link?: string;            // Optional external live website URL
}
```

## 2. Remote Image Configuration
Remote images must come from authorized domains configured in [`next.config.ts`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/next.config.ts):
- `images.unsplash.com`
- `images.pexels.com`

If adding a new domain, update `remotePatterns` in `next.config.ts` first.

## 3. Formatting & Copywriting Guidelines
- **Impact Metrics:** Metrics must highlight business ROI and engineering excellence (e.g., conversion rate increases, load speed reductions, revenue growth). Use short, punchy numbers (`+180%`, `4.2x`, `0.8s`).
- **Services Tags:** Always align with the 6 core agency pillars:
  1. `Web Development`
  2. `Branding`
  3. `Social Media`
  4. `Digital Marketing`
  5. `AI Automation`
  6. `Photo & Video`
- **Voice & Tone:** Confident, editorial, and focused on business value and craft. Avoid generic buzzwords.

## 4. UI Propagation & Verification
When a project is added to `PROJECTS` in `src/data/projects.ts`:
1. It is automatically rendered on the homepage in [`SelectedWork.tsx`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/components/sections/SelectedWork.tsx).
2. It appears in the full portfolio archive at [`src/app/work/page.tsx`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/app/work/page.tsx).
3. Clicking "View Case Study" opens the [`ProjectModal.tsx`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/components/shared/ProjectModal.tsx) drawer showing the challenge, solution, deliverables, impact metrics, and testimonial.

After updating projects:
- Run `npm run lint` and `npx tsc --noEmit` to verify type safety and data integrity.

