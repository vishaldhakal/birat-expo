"use client";

import ThematicAdminTable from "@/components/thematic-admin-table";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ThematicRegistrationsPage() {
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
                Back to Admin
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Business Summit Registrations Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Birat Business Summit 2026 · Opportunity Connect participants & chamber registrations
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/admin"
              className="px-3.5 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
            >
              Stalls Admin
            </Link>
          </div>
        </div>

        {/* Thematic Table with Pagination */}
        <ThematicAdminTable />
      </div>
    </div>
  );
}
