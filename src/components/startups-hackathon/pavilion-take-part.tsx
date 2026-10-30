"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Sparkles,
  Briefcase,
  Users,
  CheckCircle,
  Phone,
  Mail,
  Send,
  Building2,
  FileCheck,
} from "lucide-react";

export default function PavilionTakePart() {
  const [activeFormTab, setActiveFormTab] = useState<string>("school");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    contact: "",
    email: "",
    notes: "",
  });

  const participantTracks = [
    {
      id: "school",
      title: "Schools & Teachers",
      room: "Room 1 · The Makerspace",
      tag: "Grades 7–10",
      color: "emerald",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      heading: "Book a Guided Class Visit or In-School Session",
      desc: "Bring your students for a guided tour of Room 1 during the Discover days (17–18 Dec), or request BIC to bring a maker session to your school in 2027.",
      cost: "100% Free of Cost",
      instruction: "Register your school below or call the incubation desk.",
    },
    {
      id: "student",
      title: "College Students & Innovators",
      room: "Room 2 · The Design Studio",
      tag: "College & Young Adults",
      color: "teal",
      badgeClass: "bg-teal-50 text-teal-800 border-teal-200",
      heading: "Join the Next Design Thinking Workshop",
      desc: "No prior business idea needed, and zero fee. Register your name at Room 2 and we will invite you when the upcoming design thinking bootcamp opens in your college.",
      cost: "100% Free of Cost",
      instruction: "Drop your details to receive cohort schedules.",
    },
    {
      id: "business",
      title: "Business Owners & Founders",
      room: "Room 3 · The Growth Room",
      tag: "Operating 1+ Years",
      color: "amber",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      heading: "Apply for SGB Accelerator & Business Health Check-up",
      desc: "For registered businesses of Koshi Province. Start with an objective, free Business Health Check-up in Room 3 with chartered accountants, lawyers, and growth coaches.",
      cost: "100% Free Diagnostic",
      instruction: "Walk-in any day of the Expo or pre-book a dedicated clinic slot.",
    },
    {
      id: "mentor",
      title: "Industry, Mentors & Investors",
      room: "Chamber & Angel Network",
      tag: "CIM Members & Partners",
      color: "indigo",
      badgeClass: "bg-indigo-50 text-indigo-800 border-indigo-200",
      heading: "Mentor, Sponsor a Booth, or Back a Koshi Founder",
      desc: "Give a few hours a month as a mentor, sponsor a booth for an emerging student startup, or attend closed-door pitches on Invest Day (26 Dec).",
      cost: "Mentorship & Angel Linkage",
      instruction: "Connect directly with the Chamber of Industries Morang.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="takepart" className="py-14 sm:py-20 bg-gray-50/60 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Engage &amp; Participate
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            How to <span className="text-blue-600">Take Part</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            Everything offered at the Startup &amp; Entrepreneurship Pavilion is completely free of cost.
            Find the path built specifically for your group below.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {participantTracks.map((trk) => {
            const isSelected = activeFormTab === trk.id;
            return (
              <div
                key={trk.id}
                onClick={() => {
                  setActiveFormTab(trk.id);
                  setSubmitted(false);
                }}
                className={`bg-white rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all cursor-pointer ${
                  isSelected
                    ? "border-blue-500 shadow-md ring-1 ring-blue-500"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {trk.title}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${trk.badgeClass}`}>
                      {trk.tag}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-blue-600 mb-2">
                    {trk.room}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 leading-snug mb-2.5">
                    {trk.heading}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {trk.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {trk.cost}
                    </span>
                    <span className="text-blue-600">
                      {isSelected ? "Selected Form ↓" : "Select →"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Registration / Enquiry Form */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xs max-w-4xl mx-auto">
          <div className="border-b border-gray-100 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Pavilion Pre-Registration &amp; Enquiry Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                Register for {participantTracks.find((t) => t.id === activeFormTab)?.title}
              </h3>
            </div>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              Free with Expo Pass
            </span>
          </div>

          {submitted ? (
            <div className="py-8 text-center max-w-md mx-auto">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Enquiry Registered Successfully
              </h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Thank you! Our pavilion team from Biratnagar Incubation Center will contact you directly to confirm your session timing and pass details.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Karki"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    School / College / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    placeholder="e.g. Birat Model College / ABC Agro Tech"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. 98XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. info@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  How can the pavilion team assist you?
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. We want to bring 45 grade 9 students on 18 Dec / I want a financial health checkup for my agro enterprise..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-xs text-gray-500">
                  Every enquiry taken is logged and followed up by the BIC Incubation Manager.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Pre-Registration</span>
                </button>
              </div>
            </form>
          )}

          {/* Direct Hotline strip */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                <strong>Incubation Desk:</strong> 9869812058 / 021-515712
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                <strong>Email:</strong> cim.biratnagar@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                <strong>Office:</strong> Shahid Marga, Tinpaini, Biratnagar-2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
