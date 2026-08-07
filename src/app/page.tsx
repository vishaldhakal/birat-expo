"use client";
import React, { useState } from "react";
import ContactInformation from "@/components/contact-information";

export default function Home() {
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
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-6">
        <div className="w-full max-w-5xl">
          <div className="w-full overflow-hidden border border-gray-100 bg-white">
            <img
              src="/birat-expo-2026/biratexpo2026.jpeg"
              alt="Birat Expo 2026 Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="text-center max-w-4xl mt-4">
          <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            9th Edition
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-5 tracking-tight uppercase">
            Birat Expo 2026
          </h1>
          <p className="text-xl md:text-3xl text-blue-600 font-extrabold mt-3 tracking-wide uppercase">
            Theme: The Ecosystem of Opportunities
          </p>
          <p className="text-md md:text-lg text-gray-500 font-semibold mt-2 italic tracking-wide">
            Brand Promise: Nepal&apos;s Business Ecosystem Platform
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm md:text-base text-gray-700 font-semibold bg-gray-50 p-4 rounded-xl border border-gray-200 max-w-3xl mx-auto">
            <div>22 – 31 December, 2026 (7–16 Poush 2083)</div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div>Biratnagar, Nepal</div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div>Chamber of Industries Morang (CIM)</div>
          </div>
        </div>
      </div>

      {/* Evolution Section */}
      <section className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase">
            The Evolution of Birat Expo
          </h2>
          <div className="w-full max-w-5xl mx-auto overflow-hidden mb-10 border border-gray-150 bg-white">
            <img
              src="/birat-expo-2026/evolutionofbiratexpo.jpeg"
              alt="The Evolution of Birat Expo"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
            <p>
              For nearly three decades, Birat Expo has evolved alongside the economic transformation of Eastern Nepal.
              Organized by the Chamber of Industries Morang (CIM), the Expo has continuously adapted to meet the changing aspirations of industries, entrepreneurs, businesses, and society.
            </p>
            <p>
              The journey began in 2053 B.S. with Koshi Mahotsav, creating a new platform to promote trade, local industries, and regional economic activity.
              Over the years, this vision expanded through Purwanchal Byapar Mela, the Agro Mechanization & Technology Exhibition, and successive editions of Birat Expo, each contributing to the promotion of industry, commerce, agriculture, technology, and investment.
            </p>
            <p>
              The 7th Edition (2022) marked a strategic transformation. Birat Expo expanded beyond product exhibition by introducing integrated platforms for startups, investment, employment, skills, tourism, business development services, technical conferences and the Triple Helix collaboration model. The Expo became a place where industries, entrepreneurs, academia and government interacted to address broader economic challenges.
            </p>
            <p>
              Building upon this transformation, the 8th Edition (2025) embraced the theme &quot;Digital Koshi: Bridging Innovation and Investment.&quot; It further strengthened the ecosystem approach by introducing the Vision Koshi Startup Hackathon, Rojgar Koshi Pavilion, Student Orientation Program, Business-to-Business Platform, Business Development Services and Digital Business Solutions.
            </p>
            <p className="font-bold text-gray-900 bg-blue-50/50 p-4 rounded-xl border-l-4 border-blue-600">
              Today, Birat Expo enters its 9th Edition with a broader purpose. It is no longer defined simply by exhibitions or business transactions. It is defined by the opportunities it creates: The Ecosystem of Opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-12 border-t border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase">
            The Ecosystem of Opportunities
          </h2>
          <p className="max-w-5xl mx-auto text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            Economic growth is not created through isolated initiatives. It is created through ecosystems.
            An ecosystem where businesses collaborate rather than compete in isolation. Where students connect with industries.
            Where entrepreneurs meet investors. Where innovation reaches markets. Where policy meets practice.
            Where partnerships create impact. This philosophy defines Birat Expo 2026.
          </p>

          <div className="w-full max-w-5xl mx-auto overflow-hidden mb-8 border border-gray-200 bg-white">
            <img
              src="/birat-expo-2026/ecosystemofoppurtunities.jpeg"
              alt="Ecosystem of Opportunities Circle"
              className="w-full h-auto"
            />
          </div>

          <h3 className="text-2xl font-black text-gray-900 mb-6 text-center uppercase tracking-wide">
            Four Strategic Pillars
          </h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "LEARN",
                desc: "Knowledge, Skills, Career, Education and Industry Exposure.",
                border: "border-amber-500"
              },
              {
                title: "BUILD",
                desc: "Entrepreneurship, Innovation, Startups, Enterprise Development.",
                border: "border-blue-500"
              },
              {
                title: "CONNECT",
                desc: "Trade, Investment, Business Networking, Policy Dialogue, Strategic Partnerships.",
                border: "border-emerald-500"
              },
              {
                title: "EXPERIENCE",
                desc: "Products, Technology, Culture, Food, Entertainment, Community.",
                border: "border-rose-500"
              }
            ].map((p, i) => (
              <div
                key={i}
                className={`bg-white border-t-4 ${p.border} border-x border-b border-gray-200 rounded-xl p-6 transition-all duration-305`}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Platforms - Tabbed UI */}
      <section className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase">
            6 Opportunity Zones & Platforms
          </h2>
          <p className="max-w-5xl mx-auto text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            Rather than organizing a conventional exhibition around products and pavilions, Birat Expo 2026 organizes related ecosystems into 6 integrated Opportunity Platforms to provide a seamless, value-driven journey.
          </p>

          <div className="w-full max-w-5xl mx-auto overflow-hidden mb-10 border border-gray-200 bg-white">
            <img
              src="/birat-expo-2026/6opportunity.jpeg"
              alt="6 Main Opportunities Platform Diagram"
              className="w-full h-auto"
            />
          </div>

          {/* Desktop/Tablet Tabs */}
          <div className="max-w-5xl mx-auto hidden md:flex flex-wrap gap-2 mb-8 bg-gray-50 p-2 rounded-2xl border border-gray-200">
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
          <div className="max-w-5xl mx-auto block md:hidden mb-6">
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
          <div className="max-w-5xl mx-auto bg-white border border-gray-200 p-6 md:p-10 rounded-2xl">
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

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
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

      {/* Signature Programs */}
      <section className="py-12 border-t border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase">
            Signature Programs
          </h2>
          <p className="max-w-5xl mx-auto text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            The vision of Birat Expo 2026 – The Ecosystem of Opportunities is translated into action through CIM&apos;s flagship platforms. Rather than creating temporary activities, the Expo integrates proven year-round platforms for greater visibility, wider participation, and stronger impact.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Birat Business Summit",
                subtitle: "A New Leadership Platform",
                desc: "A premier business forum bringing together leaders, policymakers, entrepreneurs and development partners to discuss emerging economic opportunities, competitiveness and the future of business.",
                focus: "Leadership • Economy • Investment • Innovation • Policy"
              },
              {
                title: "BiratBazaar",
                subtitle: "Official B2B & Matchmaking",
                desc: "Powers the Expo's business networking ecosystem by facilitating B2B meetings, buyer-seller connections, matchmaking and digital business opportunities.",
                focus: "B2B • Matchmaking • Business Networking • Digital Trade"
              },
              {
                title: "Future Talent Forum",
                subtitle: "Career, Skills & Employment",
                desc: "Integrating Business at School, JobBriz, Skill Festival and Career Guidance initiatives to connect students, job seekers, and industries.",
                focus: "Career • Skills • Employment • Industry Connect"
              },
              {
                title: "Vision Koshi Startup Challenge",
                subtitle: "Startup & Innovation Platform",
                desc: "Powered by the Biratnagar Incubation Center and the Biratnagar Angel Investors Network, this platform supports startups through mentorship, funding, and showcasing.",
                focus: "Startups • Innovation • Mentorship • Investment"
              },
              {
                title: "Business Clinic LIVE",
                subtitle: "Policy & Business Facilitation",
                desc: "An interactive platform connecting businesses, government agencies and experts to address business challenges, improve the environment and strengthen public-private dialogue.",
                focus: "Policy Dialogue • Business Facilitation • Advocacy • Collaboration"
              }
            ].map((prog, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-250 p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{prog.title}</h4>
                  <p className="text-xs text-blue-600 font-bold mt-0.5 mb-3">
                    {prog.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{prog.desc}</p>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-3.5 text-xs font-semibold text-blue-700">
                  Focus: {prog.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 border-l-[6px] border-blue-600 pl-4 uppercase">
            Opportunities Created
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 pl-4 italic">
            &quot;Notice the subtle difference. We are not counting activities. We are counting opportunities created.&quot;
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "250,000+", label: "People Connected" },
              { stat: "10,000+", label: "Learning Opportunities" },
              { stat: "1,000+", label: "Career Opportunities" },
              { stat: "500+", label: "Business Opportunities" },
              { stat: "100+", label: "Startup Opportunities" },
              { stat: "100+", label: "Investment Opportunities" },
              { stat: "250+", label: "Industrial Opportunities" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex flex-col justify-center items-center"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-blue-600">{item.stat}</div>
                <div className="text-xs font-bold text-gray-500 uppercase mt-2">{item.label}</div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white flex flex-col justify-center items-center">
              <div className="text-lg font-bold">Plus</div>
              <div className="text-xs text-blue-100 font-bold text-center mt-1.5 leading-relaxed">
                International, Policy & Community Opportunities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-12 border-t border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase text-start">
            Proposed Floor Plan
          </h2>
          <div className="w-full max-w-4xl mx-auto overflow-hidden bg-white p-3 border border-gray-200">
            <img
              src="/birat-expo-2026/floorplan.jpeg"
              alt="Birat Expo 2026 Floor Plan"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-8">
            <a
              href="/birat-expo-2026/floorplan.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-950 text-white font-bold py-3 px-6 rounded-xl transition duration-200 text-sm md:text-base"
            >
              View Full Resolution Floor Plan
            </a>
          </div>
        </div>
      </section>

      {/* Venue Google Map */}
      <section className="py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase self-start w-full text-start">
            Event Venue (Degree Campus, Biratnagar)
          </h2>
          <div className="w-full max-w-4xl border border-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.584543207205!2d87.27909107542315!3d26.436880476933897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75b5926eae87%3A0xeec78592c4d9be76!2sDegree%20Campus%2C%20Biratnagar!5e0!3m2!1sen!2snp!4v1721831728361!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{
                border: 0,
                width: "100%",
                height: "450px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contacts footer */}
      <ContactInformation year={2026} />
    </div>
  );
}
