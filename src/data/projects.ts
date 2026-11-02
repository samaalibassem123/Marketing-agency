import { ProjectItem } from "@/types";

export const PROJECTS: ProjectItem[] = [
  {
    id: "noor-ceramics",
    slug: "noor-ceramics",
    title: "Noor Ceramics",
    client: "Noor Mediterranean Craft",
    industry: "Luxury Craft & Architecture",
    year: "2025",
    services: ["Web Development", "Branding", "Photo & Video"],
    shortDescription:
      "A bilingual e-commerce flagship and visual identity for an artisanal Mediterranean ceramic studio.",
    fullDescription:
      "We built a custom Next.js e-commerce store with 3D product previews and shot an editorial lookbook celebrating the craftsmen.",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=800&auto=format&fit=crop",
    ],
    challenge:
      "Outdated catalog site with zero international online sales, struggling to justify premium European pricing.",
    solution:
      "Bespoke multi-currency store (EUR, USD, TND), paired with studio-grade photography and cinematic behind-the-scenes film.",
    impact: [
      { metric: "+240%", label: "International Sales" },
      { metric: "0.9s", label: "Page Load Speed" },
      { metric: "+68%", label: "Architect Inquiries" },
    ],
    testimonial: {
      quote:
        "The digital experience elevated our modest workshop to the level of luxury European design houses.",
      author: "Youssef K.",
      role: "Founder",
    },
  },
  {
    id: "finexis-capital",
    slug: "finexis-capital",
    title: "Finexis Capital",
    client: "Finexis Venture Partners",
    industry: "FinTech & Private Equity",
    year: "2025",
    services: ["Web Development", "Branding", "AI Automation"],
    shortDescription:
      "Investor portal and clean financial dashboard connecting European capital with African tech scaleups.",
    fullDescription:
      "A secure, institutional-grade portal with live portfolio analytics and automated LP quarterly reports powered by AI.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    ],
    challenge:
      "Conservative European allocators needed institutional trust and streamlined, paperless reporting.",
    solution:
      "Minimalist Swiss-inspired design system with interactive charts and automated document generation.",
    impact: [
      { metric: "$45M+", label: "Capital Facilitated" },
      { metric: "-85%", label: "Reporting Overhead" },
      { metric: "100%", label: "Security Score" },
    ],
    testimonial: {
      quote:
        "They delivered an institutional-grade platform with the refinement of a top Silicon Valley studio.",
      author: "Meriem B.",
      role: "Managing Partner",
    },
  },
  {
    id: "atelier-sahara",
    slug: "atelier-sahara",
    title: "Atelier Sahara",
    client: "Sahara Atelier Group",
    industry: "Fashion & Luxury Goods",
    year: "2024",
    services: ["E-Commerce", "Social Media", "Video Production"],
    shortDescription:
      "Global store debut and viral video campaign celebrating handcrafted desert-inspired luxury apparel.",
    fullDescription:
      "On-location desert cinematography, an editorial Shopify Plus store, and a targeted social media campaign.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    ],
    challenge:
      "Standing out in a saturated fashion market without a massive traditional ad budget.",
    solution:
      "Cinematic Reels showing local weaving heritage, backed by a fast 1-click mobile checkout.",
    impact: [
      { metric: "3.2M", label: "Organic Views" },
      { metric: "4.4%", label: "Conversion Rate" },
      { metric: "42", label: "Countries Sold" },
    ],
    testimonial: {
      quote:
        "Their visual art direction gave our garments the mythic quality they deserved. It paid for itself in 3 days.",
      author: "Amine S.",
      role: "Head of Brand",
    },
  },
  {
    id: "vortex-logistics",
    slug: "vortex-logistics",
    title: "Vortex Freight",
    client: "Vortex Logistics Group",
    industry: "Supply Chain & Logistics",
    year: "2025",
    services: ["Custom Web App", "AI Automation", "Digital Marketing"],
    shortDescription:
      "Live vessel tracking dashboard and AI customs assistant reducing cross-border transit delays.",
    fullDescription:
      "Replaced paper trails with a fast web portal and an AI agent that automatically parses customs documents.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    ],
    challenge:
      "Fragmented paperwork between ports caused container delays and costly demurrage fees.",
    solution:
      "AI OCR document processor coupled with automated status alerts and interactive live vessel map.",
    impact: [
      { metric: "-34%", label: "Customs Delay" },
      { metric: "12,000+", label: "Containers Tracked" },
      { metric: "4.9/5", label: "User Rating" },
    ],
    testimonial: {
      quote:
        "The automation alone saved our team 20 hours each week. Our corporate clients love the tracking portal.",
      author: "Tariq M.",
      role: "COO",
    },
  },
  {
    id: "sidi-bou-estate",
    slug: "sidi-bou-estate",
    title: "Maison Sidi Bou",
    client: "Sidi Bou Hospitality",
    industry: "Hospitality & Travel",
    year: "2024",
    services: ["Branding", "Corporate Website", "Photo & Video"],
    shortDescription:
      "Direct reservation platform and cinematic brand film for an exclusive Mediterranean cliffside estate.",
    fullDescription:
      "A sensory booking experience bypassing high OTA commissions, paired with 35mm-style architectural photography.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    ],
    challenge:
      "Heavy reliance on Booking.com consuming 22% in commissions per stay.",
    solution:
      "Direct reservation engine with curated guest itineraries and sunset private dining add-ons.",
    impact: [
      { metric: "74%", label: "Direct Bookings" },
      { metric: "+48%", label: "Average Room Rate" },
      { metric: "99%", label: "Guest Satisfaction" },
    ],
    testimonial: {
      quote:
        "Guests regularly tell us they booked purely because of how stunning the website was.",
      author: "Leila H.",
      role: "Proprietor",
    },
  },
  {
    id: "heuristic-health",
    slug: "heuristic-health",
    title: "Heuristic Health",
    client: "Heuristic Medical",
    industry: "BioTech & Healthcare",
    year: "2025",
    services: ["Web Development", "Branding", "Digital Marketing"],
    shortDescription:
      "Patient appointment portal and interactive lab test results with clear visual health markers.",
    fullDescription:
      "Instant test results, plain-language biomarker explanations, and streamlined online booking.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    ],
    challenge:
      "Making complex clinical diagnostic reports clear and actionable for everyday patients.",
    solution:
      "Interactive biomarker glossary, instant booking flow, and physician portal with one-click report access.",
    impact: [
      { metric: "+310%", label: "Online Bookings" },
      { metric: "2.1x", label: "Physician Referrals" },
      { metric: "4.2m", label: "Avg Session Time" },
    ],
    testimonial: {
      quote:
        "The clarity and speed of the platform bridged the gap between our lab and patients with ease.",
      author: "Dr. Karim Z.",
      role: "Director",
    },
  },
];
