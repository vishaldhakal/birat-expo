import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero2026() {
  return (
    <section className="relative overflow-hidden bg-gray-950 min-h-screen flex items-center">
      {/* ── YouTube Background Video ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <iframe
          src="https://www.youtube.com/embed/D9sgHPpGBJc?autoplay=1&mute=1&loop=1&playlist=D9sgHPpGBJc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0"
          title="Birat Expo 2026 Background"
          allow="autoplay; fullscreen"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "calc(100vw + 400px)",
            height: "calc(100vh + 400px)",
            minWidth: "185vh",
            minHeight: "58vw",
            border: "none",
          }}
        />
        {/* Transparent block layer — prevents mouse events reaching the iframe so YouTube controls never appear */}
        <div className="absolute inset-0 pointer-events-auto" />
      </div>

      {/*
        ── Overlay ──
        Keeps the video visible while giving the centered text enough
        contrast to stay legible.
      */}
      <div className="absolute inset-0 z-10 bg-gray-950/55" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/40" />

      {/* ── Content ── */}
      <div className="relative z-20 w-full container mx-auto px-4 md:px-8 py-24">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-5">
          {/* Logos */}
          <div className="flex items-center gap-3">
            <img
              src="/1.png"
              alt="CIM Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
            <img
              src="/2.png"
              alt="Baliyo Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>

          {/* Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold text-white/80 border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider bg-white/10 backdrop-blur-sm">
              9th Edition
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 border border-white/25 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider">
              17–26 Dec 2026
            </span>
            <span className="text-xs text-white/50 font-medium italic">
              2–11 Poush 2083
            </span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight drop-shadow-lg">
              Birat Expo 2026
            </h1>
            <p className="mt-2 text-base sm:text-xl md:text-2xl text-white/80 font-semibold">
              The Ecosystem of Opportunities
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-2 w-full sm:w-auto">
            <Link
              href="/stalls"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-gray-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              Book Your Stall
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sponsorship"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/15 backdrop-blur-sm text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              Explore Sponsorship
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
