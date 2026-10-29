"use client";

import AdminTable from "@/components/admin-table";
import Link from "next/link";

export default function AdminPage() {
  // const { status } = useSession();

  // if (status === "unauthenticated") redirect("/login");

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage stalls, thematic registrations, and training
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/sponsors"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition shadow-sm"
          >
            Sponsors
          </Link>
          <a
            href="/admin/thematic-registrations"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
          >
            Business Summit
          </a>
          <a
            href="https://cim.baliyoventures.com/api/export"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Export Data
          </a>
        </div>
      </div>
      <AdminTable />
    </div>
  );
}
