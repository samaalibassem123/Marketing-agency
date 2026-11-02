"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import MagneticButton from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Why Us", href: "/#why-us" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
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

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <MagneticButton>
              <Link href="/#contact">
                <Button variant="default" size="sm" className="gap-2">
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Link href="/#contact">
              <Button size="sm" className="h-8 px-3 text-[11px]">
                Talk
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-sm hover:bg-white/[0.12] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
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
