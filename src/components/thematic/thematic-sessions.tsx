"use client";

import { useGetThematicSessions } from "@/api/thematic";
import { SessionCard } from "./components/session-card";

export default function ThematicSessions() {
  const { thematicSessions, thematicSessionsLoading } =
    useGetThematicSessions();

  // Sort sessions sequentially: Day 1, Day 2, Day 3
  const sortedSessions = [...(thematicSessions || [])].sort((a, b) => {
    if (a.date && b.date) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return a.id - b.id;
  });

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 mb-2">
            Birat Business Summit 2026
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Summit Schedule &amp; Thematic Days
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            Explore our comprehensive three-day program addressing investment,
            interprovincial trade, partnerships, and enterprise innovation.
            Review the complete schedule below and register for each day.
          </p>
        </div>

        {/* Sessions Stack: Day 1, below Day 2, below Day 3 */}
        {thematicSessionsLoading ? (
          <div className="mt-16 grid place-items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
          </div>
        ) : (
          <div className="mx-auto mt-12 sm:mt-16 max-w-5xl space-y-12 sm:space-y-16">
            {sortedSessions.map((session, index) => (
              <SessionCard key={session.id} session={session} index={index} />
            ))}
          </div>
        )}

        {/* Registration CTA Footer */}
        <div className="mt-20 sm:mt-24 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-gray-600 text-sm sm:text-base">
              Activities include Startup Hackathon, Rojagar Koshi live training
              for youths, Business Clinic, Q-HSEF, B2B sessions, and various
              thematic discussions.
            </p>
            <a
              href="/thematic/register"
              className="inline-flex items-center px-8 py-4 text-base sm:text-lg rounded-full text-white font-medium 
                     bg-gradient-to-r from-blue-600 to-indigo-600 
                     hover:from-blue-700 hover:to-indigo-700 
                     transition-all duration-200 shadow-lg hover:shadow-xl
                     transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Register for All Sessions
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
