import React, { forwardRef } from "react";
import { Users, CheckCircle2, ArrowRight, Info } from "lucide-react";
import { ZoneData, TimeSlot, ExpoDay, BookingFormData, SubmittedBooking } from "../types";
import { BookingResultCard } from "./booking-result-card";

interface BookingSectionProps {
  zones: (ZoneData & { icon: React.ReactNode })[];
  expoDays: ExpoDay[];
  timeSlots: TimeSlot[];
  selectedZoneIndex: number | null;
  selectedDayIndex: number | null;
  selectedSlotId: string | null;
  formData: BookingFormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  submitError: string | null;
  submittedBooking: SubmittedBooking | null;
  copied: boolean;
  onSelectZoneIndex: (idx: number) => void;
  onSelectDayIndex: (idx: number) => void;
  onSelectSlotId: (slotId: string) => void;
  onFormDataChange: (updates: Partial<BookingFormData>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCopyBookingText: () => void;
  getReferenceCode: (zoneIdx: number, dayIdx: number, slotId: string) => string;
}

export const BookingSection = forwardRef<HTMLDivElement, BookingSectionProps>(
  (
    {
      zones,
      expoDays,
      timeSlots,
      selectedZoneIndex,
      selectedDayIndex,
      selectedSlotId,
      formData,
      errors,
      isSubmitting,
      submitError,
      submittedBooking,
      copied,
      onSelectZoneIndex,
      onSelectDayIndex,
      onSelectSlotId,
      onFormDataChange,
      onSubmit,
      onCopyBookingText,
      getReferenceCode,
    },
    ref
  ) => {
    return (
      <section
        id="book"
        ref={ref}
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
            onSubmit={onSubmit}
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
                    Selected: {zones[selectedZoneIndex].title}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {zones.map((zone, idx) => {
                  const isSelected = selectedZoneIndex === idx;
                  return (
                    <button
                      type="button"
                      key={zone.id}
                      onClick={() => onSelectZoneIndex(idx)}
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
                    {expoDays[selectedDayIndex].fullDate}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {expoDays.map((d, idx) => {
                  const isSelected = selectedDayIndex === idx;
                  return (
                    <button
                      type="button"
                      key={d.dayNum}
                      onClick={() => onSelectDayIndex(idx)}
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
                    {timeSlots.find((s) => s.id === selectedSlotId)?.time}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = selectedSlotId === slot.id;
                  const refCode =
                    selectedZoneIndex !== null && selectedDayIndex !== null
                      ? getReferenceCode(selectedZoneIndex, selectedDayIndex, slot.id)
                      : null;

                  return (
                    <button
                      type="button"
                      key={slot.id}
                      onClick={() => onSelectSlotId(slot.id)}
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
                    <strong>{zones[selectedZoneIndex].title}</strong> ·{" "}
                    {expoDays[selectedDayIndex].fullDate} ·{" "}
                    {timeSlots.find((s) => s.id === selectedSlotId)?.time}
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
                    placeholder="e.g. Adarsh Secondary School"
                    value={formData.school}
                    onChange={(e) => onFormDataChange({ school: e.target.value })}
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
                    placeholder="e.g. Grade 10, Diploma in IT"
                    value={formData.grade}
                    onChange={(e) => onFormDataChange({ grade: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.grade && (
                    <p className="text-red-600 text-xs mt-1 font-medium">{errors.grade}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Teacher / Coordinator Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ram Bahadur Thapa"
                    value={formData.teacher}
                    onChange={(e) => onFormDataChange({ teacher: e.target.value })}
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
                    placeholder="e.g. 9842000000"
                    value={formData.phone}
                    onChange={(e) => onFormDataChange({ phone: e.target.value })}
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
                    onChange={(e) => onFormDataChange({ email: e.target.value })}
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
                    onChange={(e) => onFormDataChange({ count: e.target.value })}
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
                  onChange={(e) => onFormDataChange({ note: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Global API Error Alert */}
            {submitError && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                <Info className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">Unable to submit booking</p>
                  <p className="text-xs text-red-600">{submitError}</p>
                </div>
              </div>
            )}

            {/* Submission Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Requests are processed directly by Chamber of Industries Morang (CIM) Skill Unit.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-10 py-4 rounded-full font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-slate-400 text-white cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-blue-600/25"
                }`}
              >
                <span>{isSubmitting ? "Submitting Request..." : "Submit Booking Request"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Booking Confirmation Dialog / Card */}
          {submittedBooking && (
            <BookingResultCard
              submittedBooking={submittedBooking}
              copied={copied}
              onCopy={onCopyBookingText}
            />
          )}
        </div>
      </section>
    );
  }
);

BookingSection.displayName = "BookingSection";

