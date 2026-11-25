"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  DownloadCloud,
  Eye,
  Trash2,
  Calendar,
  Clock,
  Building2,
  Users,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  X,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useGetLearnAndWorkBookings, deleteBooking } from "@/api/learnAndWork";
import { LearnAndWorkBooking } from "@/types/learnAndWork";
import { ZONES, DAYS } from "@/constants/learnAndWork";

export default function LearnAndWorkAdminTable() {
  const [selectedZone, setSelectedZone] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [selectedZone, selectedDate]);

  // SWR data
  const { bookings, count, nextPage, previousPage, isLoading, error, mutate } =
    useGetLearnAndWorkBookings({
      zone: selectedZone || undefined,
      date: selectedDate || undefined,
      page,
      search: debouncedSearch || undefined,
    });

  useEffect(() => {
    if (page === 1 && nextPage && bookings.length > 0) {
      setPageSize(bookings.length);
    }
  }, [page, nextPage, bookings.length]);

  // Modal state
  const [selectedBooking, setSelectedBooking] = useState<LearnAndWorkBooking | null>(null);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  // Client-side filtering by search query
  const filteredBookings = useMemo(() => {
    if (!bookings) return [];

    return bookings.filter((item) => {
      if (selectedZone && item.zone !== selectedZone) return false;
      if (selectedDate && item.date !== selectedDate) return false;

      if (search.trim()) {
        const query = search.toLowerCase();
        const searchable = [
          item.ref,
          item.school,
          item.teacher,
          item.phone,
          item.email,
          item.grade,
          item.zone,
          item.date,
          item.time,
          item.note,
        ];
        return searchable.some((val) => val?.toLowerCase().includes(query));
      }

      return true;
    });
  }, [bookings, search, selectedZone, selectedDate]);

  // Aggregate stats
  const stats = useMemo(() => {
    const list = bookings || [];
    const totalBookings = list.length;
    const totalStudents = list.reduce(
      (acc, b) => acc + (parseInt(b.students, 10) || 0),
      0
    );
    const uniqueSchools = new Set(list.map((b) => b.school.trim().toLowerCase())).size;
    const uniqueZones = new Set(list.map((b) => b.zone)).size;

    return { totalBookings, totalStudents, uniqueSchools, uniqueZones };
  }, [bookings]);

  // Delete handler
  const handleDelete = async (id: number) => {
    try {
      setIsDeleting(id);
      await deleteBooking(id);
      await mutate();
      setDeleteConfirmId(null);
      if (selectedBooking?.id === id) {
        setSelectedBooking(null);
      }
    } catch (err: any) {
      alert("Failed to delete booking: " + (err?.message || "Server error"));
    } finally {
      setIsDeleting(null);
    }
  };

  // CSV download
  const handleDownloadCSV = () => {
    if (!filteredBookings || filteredBookings.length === 0) {
      alert("No records to export.");
      return;
    }

    const headers = [
      "ID",
      "Reference",
      "Zone",
      "Date",
      "Time",
      "School",
      "Grade",
      "Teacher",
      "Phone",
      "Email",
      "Students",
      "Notes",
      "Created At",
    ];

    const rows = filteredBookings.map((b) => [
      b.id,
      `"${(b.ref || "").replace(/"/g, '""')}"`,
      `"${(b.zone || "").replace(/"/g, '""')}"`,
      `"${(b.date || "").replace(/"/g, '""')}"`,
      `"${(b.time || "").replace(/"/g, '""')}"`,
      `"${(b.school || "").replace(/"/g, '""')}"`,
      `"${(b.grade || "").replace(/"/g, '""')}"`,
      `"${(b.teacher || "").replace(/"/g, '""')}"`,
      `"${(b.phone || "").replace(/"/g, '""')}"`,
      `"${(b.email || "").replace(/"/g, '""')}"`,
      b.students || "0",
      `"${(b.note || "").replace(/"/g, '""')}"`,
      `"${(b.created_at || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `learn_and_work_bookings_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Total Bookings
            </span>
            <FileText className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {stats.totalBookings}
          </span>
          <span className="text-xs text-gray-500 block mt-1">Confirmed requests</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Total Students
            </span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {stats.totalStudents}
          </span>
          <span className="text-xs text-gray-500 block mt-1">15–20 per session</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Schools & Groups
            </span>
            <Building2 className="w-4 h-4 text-purple-600" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {stats.uniqueSchools}
          </span>
          <span className="text-xs text-gray-500 block mt-1">Participating institutions</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Zones Booked
            </span>
            <Sparkles className="w-4 h-4 text-amber-600" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {stats.uniqueZones} / 10
          </span>
          <span className="text-xs text-gray-500 block mt-1">Active hub zones</span>
        </div>
      </div>

      {/* Control Bar: Search, Filters, CSV Export */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by school, teacher, phone, ref, email, or grade..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Action buttons: Refresh & Export */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => mutate()}
              title="Refresh Bookings"
              className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadCSV}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition shadow-sm"
            >
              <DownloadCloud className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Filters:</span>
          </div>

          {/* Zone Filter */}
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All Zones (10)</option>
            {ZONES.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select>

          {/* Date Filter */}
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All Expo Dates (10 Days)</option>
            {DAYS.map((d) => {
              const fullDateLabel = `${d.label} 2026`;
              return (
                <option key={d.d} value={fullDateLabel}>
                  {fullDateLabel} ({d.poush})
                </option>
              );
            })}
          </select>

          {(selectedZone || selectedDate || search) && (
            <button
              onClick={() => {
                setSelectedZone("");
                setSelectedDate("");
                setSearch("");
              }}
              className="text-xs text-red-600 hover:underline font-medium ml-auto"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-50/80 text-xs font-semibold uppercase text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3.5">Ref Code</th>
                <th className="px-4 py-3.5">Skill Zone</th>
                <th className="px-4 py-3.5">Date & Time</th>
                <th className="px-4 py-3.5">School / Group</th>
                <th className="px-4 py-3.5">Contact Person</th>
                <th className="px-4 py-3.5 text-center">Students</th>
                <th className="px-4 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="px-4 py-16 text-center text-gray-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm font-medium">Loading Learn & Work bookings...</span>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-red-500">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <AlertCircle className="w-8 h-8 text-red-400" />
                      <span className="font-semibold">Failed to load bookings from API</span>
                      <span className="text-xs text-gray-500">
                        {String((error as any)?.message || "Please check network or JWT auth")}
                      </span>
                      <button
                        onClick={() => mutate()}
                        className="mt-2 px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-100"
                      >
                        Try Again
                      </button>
                    </div>
                  </td>
                </tr>
              ) : filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-16 text-center text-gray-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <FileText className="w-10 h-10 text-gray-300" />
                      <span className="text-base font-semibold text-gray-700">
                        No Bookings Found
                      </span>
                      <span className="text-xs text-gray-500 max-w-sm">
                        {search || selectedZone || selectedDate
                          ? "No session bookings match your current filters. Try resetting the search or filter options."
                          : "No group session requests have been submitted yet."}
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr
                    key={b.id || b.ref}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    {/* Ref */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-900 border border-slate-200 rounded-lg">
                        {b.ref}
                      </span>
                    </td>

                    {/* Zone */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="font-semibold text-gray-900 block">{b.zone}</span>
                    </td>

                    {/* Date & Time */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{b.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>{b.time}</span>
                      </div>
                    </td>

                    {/* School & Grade */}
                    <td className="px-4 py-3.5">
                      <div className="font-medium text-gray-900 line-clamp-1">{b.school}</div>
                      <div className="text-xs text-gray-500">{b.grade}</div>
                    </td>

                    {/* Contact Person */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{b.teacher}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                        <a
                          href={`tel:${b.phone}`}
                          className="hover:text-blue-600 flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span>{b.phone}</span>
                        </a>
                      </div>
                    </td>

                    {/* Students */}
                    <td className="px-4 py-3.5 text-center whitespace-nowrap">
                      <span className="inline-flex items-center justify-center font-bold px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {b.students} students
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedBooking(b)}
                          title="View Details"
                          className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(b.id)}
                          title="Delete Booking"
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info & Pagination */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>
            Showing{" "}
            <strong>{count === 0 ? 0 : (page - 1) * pageSize + 1}</strong> to{" "}
            <strong>{Math.min(page * pageSize, count)}</strong> of{" "}
            <strong>{count}</strong> total bookings
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!previousPage || page <= 1 || isLoading}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>
            <span className="text-xs text-gray-700 px-1">
              Page {page} of {Math.max(1, Math.ceil(count / pageSize))}
            </span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={!nextPage || isLoading}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Group Session Booking
                </span>
                <h3 className="text-2xl font-bold text-gray-900 font-serif">
                  {selectedBooking.school}
                </h3>
                <p className="text-xs font-mono font-bold text-gray-500 mt-1">
                  Ref: {selectedBooking.ref}
                </p>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid of details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 font-semibold block">Skill Zone</span>
                <span className="font-bold text-gray-900 text-base">{selectedBooking.zone}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 font-semibold block">Class / Grade</span>
                <span className="font-bold text-gray-900 text-base">{selectedBooking.grade}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 font-semibold block">Date</span>
                <span className="font-bold text-gray-900">{selectedBooking.date}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 font-semibold block">Time Slot</span>
                <span className="font-bold text-gray-900">{selectedBooking.time}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 font-semibold block">Teacher / Contact</span>
                <span className="font-bold text-gray-900">{selectedBooking.teacher}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 font-semibold block">Group Size</span>
                <span className="font-bold text-emerald-700">
                  {selectedBooking.students} students
                </span>
              </div>
            </div>

            {/* Contact quick links */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Direct Contact
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${selectedBooking.phone}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 font-medium hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>{selectedBooking.phone}</span>
                </a>
                <a
                  href={`https://wa.me/977${selectedBooking.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                    `Hello ${selectedBooking.teacher}, regarding your Learn and Work session booking (${selectedBooking.ref}) for ${selectedBooking.school} at Birat Expo 2026:`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 font-medium hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                {selectedBooking.email && (
                  <a
                    href={`mailto:${selectedBooking.email}?subject=${encodeURIComponent(
                      `Session Confirmation ${selectedBooking.ref} - Birat Expo 2026`
                    )}`}
                    className="inline-flex items-center gap-1.5 text-indigo-600 font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{selectedBooking.email}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Notes */}
            {selectedBooking.note && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-sm text-amber-950">
                <span className="font-bold block mb-1">Additional Notes from Group:</span>
                <p className="leading-relaxed">{selectedBooking.note}</p>
              </div>
            )}

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button
                onClick={() => setDeleteConfirmId(selectedBooking.id)}
                className="text-red-600 hover:text-red-700 text-xs font-semibold flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete This Record</span>
              </button>

              <button
                onClick={() => setSelectedBooking(null)}
                className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteConfirmId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-gray-200 space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Confirm Deletion</h4>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete booking record #{deleteConfirmId}? This action cannot be
              undone.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                disabled={isDeleting === deleteConfirmId}
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition disabled:opacity-50"
              >
                {isDeleting === deleteConfirmId ? "Deleting..." : "Delete Permanently"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

