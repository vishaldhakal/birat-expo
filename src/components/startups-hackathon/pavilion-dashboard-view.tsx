"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Opening: 17 Dec 2026, 09:00 AM Nepal Time (+05:45)
const OPEN_TIME = new Date("2026-12-17T09:00:00+05:45").getTime();
// Closing: 26 Dec 2026, 18:00 PM Nepal Time (+05:45)
const CLOSE_TIME = new Date("2026-12-26T18:00:00+05:45").getTime();

interface DaysItem {
  name: string;
  from: number;
  to: number;
  datesText: string;
  what: string;
  who: string;
  accentBg: string;
  dotColor: string;
}

const PROGRAMME_DAYS: DaysItem[] = [
  {
    name: "Discover",
    from: 17,
    to: 18,
    datesText: "17–18 DEC",
    what: "Guided tours of all three rooms for school and college groups.",
    who: "Who it is for: secondary schools and colleges, by booking and as walk-ins.",
    accentBg: "#0e7490", // r1s cyan
    dotColor: "#0e7490",
  },
  {
    name: "Build",
    from: 19,
    to: 20,
    datesText: "19–20 DEC",
    what: "Live prototyping and maker demonstrations in Rooms 1 and 2.",
    who: "Who it is for: the general Expo public, makers, and technical visitors.",
    accentBg: "#5b3fa8", // r2s purple
    dotColor: "#5b3fa8",
  },
  {
    name: "Compete",
    from: 21,
    to: 22,
    datesText: "21–22 DEC",
    what: "The student pitch stage and the innovation challenge finals.",
    who: "Who it is for: challenge finalists, with college students returning as the audience.",
    accentBg: "#1b4f9c", // r4s blue
    dotColor: "#1b4f9c",
  },
  {
    name: "Market",
    from: 23,
    to: 24,
    datesText: "23–24 DEC",
    what: "Business stalls selling to real customers, and B2B meetings.",
    who: "Who it is for: buyers, retailers and the paying public.",
    accentBg: "#b5651d", // r3s amber/brown
    dotColor: "#b5651d",
  },
  {
    name: "Partner",
    from: 25,
    to: 25,
    datesText: "25 DEC",
    what: "MOU signings and the Koshi entrepreneurship policy roundtable.",
    who: "Who it is for: government, development partners and business development institutions.",
    accentBg: "#1e7a3e", // r5s green
    dotColor: "#1e7a3e",
  },
  {
    name: "Invest",
    from: 26,
    to: 26,
    datesText: "26 DEC",
    what: "Investor day, business pitches and the closing awards.",
    who: "Who it is for: Biratnagar Angels, banks and institutional investors.",
    accentBg: "#c0202a", // r6s red
    dotColor: "#c0202a",
  },
];

