import React from "react";
import { ArrowRight } from "lucide-react";

interface StickyNavProps {
  activeSection: string;
}

const NAV_TABS = [
  { id: "about", label: "About" },
  { id: "journey", label: "Visitor Journey" },
  { id: "map", label: "Hub Map" },
  { id: "zones", label: "The 10 Zones" },
  { id: "book", label: "Book a Session" },
  { id: "faq", label: "FAQ" },
  { id: "join", label: "How to Join" },
  { id: "contact", label: "Contact" },
];

export const StickyNav: React.FC<StickyNavProps> = ({ activeSection }) => {
  return (
    <nav className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm overflow-x-auto scrollbar-none">
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between gap-1 py-2.5">
        <div className="flex items-center gap-1 sm:gap-2">
          {NAV_TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                activeSection === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>

        <a
          href="#book"
          className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold transition-colors"
        >
          <span>Book Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
};

