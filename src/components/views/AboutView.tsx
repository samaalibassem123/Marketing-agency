"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import GsapReveal from "@/components/animations/GsapReveal";

export default function AboutView() {
  const { t } = useLanguage();

  return (
    <div
      className="pt-36 pb-24 bg-[#0A0A0A] text-white relative"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20">
        <GsapReveal direction="up">
          <div className="text-xs uppercase tracking-wider text-[#777777] mb-4 font-semibold">
            {t.aboutPage.badge}
          </div>

          <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.035em] uppercase mb-8">
            {t.aboutPage.headlinePart1} <br />
            <span className="text-white underline decoration-1 underline-offset-8">
              {t.aboutPage.headlineUnderline}
            </span>
          </h1>
        </GsapReveal>

        <div className="max-w-3xl mb-16">
          <GsapReveal direction="up" delay={0.1}>
            <p className="text-xl sm:text-2xl text-[#CCCCCC] font-normal leading-relaxed mb-6">
              {t.aboutPage.leadText}
            </p>
            <p className="text-base text-[#777777] leading-relaxed font-normal">
              {t.aboutPage.subText}
            </p>
          </GsapReveal>
        </div>

        {/* Hero Image */}
        <GsapReveal direction="up" delay={0.15}>
          <div
            className="relative aspect-[21/9] w-full overflow-hidden border border-white/10 rounded-sm mb-20"
            style={{ position: "relative" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt="KONTRAST Studio"
              fill
              sizes="100vw"
              className="object-cover filter grayscale contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </GsapReveal>

        {/* Squad Roles / Disciplines */}
        <div className="border-t border-white/10 pt-16 mb-20">
          <GsapReveal direction="up">
            <h2 className="font-bold text-3xl uppercase mb-8 tracking-tight">
              {t.aboutPage.disciplinesTitle}
            </h2>
          </GsapReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.aboutPage.disciplines.map((item, idx) => (
              <GsapReveal key={idx} direction="up" delay={idx * 0.08}>
                <div className="p-6 bg-[#111111]/75 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-sm shadow-[0_12px_24px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-white block mb-2 font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-lg text-white mb-2">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-xs text-[#777777] font-normal leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>

        {/* Direct CTA */}
        <GsapReveal direction="up">
          <div className="p-10 bg-[#111111]/75 backdrop-blur-md border border-white/10 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.14)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-2xl text-white mb-1 tracking-tight">
                {t.aboutPage.ctaTitle}
              </h3>
              <p className="text-xs text-[#777777]">
                {t.aboutPage.ctaSub}
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                <span>{t.aboutPage.ctaButton}</span>
                <ArrowUpRight className="w-4 h-4 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </GsapReveal>
      </div>
    </div>
  );
}
