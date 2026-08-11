import React from "react";

export default function OpportunitiesCreated2026() {
  return (
    <section className="py-12 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 border-l-[6px] border-blue-600 pl-4 uppercase">
          Opportunities Created
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-10 pl-4 italic">
          &quot;Notice the subtle difference. We are not counting activities. We are counting opportunities created.&quot;
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
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
              className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex flex-col justify-center items-start"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-blue-600">{item.stat}</div>
              <div className="text-xs font-bold text-gray-500 uppercase mt-2">{item.label}</div>
            </div>
          ))}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white flex flex-col justify-center items-start">
            <div className="text-lg font-bold">Plus</div>
            <div className="text-xs text-blue-100 font-bold text-left mt-1.5 leading-relaxed">
              International, Policy & Community Opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
