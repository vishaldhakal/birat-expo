"use client";

import React from "react";
import { FileText, Download, Check, Sparkles } from "lucide-react";

export default function PavilionDownloadCta() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 md:p-12 text-white relative overflow-hidden shadow-lg">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-300/20 px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Official Visitor &amp; Concept Guide
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Download the Complete Pavilion Booklet
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-2xl">
                Get the full 8-page official document detailing the Biratnagar Incubation Center at Birat Expo 2026.
                Includes the complete 5-year history of incubation delivery, zone architectural blueprints, 10-day programme schedules, and incubation manager guidelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full 3-zone bamboo layout &amp; specifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10-day breakdown: Discover to Invest Day</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CIM incubation milestones 2021–2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Teacher, student, and business participation guides</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 w-full max-w-sm backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">BIC_Pavilion_Booklet.pdf</div>
                    <div className="text-xs text-gray-400">8 Pages · Official PDF · 1.6 MB</div>
                  </div>
                </div>

                <a
                  href="/BIC_Pavilion_Booklet.pdf"
                  download="BIC_Pavilion_Booklet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-slate-950 bg-white hover:bg-gray-100 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Guide (PDF)</span>
                </a>

                <div className="text-center mt-3">
                  <a
                    href="/pavilion_dashboard.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-blue-300 hover:text-white underline"
                  >
                    View Live Operations Dashboard →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
