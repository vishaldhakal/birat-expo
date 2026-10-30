"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export default function PavilionLayout() {
  const [activeZone, setActiveZone] = useState<number>(0);

  const zones = [
    {
      id: "zone-1",
      number: "01",
      name: "THINK: The Makerspace",
      keyword: "CURIOSITY",
      tag: "Grades 7–10 & Teachers",
      bgLight: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      badgeBg: "bg-emerald-600",
      renderBanner: "Green Banner: 1. THINK: Maker Space",
      details: [
        "Maker bench equipped with hand tools, electronics & 3D printers",
        "Student project wall: real problems solved by children across Koshi",
        "Build a hands-on prototype in 30 minutes without needing business plans",
        "Dedicated enquiry desk for school visit bookings and teacher handbooks",
      ],
    },
    {
      id: "zone-2",
      number: "02",
      name: "BUILD: The Design Studio",
      keyword: "CAPABILITY",
      tag: "College Students & Innovators",
      bgLight: "bg-teal-50",
      border: "border-teal-200",
      text: "text-teal-700",
      badgeBg: "bg-teal-600",
      renderBanner: "Cyan Banner: 2. BUILD: Boot Camp",
      details: [
        "Collaborative work tables, laptops, whiteboards & idea cards",
        "Live teams working: visitors can be interviewed about real problems",
        "Crazy 8s ideation wall & pitch arena for innovation challenge finalists",
        "Direct bridge to upcoming design thinking cohorts across Koshi colleges",
      ],
    },
    {
      id: "zone-3",
      number: "03",
      name: "GROW & INVEST: The Growth Room",
      keyword: "CAPITAL",
      tag: "Small & Growing Businesses (SGBs)",
      bgLight: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-700",
      badgeBg: "bg-amber-600",
      renderBanner: "Ochre Banner: 3. GROW & INVEST",
      details: [
        "Product display shelving for validated local business offerings",
        "Investor pitch screen and consultation lounge with industry leaders",
        "Free Business Health Check-up clinics: legal, accounts & banking",
        "Enquiry desk matching businesses with CIM Angel Network and banks",
      ],
    },
  ];

  const specs = [
    { label: "Structure", val: "Sustainable bamboo frame with open truss roof on a raised timber deck" },
    { label: "Arrangement", val: "Three zones in one continuous L-shaped run; open to the hall on visitor sides" },
    { label: "Visitor Flow", val: "Directional floor route from Zone 1 to Zone 3 finishing at the Enquiry desk" },
    { label: "Equal Footing", val: "Matching overhead banners, deck finish, power, and high-speed data for all three rooms" },
  ];

  return (
    <section id="layout" className="py-14 sm:py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Architectural Design &amp; Layout
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            One Bamboo Frame. <span className="text-blue-600">Three Continuous Zones.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Designed as an open bamboo pavilion on a raised timber deck, visitors walk in one continuous path
            without doubling back or hitting a dead end.
          </p>
        </div>

        {/* 3D Render Image Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-stone-900 group">
          <div className="relative w-full aspect-[16/9] max-h-[600px]">
            <Image
              src="/startup-pavilion-render.jpeg"
              alt="Startup & Entrepreneurship Pavilion 3D Layout - Birat Expo 2026"
              fill
              className="object-contain sm:object-cover group-hover:scale-[1.01] transition-transform duration-500"
              priority
            />
          </div>

          {/* Floating Caption / Badges */}
          <div className="absolute top-4 left-4 right-4 sm:right-auto flex flex-wrap gap-2 pointer-events-none">
            <span className="bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
              3D Architectural Render: Bamboo Pavilion
            </span>
            <span className="bg-emerald-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Zone 1: Maker Space
            </span>
            <span className="bg-teal-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Zone 2: Boot Camp
            </span>
            <span className="bg-amber-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Zone 3: Grow &amp; Invest
            </span>
          </div>

          <div className="p-4 sm:p-5 bg-stone-900/95 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-stone-300">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                <strong>Directional Pathway:</strong> Follow the blue deck markers from Zone 1 (Think) through Zone 2 (Build) to Zone 3 (Grow &amp; Invest).
              </span>
            </div>
            <span className="text-stone-400 font-mono text-[11px]">
              Learn for the Future Zone · Birat Expo 2026
            </span>
          </div>
        </div>

        {/* Interactive Zone Breakdown Tabs */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {zones.map((zone, idx) => (
              <div
                key={zone.id}
                onClick={() => setActiveZone(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  activeZone === idx
                    ? `${zone.bgLight} ${zone.border} shadow-xs ring-1 ring-blue-500`
                    : "bg-gray-50/70 border-gray-200 hover:bg-gray-100/70"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                      Zone {zone.number}
                    </span>
                    <span className={`text-[10px] font-bold text-white uppercase px-2.5 py-0.5 rounded-full ${zone.badgeBg}`}>
                      {zone.keyword}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {zone.name}
                  </h3>
                  <p className="text-xs font-medium text-gray-500 mt-1">
                    Audience: {zone.tag}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/80 flex items-center justify-between text-xs font-semibold text-gray-700">
                  <span>{zone.renderBanner}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeZone === idx ? "translate-x-1 text-blue-600" : "text-gray-400"}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Active Zone Detail Panel */}
          <div className="mt-4 p-6 sm:p-7 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Zone Specifications
                </span>
                <h4 className="text-xl font-bold text-gray-900 mt-0.5">
                  {zones[activeZone].name} — {zones[activeZone].keyword}
                </h4>
              </div>
              <span className="text-xs font-medium text-gray-500">
                Staffed daily by BIC &amp; Chamber of Industries Morang
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {zones[activeZone].details.map((detail, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-gray-200 text-left">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                {item.val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
