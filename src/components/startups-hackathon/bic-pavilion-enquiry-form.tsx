"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCreateStartupRegistration } from "@/hooks/useCreateStartupRegistration";
import {
  TrackType,
  LegacyTrackKey,
  StartupRegistrationPayload,
  StartupRegistrationResponse,
} from "@/types/startupRegistration";
import { CheckCircle2, ArrowLeft, Send, Building2, GraduationCap, Briefcase } from "lucide-react";

// Expo days: 17–26 Dec 2026 = 2–11 Poush 2083
const EXPO_DAYS: string[] = [
  "Thu 17 Dec (2 Poush)",
  "Fri 18 Dec (3 Poush)",
  "Sat 19 Dec (4 Poush)",
  "Sun 20 Dec (5 Poush)",
  "Mon 21 Dec (6 Poush)",
  "Tue 22 Dec (7 Poush)",
  "Wed 23 Dec (8 Poush)",
  "Thu 24 Dec (9 Poush)",
  "Fri 25 Dec (10 Poush)",
  "Sat 26 Dec (11 Poush)",
];

const KOSHI_DISTRICTS = [
  "Bhojpur",
  "Dhankuta",
  "Ilam",
  "Jhapa",
  "Khotang",
  "Morang",
  "Okhaldhunga",
  "Panchthar",
  "Sankhuwasabha",
  "Solukhumbu",
  "Sunsari",
  "Taplejung",
  "Terhathum",
  "Udayapur",
  "Outside Koshi Province",
];

