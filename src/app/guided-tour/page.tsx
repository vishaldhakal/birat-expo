import React from "react";
import BdsPavilionView from "@/components/guided-tour/bds-pavilion-view";
import ContactInformation from "@/components/contact-information";

export const metadata = {
  title: "BIRATBAZAAR BDS Connect Pavilion | Birat Expo 2026",
  description:
    "One visit, a full check-up for your business and the right expert for every problem. BIRATBAZAAR BDS Connect Pavilion at Birat Expo 2026, Biratnagar. By Chamber of Industries Morang.",
};

export default function GuidedTourPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* BIRATBAZAAR BDS Connect Pavilion Interactive Experience */}
      <BdsPavilionView />

      {/* Main Expo Contact Information & Footer */}
      <ContactInformation year={2026} />
    </div>
  );
}
