import React from "react";
import {
  Users,
  Lightbulb,
  Building2,
  Handshake,
  ShoppingBag,
  Rocket,
  Sparkles,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Business & Networking",
    description:
      "Connect with entrepreneurs, industries, investors, and potential customers.",
    icon: Users,
    bg: "bg-blue-500",
  },
  {
    number: "02",
    title: "Explore Innovation",
    description:
      "Discover new products, technologies, services, and emerging ideas.",
    icon: Lightbulb,
    bg: "bg-amber-500",
  },
  {
    number: "03",
    title: "Promote Local Industries",
    description:
      "Showcase the strength, creativity, and potential of businesses from Nepal.",
    icon: Building2,
    bg: "bg-emerald-500",
  },
  {
    number: "04",
    title: "Build Opportunities",
    description:
      "Create partnerships, collaborations, and new business opportunities.",
    icon: Handshake,
    bg: "bg-pink-500",
  },
  {
    number: "05",
    title: "Discover Products & Services",
    description:
      "Experience a wide range of products and services under one roof.",
    icon: ShoppingBag,
    bg: "bg-violet-500",
  },
  {
    number: "06",
    title: "Inspire Entrepreneurship",
    description:
      "Encourage startups, young entrepreneurs, and innovative businesses to grow.",
    icon: Rocket,
    bg: "bg-orange-500",
  },
  {
    number: "07",
    title: "Experience & Engage",
    description:
      "Enjoy an engaging mix of exhibitions, activities, events, and interactive experiences under one roof.",
    icon: Sparkles,
    bg: "bg-cyan-500",
  },
];

export default function WhyBiratExpo2026() {
  return (
    <section className="py-16 md:py-24 border-t border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Key Objectives
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            Why <span className="text-blue-600">Birat Expo?</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
            Birat Expo is more than an exhibition — it&apos;s a platform that
            connects industries, ideas, businesses, and people.
          </p>
        </div>

        {/* Horizontal scroll of color-coded tiles — aligned to the same container as the header */}
        <div
          className="mt-10 sm:mt-12 flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:-mx-8 md:px-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className={`snap-start shrink-0 w-[260px] sm:w-[290px] rounded-2xl p-7 sm:p-8 flex flex-col justify-between ${item.bg}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-white/40 font-black text-2xl sm:text-3xl leading-none">
                    {item.number}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white/90" />
                  </span>
                </div>
                <div className="mt-12">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
