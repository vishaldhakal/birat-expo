// pages/sponsorship.js
"use client";

import { sponsorshipLevels } from "@/components/other-sections";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useState, useCallback } from "react";
import StallArea from "@/components/stall-area";
import Sponsors from "@/components/sponsors";
import { useGetSponsorStallStatus } from "@/api/stall-status";

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

export default function Sponsorship() {
  const pathname = usePathname();
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedStalls, setSelectedStalls] = useState<string[]>([]);

  const {
    sponsorStallStatus,
    sponsorStallStatusLoading,
    sponsorStallStatusError,
    sponsorStallStatusValidating,
  } = useGetSponsorStallStatus();

  const isLoading = sponsorStallStatusLoading || sponsorStallStatusValidating;
  const isError = sponsorStallStatusError;

  // Memoize stall data processing
  const { bookedStalls, reservedStalls } = useMemo(() => {
    if (isLoading || isError) return { bookedStalls: [], reservedStalls: [] };

    const booked =
      sponsorStallStatus?.map((stall) => ({
        id: stall.stall_id,
        companyName: stall.company_name,
      })) || [];

    // Reserved stalls can be added here if needed
    const reserved: StallInfo[] = [];

    return {
      bookedStalls: booked,
      reservedStalls: reserved,
    };
  }, [isLoading, isError, sponsorStallStatus]);

  // Memoize constant data
  const legendItemsSponsors = useMemo(
    () => [
      { color: "#3498DB", label: "Main Sponsor" },
      { color: "#E67E22", label: "Powered By Sponsor" },
      { color: "#95A5A6", label: "Platinum" },
      { color: "#1ABC9C", label: "Diamond" },
      { color: "#F1C40F", label: "Gold" },
      { color: "#9B59B6", label: "Partner Sponsor" },
      { color: "#BDC3C7", label: "Silver" },
      { color: "#E74C3C", label: "Booked" },
      { color: "#ffff00", label: "Reserved" },
      { color: "#2ECC71", label: "Selected" },
    ],
    [],
  );

  const sponsorStallProps: SponsorStallPropsType[] = useMemo(
    () => [
      {
        sponsor_type: "Main Sponsor",
        price: 7500000,
        color: "#3498DB",
        stallid: ["S1"],
      },
      {
        sponsor_type: "Powered By Sponsor",
        price: 3500000,
        color: "#E67E22",
        stallid: ["S2"],
      },
      {
        sponsor_type: "Platinum",
        price: 200000,
        color: "#95A5A6",
        stallid: ["S3"],
      },
      {
        sponsor_type: "Diamond",
        price: 1500000,
        color: "#1ABC9C",
        stallid: ["S4"],
      },
      {
        sponsor_type: "Gold",
        price: 1000000,
        color: "#F1C40F",
        stallid: ["S5"],
      },
      {
        sponsor_type: "Partner Sponsor",
        price: 1000000,
        color: "#9B59B6",
        stallid: ["S6", "S7", "S8"],
      },
      {
        sponsor_type: "Silver",
        price: 500000,
        color: "#BDC3C7",
        stallid: ["S9", "S10", "S11", "S12"],
      },
    ],
    [],
  );

  useEffect(() => {
    if (pathname.includes("#")) {
      const hash = pathname.split("#")[1];
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  const onAvailableStallClick = useCallback(
    (stallId: string) => {
      setSelectedStalls((prevSelected) => {
        if (prevSelected.includes(stallId)) {
          return prevSelected.filter((id) => id !== stallId);
        } else {
          if (prevSelected.length === 0) {
            return [stallId];
          } else {
            // Find sponsor type of currently selected stall
            const currentSponsorType = sponsorStallProps.find((stall) =>
              stall.stallid.some((id) => stallId === id),
            )?.sponsor_type;

            // Find sponsor type of previously selected stall
            const previousSponsorType = sponsorStallProps.find((stall) =>
              stall.stallid.some((id) => prevSelected.includes(id)),
            )?.sponsor_type;

            // Only allow selection if it's from the same sponsor type
            if (currentSponsorType === previousSponsorType) {
              return [...prevSelected, stallId];
            } else {
              alert("You can only select stalls from the same sponsor type.");
              return prevSelected;
            }
          }
        }
      });
    },
    [sponsorStallProps],
  );

  const handleProceed = useCallback(() => {
    if (selectedStalls.length > 0) {
      // Find the sponsor type by checking if any of the stall's IDs match the selected stall
      const sponsorStall = sponsorStallProps.find((stall) =>
        stall.stallid.some((id) => selectedStalls.includes(id)),
      );

      if (sponsorStall) {
        router.push(
          `/sponsor-booking?stall_id=${selectedStalls.join(",")}&sponsor_type=${
            sponsorStall.sponsor_type
          }`,
        );
      }
    }
  }, [selectedStalls, sponsorStallProps, router]);

  return (
    <>
      <div className="relative">
        <StallArea
          title="Sponsors Pavilion"
          legendItems={legendItemsSponsors}
          StallComponent={Sponsors}
          stallProps={{
            sponsorStallProps: sponsorStallProps,
            bookedStalls: bookedStalls,
            reservedStalls: reservedStalls,
            totalPrice: totalPrice,
            setTotalPrice: setTotalPrice,
            onAvailableStallClick: onAvailableStallClick,
            selectedStalls: selectedStalls,
          }}
        />

        {selectedStalls.length > 0 && (
          <div className="fixed gap-4 bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center z-50 bg-white px-10 py-10 rounded-md shadow-lg">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 text-lg rounded-full shadow-lg">
              Selected ({selectedStalls.join(",")})
            </button>

            <button
              onClick={handleProceed}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 text-lg rounded-full shadow-lg"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-black text-start border-l-[5px] ps-2 border-blue-800 text-gray-800 mb-10">
          Sponsorship <span className="text-blue-500">Opportunity</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsorshipLevels.map((level, index) => (
            <div
              id={level.title.toLowerCase().replace(/ /g, "-")}
              key={index}
              className="scroll-offset rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Header Box */}
              <div>
                <div
                  className={`${level.bgHeader} text-white text-center py-4 px-6 relative`}
                >
                  <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-wide">
                    {level.title}
                  </h3>
                </div>

                {/* Investment Content */}
                <div className="p-6 text-center border-b border-gray-100">
                  <div className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                    {level.price}
                  </div>
                  <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                    Investment
                  </span>
                  <div className="w-16 h-0.5 bg-gray-200 mx-auto my-4" />
                  <p className="text-emerald-700 font-bold text-sm md:text-base">
                    {level.stalls}
                  </p>
                </div>

                {/* Detailed Benefits List */}
                {/* <div className="p-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Package Benefits
                  </h4>
                  <ul className="space-y-2 text-left">
                    {level.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="text-xs md:text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className={`font-bold ${level.accentColor}`}>•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase mb-10">
            Birat Expo 2026 Proposal
          </h2>
          <div className="flex justify-center my-6">
            <a
              href="/birat-expo-2026/Contract_Sponsorships_Birat_Expo_2026.pdf"
              download
              className="px-4 py-2 text-white bg-blue-600 rounded-md no-underline"
            >
              Download Sponsorship Contract
            </a>
          </div>
          <object
            className="pdf"
            data="/birat-expo-2026/Contract_Sponsorships_Birat_Expo_2026.pdf"
            width="800"
            height="750"
          ></object>
        </div>
      </div>
    </>
  );
}
