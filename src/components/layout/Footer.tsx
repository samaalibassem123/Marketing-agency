"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { AGENCY_INFO } from "@/data/agency";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/10 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Huge Callout */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-extrabold text-4xl sm:text-6xl uppercase tracking-[-0.035em] max-w-xl leading-none">
              {t.finalCta.title}
            </h2>
          </div>

          <Link href="/#contact">
            <Button size="lg" className="gap-2">
              <span>{t.hero.startProject}</span>
              <ArrowUpRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 text-xs">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white text-[#0A0A0A] flex items-center justify-center font-bold text-xs rounded-sm">
                K
              </div>
              <span className="font-bold text-lg text-white">
                KONTRAST
              </span>
            </div>
            <p className="text-[#777777] font-normal leading-relaxed mb-4">
              {t.footer.agencyDesc}
            </p>
            <div className="text-[#777777]">
              {AGENCY_INFO.location.address}
            </div>
          </div>

          <div>
            <span className="text-white uppercase tracking-wider block mb-4 font-semibold">
              {t.footer.servicesTitle}
            </span>
            <ul className="space-y-2.5 text-[#777777]">
              {SERVICES.map((s) => {
                const srvTitle = t.services.items[s.id]?.title || s.title;
                return (
                  <li key={s.id}>
                    <Link
                      href={`/#services`}
                      className="hover:text-white transition-colors"
                    >
                      {srvTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <span className="text-white uppercase tracking-wider block mb-4 font-semibold">
              {t.footer.navTitle}
            </span>
            <ul className="space-y-2.5 text-[#777777]">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  {t.nav.process}
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-white transition-colors">
                  {t.nav.whyUs}
                </Link>
              </li>
              <li>
                <Link href="/#introduction" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-white uppercase tracking-wider block mb-4 font-semibold">
              {t.footer.connectTitle}
            </span>
            <ul className="space-y-2.5 text-[#777777]">
              {AGENCY_INFO.socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>
            © {new Date().getFullYear()} {AGENCY_INFO.name}. {t.footer.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-white/70 transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
