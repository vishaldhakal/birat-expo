import React from "react";

export default function VenueMap2026() {
  return (
    <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Location & Navigation
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight mb-8">
          Event Venue <span className="text-blue-600">(Degree Campus, Biratnagar)</span>
        </h2>
        <div className="w-full border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
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
  );
}
