import React from "react";
import {
  Compass,
  Building2,
  HeartPulse,
  Cpu,
  Laptop,
  Sparkles,
  Sprout,
  Scissors,
  Coffee,
  ShieldCheck,
} from "lucide-react";
import { ZoneData, TimeSlot, ExpoDay } from "./types";

export const ZONE_ICONS: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Laptop: <Laptop className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Sprout: <Sprout className="w-5 h-5" />,
  Scissors: <Scissors className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

export const ZONES: (ZoneData & { icon: React.ReactNode })[] = [
  {
    id: 1,
    title: "Career Planning",
    skills: "Career counselling, aptitude and interest assessment",
    handsOn: "Online test, personal career report, one-to-one counselling desk.",
    color: "#3d5a9a",
    iconName: "Compass",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "CIM Member Space",
    skills: "Showcase of products, Mero Desh Mero Utpadan, career opportunities",
    handsOn: "Member industries show their products and talk about the careers they offer.",
    color: "#3b6a96",
    iconName: "Building2",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Health & Emergency Care",
    skills: "First aid, CPR, choking response",
    handsOn: "Mannequin-based CPR and first aid practice in short, repeating sessions.",
    color: "#d3202e",
    iconName: "HeartPulse",
    icon: <HeartPulse className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Industry & Automation",
    skills: "CNC, injection moulding, PLC",
    handsOn: "Working PLC trainer, small CNC or moulding demonstration, robotic arm display.",
    color: "#5b3fa8",
    iconName: "Cpu",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "ICT & Smart Technology",
    skills: "IoT, electronics, smart systems",
    handsOn: "Build a simple sensor circuit, smart-home demonstration.",
    color: "#1e8294",
    iconName: "Laptop",
    icon: <Laptop className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Beauty & Wellness",
    skills: "Makeup, nail art, personal care",
    handsOn: "Live makeup and nail art stations with trainees, short taster sessions.",
    color: "#c2187f",
    iconName: "Sparkles",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: 7,
    title: "Agriculture & Urban Farming",
    skills: "Hydroponics, kausi kheti (rooftop farming), nursery",
    handsOn: "Working hydroponic and vertical rack display, kausi kheti set-up, seedling and nursery demonstration.",
    color: "#2f7d3a",
    iconName: "Sprout",
    icon: <Sprout className="w-5 h-5" />,
  },
  {
    id: 8,
    title: "Fashion & Textile",
    skills: "Fashion design, tailoring, garment making",
    handsOn: "Sewing machines in operation, pattern and design display, garment showcase.",
    color: "#d4560f",
    iconName: "Scissors",
    icon: <Scissors className="w-5 h-5" />,
  },
  {
    id: 9,
    title: "Hospitality & Tourism",
    skills: "Hotel management, food service, housekeeping, coffee making, bakery",
    handsOn: "Table setting and service demonstration, bed-making challenge, live barista coffee making, bakery and pastry demonstration.",
    color: "#5b2d9c",
    iconName: "Coffee",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    id: 10,
    title: "Security & Surveillance",
    skills: "CCTV, security systems, networking",
    handsOn: "Live camera feeds, installation and cabling demonstration.",
    color: "#1f7587",
    iconName: "ShieldCheck",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

export const TIME_SLOTS: TimeSlot[] = [
  { id: "A", time: "9:30 AM – 11:30 AM", label: "Morning Session" },
  { id: "B", time: "12:00 PM – 2:00 PM", label: "Midday Session" },
  { id: "C", time: "3:00 PM – 5:00 PM", label: "Afternoon Session" },
];

export const EXPO_DAYS: ExpoDay[] = Array.from({ length: 10 }, (_, i) => ({
  index: i,
  dayNum: i + 1,
  dateNum: 17 + i,
  dateLabel: `${17 + i} Dec`,
  fullDate: `${17 + i} December 2026`,
  poush: `${2 + i} Poush 2083`,
}));

export const FAQS = [
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

