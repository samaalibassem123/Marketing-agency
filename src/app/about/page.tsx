import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us & Philosophy",
  description:
    "We are KONTRAST — a design and engineering studio based in Tunis, working with ambitious brands worldwide.",
};

export default function AboutPage() {
  const team = [
    {
      role: "Creative Direction",
      desc: "Brand identity, typography, and visual systems.",
    },
    {
      role: "Software Architecture",
      desc: "Next.js, Three.js, and serverless engineering.",
    },
    {
      role: "Growth Strategy",
      desc: "Paid media funnels and conversion rate optimization.",
    },
    {
      role: "AI & Automation",
      desc: "Autonomous workflow pipelines and custom LLM tools.",
    },
  ];

  return (
    <div
      className="pt-36 pb-24 bg-[#0A0A0A] text-white relative"
      style={{ position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20">
        <div className="text-xs uppercase tracking-wider text-[#777777] mb-4 font-semibold">
          THE STUDIO
        </div>

        <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.035em] uppercase mb-8">
          Crafted in Tunis. <br />
          <span className="text-white underline decoration-1 underline-offset-8">Built for the world.</span>
        </h1>

        <div className="max-w-3xl mb-16">
          <p className="text-xl sm:text-2xl text-[#CCCCCC] font-normal leading-relaxed mb-6">
            We are a boutique studio combining art direction with software
            engineering. We build digital flagships that help brands stand out
            and grow.
          </p>
          <p className="text-base text-[#777777] leading-relaxed font-normal">
            From our studio in Tunis, we collaborate seamlessly with clients
            across North Africa, Europe, the GCC, and North America.
          </p>
        </div>

        {/* Hero image */}
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
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Squad Roles */}
        <div className="border-t border-white/10 pt-16 mb-20">
          <h2 className="font-bold text-3xl uppercase mb-8 tracking-tight">
            Disciplines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#111111]/75 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-sm shadow-[0_12px_24px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-all duration-300"
              >
                <span className="text-xs text-white block mb-2 font-bold">
                  0{idx + 1}
                </span>
                <h3 className="font-bold text-lg text-white mb-2">
                  {item.role}
                </h3>
                <p className="text-xs text-[#777777] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct CTA */}
        <div className="p-10 bg-[#111111]/75 backdrop-blur-md border border-white/10 rounded-sm shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.14)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-2xl text-white mb-1 tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-xs text-[#777777]">
              We take on a limited number of clients each quarter.
            </p>
          </div>
          <Link href="/contact">
            <Button size="lg">
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
