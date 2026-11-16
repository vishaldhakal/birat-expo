"use client";

import ParticipantsTable from "@/components/participants-table";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LiveTrainingPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Live Training Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Archived live training participant registrations
          </p>
        </div>

        <Link
          href="/admin/learn-and-work"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-700 transition shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>Go to Learn & Work Bookings</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-sm flex items-center justify-between">
        <span>Looking for the new Learn and Work Platform group bookings?</span>
        <Link
          href="/admin/learn-and-work"
          className="font-bold underline text-emerald-800 hover:text-emerald-950"
        >
          View Learn & Work Dashboard →
        </Link>
      </div>

      <ParticipantsTable />
    </div>
  );
}
