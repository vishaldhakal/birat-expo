import React, { Suspense } from "react";
import BicPavilionEnquiryForm from "@/components/startups-hackathon/bic-pavilion-enquiry-form";
import ContactInformation from "@/components/contact-information";

export const metadata = {
  title: "Enquiry & Booking | Startup & Entrepreneurship Pavilion | Birat Expo 2026",
  description:
    "Book a class visit, join the next Design Thinking workshop, or apply for the CIM SGB Accelerator at Birat Expo 2026 (Biratnagar Incubation Center).",
};

export default function PavilionEnquiryPage() {
  return (
    <div className="w-full min-h-screen bg-[#f4f7fb]">
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <div className="w-8 h-8 border-4 border-[#274ea3]/30 border-t-[#274ea3] rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-slate-600">Loading Pavilion Enquiry Form...</p>
          </div>
        }
      >
        <BicPavilionEnquiryForm />
      </Suspense>

      <ContactInformation year={2026} />
    </div>
  );
}

