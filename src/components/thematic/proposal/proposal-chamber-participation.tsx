"use client";

import { useState } from "react";
import { 
  Presentation, 
  Clock, 
  Lightbulb, 
  CheckCircle2, 
  HelpCircle, 
  Sliders, 
  ChevronRight,
  FileQuestion,
  Users
} from "lucide-react";

const slides = [
  {
    slideNumber: 1,
    title: "Our Advantage",
    question: "What makes our region economically distinctive?",
    duration: "2 min",
    content: "Two or three facts that set your region apart: main sectors, key numbers and one photo or map.",
    gradient: "from-blue-600 to-indigo-600",
    badgeBg: "bg-blue-100 text-blue-800",
    iconKey: "competitive",
  },
  {
    slideNumber: 2,
    title: "Our Opportunities",
    question: "What are our priority business and investment opportunities?",
    duration: "3 min",
    content: "Your top three business or investment opportunities, each with sector, size or capacity, and stage.",
    gradient: "from-indigo-600 to-violet-600",
    badgeBg: "bg-indigo-100 text-indigo-800",
    iconKey: "investment",
  },
  {
    slideNumber: 3,
    title: "What We Offer",
    question: "Which products, services or capabilities can we bring to other markets?",
    duration: "2 min",
    content: "Products, services or capabilities you can bring to other regions, with quantities or capacity where known.",
    gradient: "from-teal-600 to-emerald-600",
    badgeBg: "bg-teal-100 text-teal-800",
    iconKey: "offer",
  },
  {
    slideNumber: 4,
    title: "What We Seek",
    question: "Which buyers, suppliers, investors, technology or partners do we need?",
    duration: "1 min",
    content: "The buyers, suppliers, investors, technology or partners you need, with size or quantity.",
    gradient: "from-amber-600 to-orange-600",
    badgeBg: "bg-amber-100 text-amber-800",
    iconKey: "seek",
  },
  {
    slideNumber: 5,
    title: "Our Collaboration Proposal",
    question: "What specific partnership can we develop together?",
    duration: "2 min",
    content: "One specific proposal: what, with whom, and the next step with a date. Add the contact person and a QR code.",
    gradient: "from-rose-600 to-pink-600",
    badgeBg: "bg-rose-100 text-rose-800",
    iconKey: "proposal",
  },
];

export default function ProposalChamberParticipation() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="section-07" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-gray-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-50 text-violet-700 border border-violet-200/80 mb-4">
            <Presentation className="w-3.5 h-3.5 text-violet-600" />
            07 · Chamber Participation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Opportunity Connect: Five-Slide Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Each participating chamber receives a dedicated <strong className="text-gray-900 font-semibold">15-minute presentation slot</strong> (10 minutes presentation + 5 minutes Q&amp;A). Every chamber adheres to CIM&apos;s standardized 5-slide template so investors can easily evaluate and compare regional opportunities.
          </p>
        </div>

        {/* Presentation Structure Summary Pills */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
              15m
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Duration</p>
              <p className="text-sm font-bold text-gray-900">Per Chamber Slot</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
              10m
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Slide Presentation</p>
              <p className="text-sm font-bold text-gray-900">2 min per slide average</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
              5m
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Interactive Floor Q&amp;A</p>
              <p className="text-sm font-bold text-gray-900">With buyers &amp; investors</p>
            </div>
          </div>
        </div>

        {/* Interactive Slides Template Showcase */}
        <div className="mt-12">
          {/* Slide Tab Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3">
            {slides.map((s, idx) => (
              <button
                key={s.slideNumber}
                onClick={() => setActiveSlide(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeSlide === idx
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-100"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span>Slide {s.slideNumber}:</span>
                <span>{s.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeSlide === idx ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                  {s.duration}
                </span>
              </button>
            ))}
          </div>

          {/* Active Slide Presentation Card */}
          <div className="mt-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-900/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black px-3 py-1 rounded-lg bg-yellow-400 text-indigo-950">
                    SLIDE {slides[activeSlide].slideNumber} OF 5
                  </span>
                  <span className="text-xs text-gray-300 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-yellow-300" />
                    Allocated Time: {slides[activeSlide].duration}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wider text-indigo-300 font-bold">
                  CIM Official Presentation Standard
                </span>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {slides[activeSlide].title}
                  </h3>

                  <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="text-xs font-bold text-yellow-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <FileQuestion className="w-4 h-4 text-yellow-300" />
                      Core Guiding Question
                    </p>
                    <p className="text-base sm:text-lg font-medium text-white italic">
                      &ldquo;{slides[activeSlide].question}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-200 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    What to Put on This Slide
                  </h4>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                    {slides[activeSlide].content}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
                  disabled={activeSlide === 0}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  ← Previous Slide
                </button>
                <span className="text-xs text-gray-400">
                  Slide {activeSlide + 1} of 5
                </span>
                <button
                  onClick={() => setActiveSlide((prev) => Math.min(slides.length - 1, prev + 1))}
                  disabled={activeSlide === slides.length - 1}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  Next Slide →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Slides Table View for Quick Reading */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="p-4 bg-slate-50 border-b border-gray-200">
            <h4 className="text-sm font-bold text-gray-900">
              Complete Five-Slide Template Overview
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-slate-100/70 text-xs uppercase font-bold text-gray-600">
                <tr>
                  <th scope="col" className="px-4 py-3 w-16 text-center">Slide</th>
                  <th scope="col" className="px-4 py-3 w-72">Title &amp; Question</th>
                  <th scope="col" className="px-4 py-3">What to Put on the Slide</th>
                  <th scope="col" className="px-4 py-3 w-24 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {slides.map((s) => (
                  <tr key={s.slideNumber} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3.5 text-center font-black text-indigo-600">
                      {s.slideNumber}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-gray-900">{s.title}</div>
                      <div className="text-xs text-gray-500 italic mt-0.5">{s.question}</div>
                    </td>
                    <td className="px-4 py-3.5 text-xs sm:text-sm text-gray-600">
                      {s.content}
                    </td>
                    <td className="px-4 py-3.5 text-right font-bold text-indigo-900 whitespace-nowrap">
                      {s.duration}
                    </td>
                  </tr>
                ))}
                <tr className="bg-indigo-50/50 font-bold text-indigo-950">
                  <td colSpan={3} className="px-4 py-3 text-right">
                    Total: 10 minutes presenting + 5 minutes for questions
                  </td>
                  <td className="px-4 py-3 text-right">15 min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pro Tip Box */}
        <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200/90 p-5 sm:p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-900">
              Crucial Tip for Presenting Chambers
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-amber-800 leading-relaxed">
              Presentations should focus strictly on <strong className="font-bold">practical commercial opportunities</strong> rather than lengthy institutional introductions.
              <br />
              <span className="italic">
                The three opportunities highlighted on Slide 2 must match the three opportunities displayed on your chamber&apos;s Opportunity Wall banners and your one-page sheet, ensuring your chamber tells one unified, powerful story.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
