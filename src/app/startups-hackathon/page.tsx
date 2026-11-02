import React from "react";
import PavilionDashboardView from "@/components/startups-hackathon/pavilion-dashboard-view";
import ContactInformation from "@/components/contact-information";

export const metadata = {
  title: "Startup & Entrepreneurship Pavilion | Birat Expo 2026",
  description:
    "Biratnagar Incubation Center (BIC) Startup & Entrepreneurship Pavilion at Birat Expo 2026. Three rooms, open to everyone. Walk in at fourteen with a problem you have noticed, and walk out of the third room as a business ready for investment.",
};

export default function StartupsHackathonPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Complete Startup & Entrepreneurship Pavilion Dashboard View */}
      <PavilionDashboardView />

      {/* Main Expo Footer Contact Information */}
      <ContactInformation year={2026} />
    </div>
  );
}
