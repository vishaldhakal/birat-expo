import React, { forwardRef } from "react";
import Image from "next/image";

export const HubMapSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="map" ref={ref} className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Pavilion Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
            Hub Floor Plan
          </h2>
          <p className="text-slate-600 text-base">
            The circular hub layout of the ten zones, central information desk, and visitor flow.
          </p>
        </div>

        {/* Clean Floor Plan Image Display */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2 sm:p-4">
          <div className="relative w-full aspect-[16/9] md:aspect-[4/3] max-w-4xl mx-auto">
            <Image
              src="/learn-and-work/hub-plan.jpg"
              alt="Learn and Work Platform Circular Hub Floor Plan"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
});

HubMapSection.displayName = "HubMapSection";

