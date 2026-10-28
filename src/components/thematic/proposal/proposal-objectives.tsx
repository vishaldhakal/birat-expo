import { 
  Building, 
  Network, 
  TrendingUp, 
  Handshake, 
  Search, 
  FileText, 
  Compass 
} from "lucide-react";

const objectives = [
  {
    number: "01",
    title: "Showcase Regional Strengths",
    description: "Showcase regional economic strengths and emerging business opportunities across Nepal.",
    icon: Building,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    number: "02",
    title: "Connect Strategic Stakeholders",
    description: "Connect businesses with buyers, suppliers, investors, distributors and technology partners.",
    icon: Network,
    color: "from-indigo-500 to-purple-600",
    bgLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    number: "03",
    title: "Inter-Provincial Trade & Investment",
    description: "Promote inter-provincial trade, investment and industrial collaboration across all seven provinces.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    number: "04",
    title: "Multi-Tier Partnerships",
    description: "Facilitate partnerships among chambers, enterprises, startups and institutions.",
    icon: Handshake,
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    number: "05",
    title: "Identify Value Chains & Markets",
    description: "Identify new markets, investment opportunities and regional value chains.",
    icon: Search,
    color: "from-cyan-500 to-blue-600",
    bgLight: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    number: "06",
    title: "Actionable Leads & Proposals",
    description: "Generate actionable business leads and collaboration proposals with structured follow-ups.",
    icon: FileText,
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    number: "07",
    title: "Position Biratnagar as Hub",
    description: "Position Biratnagar as a national meeting point for business networking and opportunity creation.",
    icon: Compass,
    color: "from-violet-600 to-indigo-800",
    bgLight: "bg-violet-50 text-violet-700 border-violet-200",
    isWide: true,
  },
];

export default function ProposalObjectives() {
  return (
    <section id="section-03" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-gray-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            03 · Objectives
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Strategic Objectives of the Summit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            The Summit is designed to serve three vital national needs: stronger buyer–supplier links across provinces, investable opportunities that create domestic jobs, and a unified private-sector voice.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.number}
                className={`group relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between ${
                  obj.isWide ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-slate-900 to-indigo-950 text-white border-transparent hover:border-indigo-500 shadow-indigo-950/20" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-black tracking-widest px-2.5 py-1 rounded-md border ${
                        obj.isWide
                          ? "bg-white/10 text-yellow-300 border-white/20"
                          : obj.bgLight
                      }`}
                    >
                      {obj.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        obj.isWide
                          ? "bg-white/10 text-yellow-300"
                          : `bg-gradient-to-br ${obj.color} text-white shadow-md`
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-2 ${
                      obj.isWide ? "text-white text-xl" : "text-gray-900"
                    }`}
                  >
                    {obj.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      obj.isWide ? "text-gray-300 max-w-3xl" : "text-gray-600"
                    }`}
                  >
                    {obj.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs font-semibold ${
                    obj.isWide
                      ? "border-white/10 text-yellow-300"
                      : "border-gray-100 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  }`}
                >
                  <span>Summit Deliverable</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
