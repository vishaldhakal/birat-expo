import React from "react";
import PavilionHero from "@/components/startups-hackathon/pavilion-hero";
import PavilionMetrics from "@/components/startups-hackathon/pavilion-metrics";
import PavilionLayout from "@/components/startups-hackathon/pavilion-layout";
import PavilionThreeRooms from "@/components/startups-hackathon/pavilion-three-rooms";
import PavilionTenDays from "@/components/startups-hackathon/pavilion-ten-days";
import PavilionVisitorJourney from "@/components/startups-hackathon/pavilion-visitor-journey";
import PavilionProblemStatements from "@/components/startups-hackathon/pavilion-problem-statements";
import PavilionTakePart from "@/components/startups-hackathon/pavilion-take-part";
import ContactInformation from "@/components/contact-information";

export const metadata = {
  title: "Startup & Entrepreneurship Pavilion | Birat Expo 2026",
  description:
    "Biratnagar Incubation Center (BIC) Startup & Entrepreneurship Pavilion at Birat Expo 2026. Three rooms, one connected pipeline: Curiosity (Grades 7-10), Capability (College Students), and Capital (Small & Growing Businesses).",
};

export default function StartupsHackathonPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero with Dates, Location, Badges & Action CTAs */}
      <PavilionHero />

      {/* 2. Key Metrics & BIC at a Glance */}
      <PavilionMetrics />

      {/* 3. Architectural Bamboo Frame & 3D Render Layout */}
      <PavilionLayout />

      {/* 4. Inside the Three Rooms (Makerspace, Design Studio, Growth Room) */}
      <PavilionThreeRooms />

      {/* 5. 10-Day Festival Programme (Discover, Build, Compete, Market, Partner, Invest) */}
      <PavilionTenDays />

      {/* 6. Five-Step Visitor Journey */}
      <PavilionVisitorJourney />

      {/* 7. Vision Koshi Innovation Challenge Problem Statements */}
      <PavilionProblemStatements />

      {/* 8. How to Take Part (Interactive Pre-Registration & Enquiries) */}
      <PavilionTakePart />

      {/* 10. Contact Information & Organizer Details */}
      <ContactInformation year={2026} />
    </div>
  );
}
