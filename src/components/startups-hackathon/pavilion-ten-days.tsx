"use client";

import React, { useState } from "react";
import {
  Clock,
  Compass,
  Wrench,
  Trophy,
  ShoppingBag,
  Handshake,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function PavilionTenDays() {
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const schedule = [
    {
      id: "discover",
      dates: "17–18 DEC",
      daysRange: "Days 1 & 2",
      nepaliDates: "2–3 Poush 2083",
      name: "Discover",
      icon: Compass,
      tag: "School & College Cohorts",
      badgeBg: "bg-emerald-600",
      description: "Guided tours for school and college groups across all three rooms.",
      target: "Secondary schools, high school science clubs, and college batches by prior booking & walk-in.",
      agenda: [
        "Interactive walk-throughs in Room 1: 30-minute rapid prototyping at the Maker bench",
        "Introduction to design thinking fundamentals in Room 2",
        "Meeting young student makers and observing live prototypes in action",
        "Distribution of teacher handbooks and classroom maker toolkits",
      ],
      timing: "10:00 AM – 5:30 PM daily",
    },
    {
      id: "build",
      dates: "19–20 DEC",
      daysRange: "Days 3 & 4",
      nepaliDates: "4–5 Poush 2083",
      name: "Build",
      icon: Wrench,
      tag: "Maker & Tech Showcase",
      badgeBg: "bg-teal-600",
      description: "Live prototyping, 3D printing demos, and hardware hacker sessions in Rooms 1 & 2.",
      target: "Expo visitors, young builders, engineers, polytechnic students, and tech enthusiasts.",
      agenda: [
        "Rapid build challenge: turning raw electronic components into functional prototypes",
        "Hands-on 3D printing, laser crafting, and sensory circuit building workshops",
        "Public visitor interviews conducted live by student design teams in Room 2",
        "Exhibition of student hardware inventions addressing local Koshi challenges",
      ],
      timing: "10:30 AM – 5:00 PM daily",
    },
    {
      id: "compete",
      dates: "21–22 DEC",
      daysRange: "Days 5 & 6",
      nepaliDates: "6–7 Poush 2083",
      name: "Compete",
      icon: Trophy,
      tag: "Pitch Stage & Finals",
      badgeBg: "bg-blue-600",
      description: "Student pitch stage and the Vision Koshi Innovation Challenge finals.",
      target: "Innovation challenge finalists, university teams, hackathon winners, and startup aspirants.",
      agenda: [
        "Live 5-minute pitches on the Room 2 stage before an elite industry jury",
        "Showcase of student solutions for agriculture, tourism, urban mobility & digital health",
        "Jury Q&A and immediate feedback rounds on product-market fit",
        "Audience choice voting and presentation of milestone prizes",
      ],
      timing: "11:00 AM – 4:30 PM daily",
    },
    {
      id: "market",
      dates: "23–24 DEC",
      daysRange: "Days 7 & 8",
      nepaliDates: "8–9 Poush 2083",
      name: "Market",
      icon: ShoppingBag,
      tag: "B2B & Customer Sales",
      badgeBg: "bg-amber-600",
      description: "Business stalls, real customer transactions, and structured B2B meetings in Room 3.",
      target: "Local retail consumers, commercial distributors, wholesalers, and retail buyers.",
      agenda: [
        "Direct retail pop-up stalls for Koshi small and growing businesses",
        "Testing price elasticity, customer reception, and product packaging live",
        "B2B matchmaking tables connecting producers with regional retail chains",
        "Consumer feedback sessions and market adoption surveys",
      ],
      timing: "10:00 AM – 6:00 PM daily",
    },
    {
      id: "partner",
      dates: "25 DEC",
      daysRange: "Day 9",
      nepaliDates: "10 Poush 2083",
      name: "Partner",
      icon: Handshake,
      tag: "MOU & Policy Roundtable",
      badgeBg: "bg-purple-600",
      description: "MOU signings and the Koshi Entrepreneurship Ecosystem Roundtable.",
      target: "Government dignitaries, development partners, academic heads, and chamber leaders.",
      agenda: [
        "Formal MOU signings between academia, industry incubation, and municipal bodies",
        "Policy dialogue: 'Building an Innovation Corridor across Eastern Nepal'",
        "Launching new institutional incubation cohorts and college maker hubs",
        "Facilitating public-private linkages for upcoming startup seed capital",
      ],
      timing: "1:00 PM – 5:00 PM",
    },
    {
      id: "invest",
      dates: "26 DEC",
      daysRange: "Day 10 (Closing)",
      nepaliDates: "11 Poush 2083",
      name: "Invest",
      icon: TrendingUp,
      tag: "Investor Day & Awards",
      badgeBg: "bg-rose-600",
      description: "Investor day, formal business investment pitches, and the closing awards ceremony.",
      target: "Biratnagar Angels, venture capital funds, commercial banks, and graduating businesses.",
      agenda: [
        "Curated investment pitches by graduating SGB Accelerator companies",
        "Closed-door term sheet negotiations and syndication discussions with investors",
        "Keynote address by leading industrial leaders of Koshi Province",
        "Closing recognition ceremony celebrating mentors, innovators, and participants",
      ],
      timing: "11:00 AM – 5:30 PM",
    },
  ];

  return (
    <section id="programme" className="py-14 sm:py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            10-Day Festival Programme
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            Six Dedicated Focuses Across <span className="text-blue-600">Ten Days</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            All three rooms remain open and staffed every single day. Only the core thematic programme
            and primary focus rotate to serve the full breadth of the entrepreneurial ecosystem.
          </p>
        </div>

        {/* 6 Day Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {schedule.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedDay === idx;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedDay(idx)}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-blue-50/70 border-blue-500 shadow-xs ring-1 ring-blue-500"
                    : "bg-gray-50/80 border-gray-200 hover:bg-gray-100/70"
                }`}
              >
                <div>
                  <div className="text-[11px] font-black text-gray-500 uppercase tracking-wider">
                    {item.dates}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">
                    {item.daysRange}
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight mt-3 mb-1">
                    {item.name}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-gray-200/80 text-[10px] font-bold text-blue-600 uppercase tracking-tight text-center">
                  <span>{isSelected ? "Selected" : "Details"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Selected Day Schedule Banner */}
        <div className="bg-gray-50/90 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${schedule[selectedDay].badgeBg}`}>
                  {schedule[selectedDay].dates} · {schedule[selectedDay].daysRange}
                </span>
                <span className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-full">
                  {schedule[selectedDay].nepaliDates}
                </span>
                <span className="text-xs font-semibold text-gray-700">
                  Target: {schedule[selectedDay].tag}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                {schedule[selectedDay].name} Days
              </h3>
              <p className="text-sm font-medium text-gray-600 mt-1 max-w-2xl">
                {schedule[selectedDay].description}
              </p>
            </div>

            <div className="flex flex-col gap-1 text-left md:text-right shrink-0">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Operating Hours
              </span>
              <span className="text-sm font-bold text-gray-900 flex items-center md:justify-end gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" />
                {schedule[selectedDay].timing}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Key Activities &amp; Highlights Scheduled
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {schedule[selectedDay].agenda.map((act, i) => (
                <div
                  key={i}
                  className="bg-white p-3.5 rounded-xl border border-gray-200/90 flex items-start gap-2.5 text-xs sm:text-sm text-gray-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-2">
            <span>
              <strong>Note:</strong> School visits and student pitch entries must be registered in advance at the enquiry desk.
            </span>
            <a href="#takepart" className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1 group">
              <span>How to Take Part</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
