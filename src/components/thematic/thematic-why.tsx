import {
  TrendingDown,
  PieChart,
  Coins,
  PlaneTakeoff,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Layers,
  MapPin,
} from "lucide-react";

interface FactItem {
  fact: string;
  figure: string;
  detail?: string;
  source: string;
  icon: typeof TrendingDown;
  color: string;
  badgeBg: string;
}

const facts: FactItem[] = [
  {
    fact: "Merchandise Imports vs. Exports",
    figure: "NRs 2,096B vs. NRs 315B",
    detail: "Trade Deficit: NRs 1,781 Billion",
    source: "Nepal Rastra Bank",
    icon: TrendingDown,
    color: "text-rose-600",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    fact: "Share of GDP: Bagmati & Koshi",
    figure: "36.7% & 15.8%",
    detail: "Other 5 provinces share the remaining 47.5%",
    source: "National Statistics Office",
    icon: PieChart,
    color: "text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    fact: "Annual Remittance Inflows",
    figure: "NRs 2.36 Trillion",
    detail: "Surpassing the annual national budget",
    source: "Nepal Rastra Bank",
    icon: Coins,
    color: "text-amber-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    fact: "Foreign-Employment Approvals",
    figure: "~792,000",
    detail: "Labour migration approvals recorded in the year",
    source: "Nepal Rastra Bank",
    icon: PlaneTakeoff,
    color: "text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

const implications = [
  {
    title: "Trade Gap",
    badge: "Day 2 Priority",
    text: "With imports far outstripping exports, domestic buyer–supplier links across provinces and export-ready local products are immediate priority opportunities.",
    icon: Layers,
  },
  {
    title: "Economic Concentration",
    badge: "National Stage",
    text: "Bagmati accounts for 36.7% of GDP and Koshi 15.8%. Regional chambers urgently need an authoritative stage to make their productive capacity visible to outside capital.",
    icon: MapPin,
  },
  {
    title: "Jobs and Migration",
    badge: "Day 1 Focus",
    text: "With ~792,000 labour approvals annually, the imperative to build investable domestic enterprises and retain talent at home has never been more urgent.",
    icon: Briefcase,
  },
  {
    title: "Koshi's Strategic Position",
    badge: "Meeting Point",
    text: "Trade is the second-largest sector in Koshi, while per capita GDP trails the national benchmark. Biratnagar is uniquely positioned as the natural hub for trade and distribution.",
    icon: ShieldCheck,
  },
];

export default function ThematicWhy() {
  return (
    <section className="bg-gradient-to-b from-gray-50/60 to-white py-20 sm:py-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            02 · Strategic Imperative
          </span>
          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Why Opportunity Connect, and <span className="text-blue-600">Why Now?</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
            Nepal&apos;s regional business communities hold proven industrial and agricultural strengths. 
            Yet, structured mechanisms that connect district chambers with buyers, investors, and interprovincial partners remain scarce. 
            The national data reflects exactly why these linkages cannot wait.
          </p>
        </div>

        {/* Fact Cards / Data Dashboard (FY 2025/26) */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">National Economic Reality (FY 2025/26)</h3>
              <p className="text-xs sm:text-sm text-gray-500">Official figures framing the economic necessity of regional business networking</p>
            </div>
            <span className="hidden sm:inline-flex items-center text-xs font-medium text-gray-400 bg-gray-100 rounded-md px-2.5 py-1">
              Source: NRB &amp; NSO
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl bg-gray-50 border border-gray-100 ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${item.badgeBg}`}>
                        FY 25/26
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {item.fact}
                    </p>
                    <p className="mt-1.5 text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                      {item.figure}
                    </p>
                    {item.detail && (
                      <p className="mt-1 text-xs text-gray-600 font-medium leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Source</span>
                    <span className="font-semibold text-gray-600">{item.source}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What the data means for the Summit */}
        <div className="mt-16 sm:mt-20">
          <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                What the Data Means for the Summit
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Translating macro indicators into concrete summit priorities and dedicated action tracks.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {implications.map((imp, idx) => {
                const ImpIcon = imp.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-5 transition hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100/70 text-indigo-700">
                      <ImpIcon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-bold text-gray-900">{imp.title}</h4>
                        <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 border border-indigo-100">
                          {imp.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pt-1">
                        {imp.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Three Needs Summary Banner */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/60 to-purple-50 p-6 border border-indigo-100/80">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">
                    The Summit Commitment
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
                    These figures point to three non-negotiable needs:{" "}
                    <span className="text-indigo-700">stronger buyer–supplier links across provinces</span>,{" "}
                    <span className="text-indigo-700">investable opportunities that create jobs at home</span>, and a{" "}
                    <span className="text-indigo-700">shared private-sector voice</span>.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Opportunity Connect is meticulously architected to serve all three.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
