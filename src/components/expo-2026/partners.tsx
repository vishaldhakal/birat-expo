import React from "react";

const partners = [
  {
    name: "Bam Bam!",
    badge: "Hydration Partner",
    category: "Hydration Drink",
    image: "/birat-expo-2026/images/partners/bambam.png",
    alt: "Bam Bam Hydration Drink",
    description:
      "Costa Brava Bam Bam! Hydration Drink fuels peak endurance, active wellness, and rapid rehydration.",
  },
  {
    name: "Xtreme",
    badge: "Title Partner",
    category: "Energy Drink",
    image: "/birat-expo-2026/images/partners/xtream.png",
    alt: "Xtreme Energy Drink",
    description:
      "Xtreme Energy Drink powers peak focus and dynamic energy to drive bold ideas and enterprise.",
  },
  {
    name: "Max Tiger",
    badge: "Energy Partner",
    category: "Energy Drink",
    image: "/birat-expo-2026/images/partners/max%20tiger.png",
    alt: "Max Tiger Energy Drink",
    description:
      "Max Tiger delivers explosive vitality and unmatched power to fuel every moment of Birat Expo 2026.",
  },
];

export default function Partners2026() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Official Partners
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
              Our <span className="text-blue-600">Partners</span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md font-medium leading-relaxed md:text-right">
            Proud partners powering energy, hydration, and collaborative
            excellence at Birat Expo 2026.
          </p>
        </div>

        {/* 3 Partner Cards: Left (Bam Bam) | Center (Xtreme) | Right (Max Tiger) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative bg-white border border-gray-200/80 rounded-2xl overflow-hidden flex flex-col justify-between -xs hover:-md transition-all duration-200"
            >
              {/* Image box */}
              <div className="relative w-full h-56 sm:h-64 bg-gray-50/60 border-b border-gray-100 shrink-0 flex items-center justify-center p-6">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Partner Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {partner.badge}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
