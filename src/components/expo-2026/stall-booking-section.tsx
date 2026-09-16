import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const stallCategories = [
  {
    num: "01",
    badge: "CORPORATE",
    title: "Industrial & Corporate",
    description: "Manufacturing, technology, and leading enterprises.",
    href: "/hanger-1",
    textColor: "text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-100",
    hoverBorder: "hover:border-blue-500",
    image: "/birat-expo-2026/images/hanger1.png",
  },
  {
    num: "02",
    badge: "CORPORATE",
    title: "Industrial & Corporate",
    description: "High-impact solutions and institutional growth.",
    href: "/hanger-2",
    textColor: "text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    hoverBorder: "hover:border-indigo-500",
    image: "/birat-expo-2026/images/hanger2.png",
  },
  {
    num: "03",
    badge: "AGRO + SME",
    title: "Agro & SMEs",
    description: "Local enterprise, agriculture, and new ideas.",
    href: "/bds-pavilion",
    textColor: "text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    hoverBorder: "hover:border-emerald-500",
    image: "/birat-expo-2026/images/agro.png",
  },
  {
    num: "04",
    badge: "MOBILITY",
    title: "Automobiles",
    description: "Vehicles, EV technology, and accessories.",
    href: "/auto-bds-pavilion",
    textColor: "text-amber-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-100",
    hoverBorder: "hover:border-amber-500",
    image: "/birat-expo-2026/images/auto.png",
  },
  {
    num: "05",
    badge: "FOOD",
    title: "Food",
    description: "Local brands, multi-cuisine, and refreshment.",
    href: "/food-stalls",
    textColor: "text-rose-600",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-100",
    hoverBorder: "hover:border-rose-500",
    image: "/birat-expo-2026/images/food.png",
  },
] as const;

export default function StallBookingSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Exhibitor Booking
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
              5 Exhibition <span className="text-blue-600">Zones</span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md font-medium leading-relaxed md:text-right">
            Choose the exhibition area that matches your sector and reserve
            directly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {stallCategories.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-200/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 ${item.hoverBorder}`}
            >
              {/* Image block — only shown when image exists */}
              {"image" in item && item.image ? (
                <div className="relative w-full h-44 bg-gray-50 border-b border-gray-100 shrink-0 flex items-center justify-center p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              ) : null}

              {/* Text content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Top Row: Number + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-gray-900 tracking-tight">
                      {item.num}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${item.badgeBg}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Reserve Link */}
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 font-bold text-sm ${item.textColor} hover:underline pt-2 border-t border-gray-100`}
                >
                  <span>Reserve</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
