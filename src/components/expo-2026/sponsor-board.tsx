"use client";

import React, { useState } from "react";
import { Expand, X, ExternalLink, Award } from "lucide-react";

export default function SponsorBoard2026() {
  const [showPosterModal, setShowPosterModal] = useState(false);

  return (
    <div className="mt-16 sm:mt-24">
      {/* ── Section Title & Action ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-blue-600" />
            Official Sponsor &amp; Partner Wall
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            Birat Expo 2026 <span className="text-blue-600">Sponsor Directory</span>
          </h3>
        </div>
        <button
          onClick={() => setShowPosterModal(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-300 border border-blue-200 rounded-xl shadow-xs transition-all duration-200 cursor-pointer self-start sm:self-auto"
        >
          <Expand className="w-4 h-4" />
          View Official Board Poster
        </button>
      </div>

      {/* ── The Official Blue Board ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0F4796] via-[#0A3B82] to-[#072B62] border-4 border-blue-400/20 shadow-2xl p-4 sm:p-8 md:p-12 text-white">
        {/* Decorative background glow accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
          {/* ── Board Header ── */}
          <div className="text-center pt-2 pb-6 border-b border-white/10">
            {/* Top brand tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/20 text-xs font-bold uppercase tracking-wider text-yellow-400 mb-4 shadow-inner">
              <span className="text-white/80 font-normal">Title Partner</span>
              <span>XTREME ENERGY DRINK</span>
            </div>

            {/* Main Title Banner */}
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white flex items-center justify-center gap-2 flex-wrap">
                <span>Birat</span>
                <span className="font-light text-blue-200">expo</span>
                <span className="text-yellow-400">2026</span>
              </h4>
              <p className="mt-2 text-sm sm:text-base font-semibold text-blue-100 tracking-wide">
                Connecting Opportunities · Creating Impact
              </p>
              <p className="text-xs sm:text-sm text-white/75 font-medium mt-0.5">
                Nepal&apos;s Business Ecosystem Platform
              </p>
            </div>

            {/* Date & Location Pill */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-white font-medium">
                📅 02–11 Poush, 2083 (17–26 Dec 2026)
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-white font-medium">
                📍 Degree Campus, Biratnagar
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-300/40 text-yellow-200 font-semibold">
                Powered by Century Spices &amp; Snacks
              </span>
            </div>
          </div>

          {/* ── ROW 1: Organizer, Title, Powered By, Diamond, Gold ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {/* ORGANIZER (1.png) */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Organizer
              </div>
              <div className="w-full h-28 sm:h-36 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/1.png"
                  alt="Chamber of Industries, Morang (उद्योग संगठन मोरङ)"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            {/* TITLE SPONSOR */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Title Sponsor
              </div>
              <div className="w-full h-28 sm:h-36 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/xtream.png"
                  alt="Xtreme Energy Drink"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            {/* POWERED BY */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Powered By
              </div>
              <div className="w-full h-28 sm:h-36 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/century-logo.png"
                  alt="Century Spices and Snacks"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            {/* DIAMOND SPONSORS */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Diamond Sponsors
              </div>
              <div className="w-full h-28 sm:h-36 grid grid-cols-2 gap-3 items-center justify-center p-2">
                <div className="h-full flex items-center justify-center">
                  <img
                    src="/birat-expo-2026/images/partners/magic-logo.png"
                    alt="Magic Footwear"
                    className="max-h-20 sm:max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="h-full flex items-center justify-center">
                  <img
                    src="/birat-expo-2026/images/partners/shikhar-insurance-logo.png"
                    alt="Shikhar Insurance"
                    className="max-h-20 sm:max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>

            {/* GOLD SPONSORS */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Gold Sponsors
              </div>
              <div className="w-full h-28 sm:h-36 grid grid-cols-2 gap-3 items-center justify-center p-2">
                <div className="h-full flex items-center justify-center">
                  <img
                    src="/birat-expo-2026/images/partners/nabil-bank-logo.png"
                    alt="Nabil Bank"
                    className="max-h-20 sm:max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="h-full flex items-center justify-center">
                  <img
                    src="/birat-expo-2026/images/partners/NLG.png"
                    alt="NLG Insurance"
                    className="max-h-20 sm:max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── ROW 2: Silver Sponsors ── */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 text-center mb-4">
              Silver Sponsors
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 items-center">
              {[
                { name: "Shangrila", src: "/birat-expo-2026/images/partners/shangrila-logo.png" },
                { name: "Rijal's", src: "/birat-expo-2026/images/partners/Rijal_s-logo.png" },
                { name: "Cello", src: "/birat-expo-2026/images/partners/cello-logo.png" },
                { name: "Kabra Group", src: "/birat-expo-2026/images/partners/kabra-group.png" },
                { name: "PLO Lubricants", src: "/birat-expo-2026/images/partners/PLO-logo.png" },
                { name: "Siddhartha Premier Insurance", src: "/birat-expo-2026/images/partners/siddhartha-premier-insurance.png" },
                { name: "SALICO", src: "/birat-expo-2026/images/partners/salico-logo.png" },
              ].map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="h-20 sm:h-24 flex items-center justify-center p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  title={sponsor.name}
                >
                  <img
                    src={sponsor.src}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── ROW 3: Promoter & Supported By ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
            {/* PROMOTER (Names shown only here like in the image) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 text-center mb-4">
                Promoter
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 items-center">
                {/* Promoter 1: Koshi Province Government */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center p-1.5">
                    <img
                      src="/birat-expo-2026/images/partners/koshi-province-logo.png"
                      alt="Koshi Province Government"
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-700 mt-1.5 leading-tight">
                    Koshi Province
                  </span>
                  <span className="text-[9px] text-gray-500 leading-tight">
                    Government
                  </span>
                </div>

                {/* Promoter 2: Biratnagar Metropolitan City */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center p-1.5">
                    <img
                      src="/birat-expo-2026/images/partners/biratnagar-metropolitan-logo.png"
                      alt="Biratnagar Metropolitan City"
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-700 mt-1.5 leading-tight">
                    Biratnagar
                  </span>
                  <span className="text-[9px] text-gray-500 leading-tight">
                    Metropolitan
                  </span>
                </div>

                {/* Promoter 3: Morang Udyog Byapar Sangh */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center p-1.5">
                    <img
                      src="/birat-expo-2026/images/partners/morang-udhyog-byapar-logo.png"
                      alt="Morang Udyog Byapar Sangh"
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SUPPORTED BY (Logos only without extra bottom names) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 text-center mb-4">
                Supported By
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 items-center">
                {[
                  {
                    name: "FNCCI Koshi Province",
                    src: "/birat-expo-2026/images/partners/fncci-koshi-logo.png",
                  },
                  {
                    name: "Degree Campus T.U.",
                    src: "/birat-expo-2026/images/partners/degree-campus-logo.png",
                  },
                  {
                    name: "NYEF Biratnagar",
                    src: "/birat-expo-2026/images/partners/NYEF-brt-logo.png",
                  },
                  {
                    name: "Birat Byapar Sangh",
                    src: "/birat-expo-2026/images/partners/Birat-byapar-sangh-logo.png",
                  },
                  {
                    name: "Morang Automobile Dealers",
                    src: "/birat-expo-2026/images/partners/morang-automobile-dealers-association-logo.png",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="w-full h-20 sm:h-24 flex items-center justify-center p-1.5 rounded-xl hover:bg-gray-50 transition-colors group"
                    title={item.name}
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── ROW 4: Contributors ── */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 text-center mb-4">
              Contributors
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 items-center">
              {[
                { name: "Hulas", src: "/birat-expo-2026/images/partners/hulas-logo.png" },
                { name: "Control Lubricants", src: "/birat-expo-2026/images/partners/control-logo.png" },
                { name: "NeMato Tiles", src: "/birat-expo-2026/images/partners/Nemato-Tiles-logo.png" },
                { name: "Premier Wires", src: "/birat-expo-2026/images/partners/premier-wire-logo.png" },
                { name: "Kwality", src: "/birat-expo-2026/images/partners/kwality-logo.png" },
                { name: "MM Group", src: "/birat-expo-2026/images/partners/mm-group-logo.png" },
                { name: "Rabindra Knitfab", src: "/birat-expo-2026/images/partners/Rabindra-Knitfab-Industries.png" },
                { name: "New ACC Itta Udhyog", src: "/birat-expo-2026/images/partners/ACC-logo.png" },
                { name: "HP Group", src: "/birat-expo-2026/images/partners/hp-group-logo.png" },
                { name: "Lotus", src: "/birat-expo-2026/images/partners/lotus-logo.png" },
                { name: "Shree Jay Electric", src: "/birat-expo-2026/images/partners/Shree-Jay-Electric-logo.png" },
                { name: "Hulas Wire Industries", src: "/birat-expo-2026/images/partners/Hulas-wire-logo.png" },
              ].map((contributor) => (
                <div
                  key={contributor.name}
                  className="h-16 sm:h-20 flex items-center justify-center p-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                  title={contributor.name}
                >
                  <img
                    src={contributor.src}
                    alt={contributor.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── ROW 5: Special Category Partners ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* ICE CREAM PARTNER */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Ice Cream Partner
              </div>
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/marvelous-logo.png"
                  alt="Marvelous Ice Cream"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            {/* ENERGY PARTNER */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Energy Partner
              </div>
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/max-tiger-logo.png"
                  alt="Max Tiger Energy Drink"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            {/* HYDRATION PARTNER */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Hydration Partner
              </div>
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/bam-bam-logo.png"
                  alt="Bam Bam Hydration Drink"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            {/* SOUND SYSTEM PARTNER */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Sound System Partner
              </div>
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/royal-planners-logo.png"
                  alt="Royal Planners"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </div>

          {/* ── ROW 6: Media & Digital Partners ── */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {/* OUTDOOR ADVERTISING PARTNER */}
            <div className="w-full sm:w-80 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Outdoor Advertising Partner
              </div>
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/akriti-advertisement-logo.png"
                  alt="Akriti Advertising"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            {/* DIGITAL PARTNER */}
            <div className="w-full sm:w-80 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center group hover:shadow-md transition-all duration-200">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                Digital Partner
              </div>
              <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2">
                <img
                  src="/birat-expo-2026/images/partners/spark-tech-logo.png"
                  alt="SPARKTech"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal for Official Board Poster ── */}
      {showPosterModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setShowPosterModal(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-bold text-gray-900">
                  Official Birat Expo 2026 Sponsor &amp; Partner Board
                </h4>
              </div>
              <button
                onClick={() => setShowPosterModal(false)}
                className="p-1 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200/60 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster image */}
            <div className="overflow-auto p-4 flex items-center justify-center bg-gray-900">
              <img
                src="/birat-expo-2026/images/partners/official-sponsors-board.jpg"
                alt="Official Birat Expo 2026 Sponsor & Partner Board"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-600">
              <span>Birat Expo 2026 Official Sponsors Wall</span>
              <a
                href="/birat-expo-2026/images/partners/official-sponsors-board.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700"
              >
                Open full original image
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
