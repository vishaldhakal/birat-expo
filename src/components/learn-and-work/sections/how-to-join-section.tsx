import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

export const HowToJoinSection: React.FC = () => {
  return (
    <section id="join" className="py-20 bg-white border-t border-slate-200 scroll-mt-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-3xl mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
            For Training Providers, Industries & Sponsors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-4">
            How to Join the Platform
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Vocational institutes, polytechnics, industrial employers, and technology partners are
            warmly invited to participate, showcase training machinery, and engage future talent.
            Participation takes three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider mb-2 block">
              Step 1
            </span>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Get in Touch</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Contact the Skill Development Unit coordinator via phone, WhatsApp, or email.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider mb-2 block">
              Step 2
            </span>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Receive Proposal</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Review the detailed partnership booklet, pavilion layout options, and participation
              form.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider mb-2 block">
              Step 3
            </span>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Confirm & Exhibit</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Return the completed agreement to confirm booth allocation, equipment space, and
              schedules.
            </p>
          </div>
        </div>

        {/* Coordinator Contact Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-xl shrink-0 shadow-lg shadow-amber-400/20 font-serif">
              SC
            </div>
            <div>
              <h4 className="text-xl font-bold font-serif text-white">Sandeep Chaudhary</h4>
              <p className="text-amber-300 text-sm font-medium">
                Skill Development Unit Coordinator
              </p>
              <p className="text-slate-400 text-xs mt-0.5">Chamber of Industries Morang (CIM)</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/9779828015958?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20partnership%20proposal%20for%20the%20Learn%20and%20Work%20Platform."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 flex-1 md:flex-initial"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Proposal
            </a>

            <a
              href="tel:+9779864818969"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 flex-1 md:flex-initial"
            >
              <Phone className="w-4 h-4" />
              Call 9864818969
            </a>

            <a
              href="mailto:info.cimbrt@gmail.com?subject=Partnership%20Proposal%20Request%20-%20Learn%20and%20Work%20Platform"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 flex-1 md:flex-initial"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

