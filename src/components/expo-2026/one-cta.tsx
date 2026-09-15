import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OneCTA2026() {
  return (
    <section className="py-8 bg-gray-950 border-t border-b border-gray-800/80 text-white relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          {/* Left: Headline & Badge */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase">
              The Birat Expo Promise
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-100">
              One <span className="text-blue-400 font-extrabold">Idea.</span>{" "}
              One{" "}
              <span className="text-blue-400 font-extrabold">Connection.</span>{" "}
              One{" "}
              <span className="text-blue-400 font-extrabold">Opportunity.</span>
            </h2>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-row items-center gap-3 shrink-0">
            <Link
              href="/book-stalls"
              className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md shadow-blue-600/20 transition-all text-xs sm:text-sm tracking-wide"
            >
              Book Your Stall
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sponsorship"
              className="inline-flex items-center justify-center gap-1.5 border border-gray-800 hover:border-gray-700 bg-gray-900/60 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-xs sm:text-sm tracking-wide"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
