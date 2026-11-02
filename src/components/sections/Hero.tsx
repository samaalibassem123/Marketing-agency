"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroScene from "@/components/three/HeroScene";
import MagneticButton from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".hero-word");
        tl.fromTo(
          words,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.06, delay: 0.1 }
        );
      }

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        );
      }
    });

    return () => ctx.revert();
  }, [language]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-16 bg-[#0A0A0A] text-white overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* 3D Three.js Interactive Particle & Geometry Scene */}
      <HeroScene />

      {/* Subtle modern grid overlay */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40 z-0" />

      {/* Center Main Stage */}
      <div className="max-w-7xl mx-auto w-full my-auto py-4 sm:py-6 relative z-10">
        <div className="max-w-4xl">
          <h1
            ref={headlineRef}
            className="font-extrabold text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[0.96] tracking-[-0.04em] uppercase mb-6 sm:mb-8 overflow-hidden"
          >
            <span className="hero-word inline-block mr-3 sm:mr-4">
              {t.hero.weBuild}
            </span>
            <span className="hero-word inline-block mr-3 sm:mr-4 text-white underline decoration-1 underline-offset-8">
              {t.hero.digital}
            </span>
            <span className="hero-word inline-block mr-3 sm:mr-4">
              {t.hero.experiences}
            </span>
            <br />
            <span className="hero-word inline-block mr-3 sm:mr-4">
              {t.hero.thatMove}
            </span>
            <span className="hero-word inline-block text-white/35">
              {t.hero.businessesForward}
            </span>
          </h1>

          <div
            ref={subtextRef}
            className="max-w-2xl border-l border-white/40 pl-5 sm:pl-6 mb-6 sm:mb-8 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-5 rtl:sm:pr-6"
          >
            <p className="text-base sm:text-lg text-[#CCCCCC] font-normal leading-relaxed">
              {t.hero.subtext}
            </p>
          </div>

          {/* Interactive Magnetic CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Link href="/#services">
                <Button size="lg" className="gap-3">
                  <span>{t.hero.exploreServices}</span>
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link href="/#contact">
                <Button variant="glass" size="lg" className="gap-3">
                  <span>{t.hero.startProject}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-end rtl:justify-start text-xs text-[#777777] pt-6 border-t border-white/10 relative z-10">
        <Link
          href="/#services"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>{t.hero.scroll}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
