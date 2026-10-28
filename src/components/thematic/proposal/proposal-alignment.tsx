import { 
  Network, 
  Globe2, 
  Coins, 
  Blocks, 
  Megaphone, 
  Sprout, 
  Sparkles 
} from "lucide-react";

const pillars = [
  {
    name: "Connect",
    tagline: "Bring businesses and chambers together.",
    description: "Creating direct links between district & regional chambers, industrial pioneers, and nationwide entrepreneurs.",
    icon: Network,
    accent: "border-blue-500",
    badgeBg: "bg-blue-100 text-blue-800",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    name: "Expand",
    tagline: "Open new markets and distribution channels.",
    description: "Bridging inter-provincial commerce and creating structured gateways for domestic supply-chain networks.",
    icon: Globe2,
    accent: "border-teal-500",
    badgeBg: "bg-teal-100 text-teal-800",
    iconBg: "bg-teal-50 text-teal-600",
  },
  {
    name: "Invest",
    tagline: "Identify investment and joint-venture opportunities.",
    description: "Matching verified high-potential regional industrial and infrastructure projects with institutional capital.",
    icon: Coins,
    accent: "border-emerald-500",
    badgeBg: "bg-emerald-100 text-emerald-800",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Build",
    tagline: "Connect entrepreneurs, startups and established industries.",
    description: "Unlocking synergies between nimble tech innovators and mature manufacturing plants to scale together.",
    icon: Blocks,
    accent: "border-indigo-500",
    badgeBg: "bg-indigo-100 text-indigo-800",
    iconBg: "bg-indigo-50 text-indigo-600",
  },
  {
    name: "Influence",
    tagline: "Identify common policy challenges and opportunities for collective advocacy.",
    description: "Consolidating regional chamber voices into the Birat Chamber Compact for unified public-private policy reform.",
    icon: Megaphone,
    accent: "border-purple-500",
    badgeBg: "bg-purple-100 text-purple-800",
    iconBg: "bg-purple-50 text-purple-600",
  },
  {
    name: "Grow",
    tagline: "Encourage enterprise development and regional value-chain partnerships.",
    description: "Fostering long-term regional industrial integration, job retention, and sustainable economic wealth.",
    icon: Sprout,
    accent: "border-amber-500",
    badgeBg: "bg-amber-100 text-amber-800",
    iconBg: "bg-amber-50 text-amber-600",
  },
];

export default function ProposalAlignment() {
  return (
    <section id="section-04" className="py-16 sm:py-24 bg-white border-b border-gray-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            04 · Strategic Synergy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Alignment with Birat Expo 2026
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Organized by the <strong className="text-gray-900 font-semibold">Chamber of Industries Morang (CIM)</strong> under the theme{" "}
            <span className="text-indigo-600 font-semibold italic">“The Ecosystem of Opportunities”</span>, Birat Expo 2026 aims to unite industry, innovation, investment, skills, sustainability, and markets.
          </p>
        </div>

        {/* Strategic Card Callout */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">Strategic Mandate</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                Dialogue Turned Into Real Commerce
              </h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Birat Business Summit 2026 serves as the Expo&apos;s strategic dialogue platform, while <strong className="text-yellow-300 font-semibold">Opportunity Connect</strong> translates that dialogue into verifiable, lasting business relationships and commercial contracts.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-yellow-300">6</div>
                <div className="text-xs text-gray-300 mt-1 font-medium">Core Pillars</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-blue-300">3</div>
                <div className="text-xs text-gray-300 mt-1 font-medium">Thematic Days</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-black text-emerald-300">7</div>
                <div className="text-xs text-gray-300 mt-1 font-medium">Provinces</div>
              </div>
            </div>
          </div>
        </div>

        {/* The 6 Opportunity Pillars Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              The Expo&apos;s Six Opportunity Pillars
            </h3>
            <span className="text-xs text-gray-500 font-medium hidden sm:inline">
              Reinforced across all summit sessions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.name}
                  className={`bg-slate-50/70 hover:bg-white rounded-2xl p-6 border-t-4 ${pillar.accent} border-x border-b border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${pillar.iconBg} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${pillar.badgeBg}`}>
                        Pillar
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 tracking-tight">
                      {pillar.name}
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-indigo-700">
                      {pillar.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>Opportunity Connect</span>
                    <span className="text-indigo-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
