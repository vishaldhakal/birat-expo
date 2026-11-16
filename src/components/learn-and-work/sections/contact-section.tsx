import React from "react";
import { Building2, Phone, Mail, ExternalLink, BookOpen } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-slate-900 text-slate-300 border-t border-slate-800 scroll-mt-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white font-serif mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-400" />
              Chamber of Industries Morang (CIM)
            </h3>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              Shahid Marga, Tinpaini, Biratnagar-2, Koshi Province, Nepal
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>021-515712, 021-577646</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <a
                  href="mailto:cim.biratnagar@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  cim.biratnagar@gmail.com
                </a>{" "}
                /{" "}
                <a href="mailto:info.cimbrt@gmail.com" className="text-blue-400 hover:underline">
                  info.cimbrt@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <a
                  href="https://www.cim.org.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  www.cim.org.np
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white font-serif mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              Learn & Work Hub Desk
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              For session adjustments, institutional MoUs, and career counseling materials:
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">Coordinator:</span>
                <span>Sandeep Chaudhary (9864818969)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">Event Dates:</span>
                <span>17–26 December 2026 (2–11 Poush 2083)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">Venue:</span>
                <span>Birat Expo Ground, Biratnagar</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © 2026 Chamber of Industries Morang · Skill Development Unit · Learn and Work
            Platform, Birat Expo 2026.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-amber-400 hover:text-amber-300 font-semibold"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
};

