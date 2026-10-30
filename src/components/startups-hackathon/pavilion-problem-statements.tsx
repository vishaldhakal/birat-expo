"use client";

import React from "react";
import { Sprout, Mountain, Smartphone, Building, Users2, ChevronRight } from "lucide-react";

export default function PavilionProblemStatements() {
  const problems = [
    {
      number: "01",
      title: "Agro-Value Addition & Export Linkage",
      desc: "Transforming raw agricultural produce in Koshi Province into high-value packaged goods for regional and global markets.",
      category: "Agri-Tech & Food Systems",
      icon: Sprout,
      color: "emerald",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "02",
      title: "Tourism & Eco-Hospitality Innovation",
      desc: "Creating digital, sustainable, and cultural trails that retain international and domestic travelers across Eastern Nepal.",
      category: "Tourism & Hospitality",
      icon: Mountain,
      color: "blue",
      badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      number: "03",
      title: "Civic & Essential Services Delivery",
      desc: "Using mobile and web tech to streamline municipal licenses, healthcare access, and public utility grievance resolutions.",
      category: "Digital Governance & Health",
      icon: Smartphone,
      color: "indigo",
      badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      number: "04",
      title: "Smart Urban & Industrial Infrastructure",
      desc: "Solutions for waste management, clean energy adoption, smart parking, and logistics for industrial belts like Biratnagar-Itahari.",
      category: "Urban Tech & Sustainability",
      icon: Building,
      color: "amber",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      number: "05",
      title: "Youth in Enterprise & Modern Farming",
      desc: "Demystifying tech-driven modern farming, micro-manufacturing, and creative crafts for young generations returning to Koshi.",
      category: "Youth Entrepreneurship",
      icon: Users2,
      color: "rose",
      badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Vision Koshi Challenge
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
              Innovation Challenge <span className="text-blue-600">Problem Statements</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Real challenge gaps identified by Chamber of Industries Morang. Student teams and hackers will build
              solutions in Room 2 (The Design Studio) and pitch live on Compete Days (21–22 December).
            </p>
          </div>

          <a
            href="#takepart"
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline shrink-0 group"
          >
            <span>Join Challenge</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="bg-gray-50/70 border border-gray-200/90 rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-gray-400">
                      CHALLENGE #{p.number}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${p.badgeClass}`}>
                      {p.category}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-3 group-hover:border-blue-300 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Room 2: Live Prototype Stage</span>
                  <span className="text-gray-400 font-medium">21–22 Dec</span>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full">
                Incubation Linkage
              </span>
              <h3 className="text-xl font-bold mt-4 leading-tight">
                Have a different local problem you are solving?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 mt-2.5 leading-relaxed">
                Bring your idea or working prototype directly to Room 2. The mentors from King&apos;s College Innovation Kitchen
                and Biratnagar Incubation Center will help refine your business model.
              </p>
            </div>

            <div className="mt-6 pt-3.5 border-t border-white/10 text-xs font-bold text-white">
              <a href="#takepart" className="hover:underline flex items-center gap-1 group">
                <span>Talk to the incubation team</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
