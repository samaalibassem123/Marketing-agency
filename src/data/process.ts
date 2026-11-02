import { ProcessStage } from "@/types";

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Listen & Understand",
    description:
      "We dig into your business, your customers, and your competition to uncover your real advantage.",
    duration: "Week 1",
    deliverables: ["Project Roadmap", "Audience Insights", "Competitor Audit"],
    focusAreas: ["Business Goals", "Customer Needs", "Key Metrics"],
  },
  {
    step: "02",
    title: "Strategize",
    tagline: "The Blueprint",
    description:
      "We map out the architecture, user journeys, messaging, and tech stack before writing a single line of code.",
    duration: "Week 2",
    deliverables: ["Sitemap & Flows", "Tech Architecture", "Content Direction"],
    focusAreas: ["Conversion Funnels", "Brand Positioning", "SEO Structure"],
  },
  {
    step: "03",
    title: "Create",
    tagline: "Design That Moves",
    description:
      "We design distinct visual identities, high-fidelity prototypes, and fluid interactive experiences.",
    duration: "Weeks 3 — 4",
    deliverables: ["Figma Prototypes", "Design System", "Art Direction"],
    focusAreas: ["Bold Typography", "Micro-Interactions", "Mobile-First UX"],
  },
  {
    step: "04",
    title: "Develop",
    tagline: "Clean, Fast Code",
    description:
      "We build with Next.js, TypeScript, and Three.js — creating lightweight, accessible, sub-second platforms.",
    duration: "Weeks 5 — 7",
    deliverables: ["Production Codebase", "CMS Integration", "Core Web Vitals 99+"],
    focusAreas: ["Speed & SEO", "Clean Architecture", "Smooth Animations"],
  },
  {
    step: "05",
    title: "Launch & Grow",
    tagline: "Go-to-Market",
    description:
      "Zero-downtime deployment, team training, and continuous paid acquisition to drive immediate traction.",
    duration: "Continuous",
    deliverables: ["Live Platform", "Analytics & Tracking", "Ongoing Support"],
    focusAreas: ["Performance Tuning", "Paid Ads Scaling", "A/B Testing"],
  },
];