export default function PavilionDashboardView() {
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

  // Six live counters from dashboard
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
      note: "Guided tours, mostly on the Discover days",
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
    const calcPhase = () => {
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

    calcPhase();
    const interval = setInterval(calcPhase, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-[#16233a] font-sans antialiased selection:bg-blue-100">
      {/* 1. HERO SECTION - Elegant Gradient directly from pavilion_dashboard.html */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#02b7be] via-[#2c7fb5] to-[#3f63b5] text-white">
        {/* Subtle decorative circle */}
        <div className="absolute -right-20 -top-32 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
          <div className="text-xs font-bold tracking-[3px] uppercase opacity-90">
            Birat Expo 2026 &nbsp;·&nbsp; Biratnagar Incubation Center
          </div>

          <h1 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-tight">
            Startup &amp; Entrepreneurship Pavilion
          </h1>

          {/* Gold Rule */}
          <div className="w-16 h-1 bg-[#e19f1f] rounded-full mt-4" />

          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-white/95 leading-relaxed font-normal">
            Three rooms, open to everyone. Walk in at fourteen with a problem you have noticed,
            and walk out of the third room as a business that is ready for investment.
          </p>

          {/* Status Row */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2 bg-white text-[#1c3c7a] rounded-full px-4 py-2 font-bold shadow-xs">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  phase.p === "during"
                    ? "bg-[#1e7a3e]"
                    : phase.p === "before"
                    ? "bg-[#e19f1f]"
                    : "bg-[#b9452f]"
                }`}
              />
              <span>
                {phase.p === "before"
                  ? "Opens 17 December 2026"
                  : phase.p === "during"
                  ? `Open now · Day ${phase.dayNo} of 10`
                  : "Closed — thank you for visiting"}
              </span>
            </span>

            <span className="inline-flex items-center gap-1.5 border border-white/35 rounded-full px-3.5 py-1.5 font-semibold text-white/95 backdrop-blur-xs">
              {phase.p === "before"
                ? `${phase.days} days to opening`
                : phase.p === "during"
                ? `${phase.days} days left to visit`
                : "Ran 17–26 December 2026"}
            </span>

            <span className="inline-flex items-center gap-1.5 border border-white/35 rounded-full px-3.5 py-1.5 font-semibold text-white/95 backdrop-blur-xs">
              17–26 December 2026 · 2–11 Poush 2083
            </span>

            <span className="inline-flex items-center gap-1.5 border border-white/35 rounded-full px-3.5 py-1.5 font-semibold text-white/95 backdrop-blur-xs">
              Free with an Expo pass
            </span>
          </div>

          {/* Sub-nav Jump Links */}
          <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-white/90">
            <span className="text-white/60 uppercase tracking-widest text-[10px]">
              Jump to:
            </span>
            <a href="#today" className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              Today
            </a>
            <a href="#numbers" className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              Numbers
            </a>
            <a href="#rooms" className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              The Rooms
            </a>
            <a href="#layout" className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              Pavilion Layout
            </a>
            <a href="#programme" className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              Ten Days
            </a>
            <a href="#takepart" className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              Take Part
            </a>
          </div>
        </div>
      </section>

      {/* 2. TODAY AT THE PAVILION */}
      <section id="today" className="py-12 sm:py-16 bg-white border-b border-[#cfdcee]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#274ea3] whitespace-nowrap">
              Today at the pavilion
            </h2>
            <div className="flex-1 h-px bg-[#e19f1f]" />
          </div>
          <p className="text-[#5b6b85] text-sm sm:text-base mb-8 max-w-3xl">
            All three rooms are open and staffed for all ten days. Only the scheduled programme changes from day to day.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Main Today Card */}
            <div className="lg:col-span-7 border border-[#cfdcee] rounded-2xl overflow-hidden bg-white shadow-xs flex flex-col justify-between">
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
                    <div className="text-xl sm:text-2xl font-bold font-serif leading-tight mt-0.5">
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
                  <p className="text-base sm:text-lg font-semibold text-[#16233a] leading-snug">
                    {phase.p === "before"
                      ? "The pavilion opens on 17 December with Discover days — guided tours for school and college groups."
                      : phase.p === "during"
                      ? PROGRAMME_DAYS[phase.idx]?.what || "All three rooms open."
                      : "The pavilion has closed. Every enquiry taken at the three desks is being followed up."}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5b6b85] leading-relaxed">
                    {phase.p === "before"
                      ? "Until then, you can book a class visit, register for the next Design Thinking workshop, or apply for the SGB Accelerator. Details below."
                      : phase.p === "during"
                      ? PROGRAMME_DAYS[phase.idx]?.who || "All rooms staffed daily."
                      : "Schools are offered a session date, students are informed of upcoming workshops, and businesses receive follow-up diagnostics."}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex flex-wrap gap-2 border-t border-[#e3ecf7]">
                <span className="text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1 border border-[#0e7490] text-[#0e7490] bg-[#f4fafd]">
                  Room 1: Makerspace
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1 border border-[#5b3fa8] text-[#5b3fa8] bg-[#f4fafd]">
                  Room 2: Design Studio
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1 border border-[#b5651d] text-[#b5651d] bg-[#f4fafd]">
                  Room 3: Growth Room
                </span>
              </div>
            </div>

            {/* Side Card: Countdown & Key Info */}
            <div className="lg:col-span-5 border border-[#cfdcee] rounded-2xl p-5 sm:p-6 bg-[#f4fafd] flex flex-col justify-between gap-5">
              <div>
                <div className="text-[11px] font-bold tracking-[1.8px] uppercase text-[#8294ae]">
                  {phase.p === "during" ? "Status" : "Countdown"}
                </div>
                <div className="text-4xl sm:text-5xl font-bold font-serif text-[#274ea3] leading-none mt-1.5 tabular-nums">
                  {phase.days}
                </div>
                <div className="text-xs sm:text-sm text-[#5b6b85] mt-1">
                  {phase.p === "before"
                    ? "days until the pavilion opens"
                    : phase.p === "during"
                    ? "days left to visit"
                    : "days since the pavilion closed"}
                </div>
              </div>

              <div className="border-t border-[#cfdcee] pt-3.5 space-y-1">
                <div className="text-[11px] font-bold tracking-[1.8px] uppercase text-[#8294ae]">
                  Opening Programme
                </div>
                <div className="text-sm sm:text-base font-bold text-[#16233a]">
                  Discover · 17–18 December
                </div>
                <div className="text-xs text-[#5b6b85]">
                  Guided tours for school and college groups, in all three rooms.
                </div>
              </div>

              <div className="border-t border-[#cfdcee] pt-3.5 space-y-1">
                <div className="text-[11px] font-bold tracking-[1.8px] uppercase text-[#8294ae]">
                  Location
                </div>
                <div className="text-sm sm:text-base font-bold text-[#16233a]">
                  Birat Expo, Biratnagar
                </div>
                <div className="text-xs text-[#5b6b85]">
                  Learn for the Future zone. Open daily 10:00 AM – 6:00 PM.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE NUMBERS SO FAR */}
      <section id="numbers" className="py-12 sm:py-16 bg-[#f4fafd] border-b border-[#cfdcee]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#274ea3] whitespace-nowrap">
              The numbers so far
            </h2>
            <div className="flex-1 h-px bg-[#e19f1f]" />
          </div>
          <p className="text-[#5b6b85] text-sm sm:text-base mb-8 max-w-3xl">
            Updated by the pavilion team from the enquiry desk in each room. Figures track live footfall, student pitches, and business diagnostics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {counters.map((ctr, i) => (
              <div
                key={i}
                className="border border-[#cfdcee] rounded-2xl bg-white p-5 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-[#5b6b85] min-h-[2.5em] leading-snug">
                    {ctr.k}
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-bold font-serif text-[#16233a] tabular-nums">
                      {ctr.v}
                    </span>
                    {ctr.of && (
                      <span className="text-xs font-semibold text-[#8294ae]">
                        {ctr.of}
                      </span>
                    )}
                  </div>
                  {ctr.target > 0 && (
                    <div className="w-full h-1.5 rounded-full bg-[#eaf2fa] mt-3 overflow-hidden">
                      <div
                        className="h-full bg-[#274ea3] rounded-full transition-all duration-500"
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

                <div className="text-[11px] text-[#8294ae] mt-4 pt-2.5 border-t border-[#e3ecf7]">
                  {ctr.note}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-[#8294ae]">
            Not yet updated — the pavilion opens on 17 December 2026.
          </div>
        </div>
      </section>

      {/* 4. THE THREE ROOMS */}
      <section id="rooms" className="py-12 sm:py-16 bg-white border-b border-[#cfdcee]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#274ea3] whitespace-nowrap">
              The three rooms
            </h2>
            <div className="flex-1 h-px bg-[#e19f1f]" />
          </div>
          <p className="text-[#5b6b85] text-sm sm:text-base mb-8 max-w-3xl">
            Each room hands something to the next. A student who makes a prototype in Room 1 arrives in Room 2 already knowing how to look for a problem. A team that validates an idea in Room 2 arrives in Room 3 with something a bank or an investor can read.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Room 1 */}
            <div className="border border-[#cfdcee] rounded-2xl overflow-hidden bg-white flex flex-col justify-between shadow-2xs">
              <div>
                <div className="p-5 text-white bg-[#0e7490]">
                  <div className="text-[11px] font-bold tracking-[2.2px] uppercase opacity-90">
                    ROOM 1 · THINK
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white mt-1">
                    The Makerspace
                  </h3>
                  <div className="text-xs font-bold tracking-[1.8px] uppercase mt-2 text-white/90">
                    CURIOSITY
                  </div>
                </div>

                <div className="p-5 space-y-3.5">
                  <div className="text-xs font-bold text-[#16233a]">
                    School students, grades 7–10
                  </div>
                  <ul className="space-y-2 text-xs text-[#5b6b85] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e7490] mt-1.5 shrink-0" />
                      <span>A live maker bench — build something in thirty minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e7490] mt-1.5 shrink-0" />
                      <span>The student project wall: what children in Koshi chose to solve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e7490] mt-1.5 shrink-0" />
                      <span>Guided tours for school groups, with young founders on hand</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#e3ecf7] text-xs font-bold text-[#0e7490]">
                Teachers: book a class visit at the desk
              </div>
            </div>

            {/* Room 2 */}
            <div className="border border-[#cfdcee] rounded-2xl overflow-hidden bg-white flex flex-col justify-between shadow-2xs">
              <div>
                <div className="p-5 text-white bg-[#5b3fa8]">
                  <div className="text-[11px] font-bold tracking-[2.2px] uppercase opacity-90">
                    ROOM 2 · BUILD
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white mt-1">
                    The Design Studio
                  </h3>
                  <div className="text-xs font-bold tracking-[1.8px] uppercase mt-2 text-white/90">
                    CAPABILITY
                  </div>
                </div>

                <div className="p-5 space-y-3.5">
                  <div className="text-xs font-bold text-[#16233a]">
                    College students and young adults
                  </div>
                  <ul className="space-y-2 text-xs text-[#5b6b85] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5b3fa8] mt-1.5 shrink-0" />
                      <span>Teams working live — watch a problem turn into a prototype</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5b3fa8] mt-1.5 shrink-0" />
                      <span>Be interviewed: students will ask you about a problem you face</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5b3fa8] mt-1.5 shrink-0" />
                      <span>The Crazy 8s wall, and live student pitches on Compete days</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#e3ecf7] text-xs font-bold text-[#5b3fa8]">
                Students: join the next workshop
              </div>
            </div>

            {/* Room 3 */}
            <div className="border border-[#cfdcee] rounded-2xl overflow-hidden bg-white flex flex-col justify-between shadow-2xs">
              <div>
                <div className="p-5 text-white bg-[#b5651d]">
                  <div className="text-[11px] font-bold tracking-[2.2px] uppercase opacity-90">
                    ROOM 3 · GROW &amp; INVEST
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white mt-1">
                    The Growth Room
                  </h3>
                  <div className="text-xs font-bold tracking-[1.8px] uppercase mt-2 text-white/90">
                    CAPITAL
                  </div>
                </div>

                <div className="p-5 space-y-3.5">
                  <div className="text-xs font-bold text-[#16233a]">
                    Small and Growing Businesses of Koshi
                  </div>
                  <ul className="space-y-2 text-xs text-[#5b6b85] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b5651d] mt-1.5 shrink-0" />
                      <span>Business stalls selling to real customers on the Market days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b5651d] mt-1.5 shrink-0" />
                      <span>Live pitches to investors and financiers of the CIM network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b5651d] mt-1.5 shrink-0" />
                      <span>Free clinics: meet accountants, lawyers and bankers yourself</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#e3ecf7] text-xs font-bold text-[#b5651d]">
                Owners: get a free Health Check-up
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3D BAMBOO LAYOUT */}
      <section id="layout" className="py-12 sm:py-16 bg-[#f4fafd] border-b border-[#cfdcee]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#274ea3] whitespace-nowrap">
              The pavilion layout
            </h2>
            <div className="flex-1 h-px bg-[#e19f1f]" />
          </div>
          <p className="text-[#5b6b85] text-sm sm:text-base mb-6 max-w-3xl">
            One bamboo structure, three zones, a single route — so a visitor can walk the whole pipeline in one line, without doubling back.
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#cfdcee] bg-stone-900 shadow-sm">
            <div className="relative w-full aspect-[16/9] max-h-[580px]">
              <Image
                src="/startup-pavilion-render.jpeg"
                alt="Startup & Entrepreneurship Pavilion 3D Layout - Birat Expo 2026"
                fill
                className="object-contain sm:object-cover"
                priority
              />
            </div>
            <div className="p-4 bg-stone-900 text-stone-300 text-xs sm:text-sm border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>
                <strong>Directional Route:</strong> Follow the blue arrows on the timber deck from Zone 1 (Think) through Zone 2 (Build) to Zone 3 (Grow &amp; Invest).
              </span>
              <span className="text-stone-400 font-mono text-[11px]">
                Birat Expo 2026 · Learn for the Future
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEN DAYS */}
      <section id="programme" className="py-12 sm:py-16 bg-white border-b border-[#cfdcee]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#274ea3] whitespace-nowrap">
              The ten days
            </h2>
            <div className="flex-1 h-px bg-[#e19f1f]" />
          </div>
          <p className="text-[#5b6b85] text-sm sm:text-base mb-8 max-w-3xl">
            Six scheduled programmes across ten days. The rooms stay open throughout — only the audience changes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROGRAMME_DAYS.map((day, idx) => {
              const isCurrent = phase.p === "during" && phase.idx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl overflow-hidden bg-white flex flex-col transition-all ${
                    isCurrent
                      ? "ring-2 ring-[#e19f1f] border-[#e19f1f] shadow-xs"
                      : "border-[#cfdcee]"
                  }`}
                >
                  <div
                    className="p-2.5 text-white text-center"
                    style={{ backgroundColor: day.accentBg }}
                  >
                    <div className="text-[10px] font-bold tracking-wide opacity-90">
                      {day.datesText}
                    </div>
                    <div className="text-base font-bold font-serif mt-0.5 leading-tight">
                      {day.name}
                    </div>
                  </div>
                  <div className="p-3 text-xs text-[#5b6b85] text-center flex-1 flex flex-col justify-between leading-snug">
                    <p>{day.what}</p>
                    {isCurrent && (
                      <span className="block mt-2 text-[10px] font-bold uppercase tracking-wider text-[#e19f1f]">
                        Today
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. HOW TO TAKE PART */}
      <section id="takepart" className="py-12 sm:py-16 bg-[#f4fafd] border-b border-[#cfdcee]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#274ea3] whitespace-nowrap">
              How to take part
            </h2>
            <div className="flex-1 h-px bg-[#e19f1f]" />
          </div>
          <p className="text-[#5b6b85] text-sm sm:text-base mb-8 max-w-3xl">
            Everything below is free of cost. Come to the room that is yours, any day of the Expo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* School */}
            <div className="border border-[#cfdcee] border-l-4 border-l-[#0e7490] rounded-xl bg-white p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[1.8px] text-[#0e7490]">
                  Schools &amp; teachers
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-[#16233a] mt-1.5 leading-snug">
                  Book a class visit, or a session at your school
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5b6b85] leading-relaxed">
                  Bring grades 7–10 on a guided tour of Room 1 during the Discover days, or ask us to run a maker session at your own school in the new year.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#e3ecf7] text-xs font-bold text-[#0e7490]">
                Call the Incubation Center to fix a date
              </div>
            </div>

            {/* College */}
            <div className="border border-[#cfdcee] border-l-4 border-l-[#5b3fa8] rounded-xl bg-white p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[1.8px] text-[#5b3fa8]">
                  College students
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-[#16233a] mt-1.5 leading-snug">
                  Join the next Design Thinking workshop
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5b6b85] leading-relaxed">
                  No business idea needed, and no fee. Leave your name at Room 2 and we will tell you when the next workshop opens in your college.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#e3ecf7] text-xs font-bold text-[#5b3fa8]">
                Leave your name at the Room 2 desk
              </div>
            </div>

            {/* Business */}
            <div className="border border-[#cfdcee] border-l-4 border-l-[#b5651d] rounded-xl bg-white p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[1.8px] text-[#b5651d]">
                  Business owners
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-[#16233a] mt-1.5 leading-snug">
                  Apply for the next SGB Accelerator
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5b6b85] leading-relaxed">
                  For registered businesses of Koshi Province trading for a year or more. Start with a free Business Health Check-up in Room 3 — any day of the Expo.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#e3ecf7] text-xs font-bold text-[#b5651d]">
                Walk in to Room 3, no appointment needed
              </div>
            </div>

            {/* Industry */}
            <div className="border border-[#cfdcee] border-l-4 border-l-[#274ea3] rounded-xl bg-white p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[1.8px] text-[#274ea3]">
                  Industry, investors &amp; partners
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-[#16233a] mt-1.5 leading-snug">
                  Mentor, sponsor a booth, or back a founder
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5b6b85] leading-relaxed">
                  CIM members can give a few hours a month as a mentor, sponsor a stall for a young business, or meet investment-ready businesses on Invest day.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#e3ecf7] text-xs font-bold text-[#274ea3]">
                Ask at any room, or at the Incubation Center desk
              </div>
            </div>
          </div>

          {/* Contact Box from HTML */}
          <div className="mt-6 border border-[#cfdcee] rounded-2xl bg-white p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold font-serif text-[#274ea3]">
                Biratnagar Incubation Center
              </h3>
              <p className="text-xs sm:text-sm text-[#5b6b85] mt-1.5 leading-relaxed">
                Entrepreneurship Academy &amp; Innovation Unit,<br />
                Chamber of Industries Morang
              </p>
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-[#5b6b85]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8294ae]">
                Chamber of Industries Morang
              </div>
              <div className="text-[#16233a] font-semibold">
                021-515712, 577646 / 9869812058
              </div>
              <div>cim.biratnagar@gmail.com</div>
              <div>Shahid Marga, Tinpaini, Biratnagar-2</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
