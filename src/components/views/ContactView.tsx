"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Check, Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { AGENCY_INFO } from "@/data/agency";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import GsapReveal from "@/components/animations/GsapReveal";
import MagneticButton from "@/components/animations/MagneticButton";

export default function ContactView() {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Development",
  ]);
  const [currency, setCurrency] = useState<"TND" | "EUR" | "USD">("TND");
  const [budgetTier, setBudgetTier] = useState<string>("mid");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (srvTitle: string) => {
    if (selectedServices.includes(srvTitle)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srvTitle));
      }
    } else {
      setSelectedServices([...selectedServices, srvTitle]);
    }
  };

  const budgetOptions = {
    TND: [
      { id: "starter", label: "< 15K TND" },
      { id: "mid", label: "15K — 40K TND" },
      { id: "enterprise", label: "40K+ TND" },
    ],
    EUR: [
      { id: "starter", label: "< 5K €" },
      { id: "mid", label: "5K — 15K €" },
      { id: "enterprise", label: "15K+ €" },
    ],
    USD: [
      { id: "starter", label: "< $6K" },
      { id: "mid", label: "$6K — $18K" },
      { id: "enterprise", label: "$18K+" },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 85,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFFFFF", "#888888", "#111111"],
        });
      } catch {}
    }, 400);
  };

  return (
    <div
      className="pt-36 pb-24 bg-[#0A0A0A] text-white relative"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20">
        <GsapReveal direction="up">
          <div className="text-xs uppercase tracking-wider text-[#777777] mb-4 font-semibold">
            {t.contactPage.badge}
          </div>

          <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.035em] uppercase mb-8">
            {t.contactPage.title}
          </h1>

          <p className="max-w-xl text-xl text-[#777777] font-normal leading-relaxed mb-16">
            {t.contactPage.subtitle}
          </p>
        </GsapReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 bg-[#111111]/75 backdrop-blur-md border border-white/10 p-8 sm:p-12 rounded-sm shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.14)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white/10 text-white mx-auto flex items-center justify-center font-bold">
                  <Check className="w-6 h-6" />
                </div>
                <h2 className="font-bold text-2xl text-white tracking-tight">
                  {t.contactPage.messageSentTitle}
                </h2>
                <p className="text-sm text-[#777777] max-w-sm mx-auto font-normal">
                  {t.contactPage.messageSentDesc}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  size="sm"
                >
                  {t.contactPage.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-white block mb-3 font-semibold">
                    {t.contactPage.servicesLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICES.map((srv) => {
                      const isSelected = selectedServices.includes(srv.title);
                      const srvTitle =
                        t.services.items[srv.id]?.title || srv.title;
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => toggleService(srv.title)}
                          className={`p-3 text-xs text-left rtl:text-right border rounded-sm transition-all ${
                            isSelected
                              ? "bg-white border-white text-black font-bold shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
                              : "bg-white/[0.03] border-white/10 text-[#777777] hover:text-white hover:bg-white/[0.08] hover:border-white/25"
                          }`}
                        >
                          {srvTitle}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs uppercase tracking-wider text-white font-semibold">
                      {t.contactPage.budgetLabel}
                    </label>
                    <div className="flex gap-1 border border-white/10 p-0.5 rounded-sm">
                      {(["TND", "EUR", "USD"] as const).map((curr) => (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => setCurrency(curr)}
                          className={`px-2 py-0.5 text-[10px] ${
                            currency === curr
                              ? "bg-white text-black font-bold"
                              : "text-[#777777]"
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {budgetOptions[currency].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setBudgetTier(opt.id)}
                        className={`p-3 text-xs border rounded-sm text-center transition-all ${
                          budgetTier === opt.id
                            ? "bg-white/10 border-white text-white font-bold"
                            : "bg-[#0A0A0A] border-white/10 text-[#777777]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    required
                    placeholder={t.contactPage.namePlaceholder}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Input
                    type="email"
                    required
                    placeholder={t.contactPage.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <Textarea
                  rows={4}
                  placeholder={t.contactPage.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <MagneticButton>
                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="gap-2"
                  >
                    <span>
                      {loading
                        ? t.contactPage.buttonSending
                        : t.contactPage.buttonSubmit}
                    </span>
                    <ArrowUpRight className="w-4 h-4 rtl:rotate-180" />
                  </Button>
                </MagneticButton>
              </form>
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-[#111111]/75 backdrop-blur-md border border-white/10 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)]">
              <span className="text-xs uppercase tracking-wider text-white block mb-2 font-semibold">
                {t.contactPage.coordinatesTitle}
              </span>
              <h3 className="font-bold text-2xl text-white mb-4 tracking-tight">
                {t.contactPage.studioTitle}
              </h3>

              <div className="space-y-4 text-xs text-[#777777]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{AGENCY_INFO.location.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-white shrink-0" />
                  <span>{t.contactPage.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <a
                    href={`mailto:${AGENCY_INFO.contact.email}`}
                    className="text-white hover:underline"
                  >
                    {AGENCY_INFO.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <a
                    href={`tel:${AGENCY_INFO.contact.phone}`}
                    className="text-white hover:underline"
                  >
                    {AGENCY_INFO.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
