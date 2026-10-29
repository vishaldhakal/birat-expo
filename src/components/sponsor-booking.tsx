"use client";

import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Check, CheckCircle2, ArrowLeft, Printer, Home, ChevronDown } from "lucide-react";
import { useGetSponsorStallStatus } from "@/api/stall-status";
import { StallItem } from "./stall-item";

// ─── Types ─────────────────────────────────────────────────────────────────

interface SponsorBookingFormData {
  companyName: string;
  contactPerson: string;
  companyEmail: string;
  contactNumber: string;
}

const schema: yup.ObjectSchema<SponsorBookingFormData> = yup.object().shape({
  companyName: yup.string().trim().required("Company Name is required"),
  contactPerson: yup
    .string()
    .trim()
    .required("Contact Person Name is required"),
  companyEmail: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  contactNumber: yup.string().trim().required("Contact Number is required"),
});

// Sponsor stalls layout matching Birat Expo floor plan (S1-S10 column, side stalls S11-S12, top row S13-S15)
export const sponsorStallsData = [
  // Row 1 (top): S13 · S14 · S15
  { id: "S13", xPct: 14, yPct: 2.0, wPct: 14, hPct: 6.8 },
  { id: "S14", xPct: 43, yPct: 2.0, wPct: 14, hPct: 6.8 },
  { id: "S15", xPct: 72, yPct: 2.0, wPct: 14, hPct: 6.8 },

  // Row 2: S12 · S11 · S10
  { id: "S12", xPct: 14, yPct: 12.4, wPct: 14, hPct: 6.8 },
  { id: "S11", xPct: 43, yPct: 12.4, wPct: 14, hPct: 6.8 },
  { id: "S10", xPct: 72, yPct: 12.4, wPct: 14, hPct: 6.8 },

  // Right Column below S10: S9 down to S1
  { id: "S9", xPct: 72, yPct: 21.3, wPct: 14, hPct: 6.8 },
  { id: "S8", xPct: 72, yPct: 30.2, wPct: 14, hPct: 6.8 },
  { id: "S7", xPct: 72, yPct: 39.1, wPct: 14, hPct: 6.8 },
  { id: "S6", xPct: 72, yPct: 48.0, wPct: 14, hPct: 6.8 },
  { id: "S5", xPct: 72, yPct: 56.9, wPct: 14, hPct: 6.8 },
  { id: "S4", xPct: 72, yPct: 65.8, wPct: 14, hPct: 6.8 },
  { id: "S3", xPct: 72, yPct: 74.7, wPct: 14, hPct: 6.8 },
  { id: "S2", xPct: 72, yPct: 83.6, wPct: 14, hPct: 6.8 },
  { id: "S1", xPct: 72, yPct: 92.5, wPct: 14, hPct: 6.8 },
];

const legend = [
  { color: "#E879B0", label: "Available" },
  { color: "#22C55E", label: "Selected" },
  { color: "#EF4444", label: "Booked" },
];

export const SPONSOR_TIERS = [
  { value: "Title Partner", label: "Title Partner", maxStalls: 4, backendValue: "Title Partner" },
  { value: "Powered By Partner", label: "Powered By Partner", maxStalls: 4, backendValue: "Powered By Partner" },
  { value: "Diamond Partner", label: "Diamond Partner", maxStalls: 3, backendValue: "Diamond" },
  { value: "Platinum Partner", label: "Platinum Partner", maxStalls: 4, backendValue: "Platinum" },
  { value: "Gold Partner", label: "Gold Partner", maxStalls: 2, backendValue: "Gold" },
  { value: "Silver Partner", label: "Silver Partner", maxStalls: 1, backendValue: "Silver" },
];

export const normalizeTier = (param: string | null): string => {
  if (!param) return "Title Partner";
  const p = param.trim().toLowerCase();
  if (p.includes("title")) return "Title Partner";
  if (p.includes("power")) return "Powered By Partner";
  if (p.includes("diamond")) return "Diamond Partner";
  if (p.includes("platinum")) return "Platinum Partner";
  if (p.includes("gold")) return "Gold Partner";
  if (p.includes("silver")) return "Silver Partner";
  return param;
};

// Fallback tier counts
const tierStallCounts: Record<string, number> = {
  "Title Partner": 4,
  "Powered By Partner": 4,
  Platinum: 4,
  "Platinum Partner": 4,
  Diamond: 3,
  "Diamond Partner": 3,
  Gold: 2,
  "Gold Partner": 2,
  Silver: 1,
  "Silver Partner": 1,
};

interface ConfirmedBooking {
  referenceId: string;
  timestamp: string;
  companyName: string;
  contactPerson: string;
  companyEmail: string;
  contactNumber: string;
  sponsorType: string;
  stalls: string[];
}

// ─── Component ─────────────────────────────────────────────────────────────

