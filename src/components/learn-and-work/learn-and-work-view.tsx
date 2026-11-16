"use client";

import React, { useState, useEffect, useRef } from "react";
import { createBooking } from "@/api/learnAndWork";
import { DAYS as API_DAYS, generateRef } from "@/constants/learnAndWork";

// Data types and constants
import { BookingFormData, SubmittedBooking } from "./types";
import { ZONES, TIME_SLOTS, EXPO_DAYS, FAQS } from "./constants";

// Modular section components
import { HeroSection } from "./sections/hero-section";
import { StickyNav } from "./sections/sticky-nav";
import { AboutSection } from "./sections/about-section";
import { VisitorJourneySection } from "./sections/visitor-journey-section";
import { HubMapSection } from "./sections/hub-map-section";
import { ZonesGridSection } from "./sections/zones-grid-section";
import { BookingSection } from "./sections/booking-section";
import { FaqSection } from "./sections/faq-section";
import { HowToJoinSection } from "./sections/how-to-join-section";
import { ContactSection } from "./sections/contact-section";

// Re-export constants for external consumers if needed
export { ZONES, TIME_SLOTS, EXPO_DAYS, FAQS } from "./constants";
export type {
  ZoneData,
  TimeSlot,
  ExpoDay,
  BookingFormData,
  SubmittedBooking,
} from "./types";

