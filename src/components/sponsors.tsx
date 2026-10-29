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

import { sponsorStallsData } from "./sponsor-booking";

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
    <div className="w-full flex flex-col items-center">
      <div>
        <p className="text-lg text-center my-2 font-semibold">
          Total Price: Rs. {totalPrice.toLocaleString()}
        </p>
      </div>

      <div className="w-full flex justify-center p-2">
        <div
          className="relative bg-gray-50 border border-gray-300 rounded-xl overflow-hidden shadow-inner"
          style={{ width: "min(100%, 360px)", aspectRatio: "1 / 2" }}
        >
          {/* Stalls */}
          {sponsorStallsData.map((stall) => {
            const booked = bookedStalls.find((b) => b.id === stall.id);
            const reserved = reservedStalls.find((r) => r.id === stall.id);
            const sponsorType = sponsorStallProps.find((sp) =>
              sp.stallid.includes(stall.id)
            );
            const isSelected = selectedStalls.includes(stall.id);

            let color = sponsorType ? sponsorType.color : "#D93685";
            let cursor: "pointer" | "not-allowed" = "pointer";
            let isClickable = true;
            let tooltipContent = sponsorType
              ? `Type: ${sponsorType.sponsor_type}\nPrice: Rs.${sponsorType.price}`
              : `Stall ${stall.id}`;

            if (booked) {
              color = "#EF4444";
              cursor = "not-allowed";
              isClickable = false;
              tooltipContent = `Company: ${booked.companyName}`;
            } else if (reserved) {
              color = "#EAB308";
              cursor = "not-allowed";
              isClickable = false;
              tooltipContent = `Company: ${reserved.companyName}`;
            } else if (isSelected) {
              color = "#22C55E";
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

export default Sponsors;