const SponsorBookingForm = () => {
  const searchParams = useSearchParams();
  const stallPickerRef = useRef<HTMLDivElement>(null);

  const rawSponsorType = searchParams.get("sponsor_type");
  const initialTier = useMemo(() => normalizeTier(rawSponsorType), [rawSponsorType]);
  const [selectedSponsorType, setSelectedSponsorType] = useState<string>(initialTier);

  // Sync if URL query param changes
  useEffect(() => {
    if (rawSponsorType) {
      setSelectedSponsorType(normalizeTier(rawSponsorType));
    }
  }, [rawSponsorType]);

  const activeTierConfig = useMemo(() => {
    return (
      SPONSOR_TIERS.find((t) => t.value === selectedSponsorType) || {
        value: selectedSponsorType,
        label: selectedSponsorType,
        maxStalls: tierStallCounts[selectedSponsorType] || 4,
        backendValue: selectedSponsorType,
      }
    );
  }, [selectedSponsorType]);

  const maxStalls = activeTierConfig.maxStalls;

  const handleTierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTier = e.target.value;
    setSelectedSponsorType(newTier);
    setStallError("");

    const newTierConfig = SPONSOR_TIERS.find((t) => t.value === newTier);
    const newMax = newTierConfig ? newTierConfig.maxStalls : 4;
    setSelectedStalls((prev) => (prev.length > newMax ? prev.slice(0, newMax) : prev));
  };

  const [selectedStalls, setSelectedStalls] = useState<string[]>([]);
  const [stallError, setStallError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [confirmedBooking, setConfirmedBooking] =
    useState<ConfirmedBooking>({} as ConfirmedBooking);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Fetch booked stalls
  const {
    sponsorStallStatus,
    sponsorStallStatusLoading,
    sponsorStallStatusValidating,
  } = useGetSponsorStallStatus();

  const isLoadingStalls =
    sponsorStallStatusLoading || sponsorStallStatusValidating;

  const bookedStallsMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    if (!sponsorStallStatus) return map;

    for (const item of sponsorStallStatus) {
      if (!item.stall_id) continue;
      const ids = item.stall_id.split(",").map((id) => id.trim());
      for (const id of ids) {
        if (id) map[id] = true;
      }
    }
    return map;
  }, [sponsorStallStatus]);

  // Form setup
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
            `You can select up to ${maxStalls} stall${maxStalls > 1 ? "s" : ""} for the ${selectedSponsorType} tier. Click a selected stall to deselect it first.`,
          );
          return prev;
        }
        return [...prev, stallId];
      });
    },
    [bookedStallsMap, maxStalls, selectedSponsorType],
  );

  // Submit booking
  const onSubmit = async (data: SponsorBookingFormData) => {
    if (selectedStalls.length === 0) {
      setStallError("Please select at least one stall on the map before confirming.");
      stallPickerRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);
    setError("");

    const stallId = selectedStalls.join(",");
    const referenceId = `BE26-SP-${Math.floor(10000 + Math.random() * 90000)}`;
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    try {
      await axios.post("https://cim.baliyoventures.com/api/sponsor/", {
        stall_type: activeTierConfig.backendValue,
        stall_id: stallId,
        company_name: data.companyName,
        company_email: data.companyEmail,
        contact_number: data.contactNumber,
      });

      // Internal email dispatch (optional)
      try {
        await axios.post("/api/sponsor-booking", {
          stallType: selectedSponsorType,
          stallId,
          companyName: data.companyName,
          companyEmail: data.companyEmail,
          contactNumber: data.contactNumber,
        });
      } catch (e) {
        // non-blocking
      }

      setConfirmedBooking({
        referenceId,
        timestamp,
        companyName: data.companyName,
        contactPerson: data.contactPerson,
        companyEmail: data.companyEmail,
        contactNumber: data.contactNumber,
        sponsorType: selectedSponsorType,
        stalls: [...selectedStalls],
      });
      setIsConfirmed(true);

      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err: any) {
      console.error("Booking error:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "An error occurred while submitting. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSelectionComplete = selectedStalls.length === maxStalls;
  const remainingStalls = maxStalls - selectedStalls.length;

  // ── Confirmation View (Clean & Simple) ───────────────────────────────────
  if (isConfirmed && confirmedBooking.referenceId) {
    return (
      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="p-6 text-center border-b border-gray-100">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Booking Confirmed
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Your stall reservation for BIRAT EXPO 2026 has been successfully
              received.
            </p>
          </div>

          {/* Details Table */}
          <div className="p-6 space-y-4">
            <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-sm">
              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">
                  Booking Reference
                </span>
                <span className="font-mono font-bold text-blue-700">
                  {confirmedBooking.referenceId}
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Sponsor Tier</span>
                <span className="font-semibold text-gray-900">
                  {confirmedBooking.sponsorType}
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">
                  Confirmed Stalls
                </span>
                <span className="font-bold text-green-700">
                  {confirmedBooking.stalls.join(", ")} (
                  {confirmedBooking.stalls.length} stalls)
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Company Name</span>
                <span className="font-semibold text-gray-900">
                  {confirmedBooking.companyName}
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Contact Person</span>
                <span className="font-semibold text-gray-900">
                  {confirmedBooking.contactPerson}
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Email</span>
                <span className="font-semibold text-gray-900">
                  {confirmedBooking.companyEmail}
                </span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-gray-500 font-medium">Phone Number</span>
                <span className="font-semibold text-gray-900">
                  {confirmedBooking.contactNumber}
                </span>
              </div>
            </div>

            <div className="p-4 bg-blue-50 text-blue-800 rounded-xl text-xs leading-relaxed">
              <strong>What happens next:</strong> A confirmation email has been
              sent to your address. The Birat Expo secretariat will contact you
              within 24–48 hours for the agreement and booth coordination.
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg border border-gray-300 font-semibold text-sm text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-gray-500" />
                Print Slip
              </button>
              <Link
                href="/"
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold text-sm text-white transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Home className="w-4 h-4" />
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Main Simple & Clean Booking Form ─────────────────────────────────────
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back Link & Header */}
        <div>
          <Link
            href="/sponsorship"
            className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium transition mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sponsorship Tiers
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            BIRAT EXPO-2026 Stall Booking
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Confirm your stall reservation for the <strong>{selectedSponsorType}</strong>{" "}
            package.
          </p>
        </div>

        {/* Tier & Requirement Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
              Sponsorship Tier
            </span>
            <span className="text-lg font-bold text-gray-900">{selectedSponsorType}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                Stalls Selected
              </span>
              <span className="text-xl font-extrabold text-blue-600">
                {selectedStalls.length} <span className="text-sm font-normal text-gray-400">/ {maxStalls}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stall Picker */}
        <div
          ref={stallPickerRef}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6 space-y-4"
        >
          <div>
            <h2 className="text-base font-bold text-gray-900">
              Select Your Stalls
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Click on the available stalls below to select your stall positions. Click a selected stall again to deselect it.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
            {legend.map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div
                  className="w-3.5 h-3.5 rounded"
                  style={{ backgroundColor: l.color }}
                />
                <span className="text-gray-600 font-medium">{l.label}</span>
              </div>
            ))}
          </div>

          {/* Map Grid */}
          {isLoadingStalls ? (
            <div className="h-40 flex items-center justify-center text-xs text-gray-400">
              Loading stall availability...
            </div>
          ) : (
            <div className="flex justify-center pt-2">
              <div
                className="relative bg-gray-50 border border-gray-300 rounded-xl overflow-hidden shadow-inner"
                style={{ width: "min(100%, 360px)", aspectRatio: "1 / 2" }}
              >
                {/* Stalls */}
                {sponsorStallsData.map((stall) => {
                  const booked = bookedStallsMap[stall.id];
                  const isSelected = selectedStalls.includes(stall.id);

                  let color = "#E879B0"; // Available
                  let cursor: "pointer" | "not-allowed" = "pointer";
                  let isClickable = !booked;
                  let tooltip = `Stall ${stall.id} — Available`;

                  if (booked) {
                    color = "#EF4444";
                    cursor = "not-allowed";
                    isClickable = false;
                    tooltip = `Stall ${stall.id} — Already Booked`;
                  } else if (isSelected) {
                    color = "#22C55E";
                    tooltip = `Stall ${stall.id} — Selected (click to remove)`;
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

          {/* Selected Stall Chips */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">
                Selected Stalls:
              </span>
              {selectedStalls.length > 0 ? (
                selectedStalls.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleStallClick(id)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 border border-green-200 rounded-md text-xs font-bold hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition"
                    title="Click to remove"
                  >
                    {id} &times;
                  </button>
                ))
              ) : (
                <span className="text-xs text-gray-400">
                  None selected yet. Please click on the map.
                </span>
              )}
            </div>

            {stallError && (
              <p className="mt-2 text-xs font-bold text-red-600">
                {stallError}
              </p>
            )}
          </div>
        </div>

        {/* Details Form */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6">
          <h2 className="text-base font-bold text-gray-900 mb-1">
            Your Details
          </h2>
          <p className="text-xs text-gray-500 mb-5">
            Please enter your organization information to complete the booking.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sponsor Tier Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Sponsor Tier <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedSponsorType}
                    onChange={handleTierChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer appearance-none pr-9 transition"
                  >
                    {SPONSOR_TIERS.map((tier) => (
                      <option key={tier.value} value={tier.value}>
                        {tier.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Selected Stalls */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
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
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("companyName")}
                  type="text"
                  placeholder="e.g. ABC Industries Pvt. Ltd."
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
                />
                {errors.companyName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("contactPerson")}
                  type="text"
                  placeholder="e.g. Ramesh Sharma"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
                />
                {errors.contactPerson && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.contactPerson.message}
                  </p>
                )}
              </div>

              {/* Company Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Company Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("companyEmail")}
                  type="email"
                  placeholder="company@example.com"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
                />
                {errors.companyEmail && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.companyEmail.message}
                  </p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("contactNumber")}
                  type="tel"
                  placeholder="+977 98XXXXXXXX"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
                />
                {errors.contactNumber && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.contactNumber.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-lg text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-sm ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Confirm Booking ✓"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SponsorBookingForm;
