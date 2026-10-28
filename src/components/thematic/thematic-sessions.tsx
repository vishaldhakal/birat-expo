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
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Birat Business Summit 2026
          </span>
          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Summit Schedule &amp; <span className="text-blue-600">Thematic Days</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
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
      </div>
    </section>
  );
}
