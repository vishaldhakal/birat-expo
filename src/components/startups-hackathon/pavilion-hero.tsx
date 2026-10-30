"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Ticket,
  ChevronRight,
  Clock,
} from "lucide-react";

// Target Opening Date: December 17, 2026, 09:00 AM Nepal Time (+05:45)
const OPEN_TIME = new Date("2026-12-17T09:00:00+05:45").getTime();
// Closing Date: December 26, 2026, 18:00 PM Nepal Time (+05:45)
const CLOSE_TIME = new Date("2026-12-26T18:00:00+05:45").getTime();

interface CountdownState {
  status: "before" | "during" | "after";
  days: number;
  label: string;
  sublabel: string;
}

export default function PavilionHero() {
  const [countdown, setCountdown] = useState<CountdownState>({
    status: "before",
    days: 47,
    label: "47 Days to Open",
    sublabel: "Daily 10 AM – 6 PM",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();

      if (now < OPEN_TIME) {
        const diffMs = OPEN_TIME - now;
        const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        setCountdown({
          status: "before",
          days,
          label: days === 1 ? "1 Day to Open" : `${days} Days to Open`,
          sublabel: "Daily 10 AM – 6 PM",
        });
      } else if (now <= CLOSE_TIME) {
        // Expo is live
        const currentDayNumber = Math.min(
          10,
          Math.max(1, Math.floor((now - OPEN_TIME) / (1000 * 60 * 60 * 24)) + 1)
        );
        const remainingDays = Math.max(
          0,
          Math.ceil((CLOSE_TIME - now) / (1000 * 60 * 60 * 24))
        );
        setCountdown({
          status: "during",
          days: remainingDays,
          label: `Open Now · Day ${currentDayNumber} of 10`,
          sublabel: `${remainingDays} days left to visit`,
        });
      } else {
        setCountdown({
          status: "after",
          days: 0,
          label: "Pavilion Closed",
          sublabel: "Ran 17–26 Dec 2026",
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 text-center">
        {/* Top Badges - Centered */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Birat Expo 2026
          </span>
          <span className="text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Biratnagar Incubation Center (BIC)
          </span>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
            Chamber of Industries Morang
          </span>
        </div>

        {/* Main Title & Tagline - Centered */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-950 tracking-tight leading-[1.12]">
            Startup &amp; <span className="text-blue-600">Entrepreneurship</span> Pavilion
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
            <span className="text-gray-900 font-bold">Three Rooms. One Connected Pipeline:</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              1. Curiosity
            </span>
            <span className="text-gray-300">→</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              2. Capability
            </span>
            <span className="text-gray-300">→</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold uppercase tracking-wider">
              3. Capital
            </span>
          </div>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Walk in at fourteen with a problem you have noticed, and walk out of the third room as a business
            that is ready for investment.
          </p>
        </div>

        {/* Action CTAs - Centered with ChevronRight */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#rooms"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all group"
          >
            <span>Explore The 3 Rooms</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#layout"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-xs group"
          >
            <span>View Pavilion Layout</span>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#programme"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-xs group"
          >
            <span>10-Day Programme</span>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#takepart"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all group"
          >
            <span>How to Take Part</span>
            <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Key Event Metadata Cards - Centered Grid */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-gray-50 border border-gray-200/90">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide">Dates</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900">17–26 Dec 2026</div>
              <div className="text-[11px] text-gray-500">2–11 Poush 2083</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-gray-50 border border-gray-200/90">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide">Location</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">Learn for Future</div>
              <div className="text-[11px] text-gray-500">Birat Expo Ground</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-gray-50 border border-gray-200/90">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
              <Ticket className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide">Admission</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-700">100% Free Entry</div>
              <div className="text-[11px] text-gray-500">With Expo pass</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-gray-50 border border-gray-200/90">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide">
                {countdown.status === "during" ? "Status" : "Countdown"}
              </div>
              <div className="text-xs sm:text-sm font-bold text-indigo-700 tabular-nums">
                {countdown.label}
              </div>
              <div className="text-[11px] text-gray-500">{countdown.sublabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
