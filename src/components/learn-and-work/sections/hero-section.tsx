import React from "react";
import Image from "next/image";
import { Sparkle, Calendar, Users, Layers, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  countdownText: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ countdownText }) => {
  return (
    <header className="relative bg-gradient-to-br from-[#121f42] via-[#1a2f64] to-[#25468f] text-white overflow-hidden pt-12 pb-20 md:py-24 border-b border-indigo-950/40">
      {/* Subtle patterned overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient colored lighting glows */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        {/* Top Organization Badges */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
          <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl shadow-black/20 border border-white/20 transition-transform hover:scale-105">
            <Image
              src="/learn-and-work/cim-logo.png"
              alt="Chamber of Industries Morang (CIM)"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              priority
            />
          </div>
          <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl shadow-black/20 border border-white/20 transition-transform hover:scale-105">
            <Image
              src="/learn-and-work/mascot.png"
              alt="Birat Expo 2026 Mascot"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              priority
            />
          </div>
        </div>

        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
          <Sparkle className="w-4 h-4 text-amber-300" />
          Birat Expo 2026 · Organised by Chamber of Industries Morang
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] font-serif">
          Learn and Work Platform
        </h1>

        {/* Subtitle / Promise */}
        <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          Discover a career, try the actual work hands-on, and leave with a clear next step
          towards further technical training, employment, or entrepreneurship.
        </p>

        {/* Live Countdown & Event Dates */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sm sm:text-base font-medium mb-10 shadow-lg">
          <span className="flex items-center gap-2 text-amber-300 font-bold">
            <Calendar className="w-4 h-4" />
            17–26 December 2026 · 2–11 Poush 2083
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="bg-amber-400 text-slate-950 font-bold text-xs uppercase px-3 py-1 rounded-full shadow-sm">
            {countdownText}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Users className="w-5 h-5" />
            Book a Group Session
          </a>
          <a
            href="#zones"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Layers className="w-5 h-5" />
            Explore the 10 Zones
          </a>
          <a
            href="#map"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-blue-200 hover:text-white font-medium text-base hover:underline transition-all"
          >
            Interactive Map
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 max-w-4xl mx-auto text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-colors">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-serif">
              250,000+
            </span>
            <span className="text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide">
              Expo Visitors Expected
            </span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-colors">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
              25,000+
            </span>
            <span className="text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide">
              Students Engaged
            </span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-colors">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-serif">
              10 Zones
            </span>
            <span className="text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide">
              One Circular Hub
            </span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-colors">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
              3 Sessions
            </span>
            <span className="text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide">
              Daily per Zone (15-20 / group)
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

