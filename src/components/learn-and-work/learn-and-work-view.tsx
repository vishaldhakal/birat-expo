"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  HeartPulse,
  Cpu,
  Laptop,
  Sparkles,
  Sprout,
  Scissors,
  Coffee,
  ShieldCheck,
  Building2,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  Copy,
  Check,
  ChevronDown,
  ArrowRight,
  Info,
  MapPin,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  Award,
  Layers,
  Sparkle,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export interface ZoneData {
  id: number;
  title: string;
  skills: string;
  handsOn: string;
  color: string;
  icon: React.ReactNode;
  hotspots?: Array<{ left: number; top: number; width: number; height: number }>;
}

export const ZONES: ZoneData[] = [
  {
    id: 1,
    title: "Career Planning",
    skills: "Career counselling, aptitude and interest assessment",
    handsOn: "Online test, personal career report, one-to-one counselling desk.",
    color: "#3d5a9a",
    icon: <Compass className="w-5 h-5" />,
    hotspots: [
      { left: 4, top: 27, width: 18, height: 12 },
      { left: 19, top: 37, width: 16, height: 10 },
    ],
  },
  {
    id: 2,
    title: "CIM Member Space",
    skills: "Showcase of products, Mero Desh Mero Utpadan, career opportunities",
    handsOn: "Member industries show their products and talk about the careers they offer.",
    color: "#3b6a96",
    icon: <Building2 className="w-5 h-5" />,
    hotspots: [
      { left: 12, top: 14, width: 20, height: 12 },
      { left: 27, top: 20, width: 15, height: 15 },
    ],
  },
  {
    id: 3,
    title: "Health & Emergency Care",
    skills: "First aid, CPR, choking response",
    handsOn: "Mannequin-based CPR and first aid practice in short, repeating sessions.",
    color: "#d3202e",
    icon: <HeartPulse className="w-5 h-5" />,
    hotspots: [
      { left: 38, top: 1, width: 17, height: 10 },
      { left: 38, top: 11, width: 15, height: 18 },
    ],
  },
  {
    id: 4,
    title: "Industry & Automation",
    skills: "CNC, injection moulding, PLC",
    handsOn: "Working PLC trainer, small CNC or moulding demonstration, robotic arm display.",
    color: "#5b3fa8",
    icon: <Cpu className="w-5 h-5" />,
    hotspots: [
      { left: 55, top: 1, width: 14, height: 10 },
      { left: 54, top: 12, width: 13, height: 20 },
    ],
  },
  {
    id: 5,
    title: "ICT & Smart Technology",
    skills: "IoT, electronics, smart systems",
    handsOn: "Build a simple sensor circuit, smart-home demonstration.",
    color: "#1e8294",
    icon: <Laptop className="w-5 h-5" />,
    hotspots: [{ left: 69, top: 6, width: 18, height: 15 }],
  },
  {
    id: 6,
    title: "Beauty & Wellness",
    skills: "Makeup, nail art, personal care",
    handsOn: "Live makeup and nail art stations with trainees, short taster sessions.",
    color: "#c2187f",
    icon: <Sparkles className="w-5 h-5" />,
    hotspots: [
      { left: 80, top: 26, width: 16, height: 12 },
      { left: 64, top: 23, width: 16, height: 21 },
    ],
  },
  {
    id: 7,
    title: "Agriculture & Urban Farming",
    skills: "Hydroponics, kausi kheti (rooftop farming), nursery",
    handsOn: "Working hydroponic and vertical rack display, kausi kheti set-up, seedling and nursery demonstration.",
    color: "#2f7d3a",
    icon: <Sprout className="w-5 h-5" />,
    hotspots: [
      { left: 84, top: 58, width: 13, height: 16 },
      { left: 62, top: 52, width: 20, height: 17 },
    ],
  },
  {
    id: 8,
    title: "Fashion & Textile",
    skills: "Fashion design, tailoring, garment making",
    handsOn: "Sewing machines in operation, pattern and design display, garment showcase.",
    color: "#d4560f",
    icon: <Scissors className="w-5 h-5" />,
    hotspots: [
      { left: 77, top: 76, width: 14, height: 13 },
      { left: 50, top: 63, width: 24, height: 21 },
    ],
  },
  {
    id: 9,
    title: "Hospitality & Tourism",
    skills: "Hotel management, food service, housekeeping, coffee making, bakery",
    handsOn: "Table setting and service demonstration, bed-making challenge, live barista coffee making, bakery and pastry demonstration.",
    color: "#5b2d9c",
    icon: <Coffee className="w-5 h-5" />,
    hotspots: [
      { left: 15, top: 80, width: 18, height: 14 },
      { left: 28, top: 63, width: 21, height: 20 },
    ],
  },
  {
    id: 10,
    title: "Security & Surveillance",
    skills: "CCTV, security systems, networking",
    handsOn: "Live camera feeds, installation and cabling demonstration.",
    color: "#1f7587",
    icon: <ShieldCheck className="w-5 h-5" />,
    hotspots: [
      { left: 2, top: 59, width: 19, height: 12 },
      { left: 18, top: 48, width: 18, height: 15 },
    ],
  },
];

