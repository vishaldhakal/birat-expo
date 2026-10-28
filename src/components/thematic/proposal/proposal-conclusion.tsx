import { Quote, Sparkles, ArrowRight } from "lucide-react";

export default function ProposalConclusion() {
  return (
    <section id="section-10" className="py-16 sm:py-24 bg-white border-b border-gray-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-yellow-300 border border-white/20">
              <Quote className="w-3.5 h-3.5" />
              10 · Strategic Conclusion
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Transforming Regional Economic Potential into Commercial Reality
            </h2>

            <div className="space-y-4 text-gray-200 text-base sm:text-lg leading-relaxed font-light">
              <p>
                <strong className="text-yellow-300 font-semibold">Birat Business Summit 2026: Opportunity Connect</strong> provides a practical, structured platform where Nepal&apos;s regional business communities can convene, share verified opportunities, connect with vital partners, and build dynamic pathways for sustainable growth.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                By seamlessly combining high-level strategic dialogue with chamber presentations, structured business matchmaking, and disciplined follow-up, the Summit helps convert national economic ambition into concrete commercial relationships and lasting collaborative action.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/thematic/register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-slate-900 bg-yellow-300 hover:bg-yellow-400 hover:scale-[1.02] transition shadow-lg shadow-yellow-300/20"
              >
                <span>Join the Summit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#section-11"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
              >
                <span>View Coordination Info</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
