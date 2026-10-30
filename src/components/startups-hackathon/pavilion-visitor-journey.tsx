"use client";

import React from "react";

export default function PavilionVisitorJourney() {
  const steps = [
    {
      step: "01",
      title: "Information Desk",
      where: "Pavilion Entry",
      action: "Get the pavilion map & answer one question: Which room is yours?",
      takeaway: "A purposeful journey through the ecosystem rather than an aimless walk",
    },
    {
      step: "02",
      title: "Room 1 · Makerspace",
      where: "Zone 1 (Think)",
      action: "Try the maker bench & build a prototype in thirty minutes; view the student project wall",
      takeaway: "Direct physical proof that a real problem can be solved with your own hands",
    },
    {
      step: "03",
      title: "Room 2 · Design Studio",
      where: "Zone 2 (Build)",
      action: "Watch sprint teams work live; let students interview you about a bottleneck you face",
      takeaway: "Clear understanding of how real consumer assumptions get tested before building",
    },
    {
      step: "04",
      title: "Room 3 · Growth Room",
      where: "Zone 3 (Grow & Invest)",
      action: "Meet trading local businesses; sit a free 20-minute Business Health Check-up",
      takeaway: "An objective diagnostic on whether your own business is genuinely investment-ready",
    },
    {
      step: "05",
      title: "Enquiry Desk",
      where: "Pavilion Exit",
      action: "Register as a school, student, enterprise founder, mentor, or angel investor",
      takeaway: "A guaranteed follow-up call from the Incubation Center after the Expo closes",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gray-50/50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Visitor Flow &amp; Experience
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            The 5-Step <span className="text-blue-600">Visitor Journey</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Every visitor leaves with something tangible. The single L-shaped bamboo path guides you naturally
            from a spark of curiosity all the way to an investment conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((st, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-400 hover:shadow-xs transition-all"
            >
              <div>
                <div className="mb-3">
                  <span className="text-xs font-black text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md inline-block">
                    STEP {st.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {st.title}
                </h3>
                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mt-0.5 mb-3">
                  {st.where}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {st.action}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  What You Leave With
                </div>
                <div className="text-xs font-medium text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100/80 leading-snug">
                  {st.takeaway}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
