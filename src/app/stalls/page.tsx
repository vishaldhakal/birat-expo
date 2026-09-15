"use client";
import FloorPlan2026 from "@/components/expo-2026/floor-plan";
import StallBookingSection2026 from "@/components/expo-2026/stall-booking-section";
import React, { Suspense } from "react";

const Stalls = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mb-40">
        <StallBookingSection2026 />
        <FloorPlan2026 />
      </div>
    </Suspense>
  );
};

export default Stalls;