export const TIME_SLOTS = [
  { id: "A", time: "9:30 AM – 11:30 AM", label: "Morning Session" },
  { id: "B", time: "12:00 PM – 2:00 PM", label: "Midday Session" },
  { id: "C", time: "3:00 PM – 5:00 PM", label: "Afternoon Session" },
];

export const EXPO_DAYS = Array.from({ length: 10 }, (_, i) => ({
  index: i,
  dayNum: i + 1,
  dateNum: 17 + i,
  dateLabel: `${17 + i} Dec`,
  fullDate: `${17 + i} December 2026`,
  poush: `${2 + i} Poush 2083`,
}));

const FAQS = [
  {
    q: "Who can book a group session?",
    a: "School and college groups. Each session is strictly reserved for one group of 15 to 20 students accompanied by at least one teacher or representative.",
  },
  {
    q: "When are the sessions held?",
    a: "Every zone runs three sessions each day: 9:30–11:30 AM, 12:00–2:00 PM, and 3:00–5:00 PM on all ten days from 17 to 26 December 2026.",
  },
  {
    q: "Is there any registration fee?",
    a: "No. Participation is 100% free of charge for approved educational institutions, sponsored by the Chamber of Industries Morang (CIM) and industry partners.",
  },
  {
    q: "How do I confirm our booking?",
    a: "Choose your preferred zone, date, and session in the booking form below, enter your group details, and submit. You will receive a unique Reference Code. The CIM Skill Development Unit team will contact you to verify and confirm your slot.",
  },
  {
    q: "Can our school visit more than one zone?",
    a: "Yes. Each zone is scheduled and booked separately. A school can book different sessions across multiple zones for different groups or on different days.",
  },
  {
    q: "Who do I contact for custom assistance or large batches?",
    a: "Contact Sandeep Chaudhary, Skill Development Unit Coordinator, at 9864818969 / +977 9828015958 or via email at info.cimbrt@gmail.com / cim.biratnagar@gmail.com.",
  },
];

