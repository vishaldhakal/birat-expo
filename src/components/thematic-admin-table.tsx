"use client";

import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { mutate } from "swr";
import {
  DownloadCloud,
  ChevronLeft,
  ChevronRight,
  Eye,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  Briefcase,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Utensils,
  Lightbulb,
  Handshake,
  FileText,
} from "lucide-react";
import { useGetThematicRegistrations } from "@/api/thematic";
import { ThematicRegistrationResponse } from "@/types/thematic";

type RegistrationStatus = "Pending" | "Approved" | "Rejected";

const registrationStatuses: { value: RegistrationStatus | ""; label: string }[] = [
  { value: "", label: "All Statuses" },
  { value: "Pending", label: "Pending" },
  { value: "Approved", label: "Approved" },
  { value: "Rejected", label: "Rejected" },
];

export default function ThematicAdminTable() {
  const [page, setPage] = useState(1);
  const {
    thematicRegistrations,
    count,
    next,
    previous,
    thematicRegistrationsEmpty,
    thematicRegistrationsError,
    thematicRegistrationsLoading,
  } = useGetThematicRegistrations(page);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [selectedParticipant, setSelectedParticipant] =
    useState<ThematicRegistrationResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingStatusId, setLoadingStatusId] = useState<number | null>(null);
  const [statusChangeInfo, setStatusChangeInfo] = useState<{
    id: number;
    newStatus: RegistrationStatus;
    name: string;
  } | null>(null);

  // Filter current page items by search query and status filter
  const filteredData = useMemo(() => {
    if (!thematicRegistrations) return [];

    return thematicRegistrations.filter((item) => {
      if (statusFilter && item.status !== statusFilter) {
        return false;
      }

      if (search.trim()) {
        const query = search.toLowerCase();
        const searchable = [
          item.name,
          item.email,
          item.contact,
          item.organization,
          item.designation,
          item.address,
          item.opportunity_theme1,
          item.opportunity_theme2,
          item.opportunity_theme3,
          item.business_connections,
        ];
        return searchable.some((val) => val?.toLowerCase().includes(query));
      }

      return true;
    });
  }, [thematicRegistrations, search, statusFilter]);

  const handleStatusChange = async (
    id: number,
    newStatus: RegistrationStatus
  ) => {
    setLoadingStatusId(id);
    try {
      await axios.patch(
        `https://cim.baliyoventures.com/api/thematic-registrations/${id}/`,
        { status: newStatus }
      );

      // Revalidate SWR cache for the active page
      await mutate(
        `https://cim.baliyoventures.com/api/thematic-registrations/?page=${page}`
      );

      // Also update selectedParticipant if modal is open
      if (selectedParticipant && selectedParticipant.id === id) {
        setSelectedParticipant({ ...selectedParticipant, status: newStatus });
      }
    } catch (error) {
      console.error("Error updating registration status:", error);
      alert("Failed to update status. Please try again.");
    } finally {
      setLoadingStatusId(null);
    }
  };

  const confirmStatusChange = async () => {
    if (!statusChangeInfo) return;
    await handleStatusChange(statusChangeInfo.id, statusChangeInfo.newStatus);
    setStatusChangeInfo(null);
  };

  // CSV download for current records
  const downloadCSV = () => {
    if (!thematicRegistrations || thematicRegistrations.length === 0) return;

    const headers = [
      "ID",
      "Name",
      "Organization",
      "Designation",
      "Address",
      "Email",
      "Contact",
      "Status",
      "Food",
      "Sessions",
      "Opportunity Theme 1",
      "Opportunity Theme 2",
      "Opportunity Theme 3",
      "Business Connections",
      "Additional Info",
    ];

    const rows = filteredData.map((reg) => [
      reg.id,
      `"${(reg.name || "").replace(/"/g, '""')}"`,
      `"${(reg.organization || "").replace(/"/g, '""')}"`,
      `"${(reg.designation || "").replace(/"/g, '""')}"`,
      `"${(reg.address || "").replace(/"/g, '""')}"`,
      `"${(reg.email || "").replace(/"/g, '""')}"`,
      `"${(reg.contact || "").replace(/"/g, '""')}"`,
      reg.status || "Pending",
      reg.food || "",
      `"${(reg.sessions?.map((s) => s.title).join("; ") || "").replace(/"/g, '""')}"`,
      `"${(reg.opportunity_theme1 || "").replace(/"/g, '""')}"`,
      `"${(reg.opportunity_theme2 || "").replace(/"/g, '""')}"`,
      `"${(reg.opportunity_theme3 || "").replace(/"/g, '""')}"`,
      `"${(reg.business_connections || "").replace(/"/g, '""')}"`,
      `"${(reg.additional_info || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `business_summit_registrations_page_${page}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Pagination calculation
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(count / pageSize));

  return (
    <div className="space-y-6">
      {/* Top Filter and Action Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="flex-1 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, email, org, themes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="sm:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {registrationStatuses.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={downloadCSV}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition shadow-sm"
            >
              <DownloadCloud className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Results count indicator */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>
            Total Registrations: <strong className="text-gray-900 font-semibold">{count}</strong>
          </span>
          <span>
            Page <strong className="text-gray-900">{page}</strong> of <strong className="text-gray-900">{totalPages}</strong>
          </span>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {thematicRegistrationsLoading ? (
          <div className="py-24 flex flex-col items-center justify-center gap-3 text-gray-500">
            <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium">Loading thematic registrations...</p>
          </div>
        ) : thematicRegistrationsError ? (
          <div className="py-20 text-center text-red-500">
            <p className="font-semibold">Failed to load registration data.</p>
            <p className="text-xs text-gray-400 mt-1">Please refresh or try again later.</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="py-20 text-center text-gray-500">
            <p className="text-base font-semibold">No registrations found</p>
            <p className="text-xs text-gray-400 mt-1">
              Try adjusting your search query or filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase font-semibold text-gray-500">
                <tr>
                  <th className="py-3.5 px-4 w-14">#ID</th>
                  <th className="py-3.5 px-4">Participant Details</th>
                  <th className="py-3.5 px-4">Organization & Role</th>
                  <th className="py-3.5 px-4">Opportunities / Interests</th>
                  <th className="py-3.5 px-4">Sessions</th>
                  <th className="py-3.5 px-4">Food</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-4 font-mono text-xs text-gray-400">
                      #{item.id}
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <Mail className="w-3 h-3 text-gray-400" />
                        {item.email}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <Phone className="w-3 h-3 text-gray-400" />
                        {item.contact}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{item.organization}</div>
                      <div className="text-xs text-gray-500">{item.designation}</div>
                      <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {item.address}
                      </div>
                    </td>

                    <td className="py-4 px-4 max-w-xs">
                      {item.opportunity_theme1 || item.business_connections ? (
                        <div className="space-y-1">
                          {item.opportunity_theme1 && (
                            <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-md font-medium truncate max-w-full">
                              🎯 {item.opportunity_theme1}
                            </span>
                          )}
                          {item.business_connections && (
                            <p className="text-xs text-gray-500 line-clamp-2" title={item.business_connections}>
                              🤝 {item.business_connections}
                            </p>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400 italic">None specified</span>
                      )}
                    </td>

                    <td className="py-4 px-4 max-w-xs">
                      {item.sessions && item.sessions.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          {item.sessions.map((sess) => (
                            <span
                              key={sess.id}
                              className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-medium truncate"
                              title={sess.title}
                            >
                              {sess.title}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400 italic">No sessions</span>
                      )}
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      {item.food ? (
                        <span className="text-xs px-2 py-1 rounded bg-gray-100 font-medium text-gray-700">
                          {item.food === "Veg" ? "🥗 Veg" : "🍗 Non-Veg"}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      {loadingStatusId === item.id ? (
                        <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <select
                          value={item.status || "Pending"}
                          onChange={(e) =>
                            setStatusChangeInfo({
                              id: item.id!,
                              newStatus: e.target.value as RegistrationStatus,
                              name: item.name,
                            })
                          }
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none ${
                            item.status === "Approved"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : item.status === "Rejected"
                              ? "bg-red-50 text-red-700 border-red-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      )}
                    </td>

                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => {
                          setSelectedParticipant(item);
                          setIsModalOpen(true);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Bar */}
        <div className="bg-gray-50 border-t border-gray-200 px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {count > 0 ? (page - 1) * pageSize + 1 : 0}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-800">
              {Math.min(page * pageSize, count)}
            </span>{" "}
            of <span className="font-semibold text-gray-800">{count}</span> entries
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!previous && page === 1}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Previous
            </button>

            {/* Page number buttons */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .map((pageNum, idx, arr) => {
                  const prevPageNum = arr[idx - 1];
                  const showEllipsis = prevPageNum && pageNum - prevPageNum > 1;

                  return (
                    <React.Fragment key={pageNum}>
                      {showEllipsis && (
                        <span className="px-1 text-gray-400 text-xs">…</span>
                      )}
                      <button
                        onClick={() => setPage(pageNum)}
                        className={`min-w-[32px] h-8 px-2 text-xs font-medium rounded-lg transition ${
                          page === pageNum
                            ? "bg-indigo-600 text-white"
                            : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    </React.Fragment>
                  );
                })}
            </div>

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={!next && page >= totalPages}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Next
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {statusChangeInfo && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Confirm Status Change</h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to change the registration status of{" "}
              <strong className="text-gray-900">{statusChangeInfo.name}</strong> to{" "}
              <strong className="text-indigo-600 font-semibold">{statusChangeInfo.newStatus}</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setStatusChangeInfo(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmStatusChange}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition"
              >
                Confirm Change
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Participant Details Modal */}
      {isModalOpen && selectedParticipant && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b pb-4 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Registration Details #{selectedParticipant.id}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  {selectedParticipant.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedParticipant.designation} · {selectedParticipant.organization}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
              >
                ✕
              </button>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4">
                  <div>
                    <span className="text-xs text-gray-500">Email Address</span>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">{selectedParticipant.email}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Phone Contact</span>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">{selectedParticipant.contact}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Address</span>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">{selectedParticipant.address}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Food Preference</span>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">
                      {selectedParticipant.food || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Opportunity Themes */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Opportunity & Networking Themes
                </h3>
                <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                  <div>
                    <span className="text-xs font-semibold text-gray-600">Opportunity Theme 1:</span>
                    <p className="text-sm text-gray-800 mt-0.5">
                      {selectedParticipant.opportunity_theme1 || "—"}
                    </p>
                  </div>
                  {selectedParticipant.opportunity_theme2 && (
                    <div>
                      <span className="text-xs font-semibold text-gray-600">Opportunity Theme 2:</span>
                      <p className="text-sm text-gray-800 mt-0.5">
                        {selectedParticipant.opportunity_theme2}
                      </p>
                    </div>
                  )}
                  {selectedParticipant.opportunity_theme3 && (
                    <div>
                      <span className="text-xs font-semibold text-gray-600">Opportunity Theme 3:</span>
                      <p className="text-sm text-gray-800 mt-0.5">
                        {selectedParticipant.opportunity_theme3}
                      </p>
                    </div>
                  )}
                  {selectedParticipant.business_connections && (
                    <div>
                      <span className="text-xs font-semibold text-gray-600">Business Connections Sought:</span>
                      <p className="text-sm text-gray-800 mt-0.5">
                        {selectedParticipant.business_connections}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sessions */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Registered Sessions
                </h3>
                <div className="space-y-2">
                  {selectedParticipant.sessions && selectedParticipant.sessions.length > 0 ? (
                    selectedParticipant.sessions.map((session) => (
                      <div
                        key={session.id}
                        className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-3"
                      >
                        <p className="text-sm font-semibold text-indigo-950">{session.title}</p>
                        <p className="text-xs text-indigo-700 mt-0.5">
                          📅 {session.date} · ⏰ {session.start_time} – {session.end_time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 italic">No sessions selected</p>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              {selectedParticipant.additional_info && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Additional Information
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap">
                    {selectedParticipant.additional_info}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Status:</span>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    selectedParticipant.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : selectedParticipant.status === "Rejected"
                      ? "bg-red-100 text-red-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {selectedParticipant.status || "Pending"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const nextSt =
                      selectedParticipant.status === "Approved"
                        ? "Rejected"
                        : "Approved";
                    handleStatusChange(selectedParticipant.id!, nextSt);
                  }}
                  className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition ${
                    selectedParticipant.status === "Approved"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {selectedParticipant.status === "Approved"
                    ? "Reject Registration"
                    : "Approve Registration"}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
