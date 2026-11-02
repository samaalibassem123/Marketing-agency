export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  deliverables: string[];
  subServices: {
    name: string;
    description: string;
  }[];
  metricsHighlight?: string;
  accentColor?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  shortDescription: string;
  fullDescription: string;
  image: string;
  secondaryImages?: string[];
  challenge: string;
  solution: string;
  impact: {
    metric: string;
    label: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  link?: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  deliverables: string[];
  focusAreas: string[];
}

export interface ValuePillar {
  number: string;
  title: string;
  headline: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface LeadInquiry {
  name: string;
  email: string;
  company: string;
  phone?: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
}
