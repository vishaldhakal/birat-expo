import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight, 
  Send,
  FileCheck2,
  CalendarCheck2,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function ProposalCoordination() {
  return (
    <section id="section-11" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-4">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            11 · Participation &amp; Coordination
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Chamber Participation &amp; Coordination Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Interested chambers and business organizations are invited to submit their expression of interest, nominate their official focal person and presenters, and submit verified opportunity briefs.
          </p>
        </div>

        {/* Coordination Guidelines Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">
                1. Expression of Interest
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Chambers submit an EOI nominating their speaker, focal contact, and a concise summary of their proposed regional opportunities.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Nomination Required</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <CalendarCheck2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">
                2. CIM Allocation &amp; Support
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                CIM allocates 15-minute presentation slots, provides standard templates, coordinates the schedule, maintains the Opportunity Wall, and brokers follow-ups.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-indigo-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full Secretariat Backing</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">
                3. Logistics &amp; Travel
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Travel and accommodation costs will be borne by participating organizations. CIM provides institutional hospitality, venue hosting, and local liaison.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-amber-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Institutional Protocol</span>
            </div>
          </div>
        </div>

        {/* Official Contact Details Box */}
        <div className="mt-12 bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Official Organizing Secretariat
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
                Chamber of Industries Morang (CIM)
              </h3>
            </div>
            <a
              href="/thematic/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md"
            >
              <span>Submit Participation Form</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {/* Address */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-white text-indigo-600 flex items-center justify-center shadow-sm mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Address</p>
              <p className="font-semibold text-gray-900 mt-1">
                Sahid Marga, Biratnagar-2, Koshi Province, Nepal
              </p>
            </div>

            {/* Office Telephone */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-white text-indigo-600 flex items-center justify-center shadow-sm mb-3">
                <Phone className="w-4 h-4" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Office Telephone</p>
              <div className="font-semibold text-gray-900 mt-1 space-y-0.5">
                <div>
                  <a href="tel:021515712" className="hover:text-indigo-600 transition">
                    021-515712
                  </a>
                </div>
                <div>
                  <a href="tel:021577646" className="hover:text-indigo-600 transition">
                    021-577646
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-white text-indigo-600 flex items-center justify-center shadow-sm mb-3">
                <Mail className="w-4 h-4" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</p>
              <div className="font-semibold text-gray-900 mt-1 truncate">
                <a
                  href="mailto:cim.biratnagar@gmail.com"
                  className="hover:text-indigo-600 transition"
                >
                  cim.biratnagar@gmail.com
                </a>
              </div>
            </div>

            {/* Websites */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-white text-indigo-600 flex items-center justify-center shadow-sm mb-3">
                <Globe className="w-4 h-4" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Websites</p>
              <div className="font-semibold text-gray-900 mt-1 space-y-0.5 text-xs">
                <div>
                  <a
                    href="https://www.cim.org.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition"
                  >
                    www.cim.org.np ↗
                  </a>
                </div>
                <div>
                  <a
                    href="https://biratexpo.cim.org.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition"
                  >
                    biratexpo.cim.org.np ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grand Signature Banner (Matching PDF Page 8 footer) */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-950 text-white p-8 sm:p-12 text-center shadow-xl border border-indigo-900/50">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wider text-white">
            BIRAT BUSINESS SUMMIT 2026 — OPPORTUNITY CONNECT
          </h3>
          <p className="mt-3 text-base sm:text-lg font-bold text-yellow-300">
            Find a Partner. Find a Market. Find an Opportunity.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-gray-300">
            A Signature Business Platform of Birat Expo 2026 — The Ecosystem of Opportunities
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/thematic/register"
              className="px-8 py-3.5 rounded-full text-sm font-bold text-slate-900 bg-yellow-300 hover:bg-yellow-400 active:scale-95 transition shadow-lg shadow-yellow-300/20"
            >
              Register for Summit
            </a>
            <a
              href="mailto:cim.biratnagar@gmail.com"
              className="px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
            >
              Contact CIM Secretariat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
