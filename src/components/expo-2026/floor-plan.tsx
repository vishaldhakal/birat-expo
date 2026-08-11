import React from "react";

export default function FloorPlan2026() {
  return (
    <section className="py-12 border-t border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8 text-left">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase text-start">
          Proposed Floor Plan
        </h2>
        <div className="w-full overflow-hidden bg-white p-3 border border-gray-200">
          <img
            src="/birat-expo-2026/floorplan.jpeg"
            alt="Birat Expo 2026 Floor Plan"
            className="w-full h-auto"
          />
        </div>
        <div className="mt-8">
          <a
            href="/birat-expo-2026/floorplan.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-950 text-white font-bold py-3 px-6 rounded-xl transition duration-200 text-sm md:text-base"
          >
            View Full Resolution Floor Plan
          </a>
        </div>
      </div>
    </section>
  );
}
