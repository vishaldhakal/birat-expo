"use client";

import React, { useEffect } from "react";
import { StallItem } from "./stall-item";
import autoBdsData from "./auto-bds-stalls.json";

type StallInfo = {
  id: string;
  companyName?: string;
};

type AutoBDSPavilionProps = {
  bookedStalls: StallInfo[];
  reservedStalls: StallInfo[];
  stallPrice: number;
  totalPrice: number;
  setTotalPrice: (price: number) => void;
  selectedStalls: string[];
  onAvailableStallClick: (stallId: string) => void;
};

const AutoBDSPavilion: React.FC<AutoBDSPavilionProps> = ({
  bookedStalls,
  reservedStalls,
  setTotalPrice,
  totalPrice,
  selectedStalls,
  stallPrice,
  onAvailableStallClick,
}) => {
  useEffect(() => {
    setTotalPrice(selectedStalls.length * stallPrice);
  }, [selectedStalls, stallPrice, setTotalPrice]);

  const bookedMap = new Map(bookedStalls.map((s) => [s.id, s]));
  const reservedMap = new Map(reservedStalls.map((s) => [s.id, s]));

  return (
    <div className="w-full">
      <h2 className="text-center mb-4 px-4 font-extrabold text-xl">
        {"Total Price: Rs. " + totalPrice.toLocaleString()}
      </h2>

      <div
        className="relative w-full bg-gray-200 border border-gray-400 rounded-lg overflow-hidden shadow-inner"
        style={{ aspectRatio: "1992.75 / 1007.25" }}
      >
        {autoBdsData.stalls.map((stall) => {
          const booked = bookedMap.get(stall.id);
          const reserved = reservedMap.get(stall.id);
          const isSelected = selectedStalls.includes(stall.id);

          const stallType = stall.id.startsWith("A")
            ? "Auto Mobile"
            : stall.id.startsWith("E")
            ? "BDS Provider"
            : "Other";

          let color = "#6ec007";
          let cursor: "pointer" | "not-allowed" = "pointer";
          let isClickable = true;
          let tooltipContent = `${stallType}- Rs. ${stallPrice.toLocaleString()}`;

          if (booked) {
            color = "#fb2e01";
            cursor = "not-allowed";
            isClickable = false;
            tooltipContent = booked.companyName || `${stallType}- Rs. ${stallPrice.toLocaleString()}`;
          } else if (reserved) {
            color = "#fffa00";
            cursor = "not-allowed";
            isClickable = false;
            tooltipContent = reserved.companyName || `${stallType}- Rs. ${stallPrice.toLocaleString()}`;
          } else if (isSelected) {
            color = "#00ff00";
          } else if (stall.id.startsWith("A")) {
            color = "#fccc65";
          } else if (stall.id.startsWith("E")) {
            color = "#ffffff";
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

export default AutoBDSPavilion;
