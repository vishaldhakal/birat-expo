import { ThematicSession } from "@/types/thematic";
import { CalendarDays, Clock, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SessionCardProps {
  session: ThematicSession;
}

export function SessionCard({ session }: SessionCardProps) {
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  // Extract key themes / focus from description if available
  const hasDescription = Boolean(session.description && session.description.trim());

  // Split title into Day & Theme if formatted as "DAY X —THEME: ..."
  const titleParts = session.title.split("—");
  const dayBadge = titleParts.length > 1 ? titleParts[0].trim() : `Day ${session.id}`;
  const mainTitle = titleParts.length > 1 ? titleParts.slice(1).join("—").trim() : session.title;

  return (
    <div className="group relative bg-white rounded-3xl border border-gray-200/90 hover:border-indigo-500/80 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between overflow-hidden">
      {/* Decorative Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
            <Sparkles className="w-3 h-3 text-indigo-500" />
            {dayBadge}
          </span>

          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500">
            <span className="inline-flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
              <CalendarDays className="h-3.5 w-3.5 text-indigo-600" />
              {session.date}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
              <Clock className="h-3.5 w-3.5 text-indigo-600" />
              {session.start_time} – {session.end_time}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-4 leading-snug">
          {mainTitle}
        </h3>

        {/* Description Section */}
        {hasDescription && (
          <div className="mt-2 flex-1">
            <div
              className={`prose prose-sm max-w-none text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 session-desc ${
                showFullSchedule ? "max-h-[1200px]" : "max-h-48 relative"
              }`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: session.description }}
                className="[&>p]:mb-2 [&>p]:leading-relaxed [&_table]:w-full [&_table]:text-xs [&_table]:my-3 [&_table]:border-collapse [&_th]:bg-gray-100 [&_th]:p-2 [&_th]:border [&_th]:border-gray-200 [&_td]:p-2 [&_td]:border [&_td]:border-gray-200 [&_tr:nth-child(even)]:bg-gray-50/50"
              />
              {!showFullSchedule && (
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
              )}
            </div>

            {/* Toggle Table/Schedule Button */}
            <button
              type="button"
              onClick={() => setShowFullSchedule((prev) => !prev)}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition"
            >
              {showFullSchedule ? "Show less" : "View full schedule & timeline"}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showFullSchedule ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Card Footer / Action CTA */}
      <div className="px-6 sm:px-8 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between gap-4 mt-auto">
        <Link
          href={`/thematic/details/${session.id}`}
          className="text-xs font-semibold text-gray-600 hover:text-indigo-600 transition"
        >
          Session details & speakers →
        </Link>

        <Link
          href={`/thematic/register?session=${session.id}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm hover:shadow"
        >
          Register for Day
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
