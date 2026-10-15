import { ThematicSession } from "@/types/thematic";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SessionCardProps {
  session: ThematicSession;
  index?: number;
}

function parseDayAndTheme(title: string, fallbackIndex: number) {
  // Common format from API: "DAY 1 —THEME: INVEST & BUILD"
  const match = title.match(/DAY\s*(\d+)[\s—–:-]*(?:THEME:?\s*)?(.*)/i);
  if (match) {
    const dayNum = match[1];
    const themeName = match[2].trim() || title;
    return {
      dayNumber: Number(dayNum),
      dayLabel: `Day ${dayNum}`,
      theme: themeName.replace(/^[-—–:\s]+/, "").trim(),
    };
  }

  const parts = title.split("—");
  if (parts.length > 1) {
    return {
      dayNumber: fallbackIndex + 1,
      dayLabel: parts[0].trim(),
      theme: parts.slice(1).join("—").trim(),
    };
  }

  return {
    dayNumber: fallbackIndex + 1,
    dayLabel: `Day ${fallbackIndex + 1}`,
    theme: title,
  };
}

function formatSessionDate(dateStr?: string) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function formatSessionTime(timeStr?: string) {
  if (!timeStr) return "";
  const parts = timeStr.split(":");
  if (parts.length >= 2) {
    let hours = parseInt(parts[0], 10);
    const minutes = parts[1];
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  }
  return timeStr;
}

function enhanceDescription(html: string) {
  if (!html) return "";
  return html
    .replace(/(Focus:)/gi, '<strong class="text-gray-900 font-semibold">$1</strong>')
    .replace(/(Key question:)/gi, '<strong class="text-indigo-950 font-semibold">$1</strong>')
    .replace(/(Priority areas:)/gi, '<strong class="text-gray-900 font-semibold">$1</strong>');
}

export function SessionCard({ session, index = 0 }: SessionCardProps) {
  const { dayLabel, theme } = parseDayAndTheme(session.title, index);
  const formattedDate = formatSessionDate(session.date);
  const formattedStartTime = formatSessionTime(session.start_time);
  const formattedEndTime = formatSessionTime(session.end_time);

  const hasDescription = Boolean(session.description && session.description.trim());
  const enhancedHtml = hasDescription ? enhanceDescription(session.description) : "";
  const hasPanelists = Boolean(session.thematicpanelists && session.thematicpanelists.length > 0);
  const hasSubSessions = Boolean(session.sub_sessions && session.sub_sessions.length > 0);

  return (
    <div
      id={`day-${session.id}`}
      className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Decorative Top Accent Bar */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

      {/* Main Container */}
      <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-100">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Day Badge - No Sparkles Icon */}
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80">
              {dayLabel}
            </span>

            {/* Date Pill */}
            {formattedDate && (
              <span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-gray-200/70">
                <CalendarDays className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                {formattedDate}
              </span>
            )}

            {/* Time Pill */}
            {(formattedStartTime || formattedEndTime) && (
              <span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-gray-200/70">
                <Clock className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                {formattedStartTime} – {formattedEndTime}
              </span>
            )}
          </div>

          {/* Top Register Button */}
          <Link
            href={`/thematic/register?session=${session.id}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-sm hover:shadow-md shrink-0 self-start md:self-auto"
          >
            <span>Register for {dayLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Theme Title */}
        <div className="mt-6 mb-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
            <span className="text-indigo-600">{dayLabel}: </span>
            {theme}
          </h3>
        </div>

        {/* Full Details & Schedule (No truncation, no details page needed) */}
        {hasDescription && (
          <div className="mt-2 text-gray-700 leading-relaxed">
            <div
              className="
                prose prose-slate max-w-none text-gray-700
                [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-gray-700 [&>p]:mb-3.5
                [&_strong]:font-semibold [&_strong]:text-gray-900
                [&>div]:my-6 [&>div]:w-full [&>div]:overflow-x-auto [&>div]:rounded-2xl [&>div]:border [&>div]:border-gray-200 [&>div]:shadow-sm
                [&_table]:w-full [&_table]:min-w-[550px] [&_table]:border-collapse [&_table]:text-sm
                [&_tr]:border-b [&_tr]:border-gray-200 [&_tr:last-child]:border-b-0
                [&_tr:first-child]:bg-indigo-50/80 [&_tr:first-child_td]:font-bold [&_tr:first-child_td]:text-indigo-950 [&_tr:first-child_td]:text-xs [&_tr:first-child_td]:uppercase [&_tr:first-child_td]:tracking-wider
                [&_tr:not(:first-child):nth-child(even)]:bg-slate-50/60
                [&_tr:not(:first-child):hover]:bg-indigo-50/40 [&_tr]:transition-colors
                [&_td]:px-4 [&_td]:py-3.5 [&_td]:text-slate-700 [&_td]:border-r [&_td]:border-gray-200/80 [&_td:last-child]:border-r-0
                [&_td:first-child]:font-semibold [&_td:first-child]:text-indigo-900 [&_td:first-child]:whitespace-nowrap [&_td:first-child]:w-[180px]
                [&_td_p]:mb-0 [&_td_p]:leading-normal
              "
              dangerouslySetInnerHTML={{ __html: enhancedHtml }}
            />
          </div>
        )}

        {/* Panelists / Speakers (if available) */}
        {hasPanelists && (
          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Speakers & Panelists
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {session.thematicpanelists.map((panelist, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center gap-4"
                >
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-200">
                    <Image
                      src={panelist.profile_image || "/placeholder.svg"}
                      alt={panelist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {panelist.name}
                    </p>
                    {panelist.role && (
                      <p className="text-xs text-indigo-600 font-medium">
                        {panelist.role}
                      </p>
                    )}
                    {panelist.company && (
                      <p className="text-xs text-gray-500 truncate">
                        {panelist.company}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub Sessions (if available) */}
        {hasSubSessions && (
          <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
            <h4 className="text-lg font-bold text-gray-900">Sub-Sessions</h4>
            {session.sub_sessions.map((sub) => (
              <div
                key={sub.id}
                className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100"
              >
                <h5 className="text-base font-bold text-gray-900 mb-2">
                  {sub.title}
                </h5>
                <div
                  className="prose prose-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: sub.description }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Bottom CTA Footer */}
      <div className="px-6 sm:px-8 lg:px-10 py-5 bg-gradient-to-r from-gray-50 to-indigo-50/30 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
        <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          Participate in <span className="font-semibold text-gray-900">{dayLabel}</span> networking, B2B discussions, and partnerships.
        </p>

        <Link
          href={`/thematic/register?session=${session.id}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] transition shadow-md hover:shadow-lg w-full sm:w-auto shrink-0"
        >
          <span>Register for {dayLabel}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
