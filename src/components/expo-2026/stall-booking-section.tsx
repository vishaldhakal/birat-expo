import React from "react";
import Link from "next/link";

const stallCategories = [
  {
    tag: "Hanger 1",
    title: "Hanger 1 : Industrial & Corporate Stalls",
    description:
      "Explore premier corporate and industrial showcases highlighting manufacturing, technology, and big enterprises.",
    href: "/hanger-1",
    badgeColor: "bg-blue-600 text-white",
    borderColor: "hover:border-blue-500",
    buttonBg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    tag: "Hanger 2",
    title: "Hanger 2 : Industrial and Corporate Stalls",
    description:
      "Featured exhibition section dedicated to high-impact industrial solutions and institutional growth.",
    href: "/hanger-2",
    badgeColor: "bg-indigo-600 text-white",
    borderColor: "hover:border-indigo-500",
    buttonBg: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    tag: "Hanger 3",
    title: "Hanger 3 : Agro & SMEs stalls",
    description:
      "Promoting agricultural advances, local business innovators, emerging SMEs, and sustainable practices.",
    href: "/bds-pavilion",
    badgeColor: "bg-emerald-600 text-white",
    borderColor: "hover:border-emerald-500",
    buttonBg: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    tag: "Hanger 4",
    title: "Hanger 4 : Automobiles Stalls",
    description:
      "Unveiling latest automobile models, EV technology, accessories, and auto business development pavilions.",
    href: "/auto-bds-pavilion",
    badgeColor: "bg-amber-600 text-white",
    borderColor: "hover:border-amber-500",
    buttonBg: "bg-amber-600 hover:bg-amber-700",
  },
  {
    tag: "Hanger 5",
    title: "Hanger 5: Food Stalls",
    description:
      "Vibrant culinary space featuring top local food brands, multi-cuisine stalls, and refreshment corners.",
    href: "/food-stalls",
    badgeColor: "bg-rose-600 text-white",
    borderColor: "hover:border-rose-500",
    buttonBg: "bg-rose-600 hover:bg-rose-700",
  },
];

export default function StallBookingSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-100 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-50/60 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Title */}
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 uppercase tracking-tight">
            Stall Booking
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mt-4 mb-4" />
          <p className="text-gray-600 text-base md:text-lg max-w-3xl font-medium leading-relaxed">
            Select a pavilion or hanger below to view floor plans, check
            real-time availability, and reserve your stall for Birat Expo 2026.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stallCategories.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-200/80 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${item.borderColor}`}
            >
              <div>
                {/* Title & Description */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Link Button */}
              <Link
                href={item.href}
                className={`w-full inline-flex items-center justify-center font-bold text-white py-3.5 px-5 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg ${item.buttonBg}`}
              >
                <span>Book Stalls Now</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
