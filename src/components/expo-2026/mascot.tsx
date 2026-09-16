import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const traits = [
  "Hope",
  "Connection",
  "Innovation",
  "Resilience",
  "Growth",
  "Community",
];

export default function Mascot2026() {
  return (
    <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-blue-100 p-6 sm:p-10 lg:p-14">
          {/* decorative blurred accents */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Text content — left on desktop, below image on mobile */}
            <div className="order-2 lg:order-1 w-full lg:w-6/12 text-center lg:text-left">
              <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Official Mascot
              </span>
              <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 leading-tight">
                Meet <span className="text-blue-600">Asha</span>
              </h2>
              <p className="mt-1 text-base sm:text-lg font-bold text-gray-500">
                The Dolphin of Opportunity
              </p>

              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Asha — meaning <em>Hope</em> in Nepali — is the spirit of Birat
                Expo 2026. Like the Gangetic Dolphin of the Koshi River, Asha
                navigates through opportunity, connecting people, ideas, and
                futures.
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                She represents the energy of Koshi Province, the resilience of
                its entrepreneurs, and the bright possibilities that emerge when
                the right people come together at the right moment.
              </p>

              {/* Traits */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5">
                {traits.map((trait) => (
                  <span
                    key={trait}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <Link
                href="/book-stalls"
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
              >
                Join Asha at Birat Expo 2026
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mascot image — right on desktop, first on mobile, bigger */}
            <div className="order-1 lg:order-2 w-full lg:w-6/12 flex justify-center shrink-0">
              <div className="relative w-64 sm:w-80 md:w-96 lg:w-full lg:max-w-md">
                <img
                  src="/biratmascot.png"
                  alt="Asha – The Dolphin of Opportunity"
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
