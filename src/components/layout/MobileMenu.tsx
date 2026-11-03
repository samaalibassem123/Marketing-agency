"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Mail, Phone, MapPin } from "lucide-react";
import { AGENCY_INFO } from "@/data/agency";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-white text-[#0A0A0A] flex items-center justify-center font-bold text-sm rounded-sm">
                K
              </div>
              <span className="font-bold text-lg tracking-tight">
                KONTRAST
              </span>
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <button
                onClick={onClose}
                className="p-2 border border-white/10 bg-white/[0.06] text-white rounded-sm hover:bg-white/[0.12] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="py-8 flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-wider text-[#777777]">
              {t.footer.navTitle}
            </span>
            {links.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * idx, duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-white transition-colors"
                >
                  <span className="text-3xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors">
                    {link.label}
                  </span>
                  <span className="text-xs text-[#777777]">
                    0{idx + 1}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Language Selection Section in Mobile Drawer */}
          <div className="py-4 border-t border-white/10">
            <span className="text-[10px] uppercase tracking-wider text-[#777777] block mb-2 font-semibold">
              Language / Langue / اللغة
            </span>
            <LanguageSwitcher variant="full" />
          </div>

          {/* Bottom Coordinates & Direct CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-2 text-xs text-[#777777]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>{AGENCY_INFO.location.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white" />
                <a href={`mailto:${AGENCY_INFO.contact.email}`}>
                  {AGENCY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white" />
                <a href={`tel:${AGENCY_INFO.contact.phone}`}>
                  {AGENCY_INFO.contact.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/contact" onClick={onClose} className="w-full block">
                <Button size="sm" className="w-full justify-between">
                  <span>{t.hero.startProject}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
