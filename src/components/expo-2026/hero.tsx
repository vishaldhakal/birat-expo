import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero2026() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Side: Info */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pills row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <span className="text-sm font-bold text-gray-800 border border-gray-200 px-4 py-1.5 rounded-full uppercase tracking-wider bg-gray-50/50">
                9th edition
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                17–26 Dec 2026
              </span>
              <span className="text-base text-gray-500 font-medium italic">
                2–11 Poush 2083
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] text-gray-950 uppercase">
              Birat Expo
              <span className="block text-blue-600">2026</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-2xl sm:text-3xl md:text-4xl text-gray-800 font-extrabold uppercase tracking-wide">
              The Ecosystem of Opportunities
            </p>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-xl">
              Nepal&apos;s business ecosystem platform — where industries,
              entrepreneurs, students, and ideas meet.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 sm:mt-10">
              <Link
                href="/book-stalls"
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 text-base uppercase tracking-wider"
              >
                Book your stall
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sponsorship"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-gray-200 hover:border-gray-400 bg-white text-gray-900 font-bold px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base uppercase tracking-wider"
              >
                Explore sponsorship
              </Link>
            </div>
          </div>

          {/* Right Side: Poster card */}
          <div className="w-full lg:w-5/12 max-w-md lg:max-w-lg shrink-0">
            <div className="relative w-full aspect-[4/5] rounded-3xl bg-gradient-to-b from-blue-600 to-blue-700 p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-blue-600/20">
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-blue-100 uppercase tracking-widest">
                  Biratnagar
                </span>
                <span className="text-sm font-extrabold text-blue-100 uppercase tracking-widest">
                  Nepal
                </span>
              </div>

              {/* Mascot */}
              <div className="flex-1 flex items-center justify-center py-4">
                <Image
                  src="/biratmascot.png"
                  alt="Birat Expo 2026 Mascot"
                  width={520}
                  height={620}
                  className="w-full h-auto max-h-[420px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Bottom row */}
              <div className="bg-blue-800/40 backdrop-blur-md rounded-2xl p-4 border border-blue-400/20">
                <p className="text-white font-extrabold text-xl leading-tight">
                  Degree Campus
                </p>
                <p className="text-blue-100 text-sm font-medium mt-0.5">Biratnagar, Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