export default function LearnAndWorkView() {
  // Navigation active state
  const [activeSection, setActiveSection] = useState("about");

  // Countdown state
  const [countdownText, setCountdownText] = useState("Loading countdown...");

  // Booking selections
  const [selectedZoneIndex, setSelectedZoneIndex] = useState<number | null>(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  // Form fields
  const [formData, setFormData] = useState({
    school: "",
    grade: "",
    teacher: "",
    phone: "",
    email: "",
    count: "20",
    note: "",
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Submission state
  const [submittedBooking, setSubmittedBooking] = useState<{
    ref: string;
    zone: string;
    date: string;
    poush: string;
    time: string;
    school: string;
    grade: string;
    teacher: string;
    phone: string;
    email: string;
    students: string;
    note: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form reference for smooth scrolling
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
        setCountdownText(days === 1 ? "1 Day to Opening" : `${days} Days to Opening`);
      } else if (now < closeDate) {
        const currentDay = Math.floor((now - openDate) / (1000 * 60 * 60 * 24)) + 1;
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
    const sectionIds = ["about", "journey", "map", "zones", "book", "faq", "join", "contact"];
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

  // Handle selecting a zone
  const handleSelectZone = (index: number, scrollToBooking = true) => {
    setSelectedZoneIndex(index);
    if (scrollToBooking && bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate Reference Code
  const getReferenceCode = (zoneIdx: number, dayIdx: number, slotId: string) => {
    const dateNum = EXPO_DAYS[dayIdx]?.dateNum || 17;
    return `LWP-Z${zoneIdx + 1}-${dateNum}${slotId}`;
  };

  // Validate form
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
      newErrors.school = "Enter the institution or group name (min 3 characters).";
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
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (selectedZoneIndex === null || selectedDayIndex === null || !selectedSlotId) return;

    const zone = ZONES[selectedZoneIndex];
    const day = EXPO_DAYS[selectedDayIndex];
    const slot = TIME_SLOTS.find((s) => s.id === selectedSlotId);
    const refCode = getReferenceCode(selectedZoneIndex, selectedDayIndex, selectedSlotId);

    const booking = {
      ref: refCode,
      zone: zone.title,
      date: day.fullDate,
      poush: day.poush,
      time: slot?.time || "",
      school: formData.school.trim(),
      grade: formData.grade.trim(),
      teacher: formData.teacher.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      students: formData.count,
      note: formData.note.trim(),
    };

    setSubmittedBooking(booking);

    // Save to local storage for user's persistent record
    try {
      const existing = JSON.parse(localStorage.getItem("birat_lwp_bookings") || "[]");
      existing.unshift({ ...booking, submittedAt: new Date().toISOString() });
      localStorage.setItem("birat_lwp_bookings", JSON.stringify(existing.slice(0, 10)));
    } catch {}

    // Scroll to results
    setTimeout(() => {
      const resultEl = document.getElementById("booking-result");
      if (resultEl) {
        resultEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  // Generate mailto and WhatsApp strings
  const getBookingEmailLink = () => {
    if (!submittedBooking) return "#";
    const subject = encodeURIComponent(`Group Session Request - ${submittedBooking.ref}`);
    const body = encodeURIComponent(
      `Group training session request at Learn and Work Platform, Birat Expo 2026\n\n` +
        `Reference: ${submittedBooking.ref}\n` +
        `Zone: ${submittedBooking.zone}\n` +
        `Date: ${submittedBooking.date} (${submittedBooking.poush})\n` +
        `Time: ${submittedBooking.time}\n` +
        `School/Group: ${submittedBooking.school}\n` +
        `Class/Grade: ${submittedBooking.grade}\n` +
        `Teacher/Contact: ${submittedBooking.teacher}\n` +
        `Mobile: ${submittedBooking.phone}\n` +
        `Email: ${submittedBooking.email || "Not specified"}\n` +
        `Students: ${submittedBooking.students}\n` +
        `Notes: ${submittedBooking.note || "None"}\n`
    );
    return `mailto:info.cimbrt@gmail.com,cim.biratnagar@gmail.com?subject=${subject}&body=${body}`;
  };

  const getBookingWhatsAppLink = () => {
    if (!submittedBooking) return "#";
    const text = encodeURIComponent(
      `Hello Sandeep ji, I would like to confirm our group session for Learn and Work Platform (Birat Expo 2026):\n\n` +
        `📌 Reference: ${submittedBooking.ref}\n` +
        `🎯 Zone: ${submittedBooking.zone}\n` +
        `📅 Date: ${submittedBooking.date} (${submittedBooking.poush})\n` +
        `⏰ Time: ${submittedBooking.time}\n` +
        `🏫 School: ${submittedBooking.school} (${submittedBooking.grade})\n` +
        `👥 Students: ${submittedBooking.students}\n` +
        `👤 Contact: ${submittedBooking.teacher} (${submittedBooking.phone})`
    );
    return `https://wa.me/9779828015958?text=${text}`;
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
      {/* ========================================================== */}
      {/* HERO SECTION                                                */}
      {/* ========================================================== */}
      <header className="relative bg-gradient-to-br from-[#121f42] via-[#1a2f64] to-[#25468f] text-white overflow-hidden pt-12 pb-20 md:py-24 border-b border-indigo-950/40">
        {/* Subtle patterned overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient colored lighting glows */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          {/* Top Organization Badges */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
            <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl shadow-black/20 border border-white/20 transition-transform hover:scale-105">
              <Image
                src="/learn-and-work/cim-logo.png"
                alt="Chamber of Industries Morang (CIM)"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                priority
              />
            </div>
            <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl shadow-black/20 border border-white/20 transition-transform hover:scale-105">
              <Image
                src="/learn-and-work/mascot.png"
                alt="Birat Expo 2026 Mascot"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                priority
              />
            </div>
          </div>

          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
            <Sparkle className="w-4 h-4 text-amber-300" />
            Birat Expo 2026 · Organised by Chamber of Industries Morang
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] font-serif">
            Learn and Work Platform
          </h1>

          {/* Subtitle / Promise */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Discover a career, try the actual work hands-on, and leave with a clear next step
            towards further technical training, employment, or entrepreneurship.
          </p>

          {/* Live Countdown & Event Dates */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sm sm:text-base font-medium mb-10 shadow-lg">
            <span className="flex items-center gap-2 text-amber-300 font-bold">
              <Calendar className="w-4 h-4" />
              17–26 December 2026 · 2–11 Poush 2083
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="bg-amber-400 text-slate-950 font-bold text-xs uppercase px-3 py-1 rounded-full shadow-sm">
              {countdownText}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              Book a Group Session
            </a>
            <a
              href="#zones"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Layers className="w-5 h-5" />
              Explore the 10 Zones
            </a>
            <a
              href="#map"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-blue-200 hover:text-white font-medium text-base hover:underline transition-all"
            >
              Interactive Map
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 max-w-4xl mx-auto text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-serif">
                250,000+
              </span>
              <span className="text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide">
                Expo Visitors Expected
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
                25,000+
              </span>
              <span className="text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide">
                Students Engaged
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-serif">
                10 Zones
              </span>
              <span className="text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide">
                One Circular Hub
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
                3 Sessions
              </span>
              <span className="text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide">
                Daily per Zone (15-20 / group)
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================== */}
      {/* STICKY IN-PAGE NAVIGATION BAR                              */}
      {/* ========================================================== */}
      <nav className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm overflow-x-auto scrollbar-none">
        <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between gap-1 py-2.5">
          <div className="flex items-center gap-1 sm:gap-2">
            {[
              { id: "about", label: "About" },
              { id: "journey", label: "Visitor Journey" },
              { id: "map", label: "Hub Map" },
              { id: "zones", label: "The 10 Zones" },
              { id: "book", label: "Book a Session" },
              { id: "faq", label: "FAQ" },
              { id: "join", label: "How to Join" },
              { id: "contact", label: "Contact" },
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                  activeSection === tab.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </div>

          <a
            href="#book"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold transition-colors"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* ========================================================== */}
      {/* SECTION 1: ABOUT THE PLATFORM                              */}
      {/* ========================================================== */}
      <section id="about" className="py-20 bg-white scroll-mt-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-3">
            <Info className="w-4 h-4" />
            Purpose & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mb-6 leading-tight">
            Bridging the Gap Between Young Aspirations and Industry Realities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Every year, thousands of young people across Koshi Province finish school unsure
                which vocational path to pursue, which real-world skills are urgently demanded by
                modern industries, or where to find accredited quality training.
              </p>
              <p>
                At the same time, regional manufacturers and businesses struggle to recruit people
                equipped with practical competencies. The{" "}
                <strong className="text-slate-900 font-semibold">
                  Learn and Work Platform at Birat Expo 2026
                </strong>{" "}
                bridges this divide by convening youth, vocational training institutions, and
                leading employers inside one dynamic, experiential pavilion.
              </p>
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-950 space-y-2">
                <h4 className="font-bold flex items-center gap-2 text-blue-900 text-base">
                  <Award className="w-5 h-5 text-blue-600" />
                  A Circular Hub with 10 Dedicated Zones
                </h4>
                <p className="text-sm text-blue-800 leading-normal">
                  Designed around a central Information Desk, the hub features 1 Career Planning
                  center, 1 CIM Member Industry showcase, and 8 live skill practice areas with
                  guided demonstrations, hands-on tasks, and pre-booked group workshops.
                </p>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Hands-on Task Trials</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Touch real tools, run PLC trainers, practice CPR, mix sensor circuits, and try
                  machine sewing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Industry Linkage</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Interact directly with manufacturing leaders and enterprises offering actual
                  apprenticeships.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Career Assessment</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Take a guided aptitude assessment and leave with a personalized career report on
                  the spot.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Direct Next Step</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every attendee exits with actionable next steps, course details, and contact for
                  follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 2: THE VISITOR JOURNEY                             */}
      {/* ========================================================== */}
      <section id="journey" className="py-20 bg-slate-100 border-y border-slate-200 scroll-mt-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Step-by-Step Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
              The Visitor Journey
            </h2>
            <p className="text-slate-600 text-base">
              From arrival to exit, every visiting student and young jobseeker goes through a
              structured, high-impact 4-stage exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-md shadow-blue-600/20">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Information Desk</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Central orientation, distribution of the circular hub map, schedule briefing, and
                group registration.
              </p>
            </div>

            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-md shadow-indigo-600/20">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Career Planning</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Interactive computer-based career assessment test and one-to-one consultation to
                discover strengths.
              </p>
            </div>

            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-lg mb-4 shadow-md shadow-amber-500/20">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Skill Zones</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Live demonstrations, hands-on tool interactions, and engaging dialogues with master
                trainers.
              </p>
            </div>

            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-md shadow-emerald-600/20">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Exit & Pathways</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A recorded next step with training providers, certificate of participation, and
                employer contacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 3: HUB FLOOR PLAN                                  */}
      {/* ========================================================== */}
      <section id="map" ref={mapRef} className="py-20 bg-white scroll-mt-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Pavilion Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
              Hub Floor Plan
            </h2>
            <p className="text-slate-600 text-base">
              The circular hub layout of the ten zones, central information desk, and visitor flow.
            </p>
          </div>

          {/* Clean Floor Plan Image Display */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2 sm:p-4">
            <div className="relative w-full aspect-[16/9] md:aspect-[4/3] max-w-4xl mx-auto">
              <Image
                src="/learn-and-work/hub-plan.jpg"
                alt="Learn and Work Platform Circular Hub Floor Plan"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 4: THE 10 SKILL ZONES GRID                         */}
      {/* ========================================================== */}
      <section id="zones" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Comprehensive Vocational Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
              Explore the Ten Hub Zones
            </h2>
            <p className="text-slate-600 text-base">
              Each specialized zone runs three live workshops daily with industry-grade equipment,
              led by certified trainers and business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZONES.map((zone, index) => {
              const isSelected = selectedZoneIndex === index;
              return (
                <div
                  key={zone.id}
                  className={`flex flex-col justify-between p-6 rounded-3xl bg-white border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                    isSelected ? "shadow-lg ring-2 ring-offset-2 ring-blue-500" : "border-slate-200"
                  }`}
                  style={{ borderTopColor: zone.color, borderTopWidth: "6px" }}
                >
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl text-white flex items-center justify-center font-bold text-base shadow-sm"
                        style={{ backgroundColor: zone.color }}
                      >
                        {zone.id}
                      </div>
                      <div
                        className="p-2 rounded-lg text-slate-600 bg-slate-50 border border-slate-100"
                        title={zone.title}
                      >
                        {zone.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
                      {zone.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      {zone.skills}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{zone.handsOn}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">3 Daily Sessions</span>
                    <button
                      onClick={() => handleSelectZone(index, true)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full transition-colors"
                      style={{
                        backgroundColor: `${zone.color}15`,
                        color: zone.color,
                      }}
                    >
                      Book Session
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 5: BOOK A GROUP SESSION FORM                       */}
      {/* ========================================================== */}
      <section
        id="book"
        ref={bookingRef}
        className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 scroll-mt-24"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Advance Reservation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
              Book a Group Session
            </h2>
            <p className="text-slate-600 text-base">
              Secure dedicated hands-on slots for your school, college, or student group.
              Participation is complimentary.
            </p>
          </div>

          {/* Essential Rules Card */}
          <div className="mb-10 p-6 rounded-3xl bg-amber-50/70 border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-sm leading-relaxed space-y-1">
              <h4 className="font-bold text-amber-950 text-base">Group Participation Guidelines:</h4>
              <p>
                Each session hosts strictly <strong>one group of 15 to 20 students</strong>{" "}
                accompanied by a teacher or chaperone. Sessions run for 2 hours daily:{" "}
                <span className="font-semibold">9:30–11:30 AM</span>,{" "}
                <span className="font-semibold">12:00–2:00 PM</span>, and{" "}
                <span className="font-semibold">3:00–5:00 PM</span> from{" "}
                <strong>17 to 26 December 2026</strong>.
              </p>
            </div>
          </div>

          {/* Interactive Booking Wizard / Form */}
          <form
            onSubmit={handleBookingSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-10"
          >
            {/* Step 1: Select Zone */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  Select a Skill Zone
                </label>
                {selectedZoneIndex !== null && (
                  <span className="text-xs font-semibold text-blue-600">
                    Selected: {ZONES[selectedZoneIndex].title}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {ZONES.map((zone, idx) => {
                  const isSelected = selectedZoneIndex === idx;
                  return (
                    <button
                      type="button"
                      key={zone.id}
                      onClick={() => {
                        setSelectedZoneIndex(idx);
                        if (errors.zone) setErrors((prev) => ({ ...prev, zone: "" }));
                      }}
                      className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                        isSelected
                          ? "text-white shadow-md scale-[1.02]"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                      }`}
                      style={{
                        backgroundColor: isSelected ? zone.color : undefined,
                        borderColor: isSelected ? zone.color : undefined,
                      }}
                    >
                      <span className="font-bold opacity-75 mr-1">{zone.id}.</span>
                      {zone.title}
                    </button>
                  );
                })}
              </div>
              {errors.zone && <p className="text-red-600 text-xs mt-2 font-medium">{errors.zone}</p>}
            </div>

            {/* Step 2: Select Date */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  Choose a Date (10 Days of Birat Expo 2026)
                </label>
                {selectedDayIndex !== null && (
                  <span className="text-xs font-semibold text-blue-600">
                    {EXPO_DAYS[selectedDayIndex].fullDate}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {EXPO_DAYS.map((d, idx) => {
                  const isSelected = selectedDayIndex === idx;
                  return (
                    <button
                      type="button"
                      key={d.dayNum}
                      onClick={() => {
                        setSelectedDayIndex(idx);
                        if (errors.day) setErrors((prev) => ({ ...prev, day: "" }));
                      }}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300"
                          : "bg-slate-50 text-slate-800 hover:bg-slate-100 border-slate-200"
                      }`}
                    >
                      <span className="block text-base font-bold font-serif">{d.dateLabel}</span>
                      <span
                        className={`block text-xs ${
                          isSelected ? "text-blue-100" : "text-slate-500"
                        }`}
                      >
                        Day {d.dayNum} · {d.poush}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.day && <p className="text-red-600 text-xs mt-2 font-medium">{errors.day}</p>}
            </div>

            {/* Step 3: Select Time Slot */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  Choose Session Time Slot
                </label>
                {selectedSlotId && (
                  <span className="text-xs font-semibold text-blue-600">
                    {TIME_SLOTS.find((s) => s.id === selectedSlotId)?.time}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedSlotId === slot.id;
                  const refCode =
                    selectedZoneIndex !== null && selectedDayIndex !== null
                      ? getReferenceCode(selectedZoneIndex, selectedDayIndex, slot.id)
                      : null;

                  return (
                    <button
                      type="button"
                      key={slot.id}
                      onClick={() => {
                        setSelectedSlotId(slot.id);
                        if (errors.slot) setErrors((prev) => ({ ...prev, slot: "" }));
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-400"
                          : "bg-slate-50 text-slate-800 hover:bg-slate-100 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          Session {slot.id}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            isSelected ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          Available
                        </span>
                      </div>
                      <span className="block text-base font-bold">{slot.time}</span>
                      <span
                        className={`block text-xs mt-1 ${
                          isSelected ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        1 Group (15-20 students)
                      </span>
                      {refCode && (
                        <span
                          className={`block font-mono text-[11px] mt-2 ${
                            isSelected ? "text-amber-300" : "text-slate-400"
                          }`}
                        >
                          Ref: {refCode}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {errors.slot && <p className="text-red-600 text-xs mt-2 font-medium">{errors.slot}</p>}
            </div>

            {/* Selected Summary Pill */}
            {selectedZoneIndex !== null && selectedDayIndex !== null && selectedSlotId && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300/80 flex flex-wrap items-center justify-between gap-3 text-sm text-amber-950 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>
                    <strong>{ZONES[selectedZoneIndex].title}</strong> ·{" "}
                    {EXPO_DAYS[selectedDayIndex].fullDate} ·{" "}
                    {TIME_SLOTS.find((s) => s.id === selectedSlotId)?.time}
                  </span>
                </div>
                <span className="font-mono bg-white px-2.5 py-1 rounded-lg border border-amber-200 text-xs font-bold">
                  {getReferenceCode(selectedZoneIndex, selectedDayIndex, selectedSlotId)}
                </span>
              </div>
            )}

            {/* Step 4: Group & Contact Details */}
            <div className="pt-6 border-t border-slate-100">
              <label className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  4
                </span>
                Group & Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    School / College / Institution *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Adarsha Secondary School"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.school && (
                    <p className="text-red-600 text-xs mt-1 font-medium">{errors.school}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Class / Grade / Level *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Grade 10 / Diploma Year 1"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.grade && (
                    <p className="text-red-600 text-xs mt-1 font-medium">{errors.grade}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Accompanying Teacher / Coordinator *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Adhikari"
                    value={formData.teacher}
                    onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.teacher && (
                    <p className="text-red-600 text-xs mt-1 font-medium">{errors.teacher}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9842012345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-xs mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. contact@school.edu.np"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1 font-medium">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Number of Students (15 to 20) *
                  </label>
                  <input
                    type="number"
                    min={15}
                    max={20}
                    value={formData.count}
                    onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-semibold"
                  />
                  {errors.count && (
                    <p className="text-red-600 text-xs mt-1 font-medium">{errors.count}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Special Notes or Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Accessibility needs, estimated arrival time, additional accompanying staff..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Submission Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Requests are processed directly by Chamber of Industries Morang (CIM) Skill Unit.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-base shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Booking Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Booking Confirmation Dialog / Card */}
          {submittedBooking && (
            <div
              id="booking-result"
              className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-500 shadow-2xl animate-fadeIn"
            >
              <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Booking Request Prepared
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">
                    Thank You! Your Session is Held
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Reference Code:{" "}
                    <code className="font-mono bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded font-bold text-base">
                      {submittedBooking.ref}
                    </code>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 text-sm text-slate-700">
                <div>
                  <strong className="block text-slate-900 text-base mb-1">Session Details</strong>
                  <p>
                    <span className="text-slate-500">Zone:</span> {submittedBooking.zone}
                  </p>
                  <p>
                    <span className="text-slate-500">Date:</span> {submittedBooking.date} (
                    {submittedBooking.poush})
                  </p>
                  <p>
                    <span className="text-slate-500">Time:</span> {submittedBooking.time}
                  </p>
                </div>
                <div>
                  <strong className="block text-slate-900 text-base mb-1">Group Details</strong>
                  <p>
                    <span className="text-slate-500">Institution:</span> {submittedBooking.school} (
                    {submittedBooking.grade})
                  </p>
                  <p>
                    <span className="text-slate-500">Group Size:</span> {submittedBooking.students}{" "}
                    students
                  </p>
                  <p>
                    <span className="text-slate-500">Coordinator:</span> {submittedBooking.teacher}{" "}
                    ({submittedBooking.phone})
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 mb-6">
                Please send this confirmation directly to the CIM Skill Development Unit via Email
                or WhatsApp to finalize your group&apos;s physical pass and arrival arrangement.
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={getBookingEmailLink()}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Request to CIM
                </a>

                <a
                  href={getBookingWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </a>

                <button
                  type="button"
                  onClick={copyBookingText}
                  className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (FAQ)               */}
      {/* ========================================================== */}
      <section id="faq" className="py-20 bg-slate-100 border-t border-slate-200 scroll-mt-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Answers & Help
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Everything you need to know about booking, curriculum, and attending the Learn and
              Work Platform.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-serif">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 transition-transform duration-200 shrink-0 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 7: HOW TO JOIN (PARTNERS & SPONSORS)               */}
      {/* ========================================================== */}
      <section id="join" className="py-20 bg-white border-t border-slate-200 scroll-mt-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
              For Training Providers, Industries & Sponsors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-2 mb-4">
              How to Join the Platform
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Vocational institutes, polytechnics, industrial employers, and technology partners are
              warmly invited to participate, showcase training machinery, and engage future talent.
              Participation takes three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider mb-2 block">
                Step 1
              </span>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Get in Touch</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contact the Skill Development Unit coordinator via phone, WhatsApp, or email.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider mb-2 block">
                Step 2
              </span>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Receive Proposal</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Review the detailed partnership booklet, pavilion layout options, and participation
                form.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider mb-2 block">
                Step 3
              </span>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Confirm & Exhibit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Return the completed agreement to confirm booth allocation, equipment space, and
                schedules.
              </p>
            </div>
          </div>

          {/* Coordinator Contact Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-xl shrink-0 shadow-lg shadow-amber-400/20 font-serif">
                SC
              </div>
              <div>
                <h4 className="text-xl font-bold font-serif text-white">Sandeep Chaudhary</h4>
                <p className="text-amber-300 text-sm font-medium">
                  Skill Development Unit Coordinator
                </p>
                <p className="text-slate-400 text-xs mt-0.5">Chamber of Industries Morang (CIM)</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/9779828015958?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20partnership%20proposal%20for%20the%20Learn%20and%20Work%20Platform."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 flex-1 md:flex-initial"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Proposal
              </a>

              <a
                href="tel:+9779864818969"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 flex-1 md:flex-initial"
              >
                <Phone className="w-4 h-4" />
                Call 9864818969
              </a>

              <a
                href="mailto:info.cimbrt@gmail.com?subject=Partnership%20Proposal%20Request%20-%20Learn%20and%20Work%20Platform"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 flex-1 md:flex-initial"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SECTION 8: CONTACT & CIM ORGANIZER INFO                    */}
      {/* ========================================================== */}
      <section id="contact" className="py-16 bg-slate-900 text-slate-300 border-t border-slate-800 scroll-mt-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-white font-serif mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                Chamber of Industries Morang (CIM)
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 mb-4">
                Shahid Marga, Tinpaini, Biratnagar-2, Koshi Province, Nepal
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>021-515712, 021-577646</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a
                    href="mailto:cim.biratnagar@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    cim.biratnagar@gmail.com
                  </a>{" "}
                  /{" "}
                  <a href="mailto:info.cimbrt@gmail.com" className="text-blue-400 hover:underline">
                    info.cimbrt@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <a
                    href="https://www.cim.org.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    www.cim.org.np
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white font-serif mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                Learn & Work Hub Desk
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                For session adjustments, institutional MoUs, and career counseling materials:
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-slate-200">Coordinator:</span>
                  <span>Sandeep Chaudhary (9864818969)</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-slate-200">Event Dates:</span>
                  <span>17–26 December 2026 (2–11 Poush 2083)</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-slate-200">Venue:</span>
                  <span>Birat Expo Ground, Biratnagar</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © 2026 Chamber of Industries Morang · Skill Development Unit · Learn and Work
              Platform, Birat Expo 2026.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

