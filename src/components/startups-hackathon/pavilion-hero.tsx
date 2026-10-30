"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Ticket,
  FileDown,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function PavilionHero() {
  const [daysRemaining, setDaysRemaining] = useState<number>(48);

  useEffect(() => {
    // 17 Dec 2026 in UTC
    const target = new Date("2026-12-17T00:00:00Z").getTime();
    const now = new Date().getTime();
    const diffDays = Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24)));
    setDaysRemaining(diffDays);
  }, []);

  return (
    <div className="relative bg-white border-b border-gray-100 overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 pt-10 sm:pt-14 pb-14 sm:pb-20">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
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

        {/* Main Headings */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.12]">
            Startup &amp; <span className="text-blue-600">Entrepreneurship</span> Pavilion
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-semibold text-gray-700">
            <span className="text-gray-900 font-bold">Three Rooms. One Connected Pipeline:</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              1. Curiosity
            </span>
            <span className="text-gray-300">→</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold uppercase tracking-wider">
              2. Capability
            </span>
            <span className="text-gray-300">→</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold uppercase tracking-wider">
              3. Capital
            </span>
          </div>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl">
            Walk in at fourteen with a problem you have noticed, and walk out of the third room as a business
            that is ready for investment. The pavilion is the incubation journey made physical under one bamboo roof.
          </p>
        </div>

        {/* Key Event Metadata Pills */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/90 text-left">
            <div className="w-10 h-10 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Dates</div>
              <div className="text-sm font-bold text-gray-900">17–26 Dec 2026</div>
              <div className="text-[11px] text-gray-500">2–11 Poush 2083</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/90 text-left">
            <div className="w-10 h-10 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Pavilion Location</div>
              <div className="text-sm font-bold text-gray-900">Learn for the Future Zone</div>
              <div className="text-[11px] text-gray-500">Birat Expo Ground, Biratnagar</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/90 text-left">
            <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Admission</div>
              <div className="text-sm font-bold text-emerald-700">100% Free Entry</div>
              <div className="text-[11px] text-gray-500">Included with Expo pass</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/90 text-left">
            <div className="w-10 h-10 rounded-lg bg-indigo-100/80 text-indigo-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Countdown</div>
              <div className="text-sm font-bold text-indigo-700">{daysRemaining} Days to Opening</div>
              <div className="text-[11px] text-gray-500">Daily 10:00 AM – 6:00 PM</div>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#rooms"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all"
          >
            <span>Explore The 3 Rooms</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#layout"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-xs"
          >
            <span>View Bamboo Layout</span>
          </a>

          <a
            href="#programme"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-xs"
          >
            <span>10-Day Programme</span>
          </a>

          <a
            href="/BIC_Pavilion_Booklet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-blue-700 bg-blue-50/70 border border-blue-200 hover:bg-blue-100/80 transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Booklet (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
