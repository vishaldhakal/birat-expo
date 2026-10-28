import { 
  CheckCircle, 
  TrendingUp, 
  Target, 
  Sparkles, 
  Award,
  Users2,
  Presentation,
  FileCheck2,
  HeartHandshake,
  Workflow,
  CalendarCheck,
  FolderKanban
} from "lucide-react";

const results = [
  {
    metric: "15–18",
    title: "Chamber Delegations",
    detail: "Participation of 15–18 district and regional chambers from across Nepal.",
    icon: Users2,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    metric: "Up to 18",
    title: "Chamber Presentations",
    detail: "High-level presentations delivered on the main summit stage.",
    icon: Presentation,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
  },
  {
    metric: "≥ 50",
    title: "Documented Opportunities",
    detail: "At least 50 documented regional business and investment opportunities.",
    icon: FileCheck2,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
  },
  {
    metric: "≥ 30",
    title: "Expressions of Interest",
    detail: "At least 30 qualified expressions of interest from buyers and investors.",
    icon: HeartHandshake,
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-100",
  },
  {
    metric: "≥ 20",
    title: "Potential Business Matches",
    detail: "At least 20 verified commercial and supply-chain linkages.",
    icon: Workflow,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
  },
  {
    metric: "≥ 10",
    title: "Structured Follow-Up Meetings",
    detail: "At least 10 formal bilateral follow-up meetings post-summit.",
    icon: CalendarCheck,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
  },
  {
    metric: "≥ 5",
    title: "Collaboration Proposals",
    detail: "At least five concrete collaboration proposals for long-term development.",
    icon: FolderKanban,
    color: "text-rose-600",
    bg: "bg-rose-50 border-rose-100",
  },
];

export default function ProposalExpectedResults() {
  return (
    <section id="section-09" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-gray-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            09 · Expected Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Anticipated Deliverables &amp; Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            By turning conversations into structured commercial matching and actionable follow-ups, the Summit aims to achieve measurable benchmarks for all participating districts.
          </p>
        </div>

        {/* Results Checklist Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((res, idx) => {
            const Icon = res.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${res.bg} ${res.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      Deliverable {idx + 1}
                    </span>
                  </div>

                  <div className={`text-2xl sm:text-3xl font-black tracking-tight ${res.color}`}>
                    {res.metric}
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mt-1 mb-2">
                    {res.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {res.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Target</span>
                </div>
              </div>
            );
          })}

          {/* Implementation Notice Card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                Official Capacity Note
              </span>
              <h4 className="text-lg font-bold mt-2 text-white">
                Implementation Guarantee
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                These are indicative targets subject to confirmed participation and implementation capacity. CIM guarantees dedicated follow-up through the Opportunity Connect Secretariat.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400">
              Chamber of Industries Morang (CIM)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
