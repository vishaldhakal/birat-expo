"use client";

import React from "react";
import { History, CheckCircle2 } from "lucide-react";

export default function PavilionTimeline() {
  const milestones = [
    {
      year: "2021",
      period: "January 2021",
      phase: "Laying the Foundation",
      focus: "Mentorship framework & first incubation cohort",
      what: "Cohort 1 — an 18-month incubation pilot delivered with Antarprerana Pvt Ltd.",
      output: "Adopted Mentorship Guidebook; working 4-phase model (Orientation, Shape, Strengthen, Sustain).",
    },
    {
      year: "2022",
      period: "2022–2023",
      phase: "Becoming Institutional",
      focus: "Written curriculum & manager guidebook",
      what: "Cohort 2 — redesigned to 12 months, sector-agnostic with 20–25 participants.",
      output: "Published Incubation Curriculum; introduced standard Business Health Check-up instrument.",
    },
    {
      year: "2025",
      period: "January 2025",
      phase: "Going Public",
      focus: "Hackathon at Birat Expo & first school maker session",
      what: "Startup Hackathon 'Innovate for Koshi' with King's College & school mindset at Lilliput School.",
      output: "30 ideas registered, 10 teams selected, 3 winning ventures, 42 school makers engaged.",
    },
    {
      year: "2026",
      period: "October–December 2026",
      phase: "Three Rooms, One Pipeline",
      focus: "BIC formalised, design studio & SGB accelerator",
      what: "Empathy to Enterprise with Mahendra Morang College & BIC SGB Accelerator 2026.",
      output: "Full 3-zone bamboo pavilion live at Birat Expo 2026 connecting Curiosity, Capability, and Capital.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gray-50/60 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Heritage &amp; Track Record
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            The Work So Far: <span className="text-blue-600">2021 to 2026</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Five years of continuous incubation delivery by Chamber of Industries Morang.
            The three-room pavilion is the first time all of it is presented as one connected public pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-blue-600">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                    {m.period}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  {m.phase}
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {m.focus}
                </h3>

                <p className="mt-2.5 text-xs text-gray-600 leading-relaxed">
                  {m.what}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Milestone Output
                </div>
                <div className="text-xs font-medium text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100/80 leading-snug">
                  {m.output}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
