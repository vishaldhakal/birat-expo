"use client";

import { useMemo } from "react";
import { sponsorshipLevels } from "@/components/other-sections";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetSponsorStallStatus } from "@/api/stall-status";

// Map display titles to backend-accepted values
const tierToBackendType: Record<string, string> = {
  "Title Partner": "Title Partner",
  "Powered By Partner": "Powered By Partner",
  "Platinum Partner": "Platinum",
  "Diamond Partner": "Diamond",
  "Gold Partner": "Gold",
  "Silver Partner": "Silver",
};

// Extract stall count from stalls string e.g. "4 stalls . Full benefits package"
function getStallCount(stallsStr: string): number {
  const match = stallsStr.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 1;
}

export default function Sponsorship() {
  const router = useRouter();
  const { sponsorStallStatus, sponsorStallStatusLoading } =
    useGetSponsorStallStatus();

  // Create a map of booked tier -> sponsor details
  const bookedSponsorsMap = useMemo(() => {
    const map: Record<string, { companyName: string }> = {};
    if (!sponsorStallStatus) return map;
    for (const item of sponsorStallStatus) {
      if (item.stall_type) {
        const key = item.stall_type.toLowerCase().trim();
        map[key] = { companyName: item.company_name || "Booked Sponsor" };
      }
    }
    return map;
  }, [sponsorStallStatus]);

  const handleBook = (level: (typeof sponsorshipLevels)[0]) => {
    const backendType = tierToBackendType[level.title];
    const stallCount = getStallCount(level.stalls);
    router.push(
      `/sponsor-booking?sponsor_type=${encodeURIComponent(backendType)}&max_stalls=${stallCount}`,
    );
  };

  return (
    <div>
      {/* Tier Cards */}
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-black text-start border-l-[5px] ps-2 border-blue-800 text-gray-800 mb-10">
          Sponsorship <span className="text-blue-500">Opportunity</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsorshipLevels.map((level, index) => {
            const stallCount = getStallCount(level.stalls);
            const backendType = tierToBackendType[level.title] || level.title;
            const bookedInfo =
              bookedSponsorsMap[backendType.toLowerCase().trim()];
            const isBooked = Boolean(bookedInfo);

            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl border shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col ${
                  isBooked ? "border-red-200 opacity-90" : "border-gray-100"
                }`}
              >
                {/* Colored header */}
                <div
                  className={`${
                    isBooked ? "bg-gray-800" : level.bgHeader
                  } px-6 py-5 text-white flex items-start justify-between gap-2`}
                >
                  <div>
                    <h3 className="text-xl font-extrabold uppercase tracking-wide">
                      {level.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-1 uppercase tracking-wider">
                      Partner Package
                    </p>
                  </div>
                  {isBooked && (
                    <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0 shadow">
                      Already Booked
                    </span>
                  )}
                </div>

                {/* Price + stalls */}
                <div className="px-6 py-5 border-b border-gray-100">
                  <div className="text-3xl font-black text-gray-900 tracking-tight">
                    {level.price}
                  </div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mt-1">
                    Investment
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold px-3 py-1.5 rounded-full">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    {stallCount} Stall{stallCount > 1 ? "s" : ""} (3&times;3 m)
                  </div>
                </div>

                {/* Benefits */}
                <div className="px-6 py-4 flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Package Benefits
                  </p>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span
                          className={`mt-0.5 font-bold text-base leading-none ${level.accentColor}`}
                        >
                          &#10003;
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="px-6 pb-6 pt-4 flex flex-col gap-3">
                  <button
                    disabled={isBooked || sponsorStallStatusLoading}
                    onClick={() => handleBook(level)}
                    className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 ${
                      isBooked
                        ? "bg-gray-200 text-gray-500 border border-gray-300 cursor-not-allowed shadow-none"
                        : `${level.bgHeader} text-white opacity-90 hover:opacity-100 shadow-md hover:shadow-lg active:scale-95`
                    }`}
                  >
                    {isBooked ? (
                      <span className="inline-flex items-center gap-1.5 justify-center">
                        Already Booked
                      </span>
                    ) : (
                      <>
                        Book Now
                        <svg
                          className="inline-block ml-1.5 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                  <Link href="/proposal" className="w-full">
                    <button className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors">
                      View Proposal
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase mb-6">
            Birat Expo 2026 Proposal
          </h2>
          <div className="flex justify-center mb-8">
            <a
              href="/birat-expo-2026/Contract_Sponsorships_Birat_Expo_2026.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Sponsorship Contract
            </a>
          </div>
          <object
            className="pdf mx-auto rounded-lg shadow-lg"
            data="/birat-expo-2026/Contract_Sponsorships_Birat_Expo_2026.pdf"
            width="800"
            height="750"
          />
        </div>
      </div>
    </div>
  );
}
