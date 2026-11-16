import React from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  openFaq: number | null;
  onToggleFaq: (index: number) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, openFaq, onToggleFaq }) => {
  return (
    <section id="faq" className="py-20 bg-slate-100 border-t border-slate-200 scroll-mt-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Answers & Help
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about booking, curriculum, and attending the Learn and
            Work Platform.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => onToggleFaq(index)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-serif">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

