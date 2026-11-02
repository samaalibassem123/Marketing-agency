import { ValuePillar } from "@/types";

export const AGENCY_INFO = {
  name: "KONTRAST",
  legalName: "KONTRAST Studio SARL",
  tagline: "Creative Engineering & Measurable Growth",
  taglineLong: "We build digital experiences that move businesses forward.",
  subtext:
    "From bold brand identities to powerful websites and digital strategies, we help businesses turn ideas into measurable growth.",
  establishedYear: 2021,
  location: {
    city: "Tunis",
    country: "Tunisia",
    district: "Les Berges du Lac II",
    address: "Immeuble Le Corbusier, Rue de la Bourse, Les Berges du Lac II, 1053 Tunis",
    coordinates: "36.8375° N, 10.2394° E",
    timezone: "Africa/Tunis (GMT+1)",
  },
  contact: {
    email: "bonjour@kontrast-agency.tn",
    inquiriesEmail: "growth@kontrast-agency.tn",
    phone: "+216 71 860 420",
    mobileWhatsapp: "+216 55 940 310",
  },
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@kontrast.studio" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "KONTRAST Studio" },
    { name: "Behance", url: "https://behance.net", handle: "kontrast-studio" },
    { name: "X", url: "https://x.com", handle: "@kontrast_tn" },
  ],
  stats: [
    { value: "100%", label: "Custom Architecture" },
    { value: "1:1", label: "Direct Partner Focus" },
    { value: "< 1s", label: "Page Load Speed" },
    { value: "24h", label: "Brief Response Time" },
  ],
};

export const VALUE_PILLARS: ValuePillar[] = [
  {
    number: "01",
    title: "Creative Architecture",
    headline: "Distinct & Bespoke",
    description: "No generic templates or off-the-shelf themes. Every brand identity, interface, and motion element is crafted from scratch to stand out.",
    stat: "100%",
    statLabel: "Custom Design",
  },
  {
    number: "02",
    title: "Technical Excellence",
    headline: "Sub-Second Performance",
    description: "Modern Next.js, Three.js WebGL, and optimized rendering. Lightning-fast load times, flawless responsiveness, and 99+ Core Web Vitals.",
    stat: "< 1s",
    statLabel: "Load Speed",
  },
  {
    number: "03",
    title: "Direct Access",
    headline: "Senior Talent Only",
    description: "Work directly with senior designers and software architects. Zero junior handoffs, account manager middlemen, or bureaucratic delays.",
    stat: "1:1",
    statLabel: "Direct Partner Focus",
  },
  {
    number: "04",
    title: "High Velocity",
    headline: "Rapid Sprint Cycles",
    description: "Agile 2-week delivery sprints engineered to eliminate bloat, test core assumptions, and ship high-impact digital experiences on schedule.",
    stat: "14d",
    statLabel: "Sprint Cadence",
  },
  {
    number: "05",
    title: "Modern Architecture",
    headline: "Zero Legacy Tech Debt",
    description: "Clean, strictly typed TypeScript codebases with modular component architectures that allow rapid feature iteration and painless scaling.",
    stat: "0%",
    statLabel: "Legacy Debt",
  },
  {
    number: "06",
    title: "Radical Transparency",
    headline: "Open Collaboration",
    description: "Live staging previews, shared roadmap trackers, and direct communication channels. Complete visibility across every stage of development.",
    stat: "24/7",
    statLabel: "Live Visibility",
  },
];