export default function BicPavilionEnquiryForm() {
  const searchParams = useSearchParams();
  const userInteractedRef = useRef(false);

  // Active track state
  const [selectedTrack, setSelectedTrack] = useState<TrackType>("Makerspace");
  const [submittedData, setSubmittedData] = useState<StartupRegistrationResponse | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Common contact fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [role, setRole] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [notes, setNotes] = useState("");
  const [heardAboutUs, setHeardAboutUs] = useState("At Birat Expo");
  const [consent, setConsent] = useState(false);
  const [keepUpdated, setKeepUpdated] = useState(true);

  // Room 1 (Makerspace / School) fields
  const [schoolRequest, setSchoolRequest] = useState<string>("Class visit to Room 1 at Birat Expo");
  const [schoolType, setSchoolType] = useState<string>("");
  const [schoolGrades, setSchoolGrades] = useState<string[]>(["7", "8"]);
  const [schoolStudentsCount, setSchoolStudentsCount] = useState<number>(30);
  const [schoolTeachersCount, setSchoolTeachersCount] = useState<number | "">("");
  const [schoolDate1, setSchoolDate1] = useState<string>(EXPO_DAYS[0]);
  const [schoolDate2, setSchoolDate2] = useState<string>("");
  const [schoolSlot, setSchoolSlot] = useState<string>("Morning");
  const [schoolMonth, setSchoolMonth] = useState<string>("Magh 2083 (mid-Jan – mid-Feb 2027)");
  const [schoolSpace, setSchoolSpace] = useState<string>("Classroom");

  // Room 2 (Design Studio / College) fields
  const [gender, setGender] = useState<string>("");
  const [ageGroup, setAgeGroup] = useState<string>("18–21");
  const [collegeProgramme, setCollegeProgramme] = useState<string>("");
  const [collegeYear, setCollegeYear] = useState<string>("2nd year");
  const [ideaStage, setIdeaStage] = useState<string>("I have a rough idea");
  const [collegeTopics, setCollegeTopics] = useState<string[]>(["Tech & digital"]);
  const [preferredContactChannel, setPreferredContactChannel] = useState<string>("Viber / WhatsApp");
  const [willingToHostWorkshop, setWillingToHostWorkshop] = useState<boolean>(false);

  // Room 3 (Growth Room / Business) fields
  const [district, setDistrict] = useState<string>("Morang");
  const [businessReg, setBusinessReg] = useState<string>("Company (OCR)");
  const [tradingDuration, setTradingDuration] = useState<string>("1–3 years");
  const [businessSector, setBusinessSector] = useState<string>("Manufacturing");
  const [employeesCount, setEmployeesCount] = useState<string>("5–9");
  const [annualTurnover, setAnnualTurnover] = useState<string>("");
  const [ownershipDiversity, setOwnershipDiversity] = useState<string[]>([]);
  const [areaOfInterest, setAreaOfInterest] = useState<string>("Health Check-up + SGB Accelerator");
  const [expoVisitDay, setExpoVisitDay] = useState<string>("Sat 19 Dec (4 Poush)");
  const [supportNeeds, setSupportNeeds] = useState<string[]>([
    "Access to finance / loans",
    "Marketing & branding",
  ]);
  const [biggestChallenge, setBiggestChallenge] = useState<string>("");

  // Sync track with URL search params or hash
  useEffect(() => {
    const syncFromUrl = () => {
      if (typeof window === "undefined") return;
      const url = new URL(window.location.href);
      // Hash takes precedence over searchParams if conflicting (e.g. ?track=school#business)
      const h = url.hash.replace("#", "").toLowerCase();
      const q = (url.searchParams.get("track") || url.searchParams.get("room") || "").toLowerCase();
      const rawTrack = h || q;

      if (!rawTrack) return;

      const t = rawTrack.toLowerCase();
      if (t === "school" || t === "room1" || t === "1" || t === "makerspace") {
        setSelectedTrack("Makerspace");
      } else if (t === "college" || t === "room2" || t === "2" || t === "design studio" || t === "designstudio") {
        setSelectedTrack("Design Studio");
      } else if (t === "business" || t === "room3" || t === "3" || t === "growth room" || t === "growthroom" || t === "sgb") {
        setSelectedTrack("Growth Room");
      }
    };

    if (!userInteractedRef.current) {
      syncFromUrl();
    }

    const onPopOrHash = () => {
      userInteractedRef.current = false;
      syncFromUrl();
    };

    window.addEventListener("popstate", onPopOrHash);
    window.addEventListener("hashchange", onPopOrHash);
    return () => {
      window.removeEventListener("popstate", onPopOrHash);
      window.removeEventListener("hashchange", onPopOrHash);
    };
  }, [searchParams]);

  // Mutation hook
  const { mutate, isPending, error, reset: resetMutation } = useCreateStartupRegistration({
    onSuccess: (data) => {
      setSubmittedData(data);
      setValidationError(null);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    onError: (err) => {
      setValidationError(err.message || "Failed to submit enquiry.");
    },
  });

  const isEligibilityWarning = useMemo(() => {
    return (
      businessReg === "Not registered yet" ||
      tradingDuration === "Less than 1 year" ||
      district === "Outside Koshi Province"
    );
  }, [businessReg, tradingDuration, district]);

  // Handlers for checkboxes
  const toggleGrade = (grade: string) => {
    setSchoolGrades((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
    );
  };

  const toggleTopic = (topic: string) => {
    setCollegeTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const toggleOwnership = (item: string) => {
    setOwnershipDiversity((prev) =>
      prev.includes(item) ? prev.filter((o) => o !== item) : [...prev, item]
    );
  };

  const toggleSupportNeed = (need: string) => {
    setSupportNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const handleTrackChange = (track: TrackType) => {
    userInteractedRef.current = true;
    setSelectedTrack(track);
    setValidationError(null);

    if (typeof window !== "undefined") {
      const trackKey =
        track === "Makerspace"
          ? "school"
          : track === "Design Studio"
          ? "college"
          : "business";
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("track", trackKey);
        url.hash = trackKey;
        window.history.replaceState(null, "", url.toString());
      } catch {
        // ignore
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!consent) {
      setValidationError("Please accept the consent terms to proceed.");
      return;
    }

    let payload: StartupRegistrationPayload;

    if (selectedTrack === "Makerspace") {
      if (schoolGrades.length === 0) {
        setValidationError("Please select at least one grade taking part.");
        return;
      }
      payload = {
        track: "Makerspace",
        full_name: fullName,
        phone,
        email: email || null,
        organization_name: organizationName,
        role: role || "Teacher",
        municipality,
        school_request: schoolRequest,
        school_type: schoolType || null,
        school_grades: schoolGrades.join(", "),
        school_students_count: Number(schoolStudentsCount) || 1,
        school_teachers_count: schoolTeachersCount ? Number(schoolTeachersCount) : null,
        school_preferred_date_1: schoolRequest.startsWith("Class visit") ? schoolDate1 || null : null,
        school_preferred_date_2: schoolRequest.startsWith("Class visit") ? schoolDate2 || null : null,
        school_session_slot: schoolRequest.startsWith("Class visit") ? schoolSlot || null : null,
        school_session_month: !schoolRequest.startsWith("Class visit") ? schoolMonth || null : null,
        school_available_space: !schoolRequest.startsWith("Class visit") ? schoolSpace || null : null,
        notes: notes || null,
        heard_about_us: heardAboutUs || null,
        consent,
        keep_updated: keepUpdated,
      };
    } else if (selectedTrack === "Design Studio") {
      payload = {
        track: "Design Studio",
        full_name: fullName,
        phone,
        email: email || null,
        organization_name: organizationName,
        role: "Student",
        municipality: municipality || null,
        college_programme: collegeProgramme,
        college_year: collegeYear || null,
        gender: gender || null,
        age_group: ageGroup || null,
        idea_stage: ideaStage,
        interested_topics: collegeTopics.length > 0 ? collegeTopics.join(", ") : null,
        preferred_contact_channel: preferredContactChannel,
        willing_to_host_workshop: willingToHostWorkshop,
        notes: notes || null,
        heard_about_us: heardAboutUs || null,
        consent,
        keep_updated: keepUpdated,
      };
    } else {
      payload = {
        track: "Growth Room",
        full_name: fullName,
        phone,
        email: email || null,
        organization_name: organizationName,
        role: role || "Owner / founder",
        district,
        municipality: municipality || null,
        business_registration_type: businessReg,
        trading_duration: tradingDuration,
        business_sector: businessSector,
        employees_count: employeesCount || null,
        annual_turnover: annualTurnover || null,
        ownership_diversity: ownershipDiversity.length > 0 ? ownershipDiversity.join(", ") : null,
        area_of_interest: areaOfInterest,
        expo_visit_day: areaOfInterest !== "SGB Accelerator only" ? expoVisitDay || null : null,
        support_needs: supportNeeds.length > 0 ? supportNeeds.join(", ") : null,
        biggest_challenge: biggestChallenge || null,
        notes: notes || null,
        heard_about_us: heardAboutUs || null,
        consent,
        keep_updated: keepUpdated,
      };
    }

    mutate(payload);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    resetMutation();
    setValidationError(null);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // SUCCESS VIEW
  if (submittedData) {
    const firstName = submittedData.full_name?.split(" ")[0] || "Friend";
    const refCode = `BIC-${selectedTrack === "Makerspace" ? "S" : selectedTrack === "Design Studio" ? "C" : "B"}-${submittedData.id.toString().padStart(4, "0")}`;

    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white border border-[#cfdcee] rounded-3xl p-6 sm:p-10 text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#16233a]">
            Thank you, {firstName}! We&apos;ve received your enquiry.
          </h2>

          <div className="inline-block mt-4 px-4 py-2 bg-slate-100 rounded-xl font-mono text-sm sm:text-base font-bold text-slate-800 tracking-wide border border-slate-200">
            Reference: {refCode}
          </div>

          <p className="text-sm text-slate-600 mt-3 max-w-lg mx-auto leading-relaxed">
            We have registered your details for the{" "}
            <strong>{submittedData.track}</strong> track.
            {submittedData.email && (
              <span>
                {" "}
                A confirmation has also been dispatched to{" "}
                <strong className="text-slate-800">{submittedData.email}</strong>.
              </span>
            )}
          </p>

          <div className="mt-8 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-left max-w-xl mx-auto space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Next Steps for You
            </h4>
            <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside leading-relaxed">
              {selectedTrack === "Makerspace" ? (
                <>
                  <li>We&apos;ll call you within two working days on <strong>{submittedData.phone}</strong> to confirm the exact schedule.</li>
                  {schoolRequest.startsWith("Class visit") ? (
                    <li>For your Expo visit, please bring the students to <strong>Room 1 (The Makerspace)</strong> at the Startup &amp; Entrepreneurship Pavilion.</li>
                  ) : (
                    <li>For the session at your school, our team will coordinate dates and required materials with you.</li>
                  )}
                </>
              ) : selectedTrack === "Design Studio" ? (
                <>
                  <li>You&apos;re now shortlisted for the upcoming Design Thinking workshop.</li>
                  <li>Our coordinator will reach out to you via <strong>{preferredContactChannel}</strong> once registrations open at your college.</li>
                  <li>During Birat Expo (17–26 Dec), visit <strong>Room 2 (Design Studio)</strong> to see live student prototyping!</li>
                </>
              ) : (
                <>
                  <li>Walk into <strong>Room 3 (Growth Room)</strong> on any day of Birat Expo for your free Business Health Check-up.</li>
                  <li>Feel free to bring your registration certificate and brief summary of previous sales.</li>
                  <li>Our incubation advisors will assess your fit for the CIM SGB Accelerator.</li>
                </>
              )}
            </ol>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleResetForm}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#274ea3] hover:bg-[#1b3a82] text-white font-semibold text-sm transition cursor-pointer"
            >
              Submit another enquiry
            </button>
            <Link
              href="/startups-hackathon"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition text-center"
            >
              Back to Pavilion Overview
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ACCENT COLORS
  const accent =
    selectedTrack === "Makerspace"
      ? {
          badge: "bg-[#0e7490] text-white",
          subBadge: "text-[#0e7490]",
          border: "border-l-[#0e7490]",
          ring: "focus:ring-[#0e7490]",
          activeBg: "bg-[#e6f4f7] border-[#0e7490] text-[#0e7490]",
          button: "bg-[#0e7490] hover:bg-[#0c627a]",
          roomLabel: "Room 1 · Makerspace · Grades 7–10",
        }
      : selectedTrack === "Design Studio"
      ? {
          badge: "bg-[#5b3fa8] text-white",
          subBadge: "text-[#5b3fa8]",
          border: "border-l-[#5b3fa8]",
          ring: "focus:ring-[#5b3fa8]",
          activeBg: "bg-[#efebfa] border-[#5b3fa8] text-[#5b3fa8]",
          button: "bg-[#5b3fa8] hover:bg-[#492e8c]",
          roomLabel: "Room 2 · Design Studio · Free",
        }
      : {
          badge: "bg-[#b5651d] text-white",
          subBadge: "text-[#b5651d]",
          border: "border-l-[#b5651d]",
          ring: "focus:ring-[#b5651d]",
          activeBg: "bg-[#fbf0e6] border-[#b5651d] text-[#b5651d]",
          button: "bg-[#b5651d] hover:bg-[#975114]",
          roomLabel: "Room 3 · Growth Room · Free Health Check-up",
        };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Top Breadcrumb */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/startups-hackathon"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#274ea3] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Startup &amp; Entrepreneurship Pavilion
        </Link>
        <span className="text-xs text-slate-500 font-medium">
          Birat Expo 2026 · 17–26 Dec
        </span>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-[#cfdcee] rounded-3xl overflow-hidden">
        {/* Header Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#16264f] via-[#1f3c7a] to-[#274ea3] text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-xs mb-3">
            Biratnagar Incubation Center (CIM)
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold font-serif leading-tight">
            Pavilion Enquiry &amp; Booking
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/85 max-w-2xl leading-relaxed">
            Tell us who you are and what you need. It takes less than two minutes. The Incubation
            Center team will follow up to confirm your booking or session.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* STEP 1: CHOOSE TRACK */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Step 1 of 2
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#16233a]">
              Who are you?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Select your category below. The questions will automatically adjust to your track.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {/* Card 1: Schools & Teachers */}
              <button
                type="button"
                onClick={() => handleTrackChange("Makerspace")}
                className={`cursor-pointer p-4 rounded-2xl border-2 text-left transition relative flex flex-col justify-between ${
                  selectedTrack === "Makerspace"
                    ? "border-[#0e7490] bg-[#e6f4f7]"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0e7490]">
                      Room 1
                    </span>
                    <Building2 className="w-5 h-5 text-[#0e7490]" />
                  </div>
                  <div className="font-serif font-bold text-base sm:text-lg text-[#16233a]">
                    Schools &amp; Teachers
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    Book a class visit or school session
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-[#0e7490]/20 text-[11px] text-slate-600 font-medium">
                  The Makerspace · Grades 7–10
                </div>
              </button>

              {/* Card 2: College Students */}
              <button
                type="button"
                onClick={() => handleTrackChange("Design Studio")}
                className={`cursor-pointer p-4 rounded-2xl border-2 text-left transition relative flex flex-col justify-between ${
                  selectedTrack === "Design Studio"
                    ? "border-[#5b3fa8] bg-[#efebfa]"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b3fa8]">
                      Room 2
                    </span>
                    <GraduationCap className="w-5 h-5 text-[#5b3fa8]" />
                  </div>
                  <div className="font-serif font-bold text-base sm:text-lg text-[#16233a]">
                    College Students
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    Join next Design Thinking workshop
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-[#5b3fa8]/20 text-[11px] text-slate-600 font-medium">
                  The Design Studio · 100% Free
                </div>
              </button>

              {/* Card 3: Business Owners */}
              <button
                type="button"
                onClick={() => handleTrackChange("Growth Room")}
                className={`cursor-pointer p-4 rounded-2xl border-2 text-left transition relative flex flex-col justify-between ${
                  selectedTrack === "Growth Room"
                    ? "border-[#b5651d] bg-[#fbf0e6]"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#b5651d]">
                      Room 3
                    </span>
                    <Briefcase className="w-5 h-5 text-[#b5651d]" />
                  </div>
                  <div className="font-serif font-bold text-base sm:text-lg text-[#16233a]">
                    Business Owners
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    Apply for SGB Accelerator &amp; Clinics
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-[#b5651d]/20 text-[11px] text-slate-600 font-medium">
                  The Growth Room · Free Health Check
                </div>
              </button>
            </div>
          </div>

          {/* STEP 2: CATEGORY SPECIFIC FIELDS */}
          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 2 of 2 · {accent.roomLabel}
              </span>
            </div>

            {/* TRACK 1: MAKERSPACE / SCHOOLS */}
            {selectedTrack === "Makerspace" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#16233a]">
                    Schools &amp; Teachers Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Each Makerspace session accommodates up to 25 students. We host 2 sessions per
                    day during the Expo. Larger groups will be scheduled in batches.
                  </p>
                </div>

                {/* What would you like */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    What would you like? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition ${
                        schoolRequest.startsWith("Class visit")
                          ? "border-[#0e7490] bg-[#e6f4f7]"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="school_request"
                        value="Class visit to Room 1 at Birat Expo"
                        checked={schoolRequest.startsWith("Class visit")}
                        onChange={(e) => setSchoolRequest(e.target.value)}
                        className="mt-1 cursor-pointer"
                      />
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Class visit to Room 1 at Birat Expo
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          17–26 December 2026, Biratnagar
                        </div>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition ${
                        !schoolRequest.startsWith("Class visit")
                          ? "border-[#0e7490] bg-[#e6f4f7]"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="school_request"
                        value="Maker session at our school (new year)"
                        checked={!schoolRequest.startsWith("Class visit")}
                        onChange={(e) => setSchoolRequest(e.target.value)}
                        className="mt-1 cursor-pointer"
                      />
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Maker session at our own school
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Early 2027, at your school campus
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* School Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      School Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      placeholder="e.g. Shree Adarsha Secondary School"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      School Type
                    </label>
                    <select
                      value={schoolType}
                      onChange={(e) => setSchoolType(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490] bg-white cursor-pointer"
                    >
                      <option value="">Choose…</option>
                      <option value="Community (government)">Community (government)</option>
                      <option value="Institutional (private)">Institutional (private)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Location and Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Municipality / District *
                    </label>
                    <input
                      type="text"
                      required
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      placeholder="e.g. Biratnagar, Morang"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Person Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Karki"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Role *
                    </label>
                    <select
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490] bg-white cursor-pointer"
                    >
                      <option value="">Choose…</option>
                      <option value="Principal">Principal</option>
                      <option value="Vice-principal">Vice-principal</option>
                      <option value="Teacher">Teacher</option>
                      <option value="ECA / club coordinator">ECA / club coordinator</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@adarshaschool.edu.np"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490]"
                    />
                  </div>
                </div>

                {/* Student Group Information */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Grades Taking Part *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["7", "8", "9", "10"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => toggleGrade(g)}
                          className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold border transition ${
                            schoolGrades.includes(g)
                              ? "bg-[#0e7490] text-white border-[#0e7490]"
                              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                          }`}
                        >
                          Grade {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Number of Students *
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={500}
                        required
                        value={schoolStudentsCount}
                        onChange={(e) => setSchoolStudentsCount(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490] bg-white cursor-pointer"
                      />
                      {schoolStudentsCount > 25 && (
                        <p className="mt-1.5 text-xs text-[#0e7490] font-semibold bg-[#e6f4f7] p-2 rounded-lg">
                          That&apos;s {Math.ceil(schoolStudentsCount / 25)} batches of up to 25.
                          We&apos;ll schedule them back-to-back or across two days.
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Accompanying Teachers (Optional)
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={50}
                        value={schoolTeachersCount}
                        onChange={(e) =>
                          setSchoolTeachersCount(e.target.value === "" ? "" : Number(e.target.value))
                        }
                        placeholder="e.g. 2"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490] bg-white cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Conditional visit or onsite scheduling */}
                {schoolRequest.startsWith("Class visit") ? (
                  <div className="p-4 bg-[#e6f4f7]/50 rounded-2xl border border-[#0e7490]/20 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0e7490]">
                      Expo Visit Scheduling
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          First-Choice Date *
                        </label>
                        <select
                          required
                          value={schoolDate1}
                          onChange={(e) => setSchoolDate1(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490] bg-white cursor-pointer"
                        >
                          {EXPO_DAYS.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Second-Choice Date
                        </label>
                        <select
                          value={schoolDate2}
                          onChange={(e) => setSchoolDate2(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490] bg-white cursor-pointer"
                        >
                          <option value="">Optional fallback date</option>
                          {EXPO_DAYS.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Preferred Session Slot *
                      </label>
                      <div className="flex gap-4">
                        {["Morning", "Afternoon", "Either"].map((slot) => (
                          <label key={slot} className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                            <input
                              type="radio"
                              name="schoolSlot"
                              value={slot}
                              checked={schoolSlot === slot}
                              onChange={(e) => setSchoolSlot(e.target.value)}
                              className="cursor-pointer"
                            />
                            <span>{slot}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      On-site School Session Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Month *
                        </label>
                        <select
                          required
                          value={schoolMonth}
                          onChange={(e) => setSchoolMonth(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490] bg-white cursor-pointer"
                        >
                          <option value="Magh 2083 (mid-Jan – mid-Feb 2027)">
                            Magh 2083 (mid-Jan – mid-Feb 2027)
                          </option>
                          <option value="Falgun 2083 (mid-Feb – mid-Mar 2027)">
                            Falgun 2083 (mid-Feb – mid-Mar 2027)
                          </option>
                          <option value="Chaitra 2083 (mid-Mar – mid-Apr 2027)">
                            Chaitra 2083 (mid-Mar – mid-Apr 2027)
                          </option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Available Space at School
                        </label>
                        <select
                          value={schoolSpace}
                          onChange={(e) => setSchoolSpace(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7490] bg-white cursor-pointer"
                        >
                          <option value="Classroom">Classroom</option>
                          <option value="Hall / multipurpose room">Hall / multipurpose room</option>
                          <option value="Computer or science lab">Computer or science lab</option>
                          <option value="Not sure">Not sure</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TRACK 2: DESIGN STUDIO / COLLEGE */}
            {selectedTrack === "Design Studio" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#16233a]">
                    College Students Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    The workshop is free and you don&apos;t need a business idea. We&apos;ll notify
                    you when the next cohort opens at your college.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Pooja Sharma"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="pooja.sharma@gmail.com"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Gender (Optional)
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] bg-white cursor-pointer"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Age Group
                    </label>
                    <select
                      value={ageGroup}
                      onChange={(e) => setAgeGroup(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] bg-white cursor-pointer"
                    >
                      <option value="Under 18">Under 18</option>
                      <option value="18–21">18–21</option>
                      <option value="22–25">22–25</option>
                      <option value="26–30">26–30</option>
                      <option value="Over 30">Over 30</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Municipality / District
                    </label>
                    <input
                      type="text"
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      placeholder="e.g. Biratnagar or Itahari"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8]"
                    />
                  </div>
                </div>

                {/* College Info */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Your College &amp; Faculty
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        College Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        placeholder="e.g. Mahendra Morang Adarsha Multiple Campus"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] bg-white cursor-pointer"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Faculty / Programme *
                      </label>
                      <input
                        type="text"
                        required
                        value={collegeProgramme}
                        onChange={(e) => setCollegeProgramme(e.target.value)}
                        placeholder="e.g. BBS, BBA, BSc CSIT, BE"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] bg-white cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Year / Semester
                      </label>
                      <select
                        value={collegeYear}
                        onChange={(e) => setCollegeYear(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] bg-white cursor-pointer"
                      >
                        <option value="1st year">1st year</option>
                        <option value="2nd year">2nd year</option>
                        <option value="3rd year">3rd year</option>
                        <option value="4th year">4th year</option>
                        <option value="Master's">Master&apos;s</option>
                        <option value="Recently graduated">Recently graduated</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Idea stage & Topics */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Where are you right now? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "No idea yet, just curious",
                        "I have a rough idea",
                        "Already working on something",
                      ].map((stage) => (
                        <label
                          key={stage}
                          className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs font-medium transition ${
                            ideaStage === stage
                              ? "border-[#5b3fa8] bg-[#efebfa] text-[#5b3fa8] font-bold"
                              : "border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="ideaStage"
                            value={stage}
                            checked={ideaStage === stage}
                            onChange={(e) => setIdeaStage(e.target.value)}
                            className="cursor-pointer"
                          />
                          <span>{stage}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Topics that interest you (Choose any)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Agriculture & food",
                        "Tech & digital",
                        "Education",
                        "Health",
                        "Environment & climate",
                        "Social impact",
                        "Tourism",
                        "Crafts & creative",
                      ].map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => toggleTopic(topic)}
                          className={`cursor-pointer px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                            collegeTopics.includes(topic)
                              ? "bg-[#5b3fa8] text-white border-[#5b3fa8]"
                              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact channel & workshop host */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    How should we inform you? *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Phone call", "SMS", "Viber / WhatsApp", "Email"].map((ch) => (
                      <label
                        key={ch}
                        className={`p-2.5 rounded-xl border text-center cursor-pointer text-xs font-semibold transition ${
                          preferredContactChannel === ch
                            ? "bg-[#5b3fa8] text-white border-[#5b3fa8]"
                            : "bg-white text-slate-700 border-slate-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactChannel"
                          value={ch}
                          checked={preferredContactChannel === ch}
                          onChange={(e) => setPreferredContactChannel(e.target.value)}
                          className="sr-only"
                        />
                        <span>{ch}</span>
                      </label>
                    ))}
                  </div>

                  <label className="flex items-start gap-2.5 pt-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={willingToHostWorkshop}
                      onChange={(e) => setWillingToHostWorkshop(e.target.checked)}
                      className="mt-0.5 rounded text-[#5b3fa8] cursor-pointer"
                    />
                    <span>
                      I&apos;d like to help bring the workshop to my college (e.g. through a student club or committee).
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* TRACK 3: GROWTH ROOM / BUSINESS */}
            {selectedTrack === "Growth Room" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#16233a]">
                    Business Owners Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    For registered businesses in Koshi Province trading for a year or more. The first
                    step is a free Business Health Check-up in Room 3. Walk-ins are welcome any day
                    without appointment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Bijay Shrestha"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Role *
                    </label>
                    <select
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                    >
                      <option value="Owner / founder">Owner / founder</option>
                      <option value="Co-founder / partner">Co-founder / partner</option>
                      <option value="Manager">Manager</option>
                      <option value="Family member in the business">
                        Family member in the business
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="bijay@koshipackaging.com"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d]"
                    />
                  </div>
                </div>

                {/* Business particulars */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Your Enterprise
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        placeholder="e.g. Koshi Packaging Industries Pvt. Ltd."
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        District *
                      </label>
                      <select
                        required
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                      >
                        {KOSHI_DISTRICTS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Registration Type *
                      </label>
                      <select
                        required
                        value={businessReg}
                        onChange={(e) => setBusinessReg(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                      >
                        <option value="Company (OCR)">Company (OCR)</option>
                        <option value="Cottage & Small Industries (DoCSI)">
                          Cottage &amp; Small Industries (DoCSI)
                        </option>
                        <option value="Municipality / ward">Municipality / ward</option>
                        <option value="Cooperative">Cooperative</option>
                        <option value="Firm / other registration">Firm / other registration</option>
                        <option value="Not registered yet">Not registered yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Time Trading *
                      </label>
                      <select
                        required
                        value={tradingDuration}
                        onChange={(e) => setTradingDuration(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                      >
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1–3 years">1–3 years</option>
                        <option value="3–5 years">3–5 years</option>
                        <option value="5–10 years">5–10 years</option>
                        <option value="More than 10 years">More than 10 years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Sector *
                      </label>
                      <select
                        required
                        value={businessSector}
                        onChange={(e) => setBusinessSector(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                      >
                        <option value="Agriculture & agro-processing">
                          Agriculture &amp; agro-processing
                        </option>
                        <option value="Food & beverage">Food &amp; beverage</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Handicraft & textiles">Handicraft &amp; textiles</option>
                        <option value="Retail & trading">Retail &amp; trading</option>
                        <option value="Services">Services</option>
                        <option value="Tourism & hospitality">Tourism &amp; hospitality</option>
                        <option value="IT & digital">IT &amp; digital</option>
                        <option value="Construction & materials">Construction &amp; materials</option>
                        <option value="Health & wellness">Health &amp; wellness</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {isEligibilityWarning && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
                      <strong>Note on SGB Accelerator eligibility:</strong> The formal Accelerator
                      is primarily structured for registered businesses trading for 1+ years in
                      Koshi. However, please send your details anyway! We will direct you to the
                      appropriate CIM incubation programme and the free Health Check-up remains fully
                      open to you.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        People Employed (including you)
                      </label>
                      <select
                        value={employeesCount}
                        onChange={(e) => setEmployeesCount(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                      >
                        <option value="1–4">1–4</option>
                        <option value="5–9">5–9</option>
                        <option value="10–19">10–19</option>
                        <option value="20–49">20–49</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Annual Turnover (Optional, confidential)
                      </label>
                      <select
                        value={annualTurnover}
                        onChange={(e) => setAnnualTurnover(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                      >
                        <option value="">Prefer not to say</option>
                        <option value="Below NPR 10 lakh">Below NPR 10 lakh</option>
                        <option value="NPR 10–50 lakh">NPR 10–50 lakh</option>
                        <option value="NPR 50 lakh – 1 crore">NPR 50 lakh – 1 crore</option>
                        <option value="NPR 1–5 crore">NPR 1–5 crore</option>
                        <option value="Above NPR 5 crore">Above NPR 5 crore</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Ownership Diversity
                    </label>
                    <div className="flex gap-4">
                      {["Women-led", "Youth-led (under 40)"].map((tag) => (
                        <label key={tag} className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={ownershipDiversity.includes(tag)}
                            onChange={() => toggleOwnership(tag)}
                            className="rounded text-[#b5651d] cursor-pointer"
                          />
                          <span>{tag}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Support needs */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      I&apos;m Interested In *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "Health Check-up + SGB Accelerator",
                        "Health Check-up only",
                        "SGB Accelerator only",
                      ].map((interest) => (
                        <label
                          key={interest}
                          className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs font-medium transition ${
                            areaOfInterest === interest
                              ? "border-[#b5651d] bg-[#fbf0e6] text-[#b5651d] font-bold"
                              : "border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="areaOfInterest"
                            value={interest}
                            checked={areaOfInterest === interest}
                            onChange={(e) => setAreaOfInterest(e.target.value)}
                            className="cursor-pointer"
                          />
                          <span>{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {areaOfInterest !== "SGB Accelerator only" && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Which day will you visit Room 3? (Optional)
                      </label>
                      <select
                        value={expoVisitDay}
                        onChange={(e) => setExpoVisitDay(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d] bg-white cursor-pointer"
                      >
                        <option value="">Not sure yet / Walk-in anytime</option>
                        {EXPO_DAYS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Walk-ins are welcome any day. Letting us know helps us assign a dedicated
                        growth advisor for you.
                      </span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Areas Where You Need Support (Choose any)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Access to finance / loans",
                        "Bookkeeping & accounts",
                        "Marketing & branding",
                        "Digital & online sales",
                        "Packaging & product quality",
                        "Registration, tax & compliance",
                        "Hiring & HR",
                        "Market linkage",
                        "Investment readiness",
                      ].map((need) => (
                        <button
                          key={need}
                          type="button"
                          onClick={() => toggleSupportNeed(need)}
                          className={`cursor-pointer px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                            supportNeeds.includes(need)
                              ? "bg-[#b5651d] text-white border-[#b5651d]"
                              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          {need}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Biggest Challenge Right Now
                    </label>
                    <textarea
                      rows={2}
                      value={biggestChallenge}
                      onChange={(e) => setBiggestChallenge(e.target.value)}
                      placeholder="e.g. Scaling production machinery and working capital financing."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#b5651d]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* General Notes */}
            <div className="mt-6">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Anything Else We Should Know? (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Accessibility requests, special topics, questions..."
                className={`w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 ${accent.ring}`}
              />
            </div>
          </div>

          {/* STEP 3: FINISH & SUBMISSION */}
          <div className="border-t border-slate-200 pt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                How did you hear about us?
              </label>
              <select
                value={heardAboutUs}
                onChange={(e) => setHeardAboutUs(e.target.value)}
                className="w-full sm:w-1/2 px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white cursor-pointer"
              >
                <option value="At Birat Expo">At Birat Expo</option>
                <option value="CIM website">CIM website</option>
                <option value="Facebook / social media">Facebook / social media</option>
                <option value="School / college">School / college</option>
                <option value="Friend or colleague">Friend or colleague</option>
                <option value="CIM member / staff">CIM member / staff</option>
                <option value="Newspaper / radio">Newspaper / radio</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2 pt-2">
              <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded text-[#274ea3] cursor-pointer"
                />
                <span>
                  I agree that Biratnagar Incubation Center and CIM may contact me regarding this
                  enquiry. <span className="text-rose-600 font-bold">*</span> (Your information is
                  used strictly for incubation initiatives and never shared).
                </span>
              </label>

              <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={keepUpdated}
                  onChange={(e) => setKeepUpdated(e.target.checked)}
                  className="mt-0.5 rounded text-[#274ea3] cursor-pointer"
                />
                <span>Keep me updated about other CIM entrepreneurship initiatives.</span>
              </label>
            </div>

            {/* Error Display */}
            {(validationError || error) && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                {validationError || error?.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className={`w-full py-4 rounded-xl text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${accent.button}`}
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting your enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry &amp; Booking</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer help note */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Have questions? Call Biratnagar Incubation Center on{" "}
            <a href="tel:+9779869812058" className="font-semibold text-[#274ea3] hover:underline">
              986-981-2058
            </a>
          </span>
          <span>Chamber of Industries Morang (CIM)</span>
        </div>
      </div>
    </div>
  );
}

