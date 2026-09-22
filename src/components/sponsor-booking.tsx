"use client";

import React, { useState, useMemo, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Check, CheckCircle2, ArrowLeft, Printer, Home } from "lucide-react";
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

// Canvas: 3:5 aspect ratio with 17 stalls
const sponsorStallsData = [
  // Row A (top): S17 · S16 · S15
  { id: "S17", xPct: 17.5, yPct: 3, wPct: 15, hPct: 9 },
  { id: "S16", xPct: 42.5, yPct: 3, wPct: 15, hPct: 9 },
  { id: "S15", xPct: 67.5, yPct: 3, wPct: 15, hPct: 9 },
  // Row B: S14 · S13 · S12
  { id: "S14", xPct: 17.5, yPct: 13.5, wPct: 15, hPct: 9 },
  { id: "S13", xPct: 42.5, yPct: 13.5, wPct: 15, hPct: 9 },
  { id: "S12", xPct: 67.5, yPct: 13.5, wPct: 15, hPct: 9 },
  // Row C: S9 · S10 · S11
  { id: "S9", xPct: 17.5, yPct: 24, wPct: 15, hPct: 9 },
  { id: "S10", xPct: 42.5, yPct: 24, wPct: 15, hPct: 9 },
  { id: "S11", xPct: 67.5, yPct: 24, wPct: 15, hPct: 9 },
  // Row D: S8 · S7 · S6
  { id: "S8", xPct: 17.5, yPct: 34.5, wPct: 15, hPct: 9 },
  { id: "S7", xPct: 42.5, yPct: 34.5, wPct: 15, hPct: 9 },
  { id: "S6", xPct: 67.5, yPct: 34.5, wPct: 15, hPct: 9 },
  // Column below S6: S5 → S1
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
];

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

  const sponsorType = searchParams.get("sponsor_type") || "";
  const paramStalls = searchParams.get("max_stalls");

  const maxStalls = useMemo(() => {
    if (paramStalls) {
      const parsed = parseInt(paramStalls, 10);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
    return tierStallCounts[sponsorType] || 4;
  }, [paramStalls, sponsorType]);

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
            `You can select only ${maxStalls} stall${maxStalls > 1 ? "s" : ""} for ${sponsorType}. Deselect one to choose ${stallId}.`,
          );
          return prev;
        }
        return [...prev, stallId];
      });
    },
    [bookedStallsMap, maxStalls, sponsorType],
  );

  // Submit booking
  const onSubmit = async (data: SponsorBookingFormData) => {
    if (selectedStalls.length !== maxStalls) {
      setStallError(
        `Please select all ${maxStalls} required stalls. Currently selected: ${selectedStalls.length}.`,
      );
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
        stall_type: sponsorType,
        stall_id: stallId,
        company_name: data.companyName,
        company_email: data.companyEmail,
        contact_number: data.contactNumber,
      });

      // Internal email dispatch (optional)
      try {
        await axios.post("/api/sponsor-booking", {
          stallType: sponsorType,
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
        sponsorType,
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

  // ── No Tier Selected Fallback ────────────────────────────────────────────
  if (!sponsorType) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-md w-full text-center shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            No Sponsorship Tier Selected
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Please choose a sponsorship package to proceed with stall
            reservation.
          </p>
          <Link
            href="/sponsorship"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sponsorship
          </Link>
        </div>
      </div>
    );
  }

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
            Confirm your stall reservation for the <strong>{sponsorType}</strong>{" "}
            package.
          </p>
        </div>

        {/* Tier & Requirement Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
              Sponsorship Tier
            </span>
            <span className="text-lg font-bold text-gray-900">{sponsorType}</span>
            <p className="text-xs text-gray-600 mt-0.5">
              Requires selecting{" "}
              <strong className="text-gray-900 font-bold">
                exactly {maxStalls} stall{maxStalls > 1 ? "s" : ""}
              </strong>{" "}
              (3m × 3m each)
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                Stalls Selected
              </span>
              <span
                className={`text-xl font-extrabold ${
                  isSelectionComplete ? "text-green-600" : "text-red-600"
                }`}
              >
                {selectedStalls.length} of {maxStalls}
              </span>
            </div>

            <div
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                isSelectionComplete
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}
            >
              {isSelectionComplete
                ? "✓ Requirement Met"
                : `${remainingStalls} more stall${
                    remainingStalls > 1 ? "s" : ""
                  } needed to book`}
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
              Click on the available stalls below to select your {maxStalls}{" "}
              stall positions. Click a selected stall again to deselect it.
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
                style={{ width: "min(100%, 360px)", aspectRatio: "3 / 5" }}
              >
                {sponsorStallsData.map((stall) => {
                  const booked = bookedStallsMap[stall.id];
                  const isSelected = selectedStalls.includes(stall.id);
                  const isAtMax =
                    selectedStalls.length >= maxStalls && !isSelected;

                  let color = "#E879B0"; // Available
                  let cursor: "pointer" | "not-allowed" = isAtMax
                    ? "not-allowed"
                    : "pointer";
                  let isClickable = !booked && !isAtMax;
                  let tooltip = `Stall ${stall.id} — Available`;

                  if (booked) {
                    color = "#EF4444";
                    cursor = "not-allowed";
                    isClickable = false;
                    tooltip = `Stall ${stall.id} — Already Booked`;
                  } else if (isSelected) {
                    color = "#22C55E";
                    tooltip = `Stall ${stall.id} — Selected (click to remove)`;
                  } else if (isAtMax) {
                    color = "#CBD5E1";
                    tooltip = `Stall ${stall.id} — Max stalls reached`;
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

            {/* Red callout message when not all stalls selected */}
            {!isSelectionComplete ? (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-xs font-bold text-red-600">
                Please select {remainingStalls} more stall
                {remainingStalls > 1 ? "s" : ""} on the map above to enable
                booking.
              </div>
            ) : (
              <p className="mt-3 text-xs font-semibold text-green-600 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                All {maxStalls} stalls selected. Please fill in your details
                below to confirm.
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
              {/* Sponsor Tier */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Sponsor Tier
                </label>
                <input
                  type="text"
                  value={sponsorType}
                  disabled
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 font-medium"
                />
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
                  className={`w-full rounded-lg border px-3 py-2 text-sm font-medium ${
                    selectedStalls.length === maxStalls
                      ? "bg-green-50 border-green-200 text-green-700 font-bold"
                      : "bg-red-50 border-red-200 text-red-600 font-medium"
                  }`}
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

            {/* Submit Button & Clear Red Notice */}
            <div className="pt-3 space-y-2">
              <button
                type={isSelectionComplete ? "submit" : "button"}
                onClick={
                  !isSelectionComplete
                    ? () => {
                        setStallError(
                          `Please select ${remainingStalls} more stall${
                            remainingStalls > 1 ? "s" : ""
                          } on the map above to enable booking.`,
                        );
                        stallPickerRef.current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    : undefined
                }
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-lg text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-sm ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : !isSelectionComplete
                    ? "bg-red-600 hover:bg-red-700 cursor-pointer"
                    : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : !isSelectionComplete ? (
                  <span>
                    Select {remainingStalls} more stall
                    {remainingStalls !== 1 ? "s" : ""} to enable booking (
                    {selectedStalls.length}/{maxStalls})
                  </span>
                ) : (
                  "Confirm Booking ✓"
                )}
              </button>

              {!isSelectionComplete ? (
                <p className="text-center text-xs font-bold text-red-600 mt-2">
                  Please select {remainingStalls} more stall
                  {remainingStalls !== 1 ? "s" : ""} on the map above to
                  enable booking.
                </p>
              ) : (
                <p className="text-center text-xs font-medium text-green-600 mt-2">
                  ✓ Ready to submit. Click Confirm Booking above.
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
