import React from "react";
import { Info, Award, Cpu, Building2, Compass, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-3">
          <Info className="w-4 h-4" />
          Purpose & Vision
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mb-6 leading-tight">
          Bridging the Gap Between Young Aspirations and Industry Realities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p>
              Every year, thousands of young people across Koshi Province finish school unsure
              which vocational path to pursue, which real-world skills are urgently demanded by
              modern industries, or where to find accredited quality training.
            </p>
            <p>
              At the same time, regional manufacturers and businesses struggle to recruit people
              equipped with practical competencies. The{" "}
              <strong className="text-slate-900 font-semibold">
                Learn and Work Platform at Birat Expo 2026
              </strong>{" "}
              bridges this divide by convening youth, vocational training institutions, and
              leading employers inside one dynamic, experiential pavilion.
            </p>
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-950 space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-blue-900 text-base">
                <Award className="w-5 h-5 text-blue-600" />
                A Circular Hub with 10 Dedicated Zones
              </h4>
              <p className="text-sm text-blue-800 leading-normal">
                Designed around a central Information Desk, the hub features 1 Career Planning
                center, 1 CIM Member Industry showcase, and 8 live skill practice areas with
                guided demonstrations, hands-on tasks, and pre-booked group workshops.
              </p>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Hands-on Task Trials</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Touch real tools, run PLC trainers, practice CPR, mix sensor circuits, and try
                machine sewing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Industry Linkage</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Interact directly with manufacturing leaders and enterprises offering actual
                apprenticeships.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Career Assessment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Take a guided aptitude assessment and leave with a personalized career report on
                the spot.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">Direct Next Step</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every attendee exits with actionable next steps, course details, and contact for
                follow-up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

