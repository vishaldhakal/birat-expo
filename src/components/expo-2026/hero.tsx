import React from "react";
import Image from "next/image";

export default function Hero2026() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8">
          <div className="flex items-center space-x-4">
            <Image
              src="/1.png"
              alt="CIM Logo"
              width={80}
              height={40}
              className="rounded-full bg-white"
            />
            <Image
              src="/2.png"
              alt="Baliyo Logo"
              width={80}
              height={40}
              className="rounded-md"
            />
          </div>
          
          <div className="text-left">
            <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              9th Edition
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-950 mt-5 leading-none uppercase tracking-tight">
              Birat Expo 2026
            </h1>
            <div className="w-20 h-1.5 bg-blue-600 my-4 mx-auto md:mx-0"></div>
            <p className="text-xl md:text-2xl text-blue-600 font-extrabold uppercase tracking-wide">
              Theme: The Ecosystem of Opportunities
            </p>
            <p className="text-sm md:text-base text-gray-500 font-semibold mt-1.5 italic tracking-wide">
              Brand Promise: Nepal&apos;s Business Ecosystem Platform
            </p>
          </div>

          <div className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 text-gray-700 font-medium">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">Date:</span>
              <span>22 – 31 December, 2026 (7–16 Poush 2083)</span>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">Venue:</span>
              <span>Degree Campus, Biratnagar, Nepal</span>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">Organized by:</span>
              <span>Chamber of Industries Morang (CIM)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Mascot */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/mascot.svg"
            alt="Birat Expo 2026 Mascot"
            width={500}
            height={600}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
