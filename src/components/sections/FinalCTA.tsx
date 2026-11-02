"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, Check, Mail, Phone, MapPin } from "lucide-react";
import { AGENCY_INFO } from "@/data/agency";
import { SERVICES } from "@/data/services";
import GsapReveal from "@/components/animations/GsapReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FinalCTA() {
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
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#FFFFFF", "#888888", "#111111"],
        });
      } catch {}
    }, 400);
  };

  return (
    <section
      id="contact"
      className="py-28 lg:py-36 bg-[#0A0A0A] text-white relative border-t border-white/10"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-4xl mb-16">
          <GsapReveal direction="up">
            <div className="text-xs uppercase tracking-wider text-[#777777] mb-3 font-semibold">
              START A PROJECT
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.035em] uppercase leading-[0.95] mb-6">
              Let&apos;s build something that moves your business forward.
            </h2>
            <p className="text-lg sm:text-xl text-[#777777] font-normal">
              Have an idea, a project, or a business ready to grow? Let&apos;s
              make it happen.
            </p>
          </GsapReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-8 bg-[#111111]/75 backdrop-blur-md border border-white/10 p-8 sm:p-12 rounded-sm shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.14)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white/10 text-white mx-auto flex items-center justify-center font-bold">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-white">
                  Message Received.
                </h3>
                <p className="text-sm text-[#777777] max-w-sm mx-auto font-normal">
                  We will review your brief and get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  size="sm"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Services */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-white block mb-3 font-semibold">
                    Select Services
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICES.map((srv) => {
                      const isSelected = selectedServices.includes(srv.title);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => toggleService(srv.title)}
                          className={`p-3 text-xs text-left border rounded-sm transition-all ${
                            isSelected
                              ? "bg-white border-white text-black font-bold shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
                              : "bg-white/[0.03] border-white/10 text-[#777777] hover:text-white hover:bg-white/[0.08] hover:border-white/25"
                          }`}
                        >
                          {srv.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs uppercase tracking-wider text-white font-semibold">
                      Estimated Budget
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

                {/* Inputs using shadcn/ui */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <Textarea
                  rows={3}
                  placeholder="Tell us briefly about the project..."
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
                    <span>{loading ? "Sending..." : "Start a Project"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </MagneticButton>
              </form>
            )}
          </div>

          {/* Direct Coordinates */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-[#111111]/75 backdrop-blur-md border border-white/10 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)]">
              <span className="text-xs uppercase tracking-wider text-white block mb-2 font-semibold">
                DIRECT CONTACT
              </span>
              <h3 className="font-bold text-2xl text-white mb-4 tracking-tight">
                Talk to a partner.
              </h3>

              <div className="space-y-4 text-xs text-[#777777]">
                <a
                  href={`tel:${AGENCY_INFO.contact.phone}`}
                  className="flex items-center gap-3 text-white hover:text-white/70 transition-colors"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>{AGENCY_INFO.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${AGENCY_INFO.contact.email}`}
                  className="flex items-center gap-3 text-white hover:text-white/70 transition-colors"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>{AGENCY_INFO.contact.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{AGENCY_INFO.location.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
