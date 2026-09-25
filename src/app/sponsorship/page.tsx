"use client";

import { sponsorshipLevels } from "@/components/other-sections";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  const handleBook = (level: (typeof sponsorshipLevels)[0]) => {
    const backendType = tierToBackendType[level.title] || level.title;
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

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Colored header */}
                <div
                  className={`${level.bgHeader} px-6 py-5 text-white flex items-start justify-between gap-2`}
                >
                  <div>
                    <h3 className="text-xl font-extrabold uppercase tracking-wide">
                      {level.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-1 uppercase tracking-wider">
                      Partner Package
                    </p>
                  </div>
                </div>

                {/* Price + stalls */}
                <div className="px-6 py-5 border-b border-gray-100">
                  <div className="text-3xl font-black text-gray-900 tracking-tight">
                    {level.price}
                  </div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mt-1">
                    Investment
                  </p>
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
                    onClick={() => handleBook(level)}
                    className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 ${level.bgHeader} text-white opacity-90 hover:opacity-100 shadow-md hover:shadow-lg active:scale-95`}
                  >
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
