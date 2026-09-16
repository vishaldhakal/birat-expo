"use client";

import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  TrendingUp,
  Expand,
  Handshake,
  Coins,
  Landmark,
  ShoppingBag,
  Users,
} from "lucide-react";

const opportunities = [
  {
    number: "01",
    label: "Learn",
    desc: "Empowering students and young minds with knowledge, skills, exposure and career guidance.",
    icon: GraduationCap,
    border: "border-emerald-500",
    text: "text-emerald-600",
    bg: "bg-emerald-600",
    pos: { left: "50%", top: "10.5%" },
  },
  {
    number: "02",
    label: "Work",
    desc: "Connecting job seekers with employers and creating meaningful employment.",
    icon: Briefcase,
    border: "border-blue-500",
    text: "text-blue-600",
    bg: "bg-blue-600",
    pos: { left: "70.42%", top: "18.04%" },
  },
  {
    number: "03",
    label: "Build",
    desc: "Nurturing startups and entrepreneurs to turn ideas into successful enterprises.",
    icon: Rocket,
    border: "border-violet-500",
    text: "text-violet-600",
    bg: "bg-violet-600",
    pos: { left: "83.01%", top: "37.79%" },
  },
  {
    number: "04",
    label: "Grow",
    desc: "Empowering SMEs with resources, advisory and support to scale and succeed.",
    icon: TrendingUp,
    border: "border-orange-500",
    text: "text-orange-600",
    bg: "bg-orange-500",
    pos: { left: "83.01%", top: "62.21%" },
  },
  {
    number: "05",
    label: "Expand",
    desc: "Enabling industries to expand markets, adopt technology and drive competitiveness.",
    icon: Expand,
    border: "border-cyan-500",
    text: "text-cyan-600",
    bg: "bg-cyan-600",
    pos: { left: "70.42%", top: "81.96%" },
  },
  {
    number: "06",
    label: "Connect",
    desc: "Building business connections, partnerships and networks that create long-term value.",
    icon: Handshake,
    border: "border-pink-500",
    text: "text-pink-600",
    bg: "bg-pink-600",
    pos: { left: "50%", top: "89.5%" },
  },
  {
    number: "07",
    label: "Invest",
    desc: "Linking investors with promising ventures and high-potential opportunities.",
    icon: Coins,
    border: "border-indigo-500",
    text: "text-indigo-600",
    bg: "bg-indigo-600",
    pos: { left: "29.58%", top: "81.96%" },
  },
  {
    number: "08",
    label: "Influence",
    desc: "Facilitating dialogue between policy makers, businesses and development partners.",
    icon: Landmark,
    border: "border-purple-500",
    text: "text-purple-700",
    bg: "bg-purple-700",
    pos: { left: "16.99%", top: "62.21%" },
  },
  {
    number: "09",
    label: "Discover",
    desc: "Discovering innovative products, services and solutions for a better tomorrow.",
    icon: ShoppingBag,
    border: "border-amber-500",
    text: "text-amber-600",
    bg: "bg-amber-600",
    pos: { left: "16.99%", top: "37.79%" },
  },
  {
    number: "10",
    label: "Experience",
    desc: "Celebrating culture, food, entertainment and experiences that bring people together.",
    icon: Users,
    border: "border-teal-500",
    text: "text-teal-700",
    bg: "bg-teal-700",
    pos: { left: "29.58%", top: "18.04%" },
  },
];

type Opportunity = (typeof opportunities)[number];

export default function Ecosystem2026() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Opportunity | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header — left aligned */}
        <div>
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Interactive Ecosystem
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight whitespace-nowrap">
            The Ecosystem of{" "}
            <span className="text-blue-600">Opportunities</span>
          </h2>
        </div>

        {/* Radial diagram — desktop / tablet, hover to focus, click for detail */}
        <div className="hidden md:block relative mx-auto mt-14 w-full max-w-5xl h-[900px] overflow-visible">
          {/* dashed ring — aspect-square keeps it a true circle regardless of container proportions */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] aspect-square rounded-full border-2 border-dashed border-gray-300" />

          {/* hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[30%] aspect-square rounded-full bg-white border border-gray-200 shadow-xl shadow-gray-900/5 flex items-center justify-center p-6">
            <img
              src="/logo2.png"
              alt="Birat Expo 2026 logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* nodes */}
          {opportunities.map((o) => {
            const Icon = o.icon;
            const isHovered = hoveredId === o.number;
            const isDimmed = hoveredId !== null && !isHovered;
            return (
              <div
                key={o.number}
                style={{ left: o.pos.left, top: o.pos.top }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <button
                  type="button"
                  onMouseEnter={() => setHoveredId(o.number)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelected(o)}
                  aria-label={`Opportunity to ${o.label} — view details`}
                  className={`relative w-40 h-40 rounded-full bg-white border-2 ${o.border} flex flex-col items-center justify-center text-center px-5 transition-all duration-200 ${
                    isHovered
                      ? "scale-110 shadow-xl z-30"
                      : isDimmed
                        ? "opacity-40 z-10"
                        : "shadow-sm z-10"
                  }`}
                >
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full ${o.bg} text-white text-[11px] font-bold flex items-center justify-center border-2 border-white`}
                  >
                    {o.number}
                  </span>
                  <Icon className={`w-6 h-6 ${o.text}`} />
                  <p
                    className={`mt-2 text-[11px] font-black ${o.text} uppercase leading-tight`}
                  >
                    Opportunity
                    <br />
                    to {o.label}
                  </p>
                  <p className="mt-1.5 text-[9px] text-gray-500 leading-snug line-clamp-3">
                    {o.desc}
                  </p>
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile — compact rounded flow, tap for detail */}
        <div className="md:hidden mt-10 divide-y divide-gray-100">
          {opportunities.map((o) => {
            const Icon = o.icon;
            return (
              <button
                key={o.number}
                type="button"
                onClick={() => setSelected(o)}
                className="w-full flex items-start gap-4 py-4 first:pt-0 last:pb-0 text-left active:opacity-70 transition-opacity"
              >
                <span
                  className={`relative w-12 h-12 rounded-full bg-white border-2 ${o.border} shrink-0 flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${o.text}`} />
                  <span
                    className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full ${o.bg} text-white text-[9px] font-bold flex items-center justify-center border-2 border-white`}
                  >
                    {o.number}
                  </span>
                </span>
                <div>
                  <h3
                    className={`text-sm font-black ${o.text} uppercase leading-tight`}
                  >
                    Opportunity to {o.label}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    {o.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              ✕
            </button>
            <span
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${selected.bg} text-white text-sm font-bold mb-4`}
            >
              {selected.number}
            </span>
            <h3 className={`text-lg font-black ${selected.text} uppercase`}>
              Opportunity to {selected.label}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {selected.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
