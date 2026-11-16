import React from "react";
import { CheckCircle2, Mail, MessageCircle, Copy, Check } from "lucide-react";
import { SubmittedBooking } from "../types";

interface BookingResultCardProps {
  submittedBooking: SubmittedBooking;
  copied: boolean;
  onCopy: () => void;
}

export const BookingResultCard: React.FC<BookingResultCardProps> = ({
  submittedBooking,
  copied,
  onCopy,
}) => {
  const getBookingEmailLink = () => {
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

  return (
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
            <span className="text-slate-500">Group Size:</span> {submittedBooking.students} students
          </p>
          <p>
            <span className="text-slate-500">Coordinator:</span> {submittedBooking.teacher} (
            {submittedBooking.phone})
          </p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 mb-6">
        Please send this confirmation directly to the CIM Skill Development Unit via Email or
        WhatsApp to finalize your group&apos;s physical pass and arrival arrangement.
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
          onClick={onCopy}
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
  );
};

