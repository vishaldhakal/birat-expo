export interface LearnAndWorkBookingPayload {
  zone: string;
  date: string;
  time: string;
  ref: string;
  school: string;
  grade: string;
  teacher: string;
  phone: string;
  email?: string;
  students: string; // "15"–"20"
  note?: string;
}

export interface LearnAndWorkBookingResponse {
  detail: string;
  id: number;
  ref: string;
  zone: string;
  date: string;
  time: string;
  school: string;
}

export interface LearnAndWorkBooking extends LearnAndWorkBookingPayload {
  id: number;
  created_at: string;
}

