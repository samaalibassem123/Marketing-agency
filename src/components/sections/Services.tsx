"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Palette,
  Share2,
  TrendingUp,
  Cpu,
  Film,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import GsapReveal from "@/components/animations/GsapReveal";
import { useLanguage } from "@/context/LanguageContext";

// Pillar Icon Mapping
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "web-development": <Code2 className="w-4 h-4" />,
  "branding-graphic-design": <Palette className="w-4 h-4" />,
  "social-media-management": <Share2 className="w-4 h-4" />,
  "digital-marketing": <TrendingUp className="w-4 h-4" />,
  "ai-automation": <Cpu className="w-4 h-4" />,
  "photo-video-production": <Film className="w-4 h-4" />,
};

// Client-Attracting Tech & Specialization Badges
const SERVICE_TECH_TAGS: Record<string, string> = {
  "web-development": "Next.js 16 • React 19 • WebGL",
  "branding-graphic-design": "Visual Systems • Bespoke Type",
  "social-media-management": "Short-Form Video • TikTok & IG",
  "digital-marketing": "Meta & Google Ads • Technical SEO",
  "ai-automation": "Autonomous AI • Workflow Engine",
  "photo-video-production": "Cinema 4K/6K • Commercial Art",
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="py-28 lg:py-36 bg-[#FFFFFF] text-[#0A0A0A] relative border-t border-[#E5E5E5] overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Subtle light architectural grid */}
      <div className="absolute inset-0 bg-grid-subtle-light pointer-events-none opacity-60 z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E5E5] pb-8 mb-12 sm:mb-16">
          <GsapReveal direction="up">
            <div className="text-xs uppercase tracking-wider text-[#777777] mb-3 font-semibold">
              {t.services.badge}
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] uppercase text-[#0A0A0A]">
              {t.services.title}
            </h2>
          </GsapReveal>

          <GsapReveal direction="up" delay={0.1}>
            <p className="max-w-md text-[#555555] text-base sm:text-lg font-normal leading-relaxed">
              {t.services.subtitle}
            </p>
          </GsapReveal>
        </div>

        {/* Clean Side-by-Side Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, idx) => {
            const itemData = t.services.items[service.id];
            const title = itemData?.title || service.title;
            const shortDescription =
              itemData?.shortDescription || service.shortDescription;
            const metricsHighlight =
              itemData?.metricsHighlight || service.metricsHighlight;
            const techTag =
              itemData?.techTag ||
              SERVICE_TECH_TAGS[service.id] ||
              "Full-Service Capability";
            const deliverables =
              itemData?.deliverables || service.deliverables;

            const icon =
              SERVICE_ICONS[service.id] || <Sparkles className="w-4 h-4" />;

            return (
              <GsapReveal key={service.id} direction="up" delay={idx * 0.07}>
                <Link
                  href="/#contact"
                  className="group relative flex flex-col justify-between h-full p-7 sm:p-8 bg-[#FBFBFB] hover:bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#0A0A0A]/40 rounded-sm shadow-[0_12px_28px_-8px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,1)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle Light Specular Glow */}
                  <div className="absolute -top-14 -right-14 w-32 h-32 bg-black/[0.02] group-hover:bg-black/[0.04] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Top Row: Icon Pill & Metric Highlight Badge */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="flex items-center gap-2.5">
                        <span className="p-2.5 rounded-sm bg-black/[0.04] border border-[#E5E5E5] text-[#0A0A0A] shadow-sm group-hover:bg-[#0A0A0A] group-hover:text-white transition-all duration-300">
                          {icon}
                        </span>
                        <span className="text-xs font-semibold text-[#888888] tracking-wider">
                          0{idx + 1}
                        </span>
                      </div>

                      <span className="px-2.5 py-1 text-[11px] font-semibold text-[#0A0A0A] bg-black/[0.04] border border-[#E5E5E5] rounded-sm shadow-sm">
                        {metricsHighlight}
                      </span>
                    </div>

                    {/* Cinematic Visual Frame with Floating Tech Tag */}
                    <div
                      className="relative aspect-[16/9] w-full overflow-hidden border border-[#E5E5E5] rounded-sm mb-6 group-hover:border-[#0A0A0A]/30 transition-colors"
                      style={{ position: "relative" }}
                    >
                      <Image
                        src={service.image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover filter grayscale contrast-125 brightness-95 group-hover:filter-none group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                      {/* Floating Glass Tech Badge */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 text-[10px] font-semibold text-white/95 bg-[#0A0A0A]/85 backdrop-blur-md border border-white/20 rounded-sm shadow-sm uppercase tracking-wider">
                          {techTag}
                        </span>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="font-bold text-2xl uppercase tracking-tight text-[#0A0A0A] mb-2.5 transition-colors">
                      {title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-[#555555] font-normal leading-relaxed mb-6">
                      {shortDescription}
                    </p>
                  </div>

                  {/* Included Deliverables List */}
                  <div className="relative z-10">
                    <div className="pt-4 border-t border-[#E5E5E5] mb-5">
                      <span className="text-[11px] uppercase tracking-wider text-[#888888] font-semibold block mb-3">
                        {t.services.includedDeliverables}
                      </span>
                      <div className="space-y-2">
                        {deliverables.slice(0, 3).map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2.5 text-xs text-[#444444] group-hover:text-[#0A0A0A] transition-colors"
                          >
                            <span className="w-4 h-4 rounded-sm bg-black/[0.04] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-[#0A0A0A]" />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs">
                      <span className="text-[#777777] uppercase tracking-wider font-semibold group-hover:text-[#0A0A0A] transition-colors">
                        {t.services.inquireAbout}
                      </span>
                      <span className="p-2 rounded-sm bg-black/[0.04] border border-[#E5E5E5] text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-all duration-300 rtl:rotate-180">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </GsapReveal>
            );
          })}
        </div>

        {/* Bottom Callout & Link */}
        <div className="mt-16 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[#777777]">
            {t.services.needTailored}
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-[#0A0A0A] hover:text-[#555555] transition-colors uppercase tracking-wider font-semibold"
          >
            <span>{t.services.exploreAll}</span>
            <ArrowUpRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
