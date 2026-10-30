"use client";

import React, { useState } from "react";
import {
  Wrench,
  Lightbulb,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function PavilionThreeRooms() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const rooms = [
    {
      id: "room-1",
      number: "01",
      title: "The Makerspace",
      theme: "THINK",
      keyword: "CURIOSITY",
      audience: "School students, grades 7–10 & their teachers",
      tagline: "Where problem-solving starts at fourteen",
      icon: Wrench,
      accentColor: "text-emerald-700",
      accentBg: "bg-emerald-600",
      cardBorder: "hover:border-emerald-500",
      pillBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      allYear: [
        "Hands-on making: students build, test, and rebuild real mechanical & electronic objects",
        "Empathy, problem definition and prototyping taught through play (no pitch decks or business plans)",
        "Teachers receive toolkits and the BIC maker handbook so sessions continue back in school",
      ],
      atPavilion: [
        "Live Maker Bench — students can sit and build a working gadget in 30 minutes",
        "Student Project Wall: authentic real-world problems children across Koshi chose to tackle",
        "Guided tours for school cohorts hosted by young student makers & inventors",
        "Teacher consultation desk: book a customized hands-on session for your school",
      ],
      alreadyDone: {
        title: "Proven Model: Lilliput School, Biratnagar",
        desc: "Reached 42 students of grades 7 & 8 in a 2-hour activity where every student designed and built a thoughtful gift for a classmate by first interviewing what their friend truly needed.",
      },
      ctaText: "Book a School Class Visit",
      ctaLink: "#takepart",
    },
    {
      id: "room-2",
      number: "02",
      title: "The Design Studio",
      theme: "BUILD",
      keyword: "CAPABILITY",
      audience: "College & university students, young adults & hackers",
      tagline: "Empathy to Enterprise — design thinking, end to end",
      icon: Lightbulb,
      accentColor: "text-teal-700",
      accentBg: "bg-teal-600",
      cardBorder: "hover:border-teal-500",
      pillBg: "bg-teal-50 text-teal-800 border-teal-200",
      allYear: [
        "Problem cards drawn from real Koshi industrial bottlenecks in agriculture, manufacturing & logistics",
        "Field interviews with real users, empathy mapping, and defining sharp 'How Might We' challenges",
        "Crazy 8s ideation, rapid wireframing & prototyping at the BIC Incubation Center",
        "Presentation & pitch readiness before industrial panels and technology mentors",
      ],
      atPavilion: [
        "Live Sprint Teams — watch students take a raw problem into a tangible prototype in real time",
        "Be Interviewed! Students walk up and interview Expo visitors to validate real market assumptions",
        "The Crazy 8s Wall: hundreds of creative rapid-fire sketches posted for visitor feedback",
        "Live Student Pitch Stage on Compete Days (21–22 December) with judges & cash awards",
      ],
      alreadyDone: {
        title: "Proven Model: Mahendra Morang College (Oct 2026)",
        desc: "Seventeen rigorous sessions with 5 multidisciplinary student teams, field user interviews, an on-site industrial visit to Hulas Farm, prototyping at CIM, and final presentations to industry executives.",
      },
      ctaText: "Join Next Design Thinking Workshop",
      ctaLink: "#takepart",
    },
    {
      id: "room-3",
      number: "03",
      title: "The Growth Room",
      theme: "GROW & INVEST",
      keyword: "CAPITAL",
      audience: "Small and Growing Businesses (SGBs) trading 1+ years",
      tagline: "Taking a working business all the way to investment-ready",
      icon: TrendingUp,
      accentColor: "text-amber-700",
      accentBg: "bg-amber-600",
      cardBorder: "hover:border-amber-500",
      pillBg: "bg-amber-50 text-amber-800 border-amber-200",
      allYear: [
        "Standardized Business Health Check-up diagnosing operational, tax & financial gaps",
        "High-impact masterclasses on compliance, book-keeping, unit economics & scaling operations",
        "1-on-1 clinics with certified chartered accountants, corporate lawyers & marketing experts",
        "Formulation of robust 3-year business plans and investor-grade data rooms",
      ],
      atPavilion: [
        "Business Stalls selling directly to real customers and retail buyers on Market Days",
        "Free Business Health Check-up walk-in diagnostics for any visiting business owner",
        "Live Pitch Day on 26 Dec to angel investors, commercial banks & institutional lenders",
        "One-on-one advisory corner: sit down with chartered accountants and legal advisors for free",
      ],
      alreadyDone: {
        title: "Running Now: BIC SGB Accelerator 2026",
        desc: "Two-month structured accelerator taking registered Koshi enterprises through financial audit, governance, and market expansion. Graduating founders will be exhibiting and pitching directly in Room 3.",
      },
      ctaText: "Get Free Business Health Check-up",
      ctaLink: "#takepart",
    },
  ];

  return (
    <section id="rooms" className="py-14 sm:py-20 bg-gray-50/50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Inside the Three Rooms
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            Curiosity. Capability. <span className="text-blue-600">Capital.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Each room hands something to the next. A student who makes a prototype in Room 1 arrives in Room 2
            already knowing how to ask good questions. A team that validates an idea in Room 2 arrives in Room 3
            with real metrics an investor or bank can review.
          </p>
        </div>

        {/* 3 Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {rooms.map((room, idx) => {
            const Icon = room.icon;
            const isSelected = activeTab === idx;
            return (
              <div
                key={room.id}
                onClick={() => setActiveTab(idx)}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "border-blue-500 shadow-md ring-2 ring-blue-500/10"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-xs"
                }`}
              >
                {/* Top strip */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                      ROOM {room.number}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${room.pillBg}`}>
                      {room.keyword}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white ${room.accentBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {room.title}
                      </h3>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {room.theme}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-gray-600 mt-3 pb-3 border-b border-gray-100">
                    <strong>Audience:</strong> {room.audience}
                  </p>

                  <p className="text-xs text-gray-600 italic mt-3">
                    &quot;{room.tagline}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>{isSelected ? "Currently Viewing" : "Click to view full schedule"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Details Card for Selected Room */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Detailed Room Plan · Room {rooms[activeTab].number}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${rooms[activeTab].pillBg}`}>
                  {rooms[activeTab].keyword}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                {rooms[activeTab].title} ({rooms[activeTab].theme})
              </h3>
              <p className="text-sm font-medium text-gray-600 mt-1">
                For {rooms[activeTab].audience}
              </p>
            </div>

            <a
              href={rooms[activeTab].ctaLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-all shrink-0 self-start sm:self-auto"
            >
              <span>{rooms[activeTab].ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            {/* Left: What we do all year */}
            <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  What We Do All Year (Continuous Pipeline)
                </h4>
              </div>
              <ul className="space-y-3">
                {rooms[activeTab].allYear.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: At the Pavilion during 10 days */}
            <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3.5">
                <SparklesIcon className="w-4 h-4 text-amber-600" />
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  What You Can Experience At The Pavilion (17–26 Dec)
                </h4>
              </div>
              <ul className="space-y-3">
                {rooms[activeTab].atPavilion.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Callout: Real Case History */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-blue-900">
                {rooms[activeTab].alreadyDone.title}:
              </span>{" "}
              <span className="text-blue-800/90">
                {rooms[activeTab].alreadyDone.desc}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z"
      />
    </svg>
  );
}
