"use client";

import { useEffect, useState } from "react";
import { 
  Target, 
  Layers, 
  BarChart3, 
  CalendarDays, 
  Presentation, 
  Image as ImageIcon, 
  CheckCircle2, 
  Quote, 
  Building2 
} from "lucide-react";

const navItems = [
  { id: "section-03", label: "03 Objectives", icon: Target },
  { id: "section-04", label: "04 Alignment", icon: Layers },
  { id: "section-05", label: "05 Targets", icon: BarChart3 },
  { id: "section-06", label: "06 Program", icon: CalendarDays },
  { id: "section-07", label: "07 Chamber Slides", icon: Presentation },
  { id: "section-08", label: "08 Opportunity Wall", icon: ImageIcon },
  { id: "section-09", label: "09 Expected Results", icon: CheckCircle2 },
  { id: "section-10", label: "10 Conclusion", icon: Quote },
  { id: "section-11", label: "11 Participation", icon: Building2 },
];

export default function ProposalNav() {
  const [activeSection, setActiveSection] = useState("section-03");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 overflow-x-auto no-scrollbar gap-2">
          <div className="flex items-center gap-1.5 min-w-max">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200 scale-100"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/70"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <a
            href="/thematic/register"
            className="hidden lg:inline-flex items-center px-4 py-1.5 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-md transition shrink-0"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
