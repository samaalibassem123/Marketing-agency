"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "compact" | "full";
}

const LANGUAGES: { code: Language; label: string; full: string; native: string }[] = [
  { code: "en", label: "EN", full: "English", native: "English" },
  { code: "fr", label: "FR", full: "Français", native: "Français" },
  { code: "tn", label: "TN", full: "تونسية", native: "تونسية" },
];

export default function LanguageSwitcher({
  className = "",
  variant = "compact",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "full") {
    return (
      <div
        role="group"
        aria-label="Language selection"
        className={`grid grid-cols-3 gap-2 w-full p-1 rounded-sm bg-[#111111]/90 backdrop-blur-md border border-white/10 ${className}`}
      >
        {LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              aria-pressed={isActive}
              className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-sm transition-all duration-200 cursor-pointer touch-manipulation select-none ${
                isActive
                  ? "bg-white text-[#0A0A0A] font-bold shadow-[0_4px_12px_rgba(255,255,255,0.25)]"
                  : "bg-white/[0.04] text-[#888888] hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              <span className="text-xs font-extrabold uppercase tracking-wider">
                {lang.label}
              </span>
              <span
                className={`text-[10px] mt-0.5 ${
                  isActive ? "text-[#0A0A0A]/80 font-semibold" : "text-[#777777]"
                }`}
              >
                {lang.native}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-0.5 rounded-sm bg-[#111111]/80 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] shrink-0 select-none ${className}`}
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
            className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer touch-manipulation ${
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
