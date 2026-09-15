"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const milestones = [
  {
    year: "2053 B.S.",
    title: "Koshi Mahotsav",
    description:
      "The journey begins, creating a new platform to promote trade, local industries, and regional economic activity in Eastern Nepal.",
  },
  {
    year: "Early Editions",
    title: "Purwanchal Byapar Mela & beyond",
    description:
      "The vision expands through Purwanchal Byapar Mela, the Agro Mechanization & Technology Exhibition, and successive editions of Birat Expo — promoting industry, commerce, agriculture, technology, and investment.",
  },
  {
    year: "7th Edition · 2022",
    title: "A strategic transformation",
    description:
      "Birat Expo moves beyond product exhibition, introducing platforms for startups, investment, employment, skills, tourism, business development services, technical conferences, and the Triple Helix collaboration model.",
  },
  {
    year: "8th Edition · 2025",
    title: "Digital Koshi: Bridging Innovation and Investment",
    description:
      "The ecosystem approach strengthens further with the Vision Koshi Startup Hackathon, Rojgar Koshi Pavilion, Student Orientation Program, B2B Platform, and Digital Business Solutions.",
  },
];

export default function Evolution2026() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsImageOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isImageOpen]);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header — text + image side by side, mirrors hero's split layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
            <span className="text-xs sm:text-sm font-bold text-gray-800 border border-gray-200 px-3.5 sm:px-4 py-1.5 rounded-full uppercase tracking-wider bg-gray-50/50">
              Since 2053 B.S.
            </span>
            <h2 className="mt-5 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-black text-gray-950">
              The Evolution of Birat Expo
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
              Organized by the Chamber of Industries Morang (CIM), Birat Expo
              has evolved alongside the economic transformation of Eastern Nepal
              — continuously adapting to the changing aspirations of industries,
              entrepreneurs, businesses, and society.
            </p>
          </div>

          <div className="w-full lg:w-5/12 shrink-0">
            <button
              type="button"
              onClick={() => setIsImageOpen(true)}
              aria-label="Open image in full size"
              className="group relative w-full h-48 sm:h-64 md:h-72 lg:h-full rounded-2xl overflow-hidden border border-gray-100 block"
            >
              <img
                src="/birat-expo-2026/evolutionofbiratexpo.jpeg"
                alt="The Evolution of Birat Expo"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <span className="absolute bottom-3 right-3 text-xs font-bold text-white bg-black/50 px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Click to enlarge
              </span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <div className="relative">
            {/* connecting line */}
            <div className="absolute left-[13px] sm:left-[19px] top-1.5 bottom-1.5 w-px bg-gray-200" />

            {/* <ul className="space-y-8 sm:space-y-10">
              {milestones.map((m) => (
                <li key={m.title} className="relative pl-9 sm:pl-14">
                  <span className="absolute left-0 top-0.5 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-600" />
                  </span>

                  <span className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider">
                    {m.year}
                  </span>
                  <h3 className="mt-1 text-lg sm:text-2xl font-extrabold text-gray-950 leading-snug">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium leading-relaxed max-w-2xl">
                    {m.description}
                  </p>
                </li>
              ))}
            </ul> */}
          </div>
        </div>

        {/* 9th Edition highlight — mirrors hero's poster card treatment */}
        {/* <div className="mt-10 sm:mt-14 lg:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-blue-600 to-blue-700 p-6 sm:p-10 shadow-xl sm:shadow-2xl shadow-blue-600/20">
          <span className="text-xs sm:text-sm font-extrabold text-blue-100 uppercase tracking-widest">
            9th Edition · 2026
          </span>
          <p className="mt-3 text-lg sm:text-2xl md:text-3xl font-black text-white leading-snug max-w-3xl">
            Birat Expo is no longer defined simply by exhibitions or business
            transactions. It is defined by the opportunities it creates — The
            Ecosystem of Opportunities.
          </p>
        </div> */}
      </div>

      {/* Fullscreen image lightbox */}
      {isImageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Evolution of Birat Expo — full size image"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <img
            src="/birat-expo-2026/evolutionofbiratexpo.jpeg"
            alt="The Evolution of Birat Expo — full size"
            className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
