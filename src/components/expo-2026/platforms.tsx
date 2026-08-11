"use client";
import React, { useState } from "react";

export default function Platforms2026() {
  const [activeTab, setActiveTab] = useState(0);

  const platforms = [
    {
      title: "Learn & Work Platform",
      subtitle: "Preparing Talent for the Future",
      desc: "Connects students, job seekers, industries, educational institutions, and training providers to bridge the gap between education and employment.",
      components: [
        "Career Guidance & Counselling",
        "Career Aptitude Assessment",
        "CV Writing Clinic",
        "Walk-in Interviews",
        "Job Matching Services",
        "Internship & Apprenticeship Opportunities",
        "TVET & Skills Showcase",
        "Future Career Sessions",
        "JobBriz Career Platform"
      ],
      targets: "Students, Job Seekers, Schools & Colleges, Universities, TVET Institutions, HR Professionals, Parents",
      color: "border-amber-500 text-amber-600 bg-amber-50",
      pillBg: "bg-amber-100 text-amber-800"
    },
    {
      title: "Build Platform",
      subtitle: "From Ideas to Enterprises",
      desc: "Designed for startups, entrepreneurs, and innovators seeking to transform ideas into sustainable businesses through incubation, mentoring, and investment readiness.",
      components: [
        "Startup Pavilion",
        "Vision Koshi Startup Challenge",
        "Pitch Competition",
        "Incubation Support",
        "Mentor Connect",
        "Investor Meet",
        "Angel Investment Network",
        "Innovation Showcase"
      ],
      targets: "Startups, Entrepreneurs, Innovators, Incubators, Investors, Banks & Financial Institutions, Development Partners",
      color: "border-blue-500 text-blue-600 bg-blue-50",
      pillBg: "bg-blue-100 text-blue-800"
    },
    {
      title: "Connect Platform",
      subtitle: "Growing Businesses Through Connections",
      desc: "Helps businesses expand through networking, collaboration, B2B matchmaking, export desks, and strategic market access.",
      components: [
        "B2B Meetings",
        "Business Matchmaking",
        "Buyer–Seller Meet",
        "Business Advisory Services",
        "Digital Business Platforms",
        "Export Promotion Desk",
        "Dealer & Distributor Networking",
        "Business Networking Lounge"
      ],
      targets: "Industries, SMEs, Traders, Exporters, Importers, Business Associations, Service Providers",
      color: "border-emerald-500 text-emerald-600 bg-emerald-50",
      pillBg: "bg-emerald-100 text-emerald-800"
    },
    {
      title: "Expand & Discover Platform",
      subtitle: "Showcasing Products, Services and Innovation",
      desc: "The largest exhibition platform enabling businesses to showcase products and technologies while consumers discover new market trends.",
      components: [
        "National Product Exhibition",
        "International Pavilion",
        "Industrial Showcase",
        "SME Pavilion",
        "Made in Nepal Pavilion",
        "Technology Showcase",
        "Product Launches",
        "Live Demonstrations"
      ],
      targets: "Industries, SMEs, National & International Exhibitors, Buyers, Consumers, Trade Visitors",
      color: "border-purple-500 text-purple-600 bg-purple-50",
      pillBg: "bg-purple-100 text-purple-800"
    },
    {
      title: "Experience Platform",
      subtitle: "Celebrating Business, Culture and Community",
      desc: "Creates a vibrant atmosphere that blends commerce with culture, food, tourism, and entertainment across the entire Expo venue.",
      components: [
        "Food Festival",
        "Cultural Performances",
        "Entertainment Programs",
        "Family Activities",
        "Live Demonstrations",
        "Tourism Promotion",
        "Interactive Experiences",
        "Evening Events"
      ],
      targets: "Families, Youth, Visitors, Tourists, Consumers, Communities",
      color: "border-rose-500 text-rose-600 bg-rose-50",
      pillBg: "bg-rose-100 text-rose-800"
    },
    {
      title: "Influence Platform",
      subtitle: "Shaping Policies. Strengthening Partnerships.",
      desc: "A collaborative space for government agencies, policymakers, business leaders, development partners, and academia to address regulatory and business challenges.",
      components: [
        "Policy Dialogue Sessions",
        "Business Clinic",
        "Government Service Desk",
        "Public–Private Dialogue",
        "Roundtable Discussions",
        "Development Partner Forum",
        "Business Leaders Forum",
        "White Paper Launches"
      ],
      targets: "Government Agencies, Policymakers, Private Sector, Development Partners, Academic Institutions, Think Tanks",
      color: "border-slate-500 text-slate-600 bg-slate-50",
      pillBg: "bg-slate-100 text-slate-800"
    }
  ];

  return (
    <section className="py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase">
          6 Opportunity Zones & Platforms
        </h2>
        <p className="w-full text-base md:text-lg text-gray-700 mb-10 leading-relaxed text-justify">
          Rather than organizing a conventional exhibition around products and pavilions, Birat Expo 2026 organizes related ecosystems into 6 integrated Opportunity Platforms to provide a seamless, value-driven journey.
        </p>

        <div className="w-full overflow-hidden mb-10 border border-gray-200 bg-white">
          <img
            src="/birat-expo-2026/6opportunity.jpeg"
            alt="6 Main Opportunities Platform Diagram"
            className="w-full h-auto"
          />
        </div>

        {/* Desktop/Tablet Tabs */}
        <div className="w-full hidden md:flex flex-wrap gap-2 mb-8 bg-gray-50 p-2 rounded-2xl border border-gray-200">
          {platforms.map((plat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === idx
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {plat.title.split("Platform")[0]}
            </button>
          ))}
        </div>

        {/* Mobile Tab Selector */}
        <div className="w-full block md:hidden mb-6">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(Number(e.target.value))}
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm font-bold rounded-xl focus:ring-blue-500 focus:border-blue-500 p-3"
          >
            {platforms.map((plat, idx) => (
              <option key={idx} value={idx}>
                {plat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Active Platform Card Details */}
        <div className="w-full bg-white border border-gray-200 p-6 md:p-10 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-150">
            <div>
              <h3 className="text-2xl font-black text-gray-900">
                {platforms[activeTab].title}
              </h3>
              <p className="text-md font-bold text-blue-600 mt-1">
                {platforms[activeTab].subtitle}
              </p>
            </div>
            <span
              className={`inline-block self-start md:self-auto text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full ${platforms[activeTab].pillBg}`}
            >
              Platform {activeTab + 1}
            </span>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 text-justify">
            {platforms[activeTab].desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-black text-gray-950 uppercase tracking-widest mb-4">
                Major Components
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {platforms[activeTab].components.map((comp, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-blue-500 font-bold">-</span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50/70 border border-gray-200/60 rounded-2xl p-6">
              <h4 className="text-sm font-black text-gray-950 uppercase tracking-widest mb-4">
                Target Participants
              </h4>
              <div className="flex flex-wrap gap-2">
                {platforms[activeTab].targets.split(", ").map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs bg-white text-gray-800 border border-gray-200 px-3 py-1.5 rounded-lg font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
