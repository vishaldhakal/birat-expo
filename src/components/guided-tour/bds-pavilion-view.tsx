"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  Copy,
  Check,
  Building2,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Info,
  Briefcase,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";

const EXPO_START = "2026-12-17";
const EXPO_DAYS = 10;
const POUSH_DATES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DISTRICTS = [
  "Morang",
  "Sunsari",
  "Jhapa",
  "Ilam",
  "Panchthar",
  "Taplejung",
  "Dhankuta",
  "Terhathum",
  "Sankhuwasabha",
  "Bhojpur",
  "Solukhumbu",
  "Okhaldhunga",
  "Khotang",
  "Udayapur",
  "Outside Koshi Province",
];

const SECTORS = [
  "Manufacturing",
  "Agriculture & food processing",
  "Trade & retail",
  "Services",
  "Hospitality & tourism",
  "Construction",
  "IT & digital",
  "Handicraft & textiles",
  "Other",
];

const BUSINESS_NEEDS = [
  "Branding & social media",
  "Marketing & new markets",
  "Trademark & legal",
  "Quality standards (Q-HSEF)",
  "HR & hiring",
  "Transport & logistics",
  "Selling on BiratBazaar (B2B)",
  "Finance & accounts",
  "Environment & energy (IEE/EIA, energy audit)",
  "Government support & registration",
];

const PROVIDER_SERVICES = [
  "Branding, design & social media",
  "Marketing & market linkage",
  "Legal & trademark",
  "Accounting, tax & audit",
  "Quality & certification",
  "HR & recruitment",
  "Transport & logistics",
  "Environment & energy (IEE/EIA, audit)",
  "IT & digital",
  "Training & coaching",
  "Other",
];

const PROVIDER_PARTICIPATION = [
  "Staff a desk at the pavilion",
  "Be listed in the BDS directory",
  "Give a short talk",
  "Offer a discount to SMEs referred by CIM",
];

