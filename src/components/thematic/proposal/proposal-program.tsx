"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CalendarDays, 
  Clock, 
  ArrowRight, 
  HelpCircle, 
  Briefcase, 
  FileSignature, 
  Sparkles,
  Layers,
  Users2,
  Coffee,
  MessageSquare,
  ShieldCheck
} from "lucide-react";

interface ScheduleItem {
  time: string;
  session: string;
  whatHappens: string;
  type?: "keynote" | "exchange" | "dialogue" | "b2b" | "break" | "general" | "compact";
}

interface DayProgram {
  dayNumber: number;
  dayLabel: string;
  date: string;
  theme: string;
  focus: string;
  keyQuestion: string;
  anchorQuestion: string;
  priorityAreas: string;
  closingOutput: string;
  sessionId: number;
  colorScheme: {
    tabActive: string;
    border: string;
    badge: string;
    gradient: string;
  };
  schedule: ScheduleItem[];
}

const programDays: DayProgram[] = [
  {
    dayNumber: 1,
    dayLabel: "DAY 1",
    date: "Sunday 20 December 2026",
    theme: "Invest & Build",
    focus: "Regional investment and industrial opportunities",
    keyQuestion: "Where can we invest and build together?",
    anchorQuestion: "Economy 2035: what economy do we want to build, and where is the next billion-rupee opportunity?",
    priorityAreas: "Manufacturing, agro-processing, industrial infrastructure, investment, logistics, energy, joint ventures",
    closingOutput: "Investment and partnership leads",
    sessionId: 1,
    colorScheme: {
      tabActive: "bg-blue-600 text-white shadow-blue-200",
      border: "border-blue-500",
      badge: "bg-blue-100 text-blue-800",
      gradient: "from-blue-600 to-indigo-700",
    },
    schedule: [
      {
        time: "9:00–9:30 AM",
        session: "Registration",
        whatHappens: "Delegates register and take their seats",
        type: "general",
      },
      {
        time: "9:30–9:50 AM",
        session: "Welcome and opening",
        whatHappens: "CIM welcome; overview of Birat Expo 2026, the Summit and how the three days work",
        type: "general",
      },
      {
        time: "9:50–10:20 AM",
        session: "Keynote: Economy 2035",
        whatHappens: "What kind of economy do we want to build? Our competitive advantage; manufacturing-led or service-led growth; productive jobs and keeping young people; Biratnagar's role as an economic hub",
        type: "keynote",
      },
      {
        time: "10:20–11:50 AM",
        session: "Chamber Exchange",
        whatHappens: "Six chambers, 15 minutes each (10 minutes presenting, 5 minutes questions), on investment and industrial opportunities",
        type: "exchange",
      },
      {
        time: "11:50 AM–12:20 PM",
        session: "Networking break & Opportunity Wall",
        whatHappens: "Refreshments; visit the Wall and register interest in opportunities",
        type: "break",
      },
      {
        time: "12:20–1:20 PM",
        session: "Business Dialogue: Investment, manufacturing & regional value chains",
        whatHappens: "Panel on where the next billion-rupee opportunity lies and how regions can invest and build together",
        type: "dialogue",
      },
      {
        time: "1:20–1:50 PM",
        session: "Collaboration Room: Investment & industrial partnerships",
        whatHappens: "Sector tables for manufacturing and agro-processing; infrastructure, energy and logistics; joint ventures and financing",
        type: "exchange",
      },
      {
        time: "1:50–2:00 PM",
        session: "Daily highlights and follow-up",
        whatHappens: "Top opportunities of the day; B2B booking reminder; preview of Day 2",
        type: "general",
      },
      {
        time: "2:00–3:00 PM",
        session: "Lunch",
        whatHappens: "Networking luncheon for all delegates and invited investors",
        type: "break",
      },
      {
        time: "3:00–5:00 PM",
        session: "B2B meetings & Matching Desk",
        whatHappens: "Pre-booked one-to-one meetings at the matching desk; optional industrial visits (to be confirmed)",
        type: "b2b",
      },
    ],
  },
  {
    dayNumber: 2,
    dayLabel: "DAY 2",
    date: "Monday 21 December 2026",
    theme: "Connect & Expand",
    focus: "Markets, trade and business partnerships",
    keyQuestion: "Where can we find new markets and business partners?",
    anchorQuestion: "Can Nepali industry compete, and where can we sell, source and partner?",
    priorityAreas: "Buyers and suppliers, exports, distribution networks, tourism, logistics, inter-provincial trade",
    closingOutput: "Buyer–supplier and distribution leads",
    sessionId: 2,
    colorScheme: {
      tabActive: "bg-emerald-600 text-white shadow-emerald-200",
      border: "border-emerald-500",
      badge: "bg-emerald-100 text-emerald-800",
      gradient: "from-emerald-600 to-teal-700",
    },
    schedule: [
      {
        time: "9:00–9:30 AM",
        session: "Registration",
        whatHappens: "New delegates register and take their seats",
        type: "general",
      },
      {
        time: "9:30–9:50 AM",
        session: "Welcome and Day 1 recap",
        whatHappens: "Highlights and leads from Day 1; plan for the day",
        type: "general",
      },
      {
        time: "9:50–10:20 AM",
        session: "Keynote: Competitiveness",
        whatHappens: "Can Nepali industry compete? Where can we sell, source and partner?",
        type: "keynote",
      },
      {
        time: "10:20–11:50 AM",
        session: "Chamber Exchange",
        whatHappens: "Six chambers, 15 minutes each (10 minutes presenting, 5 minutes questions), on market, trade and partnership opportunities",
        type: "exchange",
      },
      {
        time: "11:50 AM–12:20 PM",
        session: "Networking break & Opportunity Wall",
        whatHappens: "Refreshments; visit the Wall and register interest in opportunities",
        type: "break",
      },
      {
        time: "12:20–1:20 PM",
        session: "Business Dialogue: Buyers, suppliers and market linkages",
        whatHappens: "Panel on market access, regional value chains, exports and inter-provincial trade",
        type: "dialogue",
      },
      {
        time: "1:20–1:50 PM",
        session: "Collaboration Room: Trade, distribution and supply chains",
        whatHappens: "Tables for buyers and suppliers; exports; distribution and logistics; tourism",
        type: "exchange",
      },
      {
        time: "1:50–2:00 PM",
        session: "Daily highlights and follow-up",
        whatHappens: "Top opportunities of the day; B2B booking reminder; preview of Day 3",
        type: "general",
      },
      {
        time: "2:00–3:00 PM",
        session: "Lunch",
        whatHappens: "Networking luncheon and business exchanges",
        type: "break",
      },
      {
        time: "3:00–5:00 PM",
        session: "B2B meetings & Matching Desk",
        whatHappens: "Pre-booked one-to-one meetings at the matching desk; optional industrial visits (to be confirmed)",
        type: "b2b",
      },
    ],
  },
  {
    dayNumber: 3,
    dayLabel: "DAY 3",
    date: "Tuesday 22 December 2026",
    theme: "Influence & Grow",
    focus: "Policy, innovation, skills and enterprise collaboration",
    keyQuestion: "What can we change and build together?",
    anchorQuestion: "What must government and institutions change to make opportunities investable, and what industry problems can startups solve?",
    priorityAreas: "Policy, digital transformation, startups, technology, skills, green industry, entrepreneurship",
    closingOutput: "Birat Chamber Compact",
    sessionId: 3,
    colorScheme: {
      tabActive: "bg-purple-600 text-white shadow-purple-200",
      border: "border-purple-500",
      badge: "bg-purple-100 text-purple-800",
      gradient: "from-purple-600 to-indigo-800",
    },
    schedule: [
      {
        time: "9:00–9:30 AM",
        session: "Registration",
        whatHappens: "New delegates register and take their seats",
        type: "general",
      },
      {
        time: "9:30–9:50 AM",
        session: "Welcome and Day 2 recap",
        whatHappens: "Highlights and leads from Day 2; plan for the day",
        type: "general",
      },
      {
        time: "9:50–10:20 AM",
        session: "Keynote: Making opportunities investable",
        whatHappens: "What must government and institutions change so that these opportunities can attract investment?",
        type: "keynote",
      },
      {
        time: "10:20–11:50 AM",
        session: "Chamber Exchange",
        whatHappens: "Six chambers, 15 minutes each (10 minutes presenting, 5 minutes questions), on innovation, skills and enterprise opportunities",
        type: "exchange",
      },
      {
        time: "11:50 AM–12:20 PM",
        session: "Networking break & Opportunity Wall",
        whatHappens: "Refreshments; visit the Wall and register interest in opportunities",
        type: "break",
      },
      {
        time: "12:20–1:00 PM",
        session: "Business Dialogue: Industry, startups, skills & innovation",
        whatHappens: "Panel on what problems of industry startups can solve, and on digital transformation, talent and green industry",
        type: "dialogue",
      },
      {
        time: "1:00–1:40 PM",
        session: "National Chamber Collaboration Roundtable",
        whatHappens: "Chamber leaders agree common policy asks and collaboration commitments for the Birat Chamber Compact",
        type: "compact",
      },
      {
        time: "1:40–2:00 PM",
        session: "Compact signing and closing",
        whatHappens: "Signing of the Birat Chamber Compact; announcement of the Opportunity Connect Network; thanks and closing",
        type: "compact",
      },
      {
        time: "2:00–3:00 PM",
        session: "Lunch",
        whatHappens: "Celebratory closing luncheon",
        type: "break",
      },
      {
        time: "3:00–5:00 PM",
        session: "B2B meetings & farewell",
        whatHappens: "Final pre-booked meetings; Follow-up Desk records each next step",
        type: "b2b",
      },
    ],
  },
];

