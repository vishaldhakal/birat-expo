import React from "react";

export default function Ecosystem2026() {
  return (
    <section className="py-12 border-t border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-[6px] border-blue-600 pl-4 uppercase">
          The Ecosystem of Opportunities
        </h2>
        <p className="w-full text-base md:text-lg text-gray-700 mb-10 leading-relaxed text-justify">
          Economic growth is not created through isolated initiatives. It is created through ecosystems.
          An ecosystem where businesses collaborate rather than compete in isolation. Where students connect with industries.
          Where entrepreneurs meet investors. Where innovation reaches markets. Where policy meets practice.
          Where partnerships create impact. This philosophy defines Birat Expo 2026.
        </p>

        <div className="w-full overflow-hidden mb-8 border border-gray-200 bg-white">
          <img
            src="/birat-expo-2026/ecosystemofoppurtunities.jpeg"
            alt="Ecosystem of Opportunities Circle"
            className="w-full h-auto"
          />
        </div>

        <h3 className="text-2xl font-black text-gray-900 mb-6 text-left uppercase tracking-wide">
          Four Strategic Pillars
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className={`bg-white border-t-4 ${p.border} border-x border-b border-gray-200 rounded-xl p-6 transition-all duration-300`}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