export default function BdsPavilionView() {
  const [track, setTrack] = useState<"business" | "provider">("business");
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedNote, setSubmittedNote] = useState<string>("");
  const [statusText, setStatusText] = useState("Birat Expo 2026");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Business Form State
  const [bWants, setBWants] = useState<string[]>(["Business Health Check-up"]);
  const [bName, setBName] = useState("");
  const [bPhone, setBPhone] = useState("");
  const [bEmail, setBEmail] = useState("");
  const [bGender, setBGender] = useState("");
  const [bBusiness, setBBusiness] = useState("");
  const [bDistrict, setBDistrict] = useState("");
  const [bSector, setBSector] = useState("");
  const [bRegistered, setBRegistered] = useState("");
  const [bYears, setBYears] = useState("");
  const [bStaff, setBStaff] = useState("");
  const [bLedBy, setBLedBy] = useState<string[]>([]);
  const [bNeeds, setBNeeds] = useState<string[]>([]);
  const [bProblem, setBProblem] = useState("");
  const [bDay, setBDay] = useState("");
  const [bTime, setBTime] = useState("");
  const [bConsent, setBConsent] = useState(false);
  const [bHoneypot, setBHoneypot] = useState("");

  // Provider Form State
  const [pOrg, setPOrg] = useState("");
  const [pName, setPName] = useState("");
  const [pPhone, setPPhone] = useState("");
  const [pEmail, setPEmail] = useState("");
  const [pDistrict, setPDistrict] = useState("");
  const [pWeb, setPWeb] = useState("");
  const [pServices, setPServices] = useState<string[]>([]);
  const [pDescription, setPDescription] = useState("");
  const [pParticipation, setPParticipation] = useState<string[]>([]);
  const [pConsent, setPConsent] = useState(false);
  const [pHoneypot, setPHoneypot] = useState("");

  // Validation Errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const registerRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  // Dynamic Status pill calculation
  useEffect(() => {
    const start = new Date(EXPO_START + "T00:00:00");
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = Math.round((today.getTime() - start.getTime()) / 864e5);

    if (diff < 0) {
      const n = -diff;
      setStatusText(n === 1 ? "Opens tomorrow" : `Opens in ${n} days`);
    } else if (diff < EXPO_DAYS) {
      setStatusText(`Open now · Day ${diff + 1} of ${EXPO_DAYS}`);
    } else {
      setStatusText("Expo closed · Business Clinic continues at CIM");
    }

    // Check hash for deep link
    if (typeof window !== "undefined") {
      if (window.location.hash === "#provider") {
        setTrack("provider");
      }
      const handleHash = () => {
        if (window.location.hash === "#provider") {
          setTrack("provider");
        }
      };
      window.addEventListener("hashchange", handleHash);
      return () => window.removeEventListener("hashchange", handleHash);
    }
  }, []);

  // Compute expo day options
  const expoDayOptions = React.useMemo(() => {
    const start = new Date(EXPO_START + "T00:00:00");
    const options = [];
    for (let i = 0; i < EXPO_DAYS; i++) {
      const d = new Date(start.getTime() + i * 864e5);
      const val = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      const label = `Day ${i + 1} · ${WEEKDAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]} (Poush ${POUSH_DATES[i]})`;
      options.push({ val, label });
    }
    options.push({ val: "after-expo", label: "After the Expo" });
    return options;
  }, []);

  // Copy phone handler
  const handleCopyPhone = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("9869812058").then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  // Generate Reference Number
  const generateRefNo = (t: "business" | "provider") => {
    const d = new Date();
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let s = "";
    for (let i = 0; i < 4; i++) {
      s += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const prefix = t === "provider" ? "BDS-P-" : "BDS-B-";
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${prefix}${mm}${dd}-${s}`;
  };

  // Validate Business Form
  const validateBusinessForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (bWants.length === 0) {
      newErrors.wants = "Please choose at least one option.";
    }
    if (!bName.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    const cleanPhone = bPhone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^(\+?977)?9\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number (e.g. 98XXXXXXXX).";
    }
    if (bEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bEmail.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!bBusiness.trim()) {
      newErrors.business = "Please enter your business name.";
    }
    if (!bDistrict) {
      newErrors.district = "Please select a district.";
    }
    if (!bSector) {
      newErrors.sector = "Please select a business sector.";
    }
    if (!bRegistered) {
      newErrors.registered = "Please select registration status.";
    }
    if (!bConsent) {
      newErrors.consent = "Please agree to the privacy and contact terms before submitting.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Provider Form
  const validateProviderForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!pOrg.trim()) {
      newErrors.org = "Please enter your organisation or business name.";
    }
    if (!pName.trim()) {
      newErrors.name = "Please enter the contact person's name.";
    }
    const cleanPhone = pPhone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^(\+?977)?9\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (pEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pEmail.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!pDistrict) {
      newErrors.district = "Please select where you are based.";
    }
    if (pServices.length === 0) {
      newErrors.services = "Please choose at least one service.";
    }
    if (!pConsent) {
      newErrors.consent = "Please agree to the terms before submitting.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleBusinessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBusinessForm()) {
      const firstError = document.querySelector(".field-error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    if (bHoneypot) return; // Anti-spam

    setIsSubmitting(true);
    const ref = generateRefNo("business");

    const payload = {
      track: "business",
      ref,
      submittedAt: new Date().toISOString(),
      page: "bds-connect-pavilion",
      wants: bWants.join("; "),
      name: bName.trim(),
      phone: bPhone.trim(),
      email: bEmail.trim(),
      gender: bGender,
      business: bBusiness.trim(),
      district: bDistrict,
      sector: bSector,
      registered: bRegistered,
      years: bYears,
      staff: bStaff,
      ledBy: bLedBy.join("; "),
      needs: bNeeds.join("; "),
      problem: bProblem.trim(),
      day: bDay,
      time: bTime,
    };

    // Save to local storage queue
    try {
      const queue = JSON.parse(localStorage.getItem("bdsQueue") || "[]");
      queue.push(payload);
      localStorage.setItem("bdsQueue", JSON.stringify(queue));
    } catch (err) {
      console.warn("Storage error", err);
    }

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(ref);
      setSubmittedNote("Your registration is confirmed. Our team will contact you before your visit.");
      if (doneRef.current) {
        doneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 600);
  };

  const handleProviderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateProviderForm()) {
      const firstError = document.querySelector(".field-error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    if (pHoneypot) return; // Anti-spam

    setIsSubmitting(true);
    const ref = generateRefNo("provider");

    const payload = {
      track: "provider",
      ref,
      submittedAt: new Date().toISOString(),
      page: "bds-connect-pavilion",
      org: pOrg.trim(),
      name: pName.trim(),
      phone: pPhone.trim(),
      email: pEmail.trim(),
      district: pDistrict,
      web: pWeb.trim(),
      services: pServices.join("; "),
      description: pDescription.trim(),
      participation: pParticipation.join("; "),
    };

    try {
      const queue = JSON.parse(localStorage.getItem("bdsQueue") || "[]");
      queue.push(payload);
      localStorage.setItem("bdsQueue", JSON.stringify(queue));
    } catch (err) {
      console.warn("Storage error", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(ref);
      setSubmittedNote("Thank you for registering. CIM will contact you about joining the BDS network.");
      if (doneRef.current) {
        doneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 600);
  };

  const resetForm = () => {
    setSubmittedRef(null);
    setSubmittedNote("");
    setErrors({});
    if (track === "business") {
      setBWants(["Business Health Check-up"]);
      setBName("");
      setBPhone("");
      setBEmail("");
      setBGender("");
      setBBusiness("");
      setBDistrict("");
      setBSector("");
      setBRegistered("");
      setBYears("");
      setBStaff("");
      setBLedBy([]);
      setBNeeds([]);
      setBProblem("");
      setBDay("");
      setBTime("");
      setBConsent(false);
    } else {
      setPOrg("");
      setPName("");
      setPPhone("");
      setPEmail("");
      setPDistrict("");
      setPWeb("");
      setPServices([]);
      setPDescription("");
      setPParticipation([]);
      setPConsent(false);
    }
  };

  const toggleArrayItem = (list: string[], item: string, setter: (val: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter((x) => x !== item));
    } else {
      setter([...list, item]);
    }
  };

  return (
    <div className="w-full bg-white text-[#1F2430] antialiased">
      {/* Pavilion Secondary Sticky Sub-Navbar */}
      <nav className="sticky top-20 z-40 bg-[#1B3570] text-white shadow-md border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link
              href="#top"
              className="text-white hover:text-amber-300 font-bold text-sm sm:text-base tracking-wide flex items-center gap-1.5 transition-colors"
            >
              <span className="text-amber-400">BIRATBAZAAR</span>
              <span className="font-semibold text-slate-200 hidden sm:inline">BDS Connect Pavilion</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
              <a href="#how" className="text-blue-100 hover:text-white transition-colors">
                How it works
              </a>
              <a href="#desks" className="text-blue-100 hover:text-white transition-colors">
                The desks
              </a>
              <a href="#who" className="text-blue-100 hover:text-white transition-colors">
                Who should come
              </a>
              <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                Contact
              </a>
              <a
                href="#register"
                className="bg-[#E19F1F] hover:bg-[#d49215] text-[#1B1B1B] font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-sm transition-all duration-150 transform hover:scale-105"
              >
                Register
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="#register"
                className="bg-[#E19F1F] text-[#1B1B1B] font-bold px-3 py-1 rounded-full text-xs shadow-sm"
              >
                Register
              </a>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="p-1.5 rounded-md text-blue-100 hover:text-white hover:bg-blue-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileNavOpen && (
          <div className="md:hidden bg-[#162a59] border-t border-blue-800/80 px-4 pt-2 pb-4 space-y-2 text-sm">
            <a
              href="#how"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2 text-blue-100 hover:text-white border-b border-blue-800/40"
            >
              How it works
            </a>
            <a
              href="#desks"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2 text-blue-100 hover:text-white border-b border-blue-800/40"
            >
              The desks
            </a>
            <a
              href="#who"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2 text-blue-100 hover:text-white border-b border-blue-800/40"
            >
              Who should come
            </a>
            <a
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2 text-blue-100 hover:text-white border-b border-blue-800/40"
            >
              Contact
            </a>
            <a
              href="#register"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2 text-amber-300 font-bold"
            >
              Register Now →
            </a>
          </div>
        )}
      </nav>

      <main id="top">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1E9C9A] via-[#2367A6] to-[#274EA3] text-white py-14 sm:py-20 lg:py-24">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading, Details, CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-200">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Birat Expo 2026 · Chamber of Industries Morang
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black tracking-tight leading-tight font-serif">
                    BIRATBAZAAR BDS Connect Pavilion
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold text-blue-100 tracking-wide">
                    Business · Service · Solution · Growth
                  </p>
                </div>

                <div className="w-20 h-1 bg-[#E19F1F] rounded-full" />

                <p className="text-base sm:text-lg text-slate-100 max-w-2xl leading-relaxed font-normal">
                  One visit. A free health check-up for your business, a clear picture of where it stands, and the
                  right expert for every problem, all under one roof.
                </p>

                {/* Status & Event Pills */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <div className="inline-flex items-center gap-2 bg-[#E19F1F] text-[#1B1B1B] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#1B1B1B] animate-pulse" />
                    <span>{statusText}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white">
                    <Calendar className="w-3.5 h-3.5 text-blue-200" />
                    <span>17–26 December 2026 · 2–11 Poush 2083</span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white">
                    <MapPin className="w-3.5 h-3.5 text-blue-200" />
                    <span>Biratnagar, Koshi Province</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#register"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-[#1B1B1B] bg-[#E19F1F] hover:bg-[#d49215] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Register your business
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#how"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200"
                  >
                    How it works
                  </a>
                </div>
              </div>

              {/* Right Column: 3D Render Image Card */}
              <div className="lg:col-span-5">
                <figure className="relative group">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white/90 shadow-2xl bg-slate-900">
                    <Image
                      src="/bds-pavilion-render.jpg"
                      alt="BIRATBAZAAR BDS Connect Pavilion 3D Layout Concept"
                      width={1400}
                      height={781}
                      className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <figcaption className="mt-3 text-xs sm:text-sm text-blue-100/90 text-center flex items-center justify-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-300" />
                    Concept render of the pavilion. Final desk positions may differ.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how" className="py-16 sm:py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#1B3570] tracking-tight">
                How it works
              </h2>
              <div className="flex-1 h-0.5 bg-[#E19F1F] max-w-xs rounded-full" />
            </div>

            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mb-12 font-normal leading-relaxed">
              Most business owners know something is wrong but not where to start. So every visit starts with a
              diagnosis. You find out where your business stands, then we send you to exactly the desks that can help.
            </p>

            {/* 5-Step Journey Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#274EA3] text-white font-bold font-serif flex items-center justify-center mb-4 text-base shadow-sm">
                    1
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-serif">
                    Walk in and register
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Register at the entry, or online in advance on this page, so your details are ready when you
                    arrive.
                  </p>
                </div>
              </div>

              {/* Step 2 (KEY / START HERE) */}
              <div className="bg-[#FCEDEA]/50 rounded-xl p-5 border-2 border-[#C2412D] shadow-md hover:shadow-lg transition-shadow relative flex flex-col justify-between">
                <span className="absolute top-4 right-4 bg-[#C2412D] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider">
                  Start here
                </span>
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#C2412D] text-white font-bold font-serif flex items-center justify-center mb-4 text-base shadow-sm">
                    2
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#942717] mb-2 font-serif">
                    Business Clinic
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    A Business Health Check-up diagnoses your business, and a counsellor sits with you to talk it
                    through.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#274EA3] text-white font-bold font-serif flex items-center justify-center mb-4 text-base shadow-sm">
                    3
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-serif">
                    Get your report
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    You receive a health check-up report that pinpoints your business&apos;s main problems and gaps.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#274EA3] text-white font-bold font-serif flex items-center justify-center mb-4 text-base shadow-sm">
                    4
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-serif">
                    Go to the right desks
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The counsellor tells you which desks to visit: marketing, trademark, legal, Q-HSEF, HR and more.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#274EA3] text-white font-bold font-serif flex items-center justify-center mb-4 text-base shadow-sm">
                    5
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-serif">
                    Meet the experts
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Talk to service providers on the spot, book a service, and stay connected with CIM after the Expo.
                  </p>
                </div>
              </div>
            </div>

            {/* Free Counselling Note */}
            <div className="mt-8 flex items-start gap-3 bg-[#FFF3DC] border-l-4 border-[#E19F1F] p-4 sm:p-5 rounded-r-xl text-slate-800 text-sm sm:text-base leading-relaxed">
              <Info className="w-5 h-5 text-[#b57a0e] flex-shrink-0 mt-0.5" />
              <div>
                The check-up and the counselling at the Business Clinic are <strong className="font-bold">free</strong>.
                Services you choose to take from a provider afterwards are agreed directly between you and that provider.
              </div>
            </div>
          </div>
        </section>

        {/* THE DESKS SECTION */}
        <section id="desks" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#1B3570] tracking-tight">
                The desks
              </h2>
              <div className="flex-1 h-0.5 bg-[#E19F1F] max-w-xs rounded-full" />
            </div>

            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mb-10 font-normal leading-relaxed">
              The pavilion is round. The BiratBazaar hub stands at the centre, and the service desks sit around it.
              Here is what you can do at each one.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* DESK: CIM BUSINESS CLINIC (Spans full width / 3 cols) */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#FCEDEA]/50 border-2 border-[#C2412D] rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3.5 mb-5">
                  <span className="w-10 h-10 rounded-full bg-[#C2412D] text-white font-serif font-bold text-lg flex items-center justify-center shadow-sm">
                    4
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#8f2314] leading-tight">
                      CIM Business Clinic
                    </h3>
                    <span className="text-xs font-bold tracking-wider text-[#C2412D] uppercase">
                      START HERE · FREE
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-1.5 bg-white/70 p-4 rounded-xl border border-red-100">
                    <h4 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C2412D]" />
                      Business Health Check-up
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Answer a short set of questions about your sales, finance, operations, people and compliance. A
                      report is generated that shows how healthy your business is and where it is weak.
                    </p>
                  </div>

                  <div className="space-y-1.5 bg-white/70 p-4 rounded-xl border border-red-100">
                    <h4 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C2412D]" />
                      Counselling and referral
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      A counsellor goes through the report with you, identifies your main pain points, and tells you
                      which desks in the pavilion to visit next.
                    </p>
                  </div>

                  <div className="space-y-1.5 bg-white/70 p-4 rounded-xl border border-red-100">
                    <h4 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C2412D]" />
                      Laws and problem registration
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Look up the laws and rules that apply to your business, and register any problem your business
                      faces so CIM can work on a solution.
                    </p>
                  </div>
                </div>
              </div>

              {/* DESK: BIRATBAZAAR HUB (Spans full width / 3 cols) */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white border-2 border-blue-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3.5 mb-5">
                  <span className="w-10 h-10 rounded-full bg-[#274EA3] text-white font-serif font-bold text-lg flex items-center justify-center shadow-sm">
                    C
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1B3570] leading-tight">
                      BiratBazaar Hub
                    </h3>
                    <span className="text-xs font-bold tracking-wider text-[#274EA3] uppercase">
                      CENTRE OF THE PAVILION
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-1.5 bg-blue-50/40 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#274EA3]" />
                      BiratBazaar
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      List your products on BiratBazaar, Nepal&apos;s first B2B marketplace, and meet verified buyers and
                      sellers.
                    </p>
                  </div>

                  <div className="space-y-1.5 bg-blue-50/40 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#274EA3]" />
                      Job Bridge
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Post your vacancies and find skilled workers, or register your profile if you are looking for a job.
                    </p>
                  </div>

                  <div className="space-y-1.5 bg-blue-50/40 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-slate-900 text-base font-serif flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#274EA3]" />
                      Mero Desh Mero Utpadan
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Ask to use the prestigious national campaign logo on your product as a proud shared Nepali brand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Desk 1: Branding & Social Media */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#C8742B] text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                      1
                    </span>
                    <h3 className="font-bold font-serif text-slate-900 text-lg">Branding &amp; Social Media</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Get advice on your logo and brand identity</li>
                    <li>Learn to promote your business on social media</li>
                    <li>Get a quick review of how your brand looks today</li>
                  </ul>
                </div>
              </div>

              {/* Desk 2: Marketing */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#B5651D] text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                      2
                    </span>
                    <h3 className="font-bold font-serif text-slate-900 text-lg">Marketing</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Talk through how to find and reach more customers</li>
                    <li>Get help with pricing, packaging and product presentation</li>
                    <li>Find direct routes to high-value new markets</li>
                  </ul>
                </div>
              </div>

              {/* Desk 3: Legal & Trademark Registration */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#D9561F] text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                      3
                    </span>
                    <h3 className="font-bold font-serif text-slate-900 text-lg">Legal &amp; Trademark</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Learn what a trademark is and why it protects you</li>
                    <li>Get help filling the trademark form, online or on paper</li>
                    <li>Ask about company registration, contracts and compliance</li>
                  </ul>
                </div>
              </div>

              {/* Desk 5: Q-HSEF */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-full bg-[#7A2A2A] text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                      5
                    </span>
                    <div>
                      <h3 className="font-bold font-serif text-slate-900 text-lg leading-tight">Q-HSEF</h3>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        QUALITY STANDARDISATION &amp; CERTIFICATION
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside mb-3">
                    <li>Check your business against quality, health, safety and environment standards</li>
                    <li>Get a concrete action plan to close operational gaps</li>
                  </ul>
                  <div className="bg-teal-50/60 border border-teal-100 rounded-lg p-2.5 text-xs text-slate-700 leading-snug">
                    <strong className="text-teal-900">Q-HSEF is CIM&apos;s own standardisation tool.</strong> Built for local
                    SMEs where full ISO certification is costly, serving as a direct stepping stone to ISO.
                  </div>
                </div>
              </div>

              {/* Desk 6: HR Solutions */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#4E7A2C] text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                      6
                    </span>
                    <h3 className="font-bold font-serif text-slate-900 text-lg">HR Solutions</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Set up simple HR systems, employment contracts and records</li>
                    <li>Understand what Nepal&apos;s Labour Act requires of you</li>
                    <li>Get support with professional recruitment and staffing</li>
                  </ul>
                </div>
              </div>

              {/* Desk 7: Transport & Logistics */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#2F6F8F] text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                      7
                    </span>
                    <h3 className="font-bold font-serif text-slate-900 text-lg">Transport &amp; Logistics</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Find delivery and cold-chain transport options for your goods</li>
                    <li>Talk to national logistics providers about wholesale cost and regional reach</li>
                  </ul>
                </div>
              </div>

              {/* Desk 8: Public Support Services */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#5B5B7A] text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                      8
                    </span>
                    <h3 className="font-bold font-serif text-slate-900 text-lg">Public Support Services</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Get direct information from public offices on registration, food testing &amp; lab analysis</li>
                    <li>Learn about provincial &amp; national government subsidy programmes for SMEs</li>
                  </ul>
                </div>
              </div>

              {/* Desk 9: BDS Providers */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#463565] text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                      9
                    </span>
                    <h3 className="font-bold font-serif text-slate-900 text-lg">BDS Providers</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Meet specialized consultants: accountants, tax auditors, corporate lawyers</li>
                    <li>Consult with certified environmental (IEE/EIA) and energy audit specialists</li>
                    <li>New vetted providers join daily throughout the Expo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO SHOULD COME SECTION */}
        <section id="who" className="py-16 sm:py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#1B3570] tracking-tight">
                Who should come
              </h2>
              <div className="flex-1 h-0.5 bg-[#E19F1F] max-w-xs rounded-full" />
            </div>

            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mb-10 font-normal leading-relaxed">
              Whether you have been running a factory for thirty years or have just launched a cottage craft brand, the
              pavilion is tailored for your practical growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-900 mb-2">
                  Small &amp; growing businesses
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Owners and managers of SMEs and local industries across Koshi Province who want to scale their turnover.
                </p>
              </div>

              {/* Card 2: Women Entrepreneurs (Priority Highlight) */}
              <div className="bg-pink-50/30 border-2 border-[#A8336B] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
                <span className="absolute top-5 right-5 bg-[#A8336B] text-white text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Priority
                </span>
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#A8336B] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-900 mb-2">
                  Women entrepreneurs
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Priority slots at the Business Clinic, seasoned women mentors, and hands-on help to formalise, package,
                  and brand home-based businesses.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-900 mb-2">
                  Young entrepreneurs &amp; startups
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Early-stage founders who need to register, brand, trademark, or structure their product for market
                  acceptance.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-900 mb-2">
                  Service providers
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Consultants, designers, corporate lawyers, tax auditors and other BDS providers who want to join the
                  CIM ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTER SECTION */}
        <section id="register" ref={registerRef} className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-[#274EA3] text-xs font-bold uppercase tracking-widest mb-3">
                Expo Pre-Registration
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1B3570] tracking-tight">
                Register
              </h2>
              <div className="w-16 h-1 bg-[#E19F1F] mx-auto my-3 rounded-full" />
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
                Register now and we will have your details ready at the Business Clinic. You can book a Business Health
                Check-up, join the BDS service network, or both.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xl p-6 sm:p-10">
              {/* SUCCESS / DONE VIEW */}
              {submittedRef ? (
                <div ref={doneRef} className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                    Thank you, you&apos;re registered!
                  </h3>
                  <p className="text-slate-600 text-base max-w-lg mx-auto">
                    {track === "provider"
                      ? "Thank you. CIM will contact you about joining the BDS network. Please keep your reference number:"
                      : "Our team will call you to confirm your Business Clinic visit. Please keep your reference number:"}
                  </p>

                  <div className="inline-block font-mono text-xl sm:text-2xl font-bold bg-slate-50 border-2 border-dashed border-[#274EA3] px-6 py-3 rounded-xl text-[#274EA3] tracking-widest shadow-sm">
                    {submittedRef}
                  </div>

                  {submittedNote && (
                    <p className="text-sm text-slate-500 italic max-w-md mx-auto">{submittedNote}</p>
                  )}

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#274EA3] hover:bg-[#1f3f87] text-white font-bold text-sm shadow transition-all"
                    >
                      Register another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Track Tabs */}
                  <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-200 pb-4" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={track === "business"}
                      onClick={() => {
                        setTrack("business");
                        setErrors({});
                      }}
                      className={`px-5 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-150 flex items-center gap-2 ${
                        track === "business"
                          ? "bg-[#274EA3] text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      I run a business
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={track === "provider"}
                      onClick={() => {
                        setTrack("provider");
                        setErrors({});
                      }}
                      className={`px-5 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-150 flex items-center gap-2 ${
                        track === "provider"
                          ? "bg-[#274EA3] text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      I am a service provider
                    </button>
                  </div>

                  {/* FORM 1: BUSINESS REGISTRATION */}
                  {track === "business" && (
                    <form onSubmit={handleBusinessSubmit} noValidate className="space-y-8">
                      {/* What would you like to do? */}
                      <fieldset className="space-y-3">
                        <legend className="text-lg font-bold font-serif text-[#1B3570] mb-2 flex items-center gap-2">
                          1. What would you like to do?
                        </legend>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            {
                              val: "Business Health Check-up",
                              title: "Business Health Check-up",
                              desc: "A free diagnosis and report on your business.",
                            },
                            {
                              val: "Business Clinic counselling",
                              title: "Business Clinic counselling",
                              desc: "Sit with a counsellor to identify your problems.",
                            },
                            {
                              val: "Join BDS service network",
                              title: "Join the BDS network",
                              desc: "Get connected to service providers who fit your needs.",
                            },
                          ].map((item) => {
                            const checked = bWants.includes(item.val);
                            return (
                              <label
                                key={item.val}
                                className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                                  checked
                                    ? "border-[#274EA3] bg-blue-50/50 shadow-sm"
                                    : "border-slate-200 bg-white hover:bg-slate-50"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleArrayItem(bWants, item.val, setBWants)}
                                  className="mt-1 w-4 h-4 text-[#274EA3] rounded border-slate-300 focus:ring-[#274EA3]"
                                />
                                <div>
                                  <span className="block font-bold text-sm text-slate-900 leading-snug">
                                    {item.title}
                                  </span>
                                  <span className="block text-xs text-slate-500 mt-1">{item.desc}</span>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                        {errors.wants && (
                          <p className="text-red-600 text-xs field-error flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.wants}
                          </p>
                        )}
                      </fieldset>

                      {/* About you */}
                      <fieldset className="space-y-4">
                        <legend className="text-lg font-bold font-serif text-[#1B3570] mb-1">2. About you</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Full name <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              value={bName}
                              onChange={(e) => {
                                setBName(e.target.value);
                                if (errors.name) setErrors({ ...errors, name: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.name ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                              placeholder="e.g. Ramesh Karki"
                            />
                            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Mobile number <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="tel"
                              value={bPhone}
                              onChange={(e) => {
                                setBPhone(e.target.value);
                                if (errors.phone) setErrors({ ...errors, phone: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.phone ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                              placeholder="98XXXXXXXX"
                            />
                            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Email <span className="text-xs text-slate-400 font-normal">(optional)</span>
                            </label>
                            <input
                              type="email"
                              value={bEmail}
                              onChange={(e) => {
                                setBEmail(e.target.value);
                                if (errors.email) setErrors({ ...errors, email: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.email ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                              placeholder="you@example.com"
                            />
                            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Gender</label>
                            <select
                              value={bGender}
                              onChange={(e) => setBGender(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F]"
                            >
                              <option value="">Choose…</option>
                              <option value="Woman">Woman</option>
                              <option value="Man">Man</option>
                              <option value="Other">Other</option>
                              <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>

                      {/* About your business */}
                      <fieldset className="space-y-4">
                        <legend className="text-lg font-bold font-serif text-[#1B3570] mb-1">
                          3. About your business
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Business name <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              value={bBusiness}
                              onChange={(e) => {
                                setBBusiness(e.target.value);
                                if (errors.business) setErrors({ ...errors, business: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.business ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                              placeholder="e.g. Koshi Agro Products"
                            />
                            {errors.business && <p className="text-red-600 text-xs mt-1">{errors.business}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              District <span className="text-red-600">*</span>
                            </label>
                            <select
                              value={bDistrict}
                              onChange={(e) => {
                                setBDistrict(e.target.value);
                                if (errors.district) setErrors({ ...errors, district: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.district ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                            >
                              <option value="">Choose district…</option>
                              {DISTRICTS.map((d) => (
                                <option key={d} value={d}>
                                  {d}
                                </option>
                              ))}
                            </select>
                            {errors.district && <p className="text-red-600 text-xs mt-1">{errors.district}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Sector <span className="text-red-600">*</span>
                            </label>
                            <select
                              value={bSector}
                              onChange={(e) => {
                                setBSector(e.target.value);
                                if (errors.sector) setErrors({ ...errors, sector: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.sector ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                            >
                              <option value="">Choose sector…</option>
                              {SECTORS.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                            {errors.sector && <p className="text-red-600 text-xs mt-1">{errors.sector}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Is the business registered? <span className="text-red-600">*</span>
                            </label>
                            <select
                              value={bRegistered}
                              onChange={(e) => {
                                setBRegistered(e.target.value);
                                if (errors.registered) setErrors({ ...errors, registered: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.registered ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                            >
                              <option value="">Choose…</option>
                              <option value="Yes">Yes</option>
                              <option value="In process">In process</option>
                              <option value="Not yet">Not yet</option>
                            </select>
                            {errors.registered && <p className="text-red-600 text-xs mt-1">{errors.registered}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Years in operation
                            </label>
                            <select
                              value={bYears}
                              onChange={(e) => setBYears(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F]"
                            >
                              <option value="">Choose…</option>
                              <option value="Less than 1 year">Less than 1 year</option>
                              <option value="1–3 years">1–3 years</option>
                              <option value="3–5 years">3–5 years</option>
                              <option value="More than 5 years">More than 5 years</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Number of staff</label>
                            <select
                              value={bStaff}
                              onChange={(e) => setBStaff(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F]"
                            >
                              <option value="">Choose…</option>
                              <option value="Just me">Just me</option>
                              <option value="2–5">2–5</option>
                              <option value="6–20">6–20</option>
                              <option value="21–50">21–50</option>
                              <option value="More than 50">More than 50</option>
                            </select>
                          </div>
                        </div>

                        {/* Diversity checkboxes */}
                        <div className="pt-2">
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Is the business led by…
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={bLedBy.includes("Woman-led")}
                                onChange={() => toggleArrayItem(bLedBy, "Woman-led", setBLedBy)}
                                className="w-4 h-4 text-[#274EA3] rounded border-slate-300 focus:ring-[#274EA3]"
                              />
                              A woman (women-owned or women-managed)
                            </label>
                            <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={bLedBy.includes("Youth-led")}
                                onChange={() => toggleArrayItem(bLedBy, "Youth-led", setBLedBy)}
                                className="w-4 h-4 text-[#274EA3] rounded border-slate-300 focus:ring-[#274EA3]"
                              />
                              A young person (under 40)
                            </label>
                          </div>
                        </div>
                      </fieldset>

                      {/* Where do you need help? */}
                      <fieldset className="space-y-4">
                        <legend className="text-lg font-bold font-serif text-[#1B3570] mb-0">
                          4. Where do you need help?
                        </legend>
                        <p className="text-xs text-slate-500">
                          Tick any that apply. Not sure? Leave it blank; the Business Clinic will work it out with you.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {BUSINESS_NEEDS.map((item) => (
                            <label
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-slate-700 cursor-pointer bg-slate-50/60 p-2.5 rounded-lg border border-slate-200/70 hover:bg-blue-50/30"
                            >
                              <input
                                type="checkbox"
                                checked={bNeeds.includes(item)}
                                onChange={() => toggleArrayItem(bNeeds, item, setBNeeds)}
                                className="mt-0.5 w-4 h-4 text-[#274EA3] rounded border-slate-300 focus:ring-[#274EA3]"
                              />
                              <span>{item}</span>
                            </label>
                          ))}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1">
                            What is the biggest problem your business faces right now?
                          </label>
                          <textarea
                            rows={3}
                            value={bProblem}
                            onChange={(e) => setBProblem(e.target.value)}
                            maxLength={800}
                            placeholder="Optional, in English or Nepali..."
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F]"
                          />
                          <span className="text-xs text-slate-400">Optional · Max 800 characters</span>
                        </div>
                      </fieldset>

                      {/* Your visit */}
                      <fieldset className="space-y-4">
                        <legend className="text-lg font-bold font-serif text-[#1B3570] mb-1">5. Your visit</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Which day will you visit?
                            </label>
                            <select
                              value={bDay}
                              onChange={(e) => setBDay(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F]"
                            >
                              <option value="">Not decided</option>
                              {expoDayOptions.map((opt) => (
                                <option key={opt.val} value={opt.val}>
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Preferred time</label>
                            <select
                              value={bTime}
                              onChange={(e) => setBTime(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F]"
                            >
                              <option value="">Any time</option>
                              <option value="Morning">Morning (10 am – 1 pm)</option>
                              <option value="Afternoon">Afternoon (1 pm – 4 pm)</option>
                              <option value="Evening">Evening (4 pm – 7 pm)</option>
                            </select>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 italic">
                          Can&apos;t come to the Expo? Register anyway. We can arrange a check-up after the Expo.
                        </p>
                      </fieldset>

                      {/* Honeypot Spam trap */}
                      <div className="hidden" aria-hidden="true">
                        <label>
                          Leave empty
                          <input
                            type="text"
                            value={bHoneypot}
                            onChange={(e) => setBHoneypot(e.target.value)}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </label>
                      </div>

                      {/* Consent */}
                      <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={bConsent}
                            onChange={(e) => {
                              setBConsent(e.target.checked);
                              if (errors.consent) setErrors({ ...errors, consent: "" });
                            }}
                            className={`mt-1 w-4 h-4 text-[#274EA3] rounded border-slate-300 focus:ring-[#274EA3] ${
                              errors.consent ? "border-red-500" : ""
                            }`}
                          />
                          <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            I agree that CIM may store these details and contact me about the Business Clinic and the
                            BDS network. CIM may share my contact details with a service provider only when I ask for
                            that service. <span className="text-red-600">*</span>
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="text-red-600 text-xs field-error flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.consent}
                          </p>
                        )}
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#274EA3] hover:bg-[#1e3c7d] text-white font-bold text-base shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? "Submitting…" : "Register your business"}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* FORM 2: PROVIDER REGISTRATION */}
                  {track === "provider" && (
                    <form onSubmit={handleProviderSubmit} noValidate className="space-y-8">
                      {/* About your organisation */}
                      <fieldset className="space-y-4">
                        <legend className="text-lg font-bold font-serif text-[#1B3570] mb-1">
                          1. About your organisation
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Organisation or business name <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              value={pOrg}
                              onChange={(e) => {
                                setPOrg(e.target.value);
                                if (errors.org) setErrors({ ...errors, org: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.org ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                              placeholder="e.g. Apex Legal & Consulting"
                            />
                            {errors.org && <p className="text-red-600 text-xs mt-1">{errors.org}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Contact person <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="text"
                              value={pName}
                              onChange={(e) => {
                                setPName(e.target.value);
                                if (errors.name) setErrors({ ...errors, name: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.name ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                              placeholder="Full name"
                            />
                            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Mobile number <span className="text-red-600">*</span>
                            </label>
                            <input
                              type="tel"
                              value={pPhone}
                              onChange={(e) => {
                                setPPhone(e.target.value);
                                if (errors.phone) setErrors({ ...errors, phone: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.phone ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                              placeholder="98XXXXXXXX"
                            />
                            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Email <span className="text-xs text-slate-400 font-normal">(optional)</span>
                            </label>
                            <input
                              type="email"
                              value={pEmail}
                              onChange={(e) => {
                                setPEmail(e.target.value);
                                if (errors.email) setErrors({ ...errors, email: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.email ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                              placeholder="contact@consulting.np"
                            />
                            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Based in <span className="text-red-600">*</span>
                            </label>
                            <select
                              value={pDistrict}
                              onChange={(e) => {
                                setPDistrict(e.target.value);
                                if (errors.district) setErrors({ ...errors, district: "" });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F] ${
                                errors.district ? "border-red-500 bg-red-50/20 field-error" : "border-slate-300 bg-white"
                              }`}
                            >
                              <option value="">Choose district…</option>
                              {DISTRICTS.map((d) => (
                                <option key={d} value={d}>
                                  {d}
                                </option>
                              ))}
                            </select>
                            {errors.district && <p className="text-red-600 text-xs mt-1">{errors.district}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                              Website or Facebook page
                            </label>
                            <input
                              type="text"
                              value={pWeb}
                              onChange={(e) => setPWeb(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F]"
                              placeholder="https://..."
                            />
                          </div>
                        </div>
                      </fieldset>

                      {/* Services you offer */}
                      <fieldset className="space-y-4">
                        <legend className="text-lg font-bold font-serif text-[#1B3570] mb-1">
                          2. Services you offer <span className="text-red-600">*</span>
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {PROVIDER_SERVICES.map((s) => (
                            <label
                              key={s}
                              className="flex items-start gap-2.5 text-sm text-slate-700 cursor-pointer bg-slate-50/60 p-2.5 rounded-lg border border-slate-200/70 hover:bg-blue-50/30"
                            >
                              <input
                                type="checkbox"
                                checked={pServices.includes(s)}
                                onChange={() => {
                                  toggleArrayItem(pServices, s, setPServices);
                                  if (errors.services) setErrors({ ...errors, services: "" });
                                }}
                                className="mt-0.5 w-4 h-4 text-[#274EA3] rounded border-slate-300 focus:ring-[#274EA3]"
                              />
                              <span>{s}</span>
                            </label>
                          ))}
                        </div>
                        {errors.services && (
                          <p className="text-red-600 text-xs field-error flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.services}
                          </p>
                        )}

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1">
                            Describe your service in a few lines
                          </label>
                          <textarea
                            rows={3}
                            value={pDescription}
                            onChange={(e) => setPDescription(e.target.value)}
                            maxLength={800}
                            placeholder="Tell businesses what specific solutions you provide..."
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E19F1F]"
                          />
                        </div>
                      </fieldset>

                      {/* How would you like to take part? */}
                      <fieldset className="space-y-3">
                        <legend className="text-lg font-bold font-serif text-[#1B3570] mb-1">
                          3. How would you like to take part?
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {PROVIDER_PARTICIPATION.map((item) => (
                            <label
                              key={item}
                              className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer bg-slate-50/60 p-2.5 rounded-lg border border-slate-200/70 hover:bg-blue-50/30"
                            >
                              <input
                                type="checkbox"
                                checked={pParticipation.includes(item)}
                                onChange={() => toggleArrayItem(pParticipation, item, setPParticipation)}
                                className="w-4 h-4 text-[#274EA3] rounded border-slate-300 focus:ring-[#274EA3]"
                              />
                              <span>{item}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      {/* Honeypot */}
                      <div className="hidden" aria-hidden="true">
                        <label>
                          Leave empty
                          <input
                            type="text"
                            value={pHoneypot}
                            onChange={(e) => setPHoneypot(e.target.value)}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </label>
                      </div>

                      {/* Consent */}
                      <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={pConsent}
                            onChange={(e) => {
                              setPConsent(e.target.checked);
                              if (errors.consent) setErrors({ ...errors, consent: "" });
                            }}
                            className={`mt-1 w-4 h-4 text-[#274EA3] rounded border-slate-300 focus:ring-[#274EA3] ${
                              errors.consent ? "border-red-500" : ""
                            }`}
                          />
                          <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            I agree that CIM may store these details, contact me about the BDS network, and list my
                            organisation in the BDS directory if selected. <span className="text-red-600">*</span>
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="text-red-600 text-xs field-error flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.consent}
                          </p>
                        )}
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#274EA3] hover:bg-[#1e3c7d] text-white font-bold text-base shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? "Submitting…" : "Register as a provider"}
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#1B3570] tracking-tight">
                Contact
              </h2>
              <div className="flex-1 h-0.5 bg-[#E19F1F] max-w-xs rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Card 1: Program Manager (Navy Background) */}
              <div className="lg:col-span-7 bg-[#1B3570] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 uppercase tracking-wider mb-4">
                    Pavilion Lead
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-2">
                    Dikshya, Program Manager
                  </h3>
                  <p className="text-blue-100 text-base leading-relaxed mb-6 font-normal">
                    Entrepreneurship Academy &amp; Innovation Unit
                    <br />
                    Chamber of Industries Morang (CIM), Biratnagar
                  </p>

                  <div className="flex items-center gap-3 text-3xl sm:text-4xl font-mono font-black text-white tracking-wider my-4">
                    <Phone className="w-7 h-7 text-[#E19F1F]" />
                    <a href="tel:9869812058" className="hover:text-amber-300 transition-colors">
                      9869812058
                    </a>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-2 bg-[#E19F1F] hover:bg-[#d49215] text-[#1B1B1B] font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md transform hover:scale-105"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-900" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied to clipboard!" : "Copy number"}</span>
                  </button>
                  <a
                    href="tel:9869812058"
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4" />
                    Call now
                  </a>
                </div>
              </div>

              {/* Card 2: Find Us */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#274EA3] flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-3">Find us</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-4">
                    <strong className="text-slate-900 font-semibold">
                      BIRATBAZAAR BDS Connect Pavilion
                    </strong>
                    <br />
                    Birat Expo 2026, Main Exhibition Grounds, Biratnagar.
                  </p>
                  <div className="space-y-1.5 text-sm text-slate-500">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      17–26 December 2026 · 2–11 Poush 2083
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      10:00 AM – 7:00 PM Daily
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <a
                    href="https://cim.org.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#274EA3] hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Visit CIM Official Website (cim.org.np)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER BAR */}
      <footer className="bg-[#1B3570] text-blue-200 text-xs sm:text-sm py-6 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <span>© 2026 Chamber of Industries Morang · Biratnagar Incubation Center</span>
          <span className="font-medium text-white">BIRATBAZAAR BDS Connect Pavilion · Birat Expo 2026</span>
        </div>
      </footer>
    </div>
  );
}

