"use client";

import React, { useState, useEffect } from "react";

// Opening: 17 Dec 2026, 09:00 AM Nepal Time (+05:45)
const OPEN_TIME = new Date("2026-12-17T09:00:00+05:45").getTime();
// Closing: 26 Dec 2026, 18:00 PM Nepal Time (+05:45)
const CLOSE_TIME = new Date("2026-12-26T18:00:00+05:45").getTime();

interface ProgrammeDay {
  name: string;
  from: number;
  to: number;
  datesText: string;
  what: string;
  who: string;
  accentBg: string;
}

const PROGRAMME_DAYS: ProgrammeDay[] = [
  {
    name: "Discover",
    from: 17,
    to: 18,
    datesText: "17–18 DEC",
    what: "Guided tours of all three rooms for school and college groups.",
    who: "Secondary schools and colleges, by booking and walk-in.",
    accentBg: "#0e7490",
  },
  {
    name: "Build",
    from: 19,
    to: 20,
    datesText: "19–20 DEC",
    what: "Live prototyping and maker demonstrations in Rooms 1 and 2.",
    who: "Makers, technical visitors, and the general Expo public.",
    accentBg: "#5b3fa8",
  },
  {
    name: "Compete",
    from: 21,
    to: 22,
    datesText: "21–22 DEC",
    what: "The student pitch stage and the innovation challenge finals.",
    who: "Challenge finalists with college cohorts as live audience.",
    accentBg: "#1b4f9c",
  },
  {
    name: "Market",
    from: 23,
    to: 24,
    datesText: "23–24 DEC",
    what: "Business stalls selling to real customers, and B2B meetings.",
    who: "Retail buyers, distributors, and the paying public.",
    accentBg: "#b5651d",
  },
  {
    name: "Partner",
    from: 25,
    to: 25,
    datesText: "25 DEC",
    what: "MOU signings and the Koshi entrepreneurship policy roundtable.",
    who: "Government, development partners, and chamber leadership.",
    accentBg: "#1e7a3e",
  },
  {
    name: "Invest",
    from: 26,
    to: 26,
    datesText: "26 DEC",
    what: "Investor day, business pitches, and closing awards.",
    who: "Biratnagar Angels, banks, and institutional investors.",
    accentBg: "#c0202a",
  },
];

