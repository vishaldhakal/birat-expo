import { Building2, Handshake, TrendingUp, Sparkles, Network, ArrowUpRight } from "lucide-react";

export default function ThematicBackground() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-gray-100">
      {/* Decorative subtle background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-[-10%] h-[450px] w-[450px] rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute top-1/2 left-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-50/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Badge */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>01 · Background & Context</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
            Connecting Regional Potential to National Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            Nepal&apos;s economic future is rooted in the distinct strengths of its districts and provinces. 
            The Birat Business Summit 2026 creates the missing bridge between regional enterprise and nationwide opportunities.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Main Context narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              Nepal&apos;s economic potential lies in the diverse strengths of its districts and provinces—from 
              <strong className="text-gray-900 font-semibold"> manufacturing, agriculture and agro-processing</strong> to 
              <strong className="text-gray-900 font-semibold"> tourism, trade, logistics, technology and entrepreneurship</strong>. 
              However, these strengths can generate far greater economic value when businesses across regions are purposefully connected through trade, investment, supply chains, technology, and institutional partnerships.
            </p>
            <p>
              District and regional chambers play a vital role in representing local businesses and championing economic opportunities. 
              Yet, structured platforms that connect these chambers with businesses, institutional buyers, investors, and strategic partners from other regions remain limited.
            </p>
            <p>
              In this context, the <strong className="text-indigo-950 font-semibold">Chamber of Industries Morang (CIM)</strong> proposes{" "}
              <span className="font-semibold text-indigo-700">Birat Business Summit 2026: Opportunity Connect</span>, 
              a three-day business networking and collaboration platform held under the banner of Birat Expo 2026.
            </p>

            {/* Special Feature Highlight Card */}
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 p-6 sm:p-7 text-white shadow-xl shadow-indigo-950/10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-yellow-300 backdrop-blur-sm border border-white/15">
                  <Network className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-yellow-300">Key Feature</span>
                  </div>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-white">
                    Opportunity Connect — Chamber Exchange
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-blue-100/90 leading-relaxed">
                    Participating chambers from Koshi Province and other provinces will receive dedicated presentation slots to showcase their regional economic strengths, high-impact business opportunities, and collaboration needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars / Value Proposition */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:gap-5">
            <div className="rounded-2xl border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-sm transition hover:shadow-md hover:border-indigo-200">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Building2 className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-gray-900">Multilateral Chamber Convergence</h4>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Bringing together district chambers, industrialists, entrepreneurs, buyers, suppliers, policymakers, and financial institutions on a single common floor.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-sm transition hover:shadow-md hover:border-indigo-200">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Handshake className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-gray-900">Beyond Conventional Dialogue</h4>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Combining high-level strategic dialogue, structured B2B matchmaking, pitch sessions, and systematic follow-ups to turn discussions into tangible contracts.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-sm transition hover:shadow-md hover:border-indigo-200">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-gray-900">Regional to National Integration</h4>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Empowering district economies to integrate directly into nationwide supply chains, attract private capital, and access broader markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
