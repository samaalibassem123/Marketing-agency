"use client";

import React from "react";
import { VALUE_PILLARS } from "@/data/agency";
import GsapReveal from "@/components/animations/GsapReveal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Cpu,
  UserCheck,
  Zap,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  Check,
} from "lucide-react";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  "01": <Sparkles className="w-4 h-4" />,
  "02": <Cpu className="w-4 h-4" />,
  "03": <UserCheck className="w-4 h-4" />,
  "04": <Zap className="w-4 h-4" />,
  "05": <Layers className="w-4 h-4" />,
  "06": <ShieldCheck className="w-4 h-4" />,
};

export default function WhyChooseUs() {
  const { t } = useLanguage();
  // Duplicate array 3 times for a continuous, seamless infinite loop
  const marqueePillars = [...VALUE_PILLARS, ...VALUE_PILLARS, ...VALUE_PILLARS];

  return (
    <section
      id="why-us"
      className="py-28 lg:py-36 bg-[#0A0A0A] text-white relative border-t border-white/10 overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <GsapReveal direction="up">
            <div className="text-xs uppercase tracking-wider text-[#777777] mb-3 font-semibold">
              {t.whyUs.badge}
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] uppercase">
              {t.whyUs.title}
            </h2>
          </GsapReveal>

          <GsapReveal direction="up" delay={0.1}>
            <p className="max-w-md text-[#CCCCCC] text-base sm:text-lg font-normal leading-relaxed">
              {t.whyUs.subtitle}
            </p>
          </GsapReveal>
        </div>

        {/* Apple Liquid Glass Commitment Quick-Pills */}
        <GsapReveal direction="up" delay={0.15}>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {t.whyUs.commitmentPills.map((pill, pIdx) => (
              <div
                key={pIdx}
                className="p-3.5 bg-[#111111]/70 backdrop-blur-md border border-white/10 rounded-sm flex items-center gap-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
              >
                <Check className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </GsapReveal>
      </div>

      {/* Horizontal Moving Glass Cards (Moving Left to Right) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and Right Edge Vignette Gradients for Luxury Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-20" />

        {/* Marquee Runner moving Left to Right */}
        <div className="animate-marquee-ltr flex items-stretch gap-6 px-4 cursor-grab active:cursor-grabbing">
          {marqueePillars.map((pillar, idx) => {
            const pData = t.whyUs.pillars[pillar.number];
            const headline = pData?.headline || pillar.headline;
            const description = pData?.description || pillar.description;
            const stat = pData?.stat || pillar.stat;
            const statLabel = pData?.statLabel || pillar.statLabel;
            const title = pData?.title || pillar.title;

            const icon =
              PILLAR_ICONS[pillar.number] || <Sparkles className="w-4 h-4" />;

            return (
              <div
                key={`${pillar.number}-${idx}`}
                className="group relative w-[300px] sm:w-[350px] shrink-0 p-6 sm:p-7 bg-[#111111]/80 backdrop-blur-xl border border-white/10 hover:border-white/35 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.14)] hover:shadow-[0_24px_48px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.24)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Top-Right Specular Ambient Highlight */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/[0.03] group-hover:bg-white/[0.06] rounded-full blur-xl transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Header: Icon & Big Metric Stat */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 rounded-sm bg-white/[0.06] border border-white/15 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] group-hover:bg-white group-hover:text-[#0A0A0A] transition-all duration-300">
                      {icon}
                    </span>
                    <div className="font-extrabold text-2xl text-white tracking-tight">
                      {stat}
                    </div>
                  </div>

                  <div className="text-[11px] uppercase tracking-wider text-[#777777] font-semibold mb-3">
                    {statLabel}
                  </div>

                  {/* Headline & Description */}
                  <h3 className="font-bold text-lg uppercase tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                    {headline}
                  </h3>

                  <p className="text-xs text-[#CCCCCC] font-normal leading-relaxed mb-6">
                    {description}
                  </p>
                </div>

                {/* Bottom Domain Divider */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#777777]">
                  <span className="uppercase tracking-wider font-medium text-white/70 text-[11px]">
                    {title}
                  </span>
                  <span className="p-1 rounded-sm text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all rtl:rotate-180">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Helper Notice */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-6 flex items-center justify-center sm:justify-end text-[11px] text-[#666666] uppercase tracking-wider">
        <span>{t.whyUs.hoverNotice}</span>
      </div>
    </section>
  );
}
