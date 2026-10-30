"use client";

import React from "react";
import { Lightbulb, Target, Network, Layers, ArrowRight } from "lucide-react";

export default function PavilionWhyWeAreDoingThis() {
  const pillars = [
    {
      number: "01",
      title: "Ideas exist. Pathways do not.",
      desc: "Koshi has no shortage of young people with ideas or of families running small businesses. What is missing is somewhere to take an idea next. Without a pathway, an idea stays a conversation.",
      tag: "The Bottleneck",
    },
    {
      number: "02",
      title: "The first gap is readiness, not money.",
      desc: "Finance exists — bank credit, State Startup Enterprise Loans, local angel investors. Most enterprises cannot reach it because the books, the plan and compliance are not in order. Readiness is the bottleneck.",
      tag: "Capital Readiness",
    },
    {
      number: "03",
      title: "Industry & academia sit side by side and never meet.",
      desc: "Colleges teach business; industries need problems solved. Chamber of Industries Morang is the one institution that can put a student in front of a real industrial problem, and a mentor in front of a student.",
      tag: "The CIM Bridge",
    },
    {
      number: "04",
      title: "One-off events do not compound.",
      desc: "A workshop that ends on the last day leaves nothing behind. BIC is built so that every activity hands something to the next one — and so that each year starts further ahead than the last.",
      tag: "Compounding Ecosystem",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Incubation Philosophy
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            Why We Are Doing This: <span className="text-blue-600">A Continuous Pipeline</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Why Koshi Province needs a place where an idea can be taken seriously. The three rooms are
            the Chamber&apos;s existing work on entrepreneurship put in order so that each part feeds the next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50/70 border border-gray-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-blue-600">
                    PILLAR #{item.number}
                  </span>
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider bg-white border border-gray-200 px-2.5 py-0.5 rounded-md">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-gray-200/80 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Biratnagar Incubation Center · Guidebook for Managers
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
