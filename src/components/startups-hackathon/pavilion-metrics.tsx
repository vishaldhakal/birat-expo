"use client";

import React from "react";
import { Users, Building2, MapPin, Layers, CheckCircle2, TrendingUp } from "lucide-react";

export default function PavilionMetrics() {
  const metrics = [
    {
      value: "10,000+",
      label: "Visitors Target",
      desc: "Target footfall welcomed across the three rooms",
      icon: Users,
      badge: "Target",
    },
    {
      value: "14",
      label: "Districts of Koshi",
      desc: "Provincial outreach from Morang to the hills",
      icon: MapPin,
      badge: "Coverage",
    },
    {
      value: "3 Rooms",
      label: "One Connected Pipeline",
      desc: "Curiosity (7-10) → Capability (College) → Capital (SGBs)",
      icon: Layers,
      badge: "Pipeline",
    },
    {
      value: "10 Days",
      label: "Full-Time Operations",
      desc: "All rooms active daily, 17–26 December 2026",
      icon: TrendingUp,
      badge: "Daily",
    },
    {
      value: "5 Years",
      label: "Incubation Heritage",
      desc: "Delivery by CIM since 2021 with cohorts & clinics",
      icon: Building2,
      badge: "Since 2021",
    },
    {
      value: "100%",
      label: "Free Support & Follow-up",
      desc: "Every enquiry recorded is followed up after the Expo",
      icon: CheckCircle2,
      badge: "Impact",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50/60 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              BIC at a Glance
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Measuring What Matters: <span className="text-blue-600">Enterprise Readiness</span>
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-gray-600 font-medium">
              &quot;Ideas exist. Pathways do not. Readiness, not money, is the bottleneck.&quot;
            </p>
          </div>
          <div className="text-xs sm:text-sm text-gray-500 bg-white border border-gray-200 px-4 py-2 rounded-xl self-start md:self-auto shadow-2xs">
            Live updates &amp; enquiry desk logging in all rooms
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {metrics.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-blue-400 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mt-1">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-gray-700 mt-0.5">
                    {item.label}
                  </div>
                </div>
                <div className="text-[11px] text-gray-500 mt-3 pt-2.5 border-t border-gray-100 leading-snug">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
