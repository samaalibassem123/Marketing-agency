"use client";

import React from "react";
import Link from "next/link";
import { PROCESS_STAGES } from "@/data/process";
import GsapReveal from "@/components/animations/GsapReveal";
import { CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="py-28 lg:py-36 bg-[#0A0A0A] text-white relative border-t border-white/10"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12 sm:mb-16">
          <GsapReveal direction="up">
            <div className="text-xs uppercase tracking-wider text-[#777777] mb-3 font-semibold">
              {t.process.badge}
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] uppercase">
              {t.process.title}
            </h2>
          </GsapReveal>

          <GsapReveal direction="up" delay={0.1}>
            <p className="max-w-md text-[#CCCCCC] text-base sm:text-lg font-normal leading-relaxed">
              {t.process.subtitle}
            </p>
          </GsapReveal>
        </div>

        {/* 6 Structured Glass Cards Grid (5 Stages + 1 Sprint Initiation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STAGES.map((stage, idx) => {
            const stageData = t.process.stages[stage.step];
            const title = stageData?.title || stage.title;
            const tagline = stageData?.tagline || stage.tagline;
            const description = stageData?.description || stage.description;
            const duration = stageData?.duration || stage.duration;
            const deliverables = stageData?.deliverables || stage.deliverables;

            return (
              <GsapReveal key={stage.step} direction="up" delay={idx * 0.08}>
                <div className="group relative p-8 bg-[#111111]/75 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.14)] hover:shadow-[0_24px_48px_-10px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.22)] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                  {/* Subtle Ambient Radial Specular Glow */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-white/[0.02] group-hover:bg-white/[0.05] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Top Bar: Big Sculpted Number & Duration Pill */}
                    <div className="flex items-baseline justify-between mb-6">
                      <span className="font-extrabold text-5xl sm:text-6xl tracking-[-0.05em] text-white/20 group-hover:text-white transition-colors duration-300">
                        {stage.step}
                      </span>
                      <span className="px-2.5 py-1 text-xs font-semibold text-white/90 bg-white/[0.05] border border-white/10 rounded-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
                        {duration}
                      </span>
                    </div>

                    {/* Stage Title & Tagline */}
                    <h3 className="font-bold text-2xl uppercase tracking-tight text-white mb-1 group-hover:text-white transition-colors">
                      {title}
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-[#777777] font-semibold mb-4">
                      {tagline}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#CCCCCC] font-normal leading-relaxed mb-6">
                      {description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-5 border-t border-white/10 mt-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#777777] font-semibold block mb-3">
                      {t.process.keyDeliverables}
                    </span>
                    <ul className="space-y-2.5">
                      {deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-xs text-[#CCCCCC] font-normal"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GsapReveal>
            );
          })}

          {/* 6th Card: Sprint Initiation & Immediate CTA */}
          <GsapReveal direction="up" delay={0.48}>
            <div className="group relative p-8 bg-[#161616]/85 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-sm shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/[0.04] rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 text-xs uppercase tracking-wider font-semibold bg-white text-[#0A0A0A] rounded-sm">
                    {t.process.ctaCard.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#888888]">
                    <Clock className="w-3.5 h-3.5 text-white" />
                    <span>{t.process.ctaCard.reviewTime}</span>
                  </div>
                </div>

                <h3 className="font-bold text-2xl uppercase tracking-tight text-white mb-2">
                  {t.process.ctaCard.title}
                </h3>
                <p className="text-sm text-[#CCCCCC] font-normal leading-relaxed mb-6">
                  {t.process.ctaCard.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-auto">
                <Link href="/contact" className="block w-full">
                  <Button size="lg" className="w-full gap-2 justify-center">
                    <span>{t.process.ctaCard.button}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Button>
                </Link>

                <div className="mt-3.5 text-center text-[11px] text-[#777777] uppercase tracking-wider font-medium">
                  {t.process.ctaCard.footerNote}
                </div>
              </div>
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
}
