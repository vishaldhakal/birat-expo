"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fetchThematicSessions, type ThematicSession } from "@/types/thematic";
import { registerForThematic } from "@/api/thematic";
import { useRouter, useSearchParams } from "next/navigation";
import { formatDate } from "date-fns";
import { ThematicRegistration } from "@/types/thematic";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  organization: yup.string().required("Organization is required"),
  designation: yup.string().required("Designation is required"),
  address: yup.string().required("Address is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(/^\+?1?\d{9,15}$/, "Invalid phone number")
    .required("Contact number is required"),

  sessions: yup
    .array()
    .min(1, "Please select at least one session")
    .required("Please select at least one session"),
  opportunity_theme1: yup.string().optional(),
  opportunity_theme2: yup.string().optional(),
  opportunity_theme3: yup.string().optional(),
  business_connections: yup.string().optional(),
  additional_info: yup.string().optional(),
});

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

import { ChevronDown, Check } from "lucide-react";

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-left text-sm transition-all flex items-center justify-between ${
          isOpen
            ? "border-indigo-500 ring-4 ring-indigo-500/10 shadow-sm"
            : "border-gray-200 hover:border-gray-300 shadow-xs"
        }`}
      >
        <span className={value ? "text-gray-900 font-medium" : "text-gray-400"}>
          {value || placeholder || "Select option"}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-indigo-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-30 mt-1.5 w-full rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl shadow-gray-200/50 animate-in fade-in zoom-in-95 duration-150">
          <div className="max-h-60 overflow-y-auto space-y-0.5">
            {options.map((opt) => {
              const isSelected = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg text-left transition-colors ${
                    isSelected
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span>{opt}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition";

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-6 py-4">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export default function ThematicRegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState<ThematicSession[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const preSelectedSession = searchParams.get("session");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      organization: "",
      designation: "",
      address: "",
      email: "",
      contact: "",
      sessions: [],
      opportunity_theme1: "",
      opportunity_theme2: "",
      opportunity_theme3: "",
      business_connections: "",
      additional_info: "",
    },
  });

  const selectedSessions = watch("sessions") || [];

  useEffect(() => {
    fetchThematicSessions()
      .then(setSessions)
      .catch((err) => console.error("Failed to load sessions:", err));
  }, []);

  useEffect(() => {
    if (preSelectedSession) {
      const id = parseInt(preSelectedSession);
      const cur = getValues("sessions") || [];
      if (!cur.includes(id)) {
        setValue("sessions", [...cur, id], {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    }
  }, [preSelectedSession, setValue, getValues]);

  const handleSubmitForm = async (data: Record<string, unknown>) => {
    setLoading(true);
    const fmt = (d?: string | null) => (d ? formatDate(d, "yyyy-MM-dd") : null);

    const payload: ThematicRegistration = {
      name: data.name as string,
      organization: data.organization as string,
      designation: data.designation as string,
      address: data.address as string,
      email: data.email as string,
      contact: data.contact as string,
      participant: null,
      sessions: (data.sessions as string[]).map((id) => parseInt(id, 10)),
      opportunity_theme1: (data.opportunity_theme1 as string) || null,
      opportunity_theme2: (data.opportunity_theme2 as string) || null,
      opportunity_theme3: (data.opportunity_theme3 as string) || null,
      business_connections: (data.business_connections as string) || null,
      food: null,
      additional_info: (data.additional_info as string) || null,
    };

    try {
      await registerForThematic(payload);
      router.push("/thematic/thank-you");
    } catch (err) {
      console.error("Registration failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-6">


        {/* 2. Personal Information */}
        <SectionCard title="Personal Information">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full Name" error={errors.name?.message}>
              <input type="text" {...register("name")} placeholder="e.g. Ram Prasad Sharma" className={inputCls} />
            </Field>
            <Field label="Organization" error={errors.organization?.message}>
              <input type="text" {...register("organization")} placeholder="Company / Chamber" className={inputCls} />
            </Field>
            <Field label="Designation" error={errors.designation?.message}>
              <input type="text" {...register("designation")} placeholder="e.g. CEO, Director" className={inputCls} />
            </Field>
            <Field label="Address" error={errors.address?.message}>
              <input type="text" {...register("address")} placeholder="City, District" className={inputCls} />
            </Field>
            <Field label="Email Address" error={errors.email?.message}>
              <input type="email" {...register("email")} placeholder="you@example.com" className={inputCls} />
            </Field>
            <Field label="Contact Number" error={errors.contact?.message}>
              <input type="text" {...register("contact")} placeholder="+977-98XXXXXXXX" className={inputCls} />
            </Field>
          </div>
        </SectionCard>

        {/* 3. Opportunity & Networking */}
        <SectionCard title="Opportunity & Networking Interests">
          <div className="flex flex-col gap-4">
            <Field label="Opportunity Theme 1" hint="Primary area of business interest you are bringing to the summit">
              <input type="text" {...register("opportunity_theme1")} placeholder="e.g. Agricultural export" className={inputCls} />
            </Field>
            <Field label="Opportunity Theme 2">
              <input type="text" {...register("opportunity_theme2")} placeholder="e.g. Technology partnerships" className={inputCls} />
            </Field>
            <Field label="Opportunity Theme 3">
              <input type="text" {...register("opportunity_theme3")} placeholder="e.g. Investment in tourism" className={inputCls} />
            </Field>
            <Field
              label="What types of business connections are you seeking?"
              hint="Select the type of business connection you are looking for"
              error={errors.business_connections?.message}
            >
              <CustomSelect
                value={watch("business_connections") || ""}
                onChange={(val) =>
                  setValue("business_connections", val, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                placeholder="Select connection type..."
                options={[
                  "Buyers / Bulk Purchasers",
                  "Suppliers / Raw Materials",
                  "Distributors / Dealers",
                  "Investors / Joint-Venture Partners",
                  "Technology / Technical Partners",
                  "Export Markets / International Buyers",
                  "Other Business Collaborations",
                ]}
              />
            </Field>
          </div>
        </SectionCard>

        {/* 4. Session Selection */}
        <SectionCard title="Select Sessions">
          {sessions.length === 0 ? (
            <p className="text-sm text-gray-400">Loading sessions…</p>
          ) : (
            <div className="flex flex-col gap-3">
              {sessions.map((session) => {
                const selected = selectedSessions.includes(session.id);
                return (
                  <div
                    key={session.id}
                    onClick={() => {
                      const next = selected
                        ? selectedSessions.filter((id) => id !== session.id)
                        : [...selectedSessions, session.id];
                      setValue("sessions", next, { shouldValidate: true });
                    }}
                    className={`flex items-start gap-3 rounded-xl border-2 p-4 cursor-pointer transition-all ${
                      selected ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all ${
                        selected ? "border-indigo-500 bg-indigo-500" : "border-gray-300"
                      }`}
                    >
                      {selected && (
                        <svg className="h-3 w-3 text-white" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 text-sm">{session.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        <span className="text-indigo-600 font-medium">{session.date}</span>
                        {" · "}
                        {session.start_time} – {session.end_time}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); router.push(`/thematic/details/${session.id}`); }}
                      className="shrink-0 text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Details →
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          {errors.sessions && (
            <p className="mt-2 text-xs text-red-500">{errors.sessions.message}</p>
          )}
        </SectionCard>



        {/* 8. Additional Info */}
        <SectionCard title="Additional Information">
          <Field label="Any other notes or special requirements" hint="Optional">
            <textarea
              {...register("additional_info")}
              rows={3}
              placeholder="Write here…"
              className={`${inputCls} resize-none`}
            />
          </Field>
        </SectionCard>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white
            hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-md hover:shadow-lg
            hover:scale-[1.01] active:scale-[0.99]"
        >
          {loading ? "Submitting…" : "Complete Registration"}
        </button>
      </form>
    </div>
  );
}