export default function ProposalProgram() {
  const [selectedDay, setSelectedDay] = useState(1);
  const activeDayData = programDays.find((d) => d.dayNumber === selectedDay) || programDays[0];

  const getSessionBadge = (type?: string) => {
    switch (type) {
      case "keynote":
        return <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">Keynote</span>;
      case "exchange":
        return <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">Chamber Exchange</span>;
      case "dialogue":
        return <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">Business Dialogue</span>;
      case "b2b":
        return <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">B2B Matches</span>;
      case "compact":
        return <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">Chamber Compact</span>;
      case "break":
        return <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Break</span>;
      default:
        return <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">Plenary</span>;
    }
  };

  return (
    <section id="section-06" className="py-16 sm:py-24 bg-white border-b border-gray-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-4">
            <CalendarDays className="w-3.5 h-3.5 text-blue-600" />
            06 · Program Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Three Days Program at a Glance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Each day has one clear theme and anchor question, following the same structured rhythm: a keynote, six chamber presentations, a business dialogue and a collaboration session in the morning, followed by pre-booked B2B meetings after lunch.
          </p>
        </div>

        {/* Comparison Matrix Cards */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            Summit Structure Matrix (Day 1 – Day 3)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programDays.map((pDay) => {
              const isSelected = selectedDay === pDay.dayNumber;
              return (
                <div
                  key={pDay.dayNumber}
                  onClick={() => setSelectedDay(pDay.dayNumber)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 border-2 transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? `${pDay.colorScheme.border} bg-gradient-to-b from-slate-50 to-white shadow-xl scale-[1.02] ring-2 ring-indigo-500/20`
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${pDay.colorScheme.badge}`}>
                        {pDay.dayLabel}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {pDay.date.split(" ")[0]} {pDay.date.split(" ")[1]} Dec
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {pDay.theme}
                    </h4>

                    {/* Anchor Question */}
                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5 mb-1">
                        <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                        Anchor Question
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-gray-800 italic leading-snug">
                        &ldquo;{pDay.anchorQuestion}&rdquo;
                      </p>
                    </div>

                    {/* Priority Areas */}
                    <div className="mt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                        Priority Areas
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {pDay.priorityAreas}
                      </p>
                    </div>

                    {/* Closing Output */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                        Closing Deliverable
                      </p>
                      <p className="text-xs font-semibold text-indigo-700">
                        {pDay.closingOutput}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`mt-6 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span>{isSelected ? "Viewing Detailed Schedule" : "View Detailed Schedule"}</span>
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Timetable for Selected Day */}
        <div className="mt-16 bg-slate-50 rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Day Selector Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${activeDayData.colorScheme.badge}`}>
                  {activeDayData.dayLabel} Schedule
                </span>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">
                  {activeDayData.date}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                {activeDayData.dayLabel}: {activeDayData.theme}
              </h3>
            </div>

            {/* Quick Switcher Buttons */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-gray-200 shadow-sm">
              {programDays.map((pDay) => (
                <button
                  key={pDay.dayNumber}
                  onClick={() => setSelectedDay(pDay.dayNumber)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    selectedDay === pDay.dayNumber
                      ? pDay.colorScheme.tabActive
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {pDay.dayLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Focus & Key Question Banner */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Day Focus</span>
              <p className="text-sm font-semibold text-gray-900 mt-1">
                {activeDayData.focus}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-100 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-900">Key Question</span>
              <p className="text-sm font-semibold text-indigo-950 mt-1 italic">
                &ldquo;{activeDayData.keyQuestion}&rdquo;
              </p>
            </div>
          </div>

          {/* Schedule Table (Desktop & Tablet) / Cards (Mobile) */}
          <div className="mt-8">
            {/* Desktop Table View */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 text-left">
                <thead className="bg-slate-100/80">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-700 w-44">
                      Time
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-700 w-72">
                      Session
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-700">
                      What Happens / Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {activeDayData.schedule.map((slot, sIdx) => (
                    <tr
                      key={sIdx}
                      className={`hover:bg-indigo-50/30 transition-colors ${
                        slot.type === "break" ? "bg-slate-50/50" : ""
                      }`}
                    >
                      <td className="px-5 py-4 whitespace-nowrap text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>{slot.time}</span>
                      </td>
                      <td className="px-5 py-4 text-sm font-bold text-gray-900">
                        <div className="flex flex-col gap-1.5">
                          <span>{slot.session}</span>
                          <div>{getSessionBadge(slot.type)}</div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {slot.whatHappens}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="sm:hidden space-y-3">
              {activeDayData.schedule.map((slot, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-md">
                      <Clock className="w-3 h-3 text-indigo-600" />
                      {slot.time}
                    </span>
                    {getSessionBadge(slot.type)}
                  </div>
                  <h5 className="text-sm font-bold text-gray-900">
                    {slot.session}
                  </h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {slot.whatHappens}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Keynote Notice & CTA for Selected Day */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 italic text-center sm:text-left">
              * Keynote speakers and panellists will be announced in the official invitation.
            </p>
            <Link
              href={`/thematic/register?session=${activeDayData.sessionId}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 transition shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <span>Register for {activeDayData.dayLabel} ({activeDayData.theme})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
