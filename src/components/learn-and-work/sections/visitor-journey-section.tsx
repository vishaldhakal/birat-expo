import React from "react";

export const VisitorJourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-slate-100 border-y border-slate-200 scroll-mt-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Step-by-Step Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
            The Visitor Journey
          </h2>
          <p className="text-slate-600 text-base">
            From arrival to exit, every visiting student and young jobseeker goes through a
            structured, high-impact 4-stage exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-md shadow-blue-600/20">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Information Desk</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Central orientation, distribution of the circular hub map, schedule briefing, and
              group registration.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-md shadow-indigo-600/20">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Career Planning</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Interactive computer-based career assessment test and one-to-one consultation to
              discover strengths.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-lg mb-4 shadow-md shadow-amber-500/20">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Skill Zones</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Live demonstrations, hands-on tool interactions, and engaging dialogues with master
              trainers.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-md shadow-emerald-600/20">
              4
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Exit & Pathways</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A recorded next step with training providers, certificate of participation, and
              employer contacts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

