"use client";

import { useState } from "react";
import { 
  Image as ImageIcon, 
  CheckCircle2, 
  ShieldAlert, 
  Palette, 
  FileCheck, 
  Maximize2, 
  QrCode, 
  ExternalLink,
  Sparkles,
  Info
} from "lucide-react";

const specifications = [
  { element: "Banner size & orientation", spec: "3 ft wide × 6 ft high, portrait" },
  { element: "Quantity", spec: "3 banners per chamber, up to 54 in total (fallback: 2 banners)" },
  { element: "Content blocks", spec: "Opportunity Theme, What We Offer, What We Seek, Contact Info, QR code" },
  { element: "Footer", spec: "Contact details, QR code, and fixed CIM line: 'Birat Business Summit 2026 | Opportunity Connect'" },
  { element: "Design template", spec: "CIM issues an editable template. Flex design is the chamber's responsibility" },
  { element: "Printing", spec: "Each chamber prints its own banners at its own cost using the CIM template" },
  { element: "Placement", spec: "Hung by CIM on inner side walls of the hangar (81 sq m zone), visible from registration desk" },
  { element: "QR code", spec: "One QR code per banner, linking to the chamber's page on www.biratbazaar.com in a single URL" },
];

const qualityTests = [
  "The business or chamber endorsement is genuine, supported by a registration or an endorsement letter.",
  "A named contact person can be reached during and after the Summit.",
  "The offer and the ask are specific, with quantities or capacity where available.",
  "The claims are accurate and not misleading.",
  "The chamber consents to publication on the Wall and in the digital directory.",
];

const designRules = [
  { rule: "Text size", req: "Headline ≥ 100 pt, block headings ≥ 60 pt, body text ≥ 48 pt, contact details ≥ 40 pt (readable from 2–3 metres)" },
  { rule: "Colours", req: "Use template colours (navy, indigo, teal and gold). Dark text on light backgrounds, white on dark" },
  { rule: "Margins", req: "Keep text, logo and QR code at least 2 inches inside the edge of the banner" },
  { rule: "Content", req: "Verified facts only. The Review Panel checks every banner before printing" },
  { rule: "Files", req: "Send print-ready PDF artwork, with fonts embedded" },
];

const bannerBlocks = [
  { id: 1, title: "Header", desc: "Chamber name in capitals and logo. 'Opportunity 1 of 3' indicates banner index." },
  { id: 2, title: "Opportunity Theme", desc: "One clear line on the opportunity, up to 12 words." },
  { id: 3, title: "Photo (Optional)", desc: "One sharp, high-resolution photo of the product, facility or sector." },
  { id: 4, title: "What We Offer", desc: "Up to three short points, with quantities or capacity where available." },
  { id: 5, title: "What We Seek", desc: "Up to three short points naming the buyer, supplier, investor or partner needed." },
  { id: 6, title: "Contact Information", desc: "Named contact person with phone, email and website (footer area)." },
  { id: 7, title: "QR Code", desc: "Direct link to the chamber's profile on www.biratbazaar.com." },
  { id: 8, title: "Fixed Footer Line", desc: "Birat Business Summit 2026 | Opportunity Connect & tagline. Do not change." },
];

