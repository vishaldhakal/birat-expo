"use client";

import React, { useEffect } from "react";
import { StallItem } from "./stall-item";

type StallInfo = {
  id: string;
  companyName?: string;
};

type FoodProps = {
  bookedStalls: StallInfo[];
  reservedStalls: StallInfo[];
  stallPrice: number;
  totalPrice: number;
  setTotalPrice: (price: number) => void;
  selectedStalls: string[];
  onAvailableStallClick: (stallId: string) => void;
};

const foodStallsData = [
  { id: "F1", xPct: 0.3679, yPct: 0, wPct: 9.9186, hPct: 98.9892 },
  { id: "F2", xPct: 10.2876, yPct: 0, wPct: 9.9182, hPct: 98.9892 },
  { id: "F3", xPct: 20.207, yPct: 0, wPct: 9.9182, hPct: 98.9892 },
  { id: "F4", xPct: 30.1264, yPct: 0, wPct: 9.9186, hPct: 98.9892 },
  { id: "F5", xPct: 40.0457, yPct: 0, wPct: 9.9186, hPct: 98.9892 },
  { id: "F6", xPct: 49.9651, yPct: 0, wPct: 9.9186, hPct: 98.9892 },
  { id: "F7", xPct: 59.8845, yPct: 0, wPct: 9.9186, hPct: 98.9892 },
  { id: "F8", xPct: 69.8042, yPct: 0, wPct: 9.9182, hPct: 98.9892 },
  { id: "F9", xPct: 79.7236, yPct: 0, wPct: 9.9186, hPct: 98.9892 },
  { id: "F10", xPct: 89.6429, yPct: 0, wPct: 9.9186, hPct: 98.9892 },
];

const Food: React.FC<FoodProps> = ({
  bookedStalls,
  selectedStalls,
  reservedStalls,
  setTotalPrice,
  stallPrice,
  totalPrice,
  onAvailableStallClick,
}) => {
  useEffect(() => {
    setTotalPrice(selectedStalls.length * stallPrice);
  }, [selectedStalls, stallPrice, setTotalPrice]);

  return (
    <div className="w-full">
      <div className="text-center text-xl font-bold mb-4">
        Total Price: Rs. {totalPrice.toLocaleString()}
      </div>

      <div
        className="relative w-full bg-gray-200 border border-gray-400 rounded-lg overflow-hidden shadow-inner"
        style={{ aspectRatio: "996 / 101.25" }}
      >
        {foodStallsData.map((stall) => {
          const booked = bookedStalls.find((b) => b.id === stall.id);
          const reserved = reservedStalls.find((r) => r.id === stall.id);
          const isSelected = selectedStalls.includes(stall.id);

          let color = "#6fbe49";
          let cursor: "pointer" | "not-allowed" = "pointer";
          let isClickable = true;
          let tooltipContent = `Food Stall ${stall.id} - Rs. ${stallPrice.toLocaleString()}`;

          if (booked) {
            color = "#fb2e01";
            cursor = "not-allowed";
            isClickable = false;
            tooltipContent = `${
              booked.companyName || `Food Stall ${stall.id}`
            } - Rs. ${stallPrice.toLocaleString()}`;
          } else if (reserved) {
            color = "#fffa00";
            cursor = "not-allowed";
            isClickable = false;
            tooltipContent = `${
              reserved.companyName || `Food Stall ${stall.id}`
            } - Rs. ${stallPrice.toLocaleString()}`;
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
  );
};

export default Food;
