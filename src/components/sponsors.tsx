"use client";

import React, { useEffect } from "react";
import { StallItem } from "./stall-item";

type SponsorStallPropsType = {
  sponsor_type: string;
  price: number;
  color: string;
  stallid: string[];
};

type StallInfo = {
  id: string;
  companyName: string;
};

type SponsorsProps = {
  sponsorStallProps: SponsorStallPropsType[];
  bookedStalls: StallInfo[];
  reservedStalls: StallInfo[];
  totalPrice: number;
  setTotalPrice: (price: number) => void;
  selectedStalls: string[];
  onAvailableStallClick: (stallId: string) => void;
};

const sponsorStallsData = [
  { id: "S1", xPct: 0.1233, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S2", xPct: 8.491, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S3", xPct: 16.8589, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S4", xPct: 25.1636, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S5", xPct: 33.2033, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S6", xPct: 41.571, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S7", xPct: 49.643, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S8", xPct: 57.9793, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S9", xPct: 66.4007, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S10", xPct: 74.7684, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S11", xPct: 83.1363, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
  { id: "S12", xPct: 91.504, yPct: 0, wPct: 8.3547, hPct: 99.3846 },
];

const Sponsors: React.FC<SponsorsProps> = ({
  sponsorStallProps,
  bookedStalls,
  reservedStalls,
  setTotalPrice,
  totalPrice,
  selectedStalls,
  onAvailableStallClick,
}) => {
  useEffect(() => {
    const newTotalPrice = selectedStalls.reduce((total, stallId) => {
      const sponsorType = sponsorStallProps.find((sp) =>
        sp.stallid.includes(stallId)
      );
      return total + (sponsorType ? sponsorType.price : 0);
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [selectedStalls, sponsorStallProps, setTotalPrice]);

  return (
    <div className="w-full">
      <div>
        <p className="text-lg text-center my-2 font-semibold">
          Total Price: Rs. {totalPrice.toLocaleString()}
        </p>
      </div>

      <div
        className="relative w-full bg-gray-200 border border-gray-400 rounded-lg overflow-hidden shadow-inner"
        style={{ aspectRatio: "2373 / 202.5" }}
      >
        {sponsorStallsData.map((stall) => {
          const booked = bookedStalls.find((b) => b.id === stall.id);
          const reserved = reservedStalls.find((r) => r.id === stall.id);
          const sponsorType = sponsorStallProps.find((sp) =>
            sp.stallid.includes(stall.id)
          );
          const isSelected = selectedStalls.includes(stall.id);

          let color = sponsorType ? sponsorType.color : "#6fbe49";
          let cursor: "pointer" | "not-allowed" = "pointer";
          let isClickable = true;
          let tooltipContent = sponsorType
            ? `Type: ${sponsorType.sponsor_type}\nPrice: Rs.${sponsorType.price}`
            : `Stall ${stall.id}`;

          if (booked) {
            color = "#fb2e01";
            cursor = "not-allowed";
            isClickable = false;
            tooltipContent = `Company: ${booked.companyName}`;
          } else if (reserved) {
            color = "#ffff00";
            cursor = "not-allowed";
            isClickable = false;
            tooltipContent = `Company: ${reserved.companyName}`;
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

export default Sponsors;
