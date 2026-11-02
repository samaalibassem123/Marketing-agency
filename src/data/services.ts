import { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    shortDescription: "Ultra-fast websites and web applications built with Next.js.",
    fullDescription:
      "We build bespoke digital platforms with sub-second speeds, smooth interactions, and rock-solid architecture.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    metricsHighlight: "99+ Performance",
    deliverables: [
      "Custom Next.js & React",
      "Corporate & Portfolio Sites",
      "Headless E-Commerce",
      "Web Apps & Portals",
    ],
    subServices: [
      { name: "Corporate Websites", description: "Modern flagships for modern companies." },
      { name: "Landing Pages", description: "High-impact conversion pages." },
      { name: "E-Commerce", description: "Bespoke checkouts and Shopify Plus." },
      { name: "Custom Web Apps", description: "Tailored portals and dashboards." },
    ],
  },
  {
    id: "branding-graphic-design",
    number: "02",
    title: "Branding & Identity",
    shortDescription: "Distinct visual identities that give brands an unmistakable voice.",
    fullDescription:
      "From bespoke typography and logos to comprehensive design systems, we craft brands people remember.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
    metricsHighlight: "Bespoke Design Systems",
    deliverables: [
      "Logomark & Typography",
      "Visual Design System",
      "Brand Guidelines",
      "Digital & Print Assets",
    ],
    subServices: [
      { name: "Logo & Wordmark", description: "Timeless typographic signatures." },
      { name: "Visual Systems", description: "Colors, typography, and grids." },
      { name: "Brand Guidelines", description: "Clear rules for consistent identity." },
      { name: "Advertising Creatives", description: "High-converting visual assets." },
    ],
  },
  {
    id: "social-media-management",
    number: "03",
    title: "Social Media",
    shortDescription: "Editorial-grade content and active community growth.",
    fullDescription:
      "We turn casual scrollers into loyal customers with viral short-form video and high-retention storytelling.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    metricsHighlight: "4.8x Community Growth",
    deliverables: [
      "Content Strategy & Calendars",
      "Reels & Short-Form Video",
      "Instagram & TikTok",
      "Community Moderation",
    ],
    subServices: [
      { name: "Content Creation", description: "Studio visuals and punchy copy." },
      { name: "Reels & Shorts", description: "High-retention vertical videos." },
      { name: "Platform Management", description: "Publishing and audience care." },
      { name: "Creator Partnerships", description: "Authentic creator collaborations." },
    ],
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    shortDescription: "Targeted paid ads and SEO funnels that drive real revenue.",
    fullDescription:
      "We design data-driven acquisition campaigns across Meta and Google, tracking every cent to actual revenue.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    metricsHighlight: "350% Avg ROAS",
    deliverables: [
      "Meta Ads (IG & FB)",
      "Google Search & P-Max",
      "Technical & On-Page SEO",
      "Attribution Analytics",
    ],
    subServices: [
      { name: "Meta Ads", description: "Creative-led acquisition at scale." },
      { name: "Google Ads", description: "High-intent search capture." },
      { name: "SEO Strategy", description: "Long-term organic search rankings." },
      { name: "Attribution Setup", description: "Clear data dashboards." },
    ],
  },
  {
    id: "ai-automation",
    number: "05",
    title: "AI & Automation",
    shortDescription: "Intelligent AI agents and workflow automations that save hours.",
    fullDescription:
      "We connect your tools and deploy autonomous AI helpers to handle repetitive tasks and customer queries 24/7.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    metricsHighlight: "80% Time Saved",
    deliverables: [
      "AI Customer Assistants",
      "Automated Workflows (n8n)",
      "CRM & Data Sync",
      "Custom AI Integrations",
    ],
    subServices: [
      { name: "AI Concierges", description: "Smart 24/7 customer support." },
      { name: "Workflow Automation", description: "No more manual copy-pasting." },
      { name: "System Integration", description: "Connecting CRM, billing, and leads." },
      { name: "Data Dashboards", description: "Live business intelligence." },
    ],
  },
  {
    id: "photo-video-production",
    number: "06",
    title: "Photo & Video",
    shortDescription: "Cinema-grade photography and films that give products luxury status.",
    fullDescription:
      "From studio lighting to on-location cinema cameras, our production team crafts visuals that elevate your brand.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    metricsHighlight: "Cinema 4K/6K Video",
    deliverables: [
      "Studio Product Photos",
      "Commercial Brand Films",
      "Executive Interviews",
      "Drone Cinematography",
    ],
    subServices: [
      { name: "Product Shoots", description: "Studio lighting and lifestyle shots." },
      { name: "Brand Films", description: "Cinematic story videos." },
      { name: "Ad Commercials", description: "15s and 30s campaign videos." },
      { name: "Social Content", description: "Agile, trend-informed vertical shoots." },
    ],
  },
];
