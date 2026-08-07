import React from "react";

export default function VenueMap2026() {
  return (
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
  );
}