export default function ProposalOpportunityWall() {
  const [activeBlock, setActiveBlock] = useState(1);

  return (
    <section id="section-08" className="py-16 sm:py-24 bg-white border-b border-gray-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700 border border-cyan-200/80 mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-600" />
            08 · Opportunity Wall &amp; Banners
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Opportunity Wall: Showcase Your Region
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A shared, high-visibility showcase of verified business and investment opportunities presented by participating chambers. Hosted along the inner side walls of the main summit hangar (<strong className="text-gray-900 font-semibold">81 sq m wall zone</strong> accommodating up to 54 banners).
          </p>
        </div>

        {/* Specifications & Mockup Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Technical Specs Table */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Maximize2 className="w-5 h-5 text-indigo-600" />
                Banner Specifications
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-gray-200/70">
                    {specifications.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/80 transition-colors">
                        <td className="py-3 pr-4 font-bold text-gray-900 w-1/3 align-top">
                          {item.element}
                        </td>
                        <td className="py-3 pl-4 text-gray-600 align-top">
                          {item.spec}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quality Check Section */}
            <div className="bg-gradient-to-br from-emerald-50/70 to-teal-50/70 rounded-2xl border border-emerald-200/80 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h3 className="text-base sm:text-lg font-bold text-emerald-950">
                  Quality Check: Verified Opportunities Only
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-emerald-800 mb-4">
                A joint Review Panel of <strong className="font-semibold">CIM, NYEF, and one chamber representative</strong> inspects every banner before printing. A banner is approved only if it satisfies all 5 tests:
              </p>

              <div className="space-y-2.5">
                {qualityTests.map((test, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 bg-white/70 p-3 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Rules Table */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-indigo-600" />
                Banner Design Rules
              </h3>
              <div className="space-y-3">
                {designRules.map((rule, rIdx) => (
                  <div key={rIdx} className="p-3 rounded-xl bg-slate-50 border border-gray-100 text-xs sm:text-sm">
                    <span className="font-bold text-indigo-950 mr-2">{rule.rule}:</span>
                    <span className="text-gray-600">{rule.req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual Banner Template Mockup & Breakdown */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-300">
                    Template Blueprint
                  </h4>
                  <p className="text-xs text-slate-400">3 ft × 6 ft Portrait Banner Structure</p>
                </div>
                <span className="text-[11px] font-bold px-2 py-1 rounded bg-white/10 text-slate-300">
                  Click zones below
                </span>
              </div>

              {/* The Visual Banner Graphic Mockup */}
              <div className="mx-auto max-w-[280px] bg-slate-800/90 rounded-2xl border-4 border-slate-700 p-3 shadow-2xl space-y-2 text-center text-xs font-medium">
                {/* 1 Header */}
                <div 
                  onClick={() => setActiveBlock(1)}
                  className={`p-3 rounded-xl cursor-pointer transition-all border ${
                    activeBlock === 1 
                      ? "bg-indigo-600 text-white border-yellow-300 shadow-lg scale-[1.02]" 
                      : "bg-slate-950 text-indigo-200 border-indigo-900/50 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="w-5 h-5 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black">1</span>
                    <span className="text-yellow-300">LOGO</span>
                    <span>OPP 1 OF 3</span>
                  </div>
                  <div className="font-bold uppercase tracking-wider text-xs mt-1">CHAMBER NAME IN CAPS</div>
                </div>

                {/* 2 Opportunity Theme */}
                <div 
                  onClick={() => setActiveBlock(2)}
                  className={`p-2.5 rounded-xl cursor-pointer transition-all border ${
                    activeBlock === 2 
                      ? "bg-indigo-600 text-white border-yellow-300 shadow-lg scale-[1.02]" 
                      : "bg-indigo-900/60 text-indigo-100 border-indigo-800 hover:bg-indigo-900"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-yellow-300">
                    <span className="w-4 h-4 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-[9px]">2</span>
                    <span>OPPORTUNITY THEME</span>
                  </div>
                  <div className="text-[11px] text-gray-200 italic mt-0.5">One clear line, up to 12 words</div>
                </div>

                {/* 3 Photo */}
                <div 
                  onClick={() => setActiveBlock(3)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    activeBlock === 3 
                      ? "bg-indigo-600 text-white border-yellow-300 shadow-lg scale-[1.02]" 
                      : "bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-yellow-300">
                    <span className="w-4 h-4 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-[9px]">3</span>
                    <span>SHARP SECTOR PHOTO</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Product, place or facility (Optional)</div>
                </div>

                {/* 4 What We Offer */}
                <div 
                  onClick={() => setActiveBlock(4)}
                  className={`p-2.5 rounded-xl text-left cursor-pointer transition-all border ${
                    activeBlock === 4 
                      ? "bg-indigo-600 text-white border-yellow-300 shadow-lg scale-[1.02]" 
                      : "bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold text-emerald-400 mb-1">
                    <div className="flex items-center gap-1">
                      <span className="w-4 h-4 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-[9px]">4</span>
                      <span>WHAT WE OFFER</span>
                    </div>
                  </div>
                  <ul className="text-[10px] text-slate-400 list-disc list-inside space-y-0.5">
                    <li>Capacity &amp; regional output</li>
                    <li>Export ready strengths</li>
                  </ul>
                </div>

                {/* 5 What We Seek */}
                <div 
                  onClick={() => setActiveBlock(5)}
                  className={`p-2.5 rounded-xl text-left cursor-pointer transition-all border ${
                    activeBlock === 5 
                      ? "bg-indigo-600 text-white border-yellow-300 shadow-lg scale-[1.02]" 
                      : "bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold text-cyan-400 mb-1">
                    <div className="flex items-center gap-1">
                      <span className="w-4 h-4 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-[9px]">5</span>
                      <span>WHAT WE SEEK</span>
                    </div>
                  </div>
                  <ul className="text-[10px] text-slate-400 list-disc list-inside space-y-0.5">
                    <li>Target buyers &amp; suppliers</li>
                    <li>Investment &amp; JV partners</li>
                  </ul>
                </div>

                {/* 6 & 7 Contact Info & QR code */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div 
                    onClick={() => setActiveBlock(6)}
                    className={`col-span-2 p-2 rounded-xl text-left cursor-pointer transition-all border ${
                      activeBlock === 6 
                        ? "bg-indigo-600 text-white border-yellow-300 shadow-lg" 
                        : "bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[9px] font-bold text-yellow-300">
                      <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-[8px]">6</span>
                      <span>CONTACT DETAILS</span>
                    </div>
                    <div className="text-[9px] text-slate-400 truncate mt-0.5">Name · Phone · Email</div>
                  </div>

                  <div 
                    onClick={() => setActiveBlock(7)}
                    className={`p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all border ${
                      activeBlock === 7 
                        ? "bg-indigo-600 text-white border-yellow-300 shadow-lg" 
                        : "bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-0.5 text-[8px] font-bold text-yellow-300">
                      <span className="w-3 h-3 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-[7px]">7</span>
                      <span>QR</span>
                    </div>
                    <QrCode className="w-5 h-5 text-white mt-0.5" />
                  </div>
                </div>

                {/* 8 Footer Line */}
                <div 
                  onClick={() => setActiveBlock(8)}
                  className={`p-2 rounded-xl cursor-pointer transition-all border ${
                    activeBlock === 8 
                      ? "bg-indigo-600 text-white border-yellow-300 shadow-lg" 
                      : "bg-indigo-950 text-indigo-300 border-indigo-900 hover:bg-indigo-900"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 text-[9px] font-bold text-yellow-300">
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-[8px]">8</span>
                    <span>BIRAT BUSINESS SUMMIT 2026</span>
                  </div>
                  <div className="text-[8px] text-slate-400">Opportunity Connect · Tagline</div>
                </div>
              </div>

              {/* Explanatory description of currently clicked block */}
              <div className="mt-6 p-4 rounded-2xl bg-white/10 border border-white/10 text-xs">
                <div className="flex items-center gap-2 text-yellow-300 font-bold mb-1">
                  <Info className="w-4 h-4" />
                  <span>Zone {bannerBlocks[activeBlock - 1].id}: {bannerBlocks[activeBlock - 1].title}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {bannerBlocks[activeBlock - 1].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
