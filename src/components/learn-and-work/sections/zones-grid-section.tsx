import React from "react";
import { ArrowRight } from "lucide-react";
import { ZoneData } from "../types";

interface ZonesGridSectionProps {
  zones: (ZoneData & { icon: React.ReactNode })[];
  selectedZoneIndex: number | null;
  onSelectZone: (index: number) => void;
}

export const ZonesGridSection: React.FC<ZonesGridSectionProps> = ({
  zones,
  selectedZoneIndex,
  onSelectZone,
}) => {
  return (
    <section id="zones" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Comprehensive Vocational Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
            Explore the Ten Hub Zones
          </h2>
          <p className="text-slate-600 text-base">
            Each specialized zone runs three live workshops daily with industry-grade equipment,
            led by certified trainers and business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone, index) => {
            const isSelected = selectedZoneIndex === index;
            return (
              <div
                key={zone.id}
                className={`flex flex-col justify-between p-6 rounded-3xl bg-white border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  isSelected ? "shadow-lg ring-2 ring-offset-2 ring-blue-500" : "border-slate-200"
                }`}
                style={{ borderTopColor: zone.color, borderTopWidth: "6px" }}
              >
                <div>
                  {/* Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl text-white flex items-center justify-center font-bold text-base shadow-sm"
                      style={{ backgroundColor: zone.color }}
                    >
                      {zone.id}
                    </div>
                    <div
                      className="p-2 rounded-lg text-slate-600 bg-slate-50 border border-slate-100"
                      title={zone.title}
                    >
                      {zone.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
                    {zone.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    {zone.skills}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{zone.handsOn}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">3 Daily Sessions</span>
                  <button
                    onClick={() => onSelectZone(index)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full transition-colors"
                    style={{
                      backgroundColor: `${zone.color}15`,
                      color: zone.color,
                    }}
                  >
                    Book Session
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