export default function LearnAndWorkView() {
  // Navigation active state
  const [activeSection, setActiveSection] = useState("about");

  // Countdown state
  const [countdownText, setCountdownText] = useState("Loading countdown...");

  // Booking selections
  const [selectedZoneIndex, setSelectedZoneIndex] = useState<number | null>(
    null,
  );
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  // Form fields
  const [formData, setFormData] = useState<BookingFormData>({
    school: "",
    grade: "",
    teacher: "",
    phone: "",
    email: "",
    count: "20",
    note: "",
  });

  // Validation & Submission errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Submission state
  const [submittedBooking, setSubmittedBooking] =
    useState<SubmittedBooking | null>(null);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Refs for smooth scrolling
  const bookingRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Countdown effect
  useEffect(() => {
    const updateCountdown = () => {
      const openDate = Date.parse("2026-12-17T00:00:00+05:45");
      const closeDate = Date.parse("2026-12-27T00:00:00+05:45");
      const now = Date.now();

      if (now < openDate) {
        const days = Math.ceil((openDate - now) / (1000 * 60 * 60 * 24));
        setCountdownText(
          days === 1 ? "1 Day to Opening" : `${days} Days to Opening`,
        );
      } else if (now < closeDate) {
        const currentDay =
          Math.floor((now - openDate) / (1000 * 60 * 60 * 24)) + 1;
        setCountdownText(`Now Open · Day ${currentDay} of 10`);
      } else {
        setCountdownText("Birat Expo 2026 Concluded");
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  // Section observer for sticky nav
  useEffect(() => {
    const sectionIds = [
      "about",
      "journey",
      "map",
      "zones",
      "book",
      "faq",
      "join",
      "contact",
    ];
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle selecting a zone from card or button
  const handleSelectZone = (index: number, scrollToBooking = true) => {
    setSelectedZoneIndex(index);
    if (errors.zone) setErrors((prev) => ({ ...prev, zone: "" }));
    if (scrollToBooking && bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate Reference Code
  const getReferenceCode = (
    zoneIdx: number,
    dayIdx: number,
    slotId: string,
  ) => {
    const dayCode = API_DAYS[dayIdx]?.d || "1217";
    return generateRef(zoneIdx, dayCode, slotId);
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (selectedZoneIndex === null) {
      newErrors.zone = "Please select a skill zone.";
    }
    if (selectedDayIndex === null) {
      newErrors.day = "Please choose a day for your session.";
    }
    if (!selectedSlotId) {
      newErrors.slot = "Please select a time slot.";
    }

    if (!formData.school.trim() || formData.school.trim().length < 3) {
      newErrors.school =
        "Enter the institution or group name (min 3 characters).";
    }
    if (!formData.grade.trim()) {
      newErrors.grade = "Enter the class or grade (e.g. Grade 9, Diploma).";
    }
    if (!formData.teacher.trim() || formData.teacher.trim().length < 3) {
      newErrors.teacher = "Enter the teacher or coordinator's full name.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      newErrors.phone = "Enter a valid mobile contact number (min 9 digits).";
    }
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Enter a valid email address.";
      }
    }

    const countNum = parseInt(formData.count, 10);
    if (isNaN(countNum) || countNum < 15 || countNum > 20) {
      newErrors.count = "Session size is strictly 15 to 20 students.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Booking Submit
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;
    if (
      selectedZoneIndex === null ||
      selectedDayIndex === null ||
      !selectedSlotId
    )
      return;

    const zone = ZONES[selectedZoneIndex];
    const day = EXPO_DAYS[selectedDayIndex];
    const slot = TIME_SLOTS.find((s) => s.id === selectedSlotId);
    const refCode = getReferenceCode(
      selectedZoneIndex,
      selectedDayIndex,
      selectedSlotId,
    );

    const payload = {
      zone: zone.title,
      date: day.fullDate,
      time: slot?.time || "",
      ref: refCode,
      school: formData.school.trim(),
      grade: formData.grade.trim(),
      teacher: formData.teacher.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || undefined,
      students: formData.count,
      note: formData.note.trim() || undefined,
    };

    setIsSubmitting(true);
    try {
      const response = await createBooking(payload);

      const booking: SubmittedBooking = {
        id: response.id,
        ref: response.ref || refCode,
        zone: response.zone || zone.title,
        date: response.date || day.fullDate,
        poush: day.poush,
        time: response.time || slot?.time || "",
        school: response.school || formData.school.trim(),
        grade: formData.grade.trim(),
        teacher: formData.teacher.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        students: formData.count,
        note: formData.note.trim(),
        detail: response.detail,
      };

      setSubmittedBooking(booking);

      // Save to local storage for user's persistent record
      try {
        const existing = JSON.parse(
          localStorage.getItem("birat_lwp_bookings") || "[]",
        );
        existing.unshift({ ...booking, submittedAt: new Date().toISOString() });
        localStorage.setItem(
          "birat_lwp_bookings",
          JSON.stringify(existing.slice(0, 10)),
        );
      } catch {}

      // Scroll to results
      setTimeout(() => {
        const resultEl = document.getElementById("booking-result");
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } catch (err: any) {
      const fieldErrors = err?.fieldErrors || err?.response?.data;
      if (fieldErrors && typeof fieldErrors === "object") {
        const newErrors: Record<string, string> = {};
        for (const [key, val] of Object.entries(fieldErrors)) {
          const msg = Array.isArray(val) ? val.join(" ") : String(val);
          if (key === "ref") {
            newErrors.slot =
              "This slot is already booked. Please choose another date or session.";
          } else if (key === "students") {
            newErrors.count = msg;
          } else {
            newErrors[key] = msg;
          }
        }
        setErrors((prev) => ({ ...prev, ...newErrors }));
        setSubmitError(
          newErrors.slot
            ? "Selected slot is already reserved. Please select another time or zone."
            : err.message ||
                "Failed to submit booking request. Please check the fields below.",
        );
      } else {
        setSubmitError(
          err?.message || "Failed to submit booking request. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyBookingText = async () => {
    if (!submittedBooking) return;
    const text =
      `Group Session Request - Learn and Work Platform · Birat Expo 2026\n` +
      `Reference: ${submittedBooking.ref}\n` +
      `Zone: ${submittedBooking.zone}\n` +
      `Date: ${submittedBooking.date} (${submittedBooking.poush})\n` +
      `Time: ${submittedBooking.time}\n` +
      `School/Group: ${submittedBooking.school}\n` +
      `Class: ${submittedBooking.grade}\n` +
      `Teacher: ${submittedBooking.teacher}\n` +
      `Phone: ${submittedBooking.phone}\n` +
      `Email: ${submittedBooking.email || "N/A"}\n` +
      `Students: ${submittedBooking.students}\n` +
      `Notes: ${submittedBooking.note || "N/A"}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      <HeroSection countdownText={countdownText} />

      <StickyNav activeSection={activeSection} />

      <AboutSection />

      <VisitorJourneySection />

      <HubMapSection ref={mapRef} />

      <ZonesGridSection
        zones={ZONES}
        selectedZoneIndex={selectedZoneIndex}
        onSelectZone={(idx) => handleSelectZone(idx, true)}
      />

      <BookingSection
        ref={bookingRef}
        zones={ZONES}
        expoDays={EXPO_DAYS}
        timeSlots={TIME_SLOTS}
        selectedZoneIndex={selectedZoneIndex}
        selectedDayIndex={selectedDayIndex}
        selectedSlotId={selectedSlotId}
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        submitError={submitError}
        submittedBooking={submittedBooking}
        copied={copied}
        onSelectZoneIndex={(idx) => {
          setSelectedZoneIndex(idx);
          if (errors.zone) setErrors((prev) => ({ ...prev, zone: "" }));
        }}
        onSelectDayIndex={(idx) => {
          setSelectedDayIndex(idx);
          if (errors.day) setErrors((prev) => ({ ...prev, day: "" }));
        }}
        onSelectSlotId={(slotId) => {
          setSelectedSlotId(slotId);
          if (errors.slot) setErrors((prev) => ({ ...prev, slot: "" }));
        }}
        onFormDataChange={(updates) =>
          setFormData((prev) => ({ ...prev, ...updates }))
        }
        onSubmit={handleBookingSubmit}
        onCopyBookingText={copyBookingText}
        getReferenceCode={getReferenceCode}
      />

      <FaqSection
        faqs={FAQS}
        openFaq={openFaq}
        onToggleFaq={(index) => setOpenFaq(openFaq === index ? null : index)}
      />

      <HowToJoinSection />

      <ContactSection />
    </div>
  );
}
