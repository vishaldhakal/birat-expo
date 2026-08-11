import React from "react";

export default function SignaturePrograms2026() {
  return (
    <section className="py-12 border-t border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase">
          Signature Programs
        </h2>
        <p className="w-full text-base md:text-lg text-gray-700 mb-10 leading-relaxed text-justify">
          The vision of Birat Expo 2026 – The Ecosystem of Opportunities is translated into action through CIM&apos;s flagship platforms. Rather than creating temporary activities, the Expo integrates proven year-round platforms for greater visibility, wider participation, and stronger impact.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}
