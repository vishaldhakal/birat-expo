"use client";

import React, { useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import {
  CheckCircle2,
  XCircle,
  Mail,
  Phone,
  Pencil,
  Trash2,
  X,
  AlertTriangle,
} from "lucide-react";
import { useGetSponsorStallStatus, SponsorStallType } from "@/api/stall-status";

const SPONSOR_API_URL = "https://cim.baliyoventures.com/api/sponsor/";

export const SPONSOR_TIER_OPTIONS = [
  { value: "Title Partner", label: "Title Partner", color: "bg-purple-100 text-purple-800 border-purple-200" },
  { value: "Powered By Partner", label: "Powered By Partner", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { value: "Platinum", label: "Platinum", color: "bg-slate-100 text-slate-800 border-slate-200" },
  { value: "Diamond", label: "Diamond", color: "bg-sky-100 text-sky-800 border-sky-200" },
  { value: "Gold", label: "Gold", color: "bg-amber-100 text-amber-800 border-amber-200" },
  { value: "Silver", label: "Silver", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
];

const getTierBadgeStyle = (tier: string) => {
  const match = SPONSOR_TIER_OPTIONS.find(
    (t) => t.value.toLowerCase() === (tier || "").toLowerCase()
  );
  return match ? match.color : "bg-gray-100 text-gray-800 border-gray-200";
};

export default function SponsorAdminTable() {
  const {
    sponsorStallStatus,
    sponsorStallStatusLoading,
    sponsorStallStatusError,
  } = useGetSponsorStallStatus();

  // Edit Modal State
  const [editingSponsor, setEditingSponsor] = useState<SponsorStallType | null>(null);
  const [editFormData, setEditFormData] = useState<{
    stall_type: string;
    stall_id: string;
    company_name: string;
    company_email: string;
    contact_number: string;
  }>({
    stall_type: "Silver",
    stall_id: "",
    company_name: "",
    company_email: "",
    contact_number: "",
  });
  const [isEditSaving, setIsEditSaving] = useState(false);
  const [editError, setEditError] = useState("");

  // Delete Modal State
  const [deletingSponsor, setDeletingSponsor] = useState<SponsorStallType | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  // Toast notification feedback
  const [toastMessage, setToastMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Open Edit Modal
  const handleOpenEdit = (sponsor: SponsorStallType) => {
    setEditingSponsor(sponsor);
    setEditFormData({
      stall_type: sponsor.stall_type || "Silver",
      stall_id: sponsor.stall_id || "",
      company_name: sponsor.company_name || "",
      company_email: sponsor.company_email || "",
      contact_number: sponsor.contact_number || "",
    });
    setEditError("");
  };

  // Save Edit (PATCH /api/sponsor/{id}/)
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSponsor) return;

    if (!editFormData.stall_id.trim()) {
      setEditError("Stall ID is required (e.g. S12 or S13,S14)");
      return;
    }

    setIsEditSaving(true);
    setEditError("");

    try {
      await axios.patch(`${SPONSOR_API_URL}${editingSponsor.id}/`, {
        stall_type: editFormData.stall_type,
        stall_id: editFormData.stall_id.trim(),
        company_name: editFormData.company_name.trim(),
        company_email: editFormData.company_email.trim(),
        contact_number: editFormData.contact_number.trim(),
      });

      await mutate(SPONSOR_API_URL);
      setEditingSponsor(null);
      showToast(`Sponsor "${editFormData.company_name || "Record"}" updated successfully!`);
    } catch (err: any) {
      console.error("Error updating sponsor:", err);
      const msg =
        err?.response?.data?.stall_type?.[0] ||
        err?.response?.data?.stall_id?.[0] ||
        err?.response?.data?.detail ||
        err?.message ||
        "Failed to update sponsor. Please try again.";
      setEditError(msg);
    } finally {
      setIsEditSaving(false);
    }
  };

  // Confirm Delete (DELETE /api/sponsor/{id}/)
  const handleConfirmDelete = async () => {
    if (!deletingSponsor) return;

    setIsDeleting(true);
    setDeleteError("");

    try {
      await axios.delete(`${SPONSOR_API_URL}${deletingSponsor.id}/`);
      await mutate(SPONSOR_API_URL);
      const deletedName = deletingSponsor.company_name || `Stall ${deletingSponsor.stall_id}`;
      setDeletingSponsor(null);
      if (editingSponsor?.id === deletingSponsor.id) {
        setEditingSponsor(null);
      }
      showToast(`Sponsor "${deletedName}" deleted successfully!`);
    } catch (err: any) {
      console.error("Error deleting sponsor:", err);
      const msg =
        err?.response?.data?.detail ||
        err?.message ||
        "Failed to delete sponsor. Please try again.";
      setDeleteError(msg);
    } finally {
      setIsDeleting(false);
    }
  };

  const sponsorsList = sponsorStallStatus || [];

  return (
    <div className="space-y-4">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition ${
            toastMessage.type === "success"
              ? "bg-emerald-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toastMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-200" />
          ) : (
            <XCircle className="w-5 h-5 text-red-200" />
          )}
          <span>{toastMessage.text}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 hover:opacity-80"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {sponsorStallStatusLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-gray-500">
            <div className="w-7 h-7 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm">Loading sponsors...</p>
          </div>
        ) : sponsorStallStatusError ? (
          <div className="py-16 text-center text-red-500 px-4">
            <AlertTriangle className="w-7 h-7 mx-auto text-red-500 mb-2" />
            <p className="font-semibold text-sm">Failed to load sponsor data.</p>
            <p className="text-xs text-gray-400 mt-1">
              Please check your connection or try again later.
            </p>
          </div>
        ) : sponsorsList.length === 0 ? (
          <div className="py-16 text-center text-gray-500 px-4">
            <p className="text-sm font-semibold text-gray-800">No sponsors found</p>
            <p className="text-xs text-gray-400 mt-1">No sponsors registered yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/90 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3.5 px-5">Company Name</th>
                  <th className="py-3.5 px-5">Stall Type</th>
                  <th className="py-3.5 px-5">Stall ID</th>
                  <th className="py-3.5 px-5">Company Email</th>
                  <th className="py-3.5 px-5">Contact Number</th>
                  <th className="py-3.5 px-5 text-right pr-6 w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {sponsorsList.map((item) => {
                  const stalls = (item.stall_id || "")
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean);

                  return (
                    <tr
                      key={item.id}
                      onClick={() => handleOpenEdit(item)}
                      className="cursor-pointer hover:bg-indigo-50/40 transition select-none group"
                      title="Click row to edit"
                    >
                      {/* Company Name */}
                      <td className="py-3.5 px-5 font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                        {item.company_name || (
                          <span className="text-gray-400 italic">No name</span>
                        )}
                      </td>

                      {/* Stall Type / Tier */}
                      <td className="py-3.5 px-5">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTierBadgeStyle(
                            item.stall_type
                          )}`}
                        >
                          {item.stall_type || "—"}
                        </span>
                      </td>

                      {/* Stall ID */}
                      <td className="py-3.5 px-5">
                        <div className="flex flex-wrap gap-1">
                          {stalls.length > 0 ? (
                            stalls.map((stall, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-800 text-xs font-mono font-medium border border-gray-200"
                              >
                                {stall}
                              </span>
                            ))
                          ) : (
                            <span className="text-xs text-gray-400 italic">—</span>
                          )}
                        </div>
                      </td>

                      {/* Company Email */}
                      <td className="py-3.5 px-5 text-xs text-gray-600">
                        {item.company_email ? (
                          <span className="inline-flex items-center gap-1.5 text-gray-700">
                            <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                            <span className="truncate max-w-[200px]">
                              {item.company_email}
                            </span>
                          </span>
                        ) : (
                          <span className="text-gray-400 italic">—</span>
                        )}
                      </td>

                      {/* Contact Number */}
                      <td className="py-3.5 px-5 text-xs text-gray-600 font-mono">
                        {item.contact_number ? (
                          <span className="inline-flex items-center gap-1.5 text-gray-700">
                            <Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                            <span>{item.contact_number}</span>
                          </span>
                        ) : (
                          <span className="text-gray-400 italic">—</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-5 text-right pr-6">
                        <div className="inline-flex items-center gap-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEdit(item);
                            }}
                            className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-white rounded-lg transition"
                            title="Edit"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeletingSponsor(item);
                              setDeleteError("");
                            }}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-white rounded-lg transition"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─── EDIT DIALOG ───────────────────────────────────────────────────────── */}
      {editingSponsor && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">
                Edit Sponsor
              </h3>
              <button
                onClick={() => setEditingSponsor(null)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveEdit} className="p-5 space-y-3.5">
              {editError && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{editError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={editFormData.company_name}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, company_name: e.target.value })
                  }
                  placeholder="e.g. Century, PLO"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Stall Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={editFormData.stall_type}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, stall_type: e.target.value })
                    }
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {SPONSOR_TIER_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Stall ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={editFormData.stall_id}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, stall_id: e.target.value })
                    }
                    placeholder="e.g. S12 or S13,S14"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Company Email
                </label>
                <input
                  type="email"
                  value={editFormData.company_email}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, company_email: e.target.value })
                  }
                  placeholder="e.g. info@company.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="text"
                  value={editFormData.contact_number}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, contact_number: e.target.value })
                  }
                  placeholder="e.g. 9851131915"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingSponsor(null)}
                  disabled={isEditSaving}
                  className="px-3.5 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isEditSaving}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium transition shadow-sm disabled:opacity-50"
                >
                  {isEditSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── DELETE DIALOG ──────────────────────────────────────────────────────── */}
      {deletingSponsor && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-sm w-full shadow-xl border border-gray-100 p-5">
            <h3 className="text-base font-semibold text-gray-900">
              Delete Sponsor?
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Are you sure you want to delete{" "}
              <strong className="text-gray-800">
                {deletingSponsor.company_name || deletingSponsor.stall_id}
              </strong>
              ? This action cannot be undone.
            </p>

            {deleteError && (
              <div className="mt-3 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                {deleteError}
              </div>
            )}

            <div className="flex items-center justify-end gap-2.5 mt-5">
              <button
                type="button"
                onClick={() => setDeletingSponsor(null)}
                disabled={isDeleting}
                className="px-3.5 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-medium transition shadow-sm disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
