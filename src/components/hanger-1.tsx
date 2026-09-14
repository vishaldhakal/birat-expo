"use client";

import React, { useEffect } from "react";
import { StallItem } from "./stall-item";
import hanger1Data from "./hanger-1-stalls.json";

type StallInfo = {
  id: string;
  companyName?: string;
};

type HangerOneProps = {
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

const Hanger1: React.FC<HangerOneProps> = ({
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

  return (
    <div className="w-full">
      <div className="text-center text-xl font-bold mb-4">
        Total Price: Rs. {totalPrice.toLocaleString()}
      </div>

      <div
        className="relative w-full bg-gray-200 border border-gray-400 rounded-lg overflow-hidden shadow-inner"
        style={{ aspectRatio: "2153.72 / 604" }}
      >
        {hanger1Data.stalls.map((stall) => {
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
          const stallPrice = isPrime ? 75000 : 50000;
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
          } else if (isPrime1) {
            color = "#f5aeae";
          } else if (isPrime2) {
            color = "#f3efa3";
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
  );
};

export default Hanger1;
