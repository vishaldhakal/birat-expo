import { ChevronRight } from "lucide-react";

export default function ThematicWhy() {
  const nationalData = [
    {
      fact: "Merchandise imports against exports",
      figure: "NRs 2,096B vs. NRs 315B",
      detail: "Trade deficit: NRs 1,781 billion",
      source: "Nepal Rastra Bank",
    },
    {
      fact: "Share of GDP: Bagmati and Koshi",
      figure: "36.7% & 15.8%",
      detail: "Remaining 5 provinces share 47.5%",
      source: "National Statistics Office",
    },
    {
      fact: "Annual remittance inflows",
      figure: "NRs 2.36 Trillion",
      detail: "Surpassing the annual national budget",
      source: "Nepal Rastra Bank",
    },
    {
      fact: "Foreign-employment approvals",
      figure: "~792,000",
      detail: "Labour approvals recorded in the year",
      source: "Nepal Rastra Bank",
    },
  ];

  const whatItMeans = [
    {
      title: "Trade Gap",
      tag: "Day 2 Priority",
      text: "With imports far above exports, domestic buyer–supplier links across provinces and export-ready products are priority opportunities. Both are core to Day 2.",
    },
    {
      title: "Concentration",
      tag: "Provincial Stage",
      text: "NSO estimates put Bagmati at 36.7% of GDP and Koshi second at 15.8%, with the other five provinces sharing the rest. Regional chambers need a stage where their strengths are seen by buyers and investors elsewhere.",
    },
    {
      title: "Jobs and Migration",
      tag: "Day 1 Focus",
      text: "With about 792,000 labour approvals in a year, the case for investable opportunities at home is strong, and it frames Day 1.",
    },
    {
      title: "Koshi's Own Position",
      tag: "Trade Hub",
      text: "Trade is the second-largest sector in Koshi, and per capita GDP is below the national average. Biratnagar is well placed as a natural meeting point for trade and distribution.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Strategic Imperative
          </span>
          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Why Opportunity Connect, and <span className="text-blue-600">Why Now?</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
            Nepal&apos;s regional business communities hold real strengths, yet structured platforms that connect district chambers with buyers, investors and partners in other provinces remain limited. The national picture shows why such links matter.
          </p>
        </div>

        {/* Visual Block 1: National Economic Reality (FY 2025/26 Table & Cards) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-950">
                National Economic Context (FY 2025/26)
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Official macroeconomic indicators framing regional collaboration
              </p>
            </div>
            <span className="text-xs font-mono font-medium text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md hidden sm:inline-block">
              Sources: NRB &amp; NSO
            </span>
          </div>

          {/* Clean 4-Column Stat Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nationalData.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-gray-200 bg-white flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Indicator {idx + 1}
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight mt-1">
                    {item.figure}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 mt-1">
                    {item.fact}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span>Source</span>
                  <span className="font-semibold text-gray-700">{item.source}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Official Context Table (from Proposal Page 2) */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
                <thead className="bg-gray-50 font-bold text-gray-900">
                  <tr>
                    <th className="px-5 py-3.5 w-1/3">Fact (FY 2025/26)</th>
                    <th className="px-5 py-3.5">Figure</th>
                    <th className="px-5 py-3.5 w-48">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-5 py-3.5 font-bold text-gray-950">
                      Merchandise imports against exports
                    </td>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">
                      NRs 2,096 billion against NRs 315 billion; trade deficit NRs 1,781 billion
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">
                      Nepal Rastra Bank
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-5 py-3.5 font-bold text-gray-950">
                      Share of GDP: Bagmati and Koshi
                    </td>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">
                      36.7% and 15.8%; the other five provinces share the rest
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">
                      National Statistics Office
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-5 py-3.5 font-bold text-gray-950">
                      Remittance inflows
                    </td>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">
                      NRs 2.36 trillion, above the annual national budget
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">
                      Nepal Rastra Bank
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-5 py-3.5 font-bold text-gray-950">
                      Foreign-employment approvals
                    </td>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">
                      About 792,000 in the year
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">
                      Nepal Rastra Bank
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Visual Block 2: What the Data Means for the Summit */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-3">
            <h3 className="text-base sm:text-lg font-bold text-gray-950">
              What the Data Means for the Summit
            </h3>
            <p className="text-xs text-gray-500 font-medium">
              Connecting national macroeconomic challenges directly to summit focus areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatItMeans.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-gray-50/60 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-gray-950">
                    {item.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-blue-700 bg-white border border-gray-200 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Three Needs Summary Callout (Flat & Clean) */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-6 sm:p-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              The Three Core Needs
            </span>
            <p className="text-sm sm:text-base text-gray-900 leading-relaxed font-semibold">
              These figures point to three needs:{" "}
              <span className="text-blue-700">stronger buyer–supplier links across provinces</span>,{" "}
              <span className="text-blue-700">investable opportunities that create jobs at home</span>, and a{" "}
              <span className="text-blue-700">shared private-sector voice</span>.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-normal">
              Opportunity Connect is designed to serve all three.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
