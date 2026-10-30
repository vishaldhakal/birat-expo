import React from "react";
import PavilionHero from "@/components/startups-hackathon/pavilion-hero";
import PavilionTodayAndCounters from "@/components/startups-hackathon/pavilion-today-counters";
import PavilionMetrics from "@/components/startups-hackathon/pavilion-metrics";
import PavilionWhyWeAreDoingThis from "@/components/startups-hackathon/pavilion-why-we-are-doing-this";
import PavilionLayout from "@/components/startups-hackathon/pavilion-layout";
import PavilionThreeRooms from "@/components/startups-hackathon/pavilion-three-rooms";
import PavilionTimeline from "@/components/startups-hackathon/pavilion-timeline";
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
      {/* 1. Centered Hero Section with Dynamic Countdown, Venue & Key Dates */}
      <PavilionHero />

      {/* 2. Today at the Pavilion & Live Operational Enquiry Desk Counters (from HTML Dashboard) */}
      <PavilionTodayAndCounters />

      {/* 3. BIC at a Glance & Target Footfall Impact Metrics */}
      <PavilionMetrics />

      {/* 4. Why We Are Doing This - The 4 Incubation Pillars (from Booklet Section 2) */}
      <PavilionWhyWeAreDoingThis />

      {/* 5. Architectural Bamboo Frame & 3D Render Layout Showcase */}
      <PavilionLayout />

      {/* 6. Inside the Three Rooms (Makerspace, Design Studio, Growth Room) */}
      <PavilionThreeRooms />

      {/* 7. The Work So Far - 5-Year Track Record 2021-2026 (from Booklet Section 3) */}
      <PavilionTimeline />

      {/* 8. 10-Day Festival Programme (Discover, Build, Compete, Market, Partner, Invest) */}
      <PavilionTenDays />

      {/* 9. The 5-Step Single Route Visitor Journey */}
      <PavilionVisitorJourney />

      {/* 10. Vision Koshi Innovation Challenge Problem Statements */}
      <PavilionProblemStatements />

      {/* 11. How to Take Part (Schools, College Students, Business Owners, Mentors & Chamber Desk) */}
      <PavilionTakePart />

      {/* 12. Main Expo Contact Information & Organizer Details */}
      <ContactInformation year={2026} />
    </div>
  );
}
