"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { useGetSponsorStallStatus } from "@/api/stall-status";
import { StallItem } from "./stall-item";

// ─── Types ─────────────────────────────────────────────────────────────────

interface SponsorBookingFormData {
  companyName: string;
  companyEmail: string;
  contactNumber: string;
}

const schema: yup.ObjectSchema<SponsorBookingFormData> = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  companyEmail: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  contactNumber: yup.string().required("Contact Number is required"),
});

// ─── Stall layout data (same 17 stalls) ───────────────────────────────────

// Canvas: 3:5 aspect ratio. Uniform square stalls for all 17 stalls:
// wPct = 15, hPct = 9 -> Square: 15 * (3/5) = 9
const sponsorStallsData = [
  // ── Row A (top): S17 · S16 · S15 ──
  { id: "S17", xPct: 17.5, yPct: 3, wPct: 15, hPct: 9 },
  { id: "S16", xPct: 42.5, yPct: 3, wPct: 15, hPct: 9 },
  { id: "S15", xPct: 67.5, yPct: 3, wPct: 15, hPct: 9 },
  // ── Row B: S14 · S13 · S12 ──
  { id: "S14", xPct: 17.5, yPct: 13.5, wPct: 15, hPct: 9 },
  { id: "S13", xPct: 42.5, yPct: 13.5, wPct: 15, hPct: 9 },
  { id: "S12", xPct: 67.5, yPct: 13.5, wPct: 15, hPct: 9 },
  // ── Row C: S9 · S10 · S11 ──
  { id: "S9", xPct: 17.5, yPct: 24, wPct: 15, hPct: 9 },
  { id: "S10", xPct: 42.5, yPct: 24, wPct: 15, hPct: 9 },
  { id: "S11", xPct: 67.5, yPct: 24, wPct: 15, hPct: 9 },
  // ── Row D: S8 · S7 · S6 ──
  { id: "S8", xPct: 17.5, yPct: 34.5, wPct: 15, hPct: 9 },
  { id: "S7", xPct: 42.5, yPct: 34.5, wPct: 15, hPct: 9 },
  { id: "S6", xPct: 67.5, yPct: 34.5, wPct: 15, hPct: 9 },
  // ── S5→S1: uniform squares in Col 3 directly below S6 ──
  { id: "S5", xPct: 67.5, yPct: 46.5, wPct: 15, hPct: 9 },
  { id: "S4", xPct: 67.5, yPct: 57, wPct: 15, hPct: 9 },
  { id: "S3", xPct: 67.5, yPct: 67.5, wPct: 15, hPct: 9 },
  { id: "S2", xPct: 67.5, yPct: 78, wPct: 15, hPct: 9 },
  { id: "S1", xPct: 67.5, yPct: 88.5, wPct: 15, hPct: 9 },
];

const legend = [
  { color: "#E879B0", label: "Available" },
  { color: "#22C55E", label: "Selected" },
  { color: "#EF4444", label: "Booked" },
  { color: "#FACC15", label: "Reserved" },
];

// Tier fallback stall counts
const tierStallCounts: Record<string, number> = {
  "Title Partner": 4,
  "Powered By Partner": 4,
  Platinum: 4,
  Diamond: 3,
  Gold: 2,
  Silver: 1,
};

// ─── Component ─────────────────────────────────────────────────────────────

const SponsorBookingForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Query params passed from the sponsorship tier page
  const sponsorType = searchParams.get("sponsor_type") || "";
  const paramStalls = searchParams.get("max_stalls");
  const maxStalls = useMemo(() => {
    if (paramStalls) {
      const parsed = parseInt(paramStalls, 10);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
    return tierStallCounts[sponsorType] || 1;
  }, [paramStalls, sponsorType]);

  // Stall picker state
  const [selectedStalls, setSelectedStalls] = useState<string[]>([]);
  const [stallError, setStallError] = useState("");

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Fetch booked stalls
  const {
    sponsorStallStatus,
    sponsorStallStatusLoading,
    sponsorStallStatusValidating,
  } = useGetSponsorStallStatus();

  const isLoadingStalls =
    sponsorStallStatusLoading || sponsorStallStatusValidating;

  const bookedStallsMap = useMemo(() => {
    const map: Record<string, { companyName: string }> = {};
    if (!sponsorStallStatus) return map;

    for (const item of sponsorStallStatus) {
      if (!item.stall_id) continue;
      // stall_id can be comma-separated like "S13,S10,S5,S4"
      const ids = item.stall_id.split(",").map((id) => id.trim());
      for (const id of ids) {
        if (id) {
          map[id] = { companyName: item.company_name || "Booked Sponsor" };
        }
      }
    }
    return map;
  }, [sponsorStallStatus]);

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SponsorBookingFormData>({
    resolver: yupResolver(schema),
  });

  // Handle stall click
  const handleStallClick = useCallback(
    (stallId: string) => {
      if (bookedStallsMap[stallId]) return;
      setStallError("");
      setSelectedStalls((prev) => {
        if (prev.includes(stallId)) {
          return prev.filter((id) => id !== stallId);
        }
        if (prev.length >= maxStalls) {
          setStallError(
            `You must select exactly ${maxStalls} stall${maxStalls > 1 ? "s" : ""} for the ${sponsorType} package. Deselect a stall first to change your selection.`,
          );
          return prev;
        }
        return [...prev, stallId];
      });
    },
    [bookedStallsMap, maxStalls, sponsorType],
  );

  // Submit
  const onSubmit = async (data: SponsorBookingFormData) => {
    if (selectedStalls.length !== maxStalls) {
      setStallError(
        `Validation error: Please select all ${maxStalls} required stall${
          maxStalls > 1 ? "s" : ""
        } for ${sponsorType}. You have currently selected ${selectedStalls.length}.`,
      );
      return;
    }

    setIsSubmitting(true);
    setError("");

    const stallId = selectedStalls.join(",");

    try {
      await Promise.all([
        axios.post("https://cim.baliyoventures.com/api/sponsor/", {
          stall_type: sponsorType,
          stall_id: stallId,
          company_name: data.companyName,
          company_email: data.companyEmail,
          contact_number: data.contactNumber,
        }),
      ]);

      router.push("/thank-you");
    } catch (err) {
      console.error("Booking submission error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────

  if (!sponsorType) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <p className="text-gray-500 text-lg mb-4">
            No sponsorship tier selected.
          </p>
          <a
            href="/sponsorship"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ← Choose a Tier
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6 pb-40 pt-10">
      {/* Simple header */}
      <div className="max-w-5xl mx-auto mb-6">
        <a
          href="/sponsorship"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mb-3 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Sponsorship Tiers
        </a>
        <h1 className="text-3xl font-bold text-gray-800">
          BIRAT EXPO-2026 Stall Booking
        </h1>
        <p className="text-gray-500 mt-1">Confirm Your Stall Reservation</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Tier info banner */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Selected Tier
            </p>
            <p className="text-xl font-black text-gray-900 mt-0.5">
              {sponsorType}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Stalls Allowed
              </p>
              <p className="text-2xl font-black text-blue-700">{maxStalls}</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Selected
              </p>
              <p
                className={`text-2xl font-black ${
                  selectedStalls.length === maxStalls
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {selectedStalls.length}
              </p>
            </div>
          </div>
        </div>

        {/* Stall Picker */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-900">
                Select Your Stall Position(s)
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Click on available stalls to select them. You can select up to{" "}
                <span className="font-bold text-blue-600">{maxStalls}</span>{" "}
                stall{maxStalls > 1 ? "s" : ""}.
              </p>
            </div>
          </div>

          <div className="px-6 py-4">
            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-4">
              {legend.map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: l.color }}
                  />
                  <span className="text-xs text-gray-600 font-medium">
                    {l.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stall grid */}
            {isLoadingStalls ? (
              <div className="flex items-center justify-center h-24 text-gray-400 text-sm">
                Loading stall availability...
              </div>
            ) : (
              <div className="w-full flex justify-center overflow-x-auto">
                <div
                  className="relative overflow-hidden"
                  style={{ width: "min(100%, 360px)", aspectRatio: "3 / 5" }}
                >
                  {sponsorStallsData.map((stall) => {
                    const booked = bookedStallsMap[stall.id];
                    const isSelected = selectedStalls.includes(stall.id);
                    const isAtMax =
                      selectedStalls.length >= maxStalls && !isSelected;

                    let color = "#E879B0"; // magenta — available (matches image)
                    let cursor: "pointer" | "not-allowed" = isAtMax
                      ? "not-allowed"
                      : "pointer";
                    let isClickable = !booked && !isAtMax;
                    let tooltip = `Stall ${stall.id} — Available`;

                    if (booked) {
                      color = "#EF4444";
                      cursor = "not-allowed";
                      isClickable = false;
                      tooltip = `Stall ${stall.id} — Booked`;
                    } else if (isSelected) {
                      color = "#22C55E";
                      tooltip = `Stall ${stall.id} — Selected (click to deselect)`;
                    } else if (isAtMax) {
                      color = "#9CA3AF";
                      tooltip = `Stall ${stall.id} — Max stalls already selected`;
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
                        tooltipContent={tooltip}
                        onClick={() => handleStallClick(stall.id)}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Selected stall chips */}
            {selectedStalls.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider self-center">
                  Selected:
                </span>
                {selectedStalls.map((id) => (
                  <button
                    key={id}
                    onClick={() => handleStallClick(id)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold hover:bg-red-100 hover:text-red-600 transition-colors"
                  >
                    {id} &times;
                  </button>
                ))}
              </div>
            )}

            {stallError && (
              <p className="mt-3 text-sm text-red-500 font-medium">
                &#9888; {stallError}
              </p>
            )}

            {selectedStalls.length === maxStalls && (
              <p className="mt-3 text-sm text-green-600 font-semibold">
                &#10003; You have selected all {maxStalls} stall
                {maxStalls > 1 ? "s" : ""}. Fill in your details below to
                confirm.
              </p>
            )}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900">Your Details</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Fill in your company information to complete the booking.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 py-6 space-y-5"
          >
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Read-only fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Sponsor Tier
                </label>
                <input
                  type="text"
                  value={sponsorType}
                  disabled
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Selected Stalls
                </label>
                <input
                  type="text"
                  value={
                    selectedStalls.length > 0
                      ? selectedStalls.join(", ")
                      : "None selected"
                  }
                  disabled
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm font-medium ${
                    selectedStalls.length === maxStalls
                      ? "bg-green-50 border-green-200 text-green-700"
                      : "bg-gray-50 border-gray-200 text-gray-400"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                Company Name
              </label>
              <input
                {...register("companyName")}
                type="text"
                placeholder="e.g. Baliyo Ventures Pvt. Ltd."
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.companyName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                Company Email
              </label>
              <input
                {...register("companyEmail")}
                type="email"
                placeholder="company@example.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.companyEmail && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.companyEmail.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                Contact Number
              </label>
              <input
                {...register("contactNumber")}
                type="tel"
                placeholder="+977 98XXXXXXXX"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.contactNumber && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || selectedStalls.length !== maxStalls}
                className={`w-full py-3.5 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md ${
                  isSubmitting || selectedStalls.length !== maxStalls
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-[0.99]"
                }`}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Submitting...
                  </span>
                ) : selectedStalls.length !== maxStalls ? (
                  `Select ${maxStalls - selectedStalls.length} more stall${
                    maxStalls - selectedStalls.length !== 1 ? "s" : ""
                  } to continue`
                ) : (
                  "Confirm Booking ✓"
                )}
              </button>
              {selectedStalls.length !== maxStalls && (
                <p className="text-center text-xs text-gray-400 mt-2">
                  Please select your stalls above to enable booking.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SponsorBookingForm;
