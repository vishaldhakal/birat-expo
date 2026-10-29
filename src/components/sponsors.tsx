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
          className="relative bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm"
          style={{ width: "min(100%, 360px)", aspectRatio: "1 / 2" }}
        >
          {/* Hall Right Boundary Line */}
          <div
            className="absolute border-r border-gray-300 pointer-events-none"
            style={{ right: "7%", top: "1%", bottom: "1%" }}
          />

          {/* Top Boundary Line */}
          <div
            className="absolute border-t border-gray-400 pointer-events-none"
            style={{ left: "8%", right: "7%", top: "0.8%" }}
          />

          {/* SPONSORS Vertical Text */}
          <div
            className="absolute flex flex-col items-center justify-center select-none pointer-events-none font-bold text-[#D93685] tracking-widest"
            style={{
              left: "2%",
              top: "3%",
              height: "17%",
            }}
            aria-hidden="true"
          >
            {"SPONSORS".split("").map((c, i) => (
              <span key={i} className="text-[9px] leading-tight font-extrabold">{c}</span>
            ))}
          </div>

          {/* Left Directional Arrows */}
          <span
            className="absolute text-gray-400 pointer-events-none text-xs font-bold select-none"
            style={{ left: "48%", top: "9.2%" }}
            aria-hidden="true"
          >
            ←
          </span>
          <span
            className="absolute text-gray-400 pointer-events-none text-xs font-bold select-none"
            style={{ left: "19%", top: "9.2%" }}
            aria-hidden="true"
          >
            ←
          </span>

          {/* Upward Directional Arrows in Walkway Corridor */}
          <span
            className="absolute text-gray-400 pointer-events-none text-xs font-bold select-none"
            style={{ left: "63%", top: "13.2%" }}
            aria-hidden="true"
          >
            ↑
          </span>
          <span
            className="absolute text-gray-400 pointer-events-none text-xs font-bold select-none"
            style={{ left: "63%", top: "25.0%" }}
            aria-hidden="true"
          >
            ↑
          </span>
          <span
            className="absolute text-gray-400 pointer-events-none text-xs font-bold select-none"
            style={{ left: "63%", top: "43.0%" }}
            aria-hidden="true"
          >
            ↑
          </span>
          <span
            className="absolute text-gray-400 pointer-events-none text-xs font-bold select-none"
            style={{ left: "63%", top: "61.0%" }}
            aria-hidden="true"
          >
            ↑
          </span>
          <span
            className="absolute text-gray-400 pointer-events-none text-xs font-bold select-none"
            style={{ left: "63%", top: "79.0%" }}
            aria-hidden="true"
          >
            ↑
          </span>

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
