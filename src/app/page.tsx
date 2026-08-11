import React from "react";
import Hero2026 from "@/components/expo-2026/hero";
import Evolution2026 from "@/components/expo-2026/evolution";
import Ecosystem2026 from "@/components/expo-2026/ecosystem";
import Platforms2026 from "@/components/expo-2026/platforms";
import SignaturePrograms2026 from "@/components/expo-2026/signature-programs";
import OpportunitiesCreated2026 from "@/components/expo-2026/opportunities-created";
import FloorPlan2026 from "@/components/expo-2026/floor-plan";
import VenueMap2026 from "@/components/expo-2026/venue-map";
import ContactInformation from "@/components/contact-information";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white ">
      <Hero2026 />
      <Evolution2026 />
      <Ecosystem2026 />
      <Platforms2026 />
      <SignaturePrograms2026 />
      <OpportunitiesCreated2026 />
      <FloorPlan2026 />
      <VenueMap2026 />
      <ContactInformation year={2026} />
    </div>
  );
}
