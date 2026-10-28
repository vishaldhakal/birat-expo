import { 
  Building2, 
  Presentation, 
  FileCheck2, 
  HeartHandshake, 
  Sparkles, 
  CalendarCheck, 
  FolderGit2, 
  Clock3 
} from "lucide-react";

const targets = [
  {
    value: "25–30",
    label: "Chambers Participating",
    description: "District & regional chambers representing business communities from all 7 provinces.",
    icon: Building2,
    gradient: "from-blue-600 to-indigo-600",
    textGradient: "text-blue-600",
  },
  {
    value: "Up to 18",
    label: "Chamber Presentations",
    description: "Curated 15-minute presentations delivered via the standardized CIM five-slide framework.",
    icon: Presentation,
    gradient: "from-indigo-600 to-violet-600",
    textGradient: "text-indigo-600",
  },
  {
    value: "At least 50",
    label: "Documented Business Opportunities",
    description: "Verified investment projects and trade offers featured live on the Opportunity Wall.",
    icon: FileCheck2,
    gradient: "from-emerald-600 to-teal-600",
    textGradient: "text-emerald-600",
  },
  {
    value: "At least 30",
    label: "Expressions of Interest",
    description: "Formal investor & buyer submissions logged through digital matching forms.",
    icon: HeartHandshake,
    gradient: "from-teal-600 to-cyan-600",
    textGradient: "text-teal-600",
  },
  {
    value: "At least 20",
    label: "Potential Business Matches",
    description: "Direct matches brokered between regional chambers, enterprises, and capital partners.",
    icon: Sparkles,
    gradient: "from-violet-600 to-purple-600",
    textGradient: "text-violet-600",
  },
  {
    value: "At least 10",
    label: "Follow-up Meetings",
    description: "Post-summit technical & commercial structuring sessions coordinated by CIM.",
    icon: CalendarCheck,
    gradient: "from-amber-600 to-orange-600",
    textGradient: "text-amber-600",
  },
  {
    value: "At least 5",
    label: "Collaboration Proposals",
    description: "Concrete inter-provincial joint ventures or supply agreements for long-term development.",
    icon: FolderGit2,
    gradient: "from-rose-600 to-pink-600",
    textGradient: "text-rose-600",
  },
];

export default function ProposalTargets() {
  return (
    <section id="section-05" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-gray-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              05 · Indicative Targets
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Measurable Milestones &amp; Scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Clear quantitative benchmarks established by CIM to ensure the Summit delivers measurable commercial outcomes rather than abstract talks.
            </p>
          </div>

          {/* CIM Reporting Pledge Pill */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-5 rounded-2xl shadow-lg border border-indigo-900/40 lg:max-w-sm flex items-start gap-3.5">
            <Clock3 className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <p className="font-bold text-yellow-300 uppercase tracking-wider text-[11px] mb-1">
                Accountability Framework
              </p>
              <p className="text-gray-300">
                Targets are indicative and depend on confirmed participation.{" "}
                <strong className="text-white font-semibold">CIM will publish public progress reports at 30 and 90 days</strong> after the Summit.
              </p>
            </div>
          </div>
        </div>

        {/* Targets Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {targets.map((target, idx) => {
            const Icon = target.icon;
            const isHighlight = idx === 2; // "At least 50 opportunities"
            return (
              <div
                key={target.label}
                className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? "bg-gradient-to-br from-indigo-900 to-slate-900 text-white border-indigo-700 shadow-xl lg:scale-105 z-10"
                    : "bg-white text-gray-900 border-gray-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isHighlight
                          ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      Target {idx + 1}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isHighlight
                          ? "bg-white/10 text-yellow-300"
                          : "bg-indigo-50 text-indigo-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div
                    className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 ${
                      isHighlight ? "text-yellow-300" : target.textGradient
                    }`}
                  >
                    {target.value}
                  </div>
                  <h4
                    className={`text-base font-bold mb-2 ${
                      isHighlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {target.label}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isHighlight ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {target.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${
                    isHighlight
                      ? "border-white/10 text-yellow-300/80"
                      : "border-gray-100 text-gray-400"
                  }`}
                >
                  <span>CIM Verified</span>
                  <span>100% Tracking</span>
                </div>
              </div>
            );
          })}

          {/* Quick Registration Card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-lg flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white">
                Get Involved
              </span>
              <h4 className="text-xl font-bold mt-4 mb-2 text-white">
                Be Part of These Numbers
              </h4>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Register your chamber or enterprise to present an opportunity, book B2B meetings, or display on the Opportunity Wall.
              </p>
            </div>
            <a
              href="/thematic/register"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-900 font-bold text-xs uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-md"
            >
              <span>Register Interest</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
