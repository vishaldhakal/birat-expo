"use client";

import React from "react";
import { Phone, Mail, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";

export default function PavilionTakePart() {
  const parts = [
    {
      eyebrow: "Schools & Teachers",
      title: "Book a class visit, or a session at your school",
      desc: "Bring grades 7–10 on a guided tour of Room 1 during the Discover days, or ask us to run a maker session at your own school in the new year.",
      act: "Call the Incubation Center to fix a date",
      accentBorder: "border-l-emerald-600",
      eyebrowColor: "text-emerald-700",
      actColor: "text-emerald-700",
      tag: "Room 1 · Free of cost",
    },
    {
      eyebrow: "College Students",
      title: "Join the next Design Thinking workshop",
      desc: "No business idea needed, and no fee. Leave your name at Room 2 and we will tell you when the next workshop opens in your college.",
      act: "Leave your name at the Room 2 desk",
      accentBorder: "border-l-teal-600",
      eyebrowColor: "text-teal-700",
      actColor: "text-teal-700",
      tag: "Room 2 · Free of cost",
    },
    {
      eyebrow: "Business Owners",
      title: "Apply for the next SGB Accelerator",
      desc: "For registered businesses of Koshi Province trading for a year or more. Start with a free Business Health Check-up in Room 3 — any day of the Expo.",
      act: "Walk in to Room 3, no appointment needed",
      accentBorder: "border-l-amber-600",
      eyebrowColor: "text-amber-700",
      actColor: "text-amber-700",
      tag: "Room 3 · Free diagnostic",
    },
    {
      eyebrow: "Industry, Investors & Partners",
      title: "Mentor, sponsor a booth, or back a founder",
      desc: "CIM members can give a few hours a month as a mentor, sponsor a stall for a young business, or meet investment-ready businesses on Invest day.",
      act: "Ask at any room, or at the Incubation Center desk",
      accentBorder: "border-l-blue-600",
      eyebrowColor: "text-blue-700",
      actColor: "text-blue-700",
      tag: "BIC & CIM Network",
    },
  ];

  return (
    <section id="takepart" className="py-14 sm:py-20 bg-gray-50/60 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Take Part
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            How to <span className="text-blue-600">Take Part</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            Everything below is free of cost. Come to the room that is yours, any day of the Expo.
          </p>
        </div>

        {/* 4 Cards Grid - Fully responsive (1 col on mobile, 2 col on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {parts.map((p, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 border-l-4 ${p.accentBorder} rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${p.eyebrowColor}`}>
                    {p.eyebrow}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mt-1">
                  {p.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-bold">
                <span className={p.actColor}>{p.act}</span>
                <ChevronRight className={`w-4 h-4 ${p.actColor} shrink-0`} />
              </div>
            </div>
          ))}
        </div>

        {/* Repetition notice from booklet */}
        <div className="mt-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100/80 text-xs sm:text-sm text-blue-900 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <span>
            <strong>Every room runs the same three things on repeat:</strong> a live demonstration, something any visitor can try, and an enquiry desk that records who walked away interested.
          </span>
        </div>

        {/* Section 8: After the Expo - Follow-up Guarantee from Booklet */}
        <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Section 8 · After the Expo
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-1">
              The Pavilion Does Not End on 26 December
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Every enquiry taken at the three desks is counted and followed up: schools are offered a session date, students are told when the next workshop opens in their college, and businesses are booked for a Business Health Check-up. Visitor numbers, enquiries and enrolments are compiled into one report and shared with CIM members and partners.
            </p>
          </div>
        </div>

        {/* Contact Strip matching the html dashboard & booklet */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Initiative
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mt-1">
                Biratnagar Incubation Center (BIC)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                Entrepreneurship Academy &amp; Innovation Unit,<br />
                Chamber of Industries Morang
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-gray-600 md:border-l md:border-gray-100 md:pl-6">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                Chamber of Industries Morang
              </span>
              <div className="flex items-center gap-2 text-gray-800">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold">021-515712, 577646 / 9869812058</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:cim.biratnagar@gmail.com" className="text-blue-600 hover:underline">
                  cim.biratnagar@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Shahid Marga, Tinpaini, Biratnagar-2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
