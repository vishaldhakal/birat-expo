"use client";

import React, { useEffect } from "react";
import { StallItem } from "./stall-item";
import bdsData from "./bds-stalls.json";

type StallInfo = {
  id: string;
  companyName?: string;
};

type BDSPRops = {
  reservedStalls: StallInfo[];
  bookedStalls: StallInfo[];
  primeStallsType1: string[];
  primeStallsType2: string[];
  notAvailableStalls: string[];
  toiletStalls: string[];
  selectedStalls: string[];
  onAvailableStallClick: (stallId: string) => void;
  totalPrice: number;
  setTotalPrice: (price: number) => void;
};

const BDSPavilion: React.FC<BDSPRops> = ({
  bookedStalls,
  reservedStalls,
  primeStallsType1,
  primeStallsType2,
  notAvailableStalls,
  toiletStalls,
  selectedStalls,
  onAvailableStallClick,
  totalPrice,
  setTotalPrice,
}) => {
  const primeStallsSet = new Set([...primeStallsType1, ...primeStallsType2]);
  const bookedMap = new Map(bookedStalls.map((s) => [s.id, s]));
  const reservedMap = new Map(reservedStalls.map((s) => [s.id, s]));
  const notAvailableSet = new Set(notAvailableStalls);
  const toiletSet = new Set(toiletStalls);

  useEffect(() => {
    const primeStallCount = selectedStalls.filter((stall) =>
      primeStallsSet.has(stall),
    ).length;
    const regularStallCount = selectedStalls.length - primeStallCount;
    const calculatedTotal = primeStallCount * 60000 + regularStallCount * 50000;
    setTotalPrice(calculatedTotal);
  }, [selectedStalls, primeStallsType1, primeStallsType2, setTotalPrice]);

  // Cyan highlight stalls according to floor plan image: E36, E15
  const cyanStalls = new Set(["E36", "E15"]);

  // Yellow highlighted stalls from floor plan image (Prime stalls)
  const yellowHighlightStalls = new Set([
    "E49",
    "E50",
    "E32",
    "E31",
    "E26",
    "E25",
    "E17",
    "E18",
    "E23",
    "E24",
    "E2",
    "E1",
  ]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center text-xl font-bold mb-4">
        Total Price: Rs. {totalPrice.toLocaleString()}
      </div>

      {/* Compact container with responsive horizontal scroll fallback */}
      <div className="w-full max-w-4xl overflow-x-auto p-1">
        <div
          className="relative w-full min-w-[500px] bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm"
          style={{ aspectRatio: "1000 / 450" }}
        >
          {/* Top Hall Title */}
          <div className="absolute top-[21%] left-1/2 -translate-x-1/2 pointer-events-none z-0">
            <span className="text-xs sm:text-sm md:text-base font-extrabold text-emerald-700 uppercase tracking-wider">
              Agro SMES Stalls
            </span>
          </div>

          {/* Bottom Hall Title */}
          <div className="absolute bottom-[21%] left-1/2 -translate-x-1/2 pointer-events-none z-0">
            <span className="text-xs sm:text-sm md:text-base font-extrabold text-emerald-700 uppercase tracking-wider">
              Agro SMES Stalls
            </span>
          </div>

          {/* Passages and arrows */}
          <div className="absolute top-[22%] right-4 flex items-center gap-1 text-gray-400 pointer-events-none text-xs">
            <span>&rarr;</span>
          </div>
          <div className="absolute bottom-[22%] right-4 flex items-center gap-1 text-gray-400 pointer-events-none text-xs">
            <span>&larr;</span>
          </div>
          <div className="absolute top-[20%] left-12 flex flex-col text-gray-400 pointer-events-none text-xs">
            <span>&uarr;</span>
          </div>
          <div className="absolute bottom-[20%] left-[20%] flex items-center text-gray-400 pointer-events-none text-xs">
            <span>&rarr;</span>
          </div>

          {bdsData.stalls.map((stall) => {
            const booked = bookedMap.get(stall.id);
            const reserved = reservedMap.get(stall.id);
            const isPrime1 = primeStallsType1.includes(stall.id);
            const isPrime2 = primeStallsType2.includes(stall.id);
            const isPrime = isPrime1 || isPrime2;
            const isSelected = selectedStalls.includes(stall.id);
            const isNotAvailable = notAvailableSet.has(stall.id);
            const isToilet = toiletSet.has(stall.id);

            let color = "#ffffff";
            let cursor: "pointer" | "not-allowed" | "normal" = "pointer";
            let isClickable = true;
            const stallPrice = isPrime ? 75000 : 25000;
            let tooltipContent = `Stall ${stall.id}- Rs. ${stallPrice.toLocaleString()}`;

            if (reserved) {
              color = "#ffcc00";
              cursor = "not-allowed";
              isClickable = false;
              tooltipContent = reserved.companyName || `Stall ${stall.id}`;
            } else if (booked) {
              color = "#fb2e01";
              cursor = "not-allowed";
              isClickable = false;
              tooltipContent = booked.companyName || `Stall ${stall.id}`;
            } else if (isToilet) {
              color = "#26abe2";
              cursor = "not-allowed";
              isClickable = false;
              tooltipContent = "Toilet";
            } else if (isNotAvailable) {
              color = "#ffffff";
              cursor = "normal";
              isClickable = false;
              tooltipContent = "";
            } else if (isSelected) {
              color = "#00ff00";
            } else if (cyanStalls.has(stall.id)) {
              color = "#38bdf8"; // Cyan blue corner accent
            } else if (isPrime1) {
              color = "#f5aeae";
            } else if (isPrime2) {
              color = "#f3efa3";
            } else if (yellowHighlightStalls.has(stall.id)) {
              color = "#fef08a"; // Soft yellow accent
            }

            return (
              <StallItem
                key={stall.id}
                id={stall.id}
                xPct={stall.xPct}
                yPct={stall.yPct}
                wPct={stall.wPct}
                hPct={stall.hPct}
                color={color}
                cursor={cursor}
                isClickable={isClickable}
                tooltipContent={tooltipContent}
                onClick={() => onAvailableStallClick(stall.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BDSPavilion;
