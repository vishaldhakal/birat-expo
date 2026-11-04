export type TrackType = "Makerspace" | "Design Studio" | "Growth Room";

export type LegacyTrackKey = "school" | "college" | "business";

export type RegistrationStatus =
  | "Pending"
  | "Contacted"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export type HeardAboutUsChoice =
  | "At Birat Expo"
  | "CIM website"
  | "Facebook / social media"
  | "School / college"
  | "Friend or colleague"
  | "CIM member / staff"
  | "Newspaper / radio"
  | "Other";

// Base interface with common fields
export interface BaseRegistrationPayload {
  track: TrackType | LegacyTrackKey;
  full_name: string;
  phone: string;
  email?: string | null;
  organization_name?: string | null;
  role?: string | null;
  municipality?: string | null;
  notes?: string | null;
  heard_about_us?: HeardAboutUsChoice | string | null;
  consent: boolean;
  keep_updated?: boolean;
}

// Room 1: Makerspace (Schools & Teachers)
export interface MakerspaceRegistrationPayload extends BaseRegistrationPayload {
  track: "Makerspace" | "school";
  school_request: string;
  school_type?: string | null;
  school_grades: string; // e.g. "7, 8, 9, 10"
  school_students_count: number;
  school_teachers_count?: number | null;
  school_preferred_date_1?: string | null;
  school_preferred_date_2?: string | null;
  school_session_slot?: "Morning" | "Afternoon" | "Either" | string | null;
  school_session_month?: string | null;
  school_available_space?: string | null;
}

// Room 2: Design Studio (College Students)
export interface DesignStudioRegistrationPayload extends BaseRegistrationPayload {
  track: "Design Studio" | "college";
  college_programme: string; // e.g. "BBS, BBA, BSc CSIT"
  college_year?: string | null;
  gender?: "Female" | "Male" | "Other" | "Prefer not to say" | string | null;
  age_group?: "Under 18" | "18–21" | "22–25" | "26–30" | "Over 30" | string | null;
  idea_stage: string; // e.g. "No idea yet, just curious"
  interested_topics?: string | null; // e.g. "Agriculture & food, Tech & digital"
  preferred_contact_channel: "Phone call" | "SMS" | "Viber / WhatsApp" | "Email" | string;
  willing_to_host_workshop?: boolean;
}

// Room 3: Growth Room (Business Owners)
export interface GrowthRoomRegistrationPayload extends BaseRegistrationPayload {
  track: "Growth Room" | "business";
  district: string; // e.g. "Morang", "Sunsari", "Outside Koshi Province"
  business_registration_type: string; // e.g. "Company (OCR)"
  trading_duration: string; // e.g. "1–3 years"
  business_sector: string; // e.g. "Agriculture & agro-processing"
  employees_count?: "1–4" | "5–9" | "10–19" | "20–49" | "50+" | string | null;
  annual_turnover?: string | null;
  ownership_diversity?: string | null; // e.g. "Women-led, Youth-led (under 40)"
  area_of_interest: string; // e.g. "Health Check-up + SGB Accelerator"
  expo_visit_day?: string | null;
  support_needs?: string | null; // e.g. "Finance & loans, Marketing & branding"
  biggest_challenge?: string | null;
}

export type StartupRegistrationPayload =
  | MakerspaceRegistrationPayload
  | DesignStudioRegistrationPayload
  | GrowthRoomRegistrationPayload;

export interface StartupRegistrationResponse {
  id: number;
  track: TrackType;
  status: RegistrationStatus;
  full_name: string;
  phone: string;
  email: string | null;
  organization_name: string | null;
  role: string | null;
  municipality: string | null;
  notes: string | null;
  school_request: string | null;
  school_type: string | null;
  school_grades: string | null;
  school_students_count: number | null;
  school_teachers_count: number | null;
  school_preferred_date_1: string | null;
  school_preferred_date_2: string | null;
  school_session_slot: string | null;
  school_session_month: string | null;
  school_available_space: string | null;
  gender: string | null;
  age_group: string | null;
  college_programme: string | null;
  college_year: string | null;
  idea_stage: string | null;
  interested_topics: string | null;
  preferred_contact_channel: string | null;
  willing_to_host_workshop: boolean;
  district: string | null;
  business_registration_type: string | null;
  trading_duration: string | null;
  business_sector: string | null;
  employees_count: string | null;
  annual_turnover: string | null;
  ownership_diversity: string | null;
  area_of_interest: string | null;
  expo_visit_day: string | null;
  support_needs: string | null;
  biggest_challenge: string | null;
  heard_about_us: string | null;
  consent: boolean;
  keep_updated: boolean;
  created_at: string;
  updated_at: string;
}

