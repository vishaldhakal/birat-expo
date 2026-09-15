"use client";
import React, { useState } from "react";

export default function Platforms2026() {
  const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null);

  const platforms = [
    {
      title: "Learn & Work Platform",
      subtitle: "Preparing Talent for the Future",
      category: "EDUCATION & TALENT",
      desc: "Connects students, job seekers, industries, educational institutions, and training providers to bridge the gap between education and employment.",
      image: "/birat-expo-2026/images/career.png",
      categoryColor: "text-amber-400",
      accentBg: "bg-amber-500",
      components: [
        "Career Guidance & Counselling",
        "Career Aptitude Assessment",
        "CV Writing Clinic",
        "Walk-in Interviews",
        "Job Matching Services",
        "Internship & Apprenticeship Opportunities",
        "TVET & Skills Showcase",
        "Future Career Sessions",
        "JobBriz Career Platform",
      ],
      targets:
        "Students, Job Seekers, Schools & Colleges, Universities, TVET Institutions, HR Professionals, Parents",
    },
    {
      title: "Build Platform",
      subtitle: "From Ideas to Enterprises",
      category: "STARTUPS & ENTERPRISES",
      desc: "Designed for startups, entrepreneurs, and innovators seeking to transform ideas into sustainable businesses through incubation, mentoring, and investment readiness.",
      image: "/birat-expo-2026/images/startup.png",
      categoryColor: "text-sky-400",
      accentBg: "bg-sky-500",
      components: [
        "Startup Pavilion",
        "Vision Koshi Startup Challenge",
        "Pitch Competition",
        "Incubation Support",
        "Mentor Connect",
        "Investor Meet",
        "Angel Investment Network",
        "Innovation Showcase",
      ],
      targets:
        "Startups, Entrepreneurs, Innovators, Incubators, Investors, Banks & Financial Institutions, Development Partners",
    },
    {
      title: "Connect Platform",
      subtitle: "Growing Businesses Through Connections",
      category: "NETWORKING & B2B",
      desc: "Helps businesses expand through networking, collaboration, B2B matchmaking, export desks, and strategic market access.",
      image: "/birat-expo-2026/images/b2b.png",
      categoryColor: "text-emerald-400",
      accentBg: "bg-emerald-500",
      components: [
        "B2B Meetings",
        "Business Matchmaking",
        "Buyer–Seller Meet",
        "Business Advisory Services",
        "Digital Business Platforms",
        "Export Promotion Desk",
        "Dealer & Distributor Networking",
        "Business Networking Lounge",
      ],
      targets:
        "Industries, SMEs, Traders, Exporters, Importers, Business Associations, Service Providers",
    },
    {
      title: "Expand & Discover Platform",
      subtitle: "Showcasing Products, Services and Innovation",
      category: "EXHIBITION & TRADE",
      desc: "The largest exhibition platform enabling businesses to showcase products and technologies while consumers discover new market trends.",
      image: "/birat-expo-2026/images/made in nepal.png",
      categoryColor: "text-purple-400",
      accentBg: "bg-purple-500",
      components: [
        "National Product Exhibition",
        "International Pavilion",
        "Industrial Showcase",
        "SME Pavilion",
        "Made in Nepal Pavilion",
        "Technology Showcase",
        "Product Launches",
        "Live Demonstrations",
      ],
      targets:
        "Industries, SMEs, National & International Exhibitors, Buyers, Consumers, Trade Visitors",
    },
    {
      title: "Experience Platform",
      subtitle: "Celebrating Business, Culture and Community",
      category: "CULTURE & FESTIVAL",
      desc: "Creates a vibrant atmosphere that blends commerce with culture, food, tourism, and entertainment across the entire Expo venue.",
      image: "/birat-expo-2026/images/experience.png",
      categoryColor: "text-rose-400",
      accentBg: "bg-rose-500",
      components: [
        "Food Festival",
        "Cultural Performances",
        "Entertainment Programs",
        "Family Activities",
        "Live Demonstrations",
        "Tourism Promotion",
        "Interactive Experiences",
        "Evening Events",
      ],
      targets: "Families, Youth, Visitors, Tourists, Consumers, Communities",
    },
    {
      title: "Influence Platform",
      subtitle: "Shaping Policies. Strengthening Partnerships.",
      category: "POLICY & LEADERSHIP",
      desc: "A collaborative space for government agencies, policymakers, business leaders, development partners, and academia to address regulatory and business challenges.",
      image: "/birat-expo-2026/images/influence.png",
      categoryColor: "text-cyan-400",
      accentBg: "bg-cyan-500",
      components: [
        "Policy Dialogue Sessions",
        "Business Clinic",
        "Government Service Desk",
        "Public–Private Dialogue",
        "Roundtable Discussions",
        "Development Partner Forum",
        "Business Leaders Forum",
        "White Paper Launches",
      ],
      targets:
        "Government Agencies, Policymakers, Private Sector, Development Partners, Academic Institutions, Think Tanks",
    },
  ];

  return (
    <section className="py-16 border-t border-gray-100 bg-white text-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            6 Opportunity <span className="text-blue-600">Zones & Platforms</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium mt-2 leading-relaxed">
            Organized into 6 integrated Opportunity Platforms providing a
            seamless, value-driven journey for participants and visitors.
          </p>
        </div>

        {/* Clean 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((plat, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPlatform(idx)}
              className="h-[480px] sm:h-[520px] rounded-3xl relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end border border-gray-200 hover:border-blue-500 hover:-translate-y-1"
            >
              {/* Card Background Image */}
              <img
                src={plat.image}
                alt={plat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter "
              />

              {/* Dark Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/20" />

              {/* Card Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end h-full">
                {/* Category Tagline */}
                <span
                  className={`text-xs font-extrabold uppercase tracking-widest ${plat.categoryColor} mb-1.5 drop-shadow-md`}
                >
                  {plat.category}
                </span>

                {/* Card Title */}
                <h3 className="text-xl font-black text-white mb-1.5 leading-tight tracking-tight drop-shadow-lg">
                  {plat.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-bold text-gray-200/95 mb-2 line-clamp-1">
                  {plat.subtitle}
                </p>

                {/* Description */}
                {/* <p className="text-xs sm:text-sm text-gray-300/85 leading-relaxed line-clamp-3 mb-5 font-normal">
                  {plat.desc}
                </p> */}

                {/* Card CTA with Chevron Right */}
                <div className="pt-3.5 border-t border-white/20 flex items-center justify-between text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  <span>Explore Details & Components</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300 shadow-md">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Platform Detail Modal */}
        {selectedPlatform !== null && (
          <div
            className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
            onClick={() => setSelectedPlatform(null)}
          >
            <div
              className="bg-white border border-gray-200 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-gray-900 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Hero Banner */}
              <div className="relative h-60 sm:h-72 w-full">
                <img
                  src={platforms[selectedPlatform].image}
                  alt={platforms[selectedPlatform].title}
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedPlatform(null)}
                  className="absolute top-5 right-5 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2.5 border border-gray-200 transition-all shadow-md"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span
                    className={`text-xs font-black uppercase tracking-widest ${platforms[selectedPlatform].categoryColor} mb-1 block`}
                  >
                    Platform {selectedPlatform + 1} •{" "}
                    {platforms[selectedPlatform].category}
                  </span>
                  <h3 className="text-3xl font-black text-white">
                    {platforms[selectedPlatform].title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-200 mt-1">
                    {platforms[selectedPlatform].subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                    Overview
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {platforms[selectedPlatform].desc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
                    Major Components
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {platforms[selectedPlatform].components.map(
                      (comp, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2.5 text-xs text-gray-800 bg-gray-50 border border-gray-200/80 p-3 rounded-xl font-medium"
                        >
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${platforms[selectedPlatform].accentBg}`}
                          />
                          <span>{comp}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
                    Target Participants
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {platforms[selectedPlatform].targets
                      .split(", ")
                      .map((target, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs bg-gray-100 text-gray-800 border border-gray-200 px-3 py-1.5 rounded-lg font-semibold"
                        >
                          {target}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-8 border-t border-gray-100 flex justify-end bg-gray-50">
                <button
                  onClick={() => setSelectedPlatform(null)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  Close Detail
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
