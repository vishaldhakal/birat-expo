import React from "react";

// 1. Hero — Full-screen cinematic experience
import Hero2026 from "@/components/expo-2026/hero";

// Why Birat Expo?
import WhyBiratExpo2026 from "@/components/expo-2026/why-birat-expo";

// 2. More Than an Exhibition
import Evolution2026 from "@/components/expo-2026/evolution";

// 3. Expo in Numbers
import OpportunitiesCreated2026 from "@/components/expo-2026/opportunities-created";

// 4. The Ecosystem — Learn / Build / Connect / Experience
import Ecosystem2026 from "@/components/expo-2026/ecosystem";

// 5. Choose Your Experience (6 Platforms)
import Platforms2026 from "@/components/expo-2026/platforms";

// 6. 5 Signature Experiences
import SignaturePrograms2026 from "@/components/expo-2026/signature-programs";

// 7. Meet Asha — The Dolphin of Opportunity
import Mascot2026 from "@/components/expo-2026/mascot";

// 8. Explore the Expo / Interactive Map
import FloorPlan2026 from "@/components/expo-2026/floor-plan";
import VenueMap2026 from "@/components/expo-2026/venue-map";

// 9. Why Exhibit?
import StallBookingSection2026 from "@/components/expo-2026/stall-booking-section";

// 10. One Idea. One Connection. One Opportunity.
import OneCTA2026 from "@/components/expo-2026/one-cta";

// 11. Final CTA — Your Opportunity Is Waiting
import ContactInformation from "@/components/contact-information";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero */}
      <Hero2026 />

      {/* Why Birat Expo? */}
      <WhyBiratExpo2026 />

      {/* 2. More Than an Exhibition */}
      {/* <Evolution2026 /> */}

      {/* 4. The Ecosystem */}
      <Ecosystem2026 />

      {/* 3. Expo in Numbers */}
      <OpportunitiesCreated2026 />

      {/* 5. Choose Your Experience */}
      <Platforms2026 />

      {/* 6. 5 Signature Experiences */}
      <SignaturePrograms2026 />

      {/* 7. Meet Asha — The Dolphin of Opportunity */}
      <Mascot2026 />

      {/* 8. Explore the Expo / Interactive Map */}
      <FloorPlan2026 />
      <VenueMap2026 />

      {/* 9. Why Exhibit? */}
      <StallBookingSection2026 />

      {/* 11. Final CTA — Your Opportunity Is Waiting */}
      <ContactInformation year={2026} />
    </div>
  );
}