export default function PavilionTodayAndCounters() {
  const [phase, setPhase] = useState<{
    p: "before" | "during" | "after";
    days: number;
    idx: number;
    dayNo: number;
  }>({
    p: "before",
    days: 47,
    idx: -1,
    dayNo: 1,
  });

  const counters = [
    {
      k: "Visitors welcomed into the pavilion",
      v: "0",
      of: "of 10,000",
      target: 10000,
      valNum: 0,
      note: "Target for the ten days",
    },
    {
      k: "Enquiries recorded at the three desks",
      v: "0",
      of: "",
      target: 0,
      valNum: 0,
      note: "Every one is followed up after the Expo",
    },
    {
      k: "School and college groups hosted",
      v: "0",
      of: "",
      target: 0,
      valNum: 0,
      note: "Guided tours, mostly on Discover days",
    },
    {
      k: "Business Health Check-ups given",
      v: "0",
      of: "",
      target: 0,
      valNum: 0,
      note: "Free, in Room 3, any day of the Expo",
    },
    {
      k: "Student pitches delivered on stage",
      v: "0",
      of: "",
      target: 0,
      valNum: 0,
      note: "Compete days, 21–22 December",
    },
    {
      k: "MOUs and partnerships signed",
      v: "0",
      of: "",
      target: 0,
      valNum: 0,
      note: "Partner day, 25 December",
    },
  ];

  useEffect(() => {
    const calc = () => {
      const now = Date.now();
      if (now < OPEN_TIME) {
        const d = Math.ceil((OPEN_TIME - now) / (1000 * 60 * 60 * 24));
        setPhase({ p: "before", days: d, idx: -1, dayNo: 0 });
      } else if (now > CLOSE_TIME) {
        const d = Math.ceil((now - CLOSE_TIME) / (1000 * 60 * 60 * 24));
        setPhase({ p: "after", days: d, idx: -1, dayNo: 10 });
      } else {
        const curDate = new Date().getDate();
        let idx = 0;
        for (let i = 0; i < PROGRAMME_DAYS.length; i++) {
          if (curDate >= PROGRAMME_DAYS[i].from && curDate <= PROGRAMME_DAYS[i].to) {
            idx = i;
            break;
          }
        }
        setPhase({
          p: "during",
          days: Math.max(0, Math.ceil((CLOSE_TIME - now) / (1000 * 60 * 60 * 24))),
          idx,
          dayNo: Math.max(1, curDate - 16),
        });
      }
    };
    calc();
    const interval = setInterval(calc, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* 1. TODAY AT THE PAVILION */}
      <section id="today" className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Live Status Board
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Today at the <span className="text-blue-600">Pavilion</span>
              </h2>
            </div>
            <span className="text-xs text-gray-500 font-medium">
              17–26 December 2026 · Birat Expo
            </span>
          </div>

          <p className="text-sm text-gray-600 max-w-3xl mb-8">
            All three rooms are open and staffed for all ten days. Only the scheduled programme changes from day to day.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Main Stage Card */}
            <div className="lg:col-span-7 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs flex flex-col justify-between">
              <div>
                <div
                  className="px-5 py-4 text-white flex items-center justify-between gap-3 flex-wrap"
                  style={{
                    backgroundColor:
                      phase.p === "during"
                        ? PROGRAMME_DAYS[phase.idx]?.accentBg || "#1c3c7a"
                        : "#1c3c7a",
                  }}
                >
                  <div>
                    <div className="text-[11px] font-bold tracking-[2px] uppercase opacity-90">
                      {phase.p === "before"
                        ? "Before the Expo"
                        : phase.p === "during"
                        ? `Day ${phase.dayNo} of 10`
                        : "After the Expo"}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold leading-tight mt-0.5">
                      {phase.p === "before"
                        ? "Not yet open"
                        : phase.p === "during"
                        ? PROGRAMME_DAYS[phase.idx]?.name || "Programme Active"
                        : "Closed"}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold opacity-95">
                    17–26 December 2026
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <p className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                    {phase.p === "before"
                      ? "The pavilion opens on 17 December with Discover days — guided tours for school and college groups."
                      : phase.p === "during"
                      ? PROGRAMME_DAYS[phase.idx]?.what || "All three rooms open."
                      : "The pavilion has closed. Every enquiry taken at the three desks is being followed up."}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {phase.p === "before"
                      ? "Until then, you can book a class visit, register for the next Design Thinking workshop, or apply for the SGB Accelerator. Details below."
                      : phase.p === "during"
                      ? PROGRAMME_DAYS[phase.idx]?.who || "All rooms staffed daily."
                      : "Schools are offered a session date, students are informed of upcoming workshops, and businesses receive follow-up diagnostics."}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1 border border-cyan-300 text-cyan-800 bg-cyan-50">
                  Room 1: Makerspace Open
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1 border border-purple-300 text-purple-800 bg-purple-50">
                  Room 2: Design Studio Open
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1 border border-amber-300 text-amber-800 bg-amber-50">
                  Room 3: Growth Room Open
                </span>
              </div>
            </div>

            {/* Side Card: Countdown & Location */}
            <div className="lg:col-span-5 border border-gray-200 rounded-2xl p-5 sm:p-6 bg-gray-50/70 flex flex-col justify-between gap-5">
              <div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400">
                  {phase.p === "during" ? "Status" : "Countdown"}
                </div>
                <div className="text-4xl sm:text-5xl font-black text-blue-600 leading-none mt-1.5 tabular-nums">
                  {phase.days}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  {phase.p === "before"
                    ? "days until the pavilion opens"
                    : phase.p === "during"
                    ? "days left to visit"
                    : "days since the pavilion closed"}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3.5 space-y-1">
                <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400">
                  Opening Programme
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900">
                  Discover · 17–18 December
                </div>
                <div className="text-xs text-gray-600">
                  Guided tours for school and college groups, in all three rooms.
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3.5 space-y-1">
                <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400">
                  Where
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900">
                  Birat Expo, Biratnagar
                </div>
                <div className="text-xs text-gray-600">
                  Learn for the Future zone. Open daily 10:00 AM – 6:00 PM.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE NUMBERS SO FAR (Operational Desk Counters) */}
      <section id="numbers" className="py-12 sm:py-16 bg-gray-50/50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Live Enquiry Desk Totals
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                The Numbers <span className="text-blue-600">So Far</span>
              </h2>
              <p className="mt-1 text-sm text-gray-600 font-normal">
                Updated by the pavilion team from the enquiry desk in each room. Figures reset until doors open on 17 December.
              </p>
            </div>
            <div className="text-xs text-gray-500 bg-white border border-gray-200 px-3.5 py-1.5 rounded-lg self-start sm:self-auto">
              Pavilion opens 17 Dec 2026
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {counters.map((ctr, i) => (
              <div
                key={i}
                className="border border-gray-200/90 rounded-2xl bg-white p-5 flex flex-col justify-between shadow-2xs hover:border-blue-400 transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-gray-600 min-h-[2.5em] leading-snug">
                    {ctr.k}
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tabular-nums">
                      {ctr.v}
                    </span>
                    {ctr.of && (
                      <span className="text-xs font-semibold text-gray-400">
                        {ctr.of}
                      </span>
                    )}
                  </div>
                  {ctr.target > 0 && (
                    <div className="w-full h-1.5 rounded-full bg-gray-100 mt-3 overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            100,
                            (ctr.valNum / ctr.target) * 100
                          )}%`,
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-gray-400 mt-4 pt-2.5 border-t border-gray-100">
                  {ctr.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
