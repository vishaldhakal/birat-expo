"use client";

import LearnAndWorkAdminTable from "@/components/learn-and-work-admin-table";
import Link from "next/link";
import { ArrowLeft, Plus, ExternalLink } from "lucide-react";

export default function LearnAndWorkAdminPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link
                href="/admin"
                className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-gray-700 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                Back to Admin Dashboard
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Learn & Work Platform Bookings
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Birat Expo 2026 · Chamber of Industries Morang Skill Development Hub
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/learn-and-work#book"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Public Form</span>
            </Link>
            <Link
              href="/admin/thematic-registrations"
              className="px-3.5 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
            >
              Business Summit
            </Link>
            <Link
              href="/admin/sponsors"
              className="px-3.5 py-2 text-xs font-medium text-purple-700 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition shadow-sm"
            >
              Sponsors
            </Link>
          </div>
        </div>

        {/* Learn & Work Table with Filters and Management */}
        <LearnAndWorkAdminTable />
      </div>
    </div>
  );
}

