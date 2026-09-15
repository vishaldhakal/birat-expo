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
  X,
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
    gradient: "from-emerald-500 to-emerald-700",
    pos: { left: "50%", top: "8%" },
  },
  {
    number: "02",
    label: "Work",
    desc: "Connecting job seekers with employers and creating meaningful employment.",
    icon: Briefcase,
    border: "border-blue-500",
    text: "text-blue-600",
    bg: "bg-blue-600",
    gradient: "from-blue-500 to-blue-700",
    pos: { left: "75%", top: "16%" },
  },
  {
    number: "03",
    label: "Build",
    desc: "Nurturing startups and entrepreneurs to turn ideas into successful enterprises.",
    icon: Rocket,
    border: "border-violet-500",
    text: "text-violet-600",
    bg: "bg-violet-600",
    gradient: "from-violet-500 to-violet-700",
    pos: { left: "90%", top: "37%" },
  },
  {
    number: "04",
    label: "Grow",
    desc: "Empowering SMEs with resources, advisory and support to scale and succeed.",
    icon: TrendingUp,
    border: "border-orange-500",
    text: "text-orange-600",
    bg: "bg-orange-500",
    gradient: "from-orange-500 to-orange-700",
    pos: { left: "90%", top: "63%" },
  },
  {
    number: "05",
    label: "Expand",
    desc: "Enabling industries to expand markets, adopt technology and drive competitiveness.",
    icon: Expand,
    border: "border-cyan-500",
    text: "text-cyan-600",
    bg: "bg-cyan-600",
    gradient: "from-cyan-500 to-cyan-700",
    pos: { left: "75%", top: "84%" },
  },
  {
    number: "06",
    label: "Connect",
    desc: "Building business connections, partnerships and networks that create long-term value.",
    icon: Handshake,
    border: "border-pink-500",
    text: "text-pink-600",
    bg: "bg-pink-600",
    gradient: "from-pink-500 to-pink-700",
    pos: { left: "50%", top: "92%" },
  },
  {
    number: "07",
    label: "Invest",
    desc: "Linking investors with promising ventures and high-potential opportunities.",
    icon: Coins,
    border: "border-indigo-500",
    text: "text-indigo-600",
    bg: "bg-indigo-600",
    gradient: "from-indigo-500 to-indigo-700",
    pos: { left: "25%", top: "84%" },
  },
  {
    number: "08",
    label: "Influence",
    desc: "Facilitating dialogue between policy makers, businesses and development partners.",
    icon: Landmark,
    border: "border-purple-500",
    text: "text-purple-700",
    bg: "bg-purple-700",
    gradient: "from-purple-500 to-purple-700",
    pos: { left: "10%", top: "63%" },
  },
  {
    number: "09",
    label: "Discover",
    desc: "Discovering innovative products, services and solutions for a better tomorrow.",
    icon: ShoppingBag,
    border: "border-amber-500",
    text: "text-amber-600",
    bg: "bg-amber-600",
    gradient: "from-amber-500 to-amber-700",
    pos: { left: "10%", top: "37%" },
  },
  {
    number: "10",
    label: "Experience",
    desc: "Celebrating culture, food, entertainment and experiences that bring people together.",
    icon: Users,
    border: "border-teal-500",
    text: "text-teal-700",
    bg: "bg-teal-700",
    gradient: "from-teal-500 to-teal-700",
    pos: { left: "25%", top: "16%" },
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
    <section className="py-12 md:py-20 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header — left aligned */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight whitespace-nowrap">
            The Ecosystem of{" "}
            <span className="text-blue-600">Opportunities</span>
          </h2>
        </div>

        {/* Radial diagram — desktop / tablet, hover to focus, click for detail */}
        <div className="hidden md:block relative mx-auto mt-10 w-full max-w-3xl h-[600px] lg:h-[660px]">
          {/* dashed ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full border-2 border-dashed border-gray-300" />

          {/* hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20  flex flex-col items-center justify-center text-center p-4">
            <span className="  flex items-center justify-center overflow-hidden mb-2 ">
              <img
                src="/logo2.png"
                alt="Birat Expo 2026 logo"
                className="w-28 h-28 lg:w-60 lg:h-60 object-contain"
              />
            </span>
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
                  className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white border-2 ${o.border} flex flex-col items-center justify-center text-center px-4 transition-all duration-200 ${
                    isHovered
                      ? "scale-125 shadow-xl z-30"
                      : isDimmed
                        ? "opacity-50 z-10"
                        : "shadow-sm z-10"
                  }`}
                >
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${o.bg} text-white text-[11px] font-bold flex items-center justify-center border-2 border-white`}
                  >
                    {o.number}
                  </span>
                  <Icon className={`w-4.5 h-4.5 lg:w-5 lg:h-5 ${o.text}`} />
                  <p
                    className={`mt-1 text-[10px] lg:text-[11px] font-black ${o.text} uppercase leading-tight`}
                  >
                    Opportunity
                    <br />
                    to {o.label}
                  </p>
                  <p className="mt-1 text-[8px] lg:text-[9px] text-gray-500 leading-snug line-clamp-3">
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
    </section>
  );
}
