export interface Panelist {
  role: string;
  name: string;
  profile_image: string | null;
  company: string | null;
  location: string | null;
  biodata: string;
  thematicpanelists: Thematicpanelists[];
}
export interface Thematicpanelists {
  role: string;
  name: string;
  profile_image: string | null;
  company: string | null;
  location: string | null;
  biodata: string;
}

export interface SubSession {
  id: number;
  title: string;
  description: string;
  panelists: Panelist[]
  thematicpanelists: Thematicpanelists[]
}

export interface ThematicSession {
  thematicpanelists: Thematicpanelists[];
  id: number;
  title: string;
  date: string;
  start_time: string;
  end_time: string;
  description: string;
  sub_sessions: SubSession[];
}

export interface ThematicRegistration {
  id?: number;
  name: string;
  organization: string;
  designation: string;
  address: string;
  email: string;
  contact: string;
  participant: string | null;
  sessions: number[];

  opportunity_theme1?: string | null;
  opportunity_theme2?: string | null;
  opportunity_theme3?: string | null;
  business_connections?: string | null;

  arrival_date?: string | null;
  departure_date?: string | null;
  flight_no?: string | null;
  flight_time?: string | null;
  return_flight_no?: string | null;
  return_flight_time?: string | null;
  airline?: string | null;

  food?: string | null;
  hotel_accomodation?: string | null;
  check_in_date?: string | null;
  check_out_date?: string | null;
  hotel?: string | null;

  additional_info?: string | null;
  checked_in?: boolean;
}

export interface ThematicRegistrationResponse {
  id?: number;
  name: string;
  status: "Approved" | "Rejected" | "Pending";
  organization: string;
  designation: string;
  address: string;
  email: string;
  contact: string;
  sessions: ThematicSession[];
  arrival_date: string;
  departure_date: string;
  participant: string | null;
  checked_in?: boolean;
  opportunity_theme1?: string | null;
  opportunity_theme2?: string | null;
  opportunity_theme3?: string | null;
  business_connections?: string | null;
  additional_info?: string | null;
  check_in_date?: string | null;
  check_out_date?: string | null;
  hotel?: string | null;
  flight_no?: string | null;
  flight_time?: string | null;
  return_flight_no?: string | null;
  return_flight_time?: string | null;
  food?: string | null;
  hotel_accomodation?: string | null;
  airline?: string | null;
}

export async function fetchThematicSessions(): Promise<ThematicSession[]> {
  const response = await fetch(
    "https://cim.baliyoventures.com/api/thematic-sessions/"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch thematic sessions");
  }
  const data = await response.json();
  return data.results || data;
}
