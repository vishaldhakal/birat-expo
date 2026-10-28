import { ChevronRight } from "lucide-react";

export default function ThematicBackground() {
  const summitAtAGlance = [
    { label: "Dates", value: "Sunday 20 to Tuesday 22 December 2026, within Birat Expo 2026 (17–26 December)" },
    { label: "Daily session", value: "9:30 AM–2:00 PM, followed by lunch and B2B meetings until 5:00 PM" },
    { label: "Venue", value: "Hangar (20 × 30 m) at the Birat Expo venue, Biratnagar, Koshi Province" },
    { label: "Organizer", value: "Chamber of Industries Morang (CIM)" },
    {
      label: "Who attends",
      value: "District and regional chambers from all seven provinces, industrialists, entrepreneurs, investors, buyers, suppliers, financial institutions, policymakers and startups",
    },
    {
      label: "Format",
      value: "Keynote, six chamber presentations, business dialogue, collaboration room and B2B meetings each day",
    },
    { label: "Tagline", value: "Find a Partner. Find a Market. Find an Opportunity." },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Background &amp; Overview
          </span>
          <h2 className="mt-4 sm:mt-5 text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Connecting Regional Potential to{" "}
            <span className="text-blue-600">National Growth</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
            Nepal&apos;s economic future is rooted in the distinct strengths of its districts and provinces. 
            The Birat Business Summit 2026 creates the missing bridge between regional enterprise and nationwide opportunities.
          </p>
        </div>

        {/* Visual Block 1: The Summit at a Glance (Structured Visual Data Table) */}
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-950">
                The Summit at a Glance
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Official operational overview of Birat Business Summit 2026: Opportunity Connect
              </p>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md w-fit">
              3-Day Flagship Platform
            </span>
          </div>

          <div className="p-6 border-b border-gray-100 bg-blue-50/20">
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
              <strong className="text-gray-950 font-semibold">Birat Business Summit 2026: Opportunity Connect</strong> is a three-day platform, on 20–22 December 2026 inside Birat Expo 2026, where district and provincial chambers from across Nepal present verified business opportunities and meet buyers, suppliers and investors. It brings <span className="font-semibold text-blue-700">&ldquo;The Ecosystem of Opportunities&rdquo;</span>, the theme of Birat Expo 2026, to life through presentations, an Opportunity Wall, structured business matching and follow-up.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100 text-xs sm:text-sm">
              <tbody className="divide-y divide-gray-100">
                {summitAtAGlance.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3.5 font-bold text-gray-950 w-44 sm:w-56 align-top whitespace-nowrap bg-gray-50/30">
                      {row.label}
                    </td>
                    <td className="px-6 py-3.5 text-gray-700 font-medium leading-relaxed align-top">
                      {row.label === "Tagline" ? (
                        <span className="font-bold text-blue-600">{row.value}</span>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Narrative & Visual Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Context narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            <div className="border-l-2 border-blue-600 pl-4 py-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-950">
                Background &amp; Regional Potential
              </h3>
            </div>
            <p>
              Nepal&apos;s economic potential lies in the diverse strengths of its districts and provinces—from{" "}
              <strong className="text-gray-950 font-semibold">manufacturing, agriculture and agro-processing</strong> to{" "}
              <strong className="text-gray-950 font-semibold">tourism, trade, logistics, technology and entrepreneurship</strong>. 
              However, these strengths can generate greater economic value when businesses across regions are connected through trade, investment, supply chains, technology and institutional partnerships.
            </p>
            <p>
              District and regional chambers play a vital role in representing businesses and promoting economic opportunities. 
              Yet, structured platforms for connecting these chambers with businesses, buyers, investors and potential partners from other regions remain limited.
            </p>
            <p>
              In this context, the <strong className="text-gray-950 font-semibold">Chamber of Industries Morang (CIM)</strong> proposes{" "}
              <span className="font-semibold text-gray-950">Birat Business Summit 2026: Opportunity Connect</span>, 
              a three-day business networking and collaboration platform under Birat Expo 2026.
            </p>
            <p>
              The Summit will bring together district and regional chambers, industrialists, entrepreneurs, investors, buyers, suppliers, policymakers, financial institutions and other stakeholders to showcase regional opportunities, explore partnerships and develop practical business connections.
            </p>
          </div>

          {/* Visual Block 2: Key Feature & Three-Step Action Pathway */}
          <div className="lg:col-span-5 space-y-4">
            {/* Feature Highlight Box */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded">
                  Key Summit Feature
                </span>
                <span className="text-xs font-mono text-gray-500 font-medium">CIM Framework</span>
              </div>
              <h4 className="text-base font-bold text-gray-950">
                Opportunity Connect — Chamber Exchange
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Participating chambers from Koshi Province and other provinces receive dedicated presentation slots to highlight their regional economic strengths, verified business opportunities, and collaboration needs.
              </p>
            </div>

            {/* Visual Pathway: Beyond Conventional Conferences */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Beyond Conventional Conferences
              </h4>
              
              <div className="space-y-3 text-xs sm:text-sm font-medium">
                <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-white border border-gray-200 px-2 py-0.5 rounded shrink-0">
                    01
                  </span>
                  <div>
                    <span className="font-bold text-gray-950 block">Strategic Dialogue</span>
                    <span className="text-gray-600 font-normal">Executive panels framing economic competitiveness and industrial expansion.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-white border border-gray-200 px-2 py-0.5 rounded shrink-0">
                    02
                  </span>
                  <div>
                    <span className="font-bold text-gray-950 block">Chamber Presentations</span>
                    <span className="text-gray-600 font-normal">Structured five-slide pitches spotlighting verified regional opportunities.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-white border border-gray-200 px-2 py-0.5 rounded shrink-0">
                    03
                  </span>
                  <div>
                    <span className="font-bold text-gray-950 block">Matchmaking &amp; Follow-up</span>
                    <span className="text-gray-600 font-normal">Pre-booked one-on-one B2B meetings with 30 &amp; 90-day progress tracking.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
