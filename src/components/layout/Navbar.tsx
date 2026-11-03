"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import MagneticButton from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.whyUs, href: "/#why-us" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3.5 bg-[#0A0A0A]/75 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="KONTRAST Agency Home"
          >
            <div className="w-7 h-7 bg-white text-[#0A0A0A] flex items-center justify-center font-bold text-sm tracking-tighter rounded-sm group-hover:bg-white/85 transition-colors">
              K
            </div>
            <span className="font-bold text-xl tracking-tight text-white transition-colors">
              KONTRAST
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-sm bg-[#111111]/70 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-white font-bold"
                      : "text-[#777777] hover:text-white font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA + Language Switcher (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            <LanguageSwitcher />

            <MagneticButton>
              <Link href="/#contact">
                <Button variant="default" size="sm" className="gap-2">
                  <span>{t.nav.letsTalk}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Button>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <LanguageSwitcher />

            <Link href="/#contact" className="hidden sm:inline-flex">
              <Button size="sm" className="h-8 px-2.5 text-[11px]">
                {t.nav.letsTalk}
              </Button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-sm hover:bg-white/[0.12] transition-colors shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
