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
    <div className="w-full flex flex-col items-center">
      <h2 className="text-center mb-4 px-4 font-extrabold text-xl">
        {"Total Price: Rs. " + totalPrice.toLocaleString()}
      </h2>

      {/* Container with responsive horizontal scroll fallback */}
      <div className="w-full max-w-4xl overflow-x-auto p-1">
        <div
          className="relative w-full min-w-[640px] bg-[#e8ecf4] border-2 border-slate-600 rounded-sm overflow-hidden shadow-sm"
          style={{ aspectRatio: "1000 / 320" }}
        >
          {/* Center Title Label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="text-sm sm:text-base md:text-lg font-black text-slate-900 tracking-wide select-none">
              AUTO Pavilion
            </span>
          </div>

          {autoBdsData.stalls.map((stall) => {
            const booked = bookedMap.get(stall.id);
            const reserved = reservedMap.get(stall.id);
            const isSelected = selectedStalls.includes(stall.id);

            let color = "#fccc65"; // Auto Pavilion gold
            let cursor: "pointer" | "not-allowed" = "pointer";
            let isClickable = true;
            let tooltipContent = `Auto Pavilion Stall ${stall.id} - Rs. ${stallPrice.toLocaleString()}`;

            if (booked) {
              color = "#fb2e01";
              cursor = "not-allowed";
              isClickable = false;
              tooltipContent = booked.companyName || `Stall ${stall.id}`;
            } else if (reserved) {
              color = "#fffa00";
              cursor = "not-allowed";
              isClickable = false;
              tooltipContent = reserved.companyName || `Stall ${stall.id}`;
            } else if (isSelected) {
              color = "#00ff00";
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

export default AutoBDSPavilion;
