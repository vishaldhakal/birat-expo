import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero2026() {
  return (
    <section className="relative overflow-hidden bg-gray-950 min-h-screen flex items-center">
      {/* ── YouTube Background Video ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <iframe
          src="https://www.youtube.com/embed/D9sgHPpGBJc?autoplay=1&mute=1&loop=1&playlist=D9sgHPpGBJc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0"
          title="Birat Expo 2026 Background"
          allow="autoplay; fullscreen"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "calc(100vw + 200px)",
            height: "calc(100vh + 200px)",
            minWidth: "177.78vh",
            minHeight: "56.25vw",
            border: "none",
          }}
        />
        {/* Transparent block layer — prevents mouse events reaching the iframe so YouTube controls never appear */}
        <div className="absolute inset-0 pointer-events-auto" />
      </div>

      {/* ── Cinematic Overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-950/90 via-gray-950/75 to-gray-950/50" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-gray-950 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-20 w-full container mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-2xl flex flex-col items-start text-left">
          {/* Logos */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/1.png"
              alt="CIM Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <img
              src="/2.png"
              alt="Baliyo Logo"
              className="h-14 sm:h-20 w-auto object-contain"
            />
          </div>

          {/* Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="text-xs font-bold text-white/80 border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider bg-white/10 backdrop-blur-sm">
              9th Edition
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-200 bg-blue-600/30 border border-blue-400/30 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              17–26 Dec 2026
            </span>
            <span className="text-xs text-white/50 font-medium italic">
              2–11 Poush 2083
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
            Birat Expo <span className="text-blue-400">2026</span>
          </h1>

          {/* Subheading */}
          <p className="mt-3 text-lg sm:text-2xl md:text-3xl text-white/80 font-extrabold">
            The Ecosystem of Opportunities
          </p>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-white/55 font-medium leading-relaxed max-w-lg">
            Nepal&apos;s premier business ecosystem platform — where industries,
            entrepreneurs, students, and ideas converge.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 sm:mt-10 w-full sm:w-auto">
            <Link
              href="/stalls"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5 text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              Book Your Stall
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sponsorship"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              Explore Sponsorship
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
