"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

interface LanguageSwitcherProps {
  className?: string;
}

const LANGUAGES: { code: Language; label: string; full: string }[] = [
  { code: "en", label: "EN", full: "English" },
  { code: "fr", label: "FR", full: "Français" },
  { code: "tn", label: "TN", full: "تونسية" },
];

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-0.5 rounded-sm bg-[#111111]/80 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] ${className}`}
    >
      {LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            title={lang.full}
            aria-pressed={isActive}
            className={`px-2 py-0.5 text-[11px] uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-white text-[#0A0A0A] font-bold shadow-[0_2px_8px_rgba(255,255,255,0.2)]"
                : "text-[#777777] hover:text-white font-medium"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
