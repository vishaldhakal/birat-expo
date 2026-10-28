import { Building2, Handshake, TrendingUp, Network } from "lucide-react";

export default function ThematicBackground() {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Badge */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            01 · Background &amp; Context
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

        {/* Narrative & Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Main Context narrative */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            <p>
              Nepal&apos;s economic potential lies in the diverse strengths of its districts and provinces—from{" "}
              <strong className="text-gray-950 font-semibold">manufacturing, agriculture and agro-processing</strong> to{" "}
              <strong className="text-gray-950 font-semibold">tourism, trade, logistics, technology and entrepreneurship</strong>. 
              However, these strengths can generate far greater economic value when businesses across regions are purposefully connected through trade, investment, supply chains, technology, and institutional partnerships.
            </p>
            <p>
              District and regional chambers play a vital role in representing local businesses and championing economic opportunities. 
              Yet, structured platforms that connect these chambers with businesses, institutional buyers, investors, and strategic partners from other regions remain limited.
            </p>
            <p>
              In this context, the <strong className="text-gray-950 font-semibold">Chamber of Industries Morang (CIM)</strong> proposes{" "}
              <span className="font-semibold text-blue-600">Birat Business Summit 2026: Opportunity Connect</span>, 
              a three-day business networking and collaboration platform held under the banner of Birat Expo 2026.
            </p>

            {/* Feature Highlight Card */}
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 p-6 sm:p-7 text-white shadow-lg border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-400/20">
                  <Network className="h-5 w-5" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase">
                    Key Feature
                  </div>
                  <h3 className="mt-2 text-base sm:text-lg font-bold text-white tracking-tight">
                    Opportunity Connect — Chamber Exchange
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Participating chambers from Koshi Province and across Nepal receive dedicated presentation slots to showcase their regional economic strengths, high-impact business opportunities, and collaboration needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars / Value Proposition */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-5 sm:p-6 hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <Building2 className="h-5 w-5" />
              </div>
              <h4 className="mt-3.5 text-base font-bold text-gray-950">Multilateral Chamber Convergence</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Bringing together district chambers, industrialists, entrepreneurs, buyers, suppliers, policymakers, and financial institutions on a single common floor.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-5 sm:p-6 hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <Handshake className="h-5 w-5" />
              </div>
              <h4 className="mt-3.5 text-base font-bold text-gray-950">Beyond Conventional Dialogue</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Combining high-level strategic dialogue, structured B2B matchmaking, pitch sessions, and systematic follow-ups to turn discussions into tangible contracts.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-5 sm:p-6 hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="mt-3.5 text-base font-bold text-gray-950">Regional to National Integration</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Empowering district economies to integrate directly into nationwide supply chains, attract private capital, and access broader markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
