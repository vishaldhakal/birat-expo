import React from "react";

export interface ZoneData {
  id: number;
  title: string;
  skills: string;
  handsOn: string;
  color: string;
  iconName: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  label: string;
}

export interface ExpoDay {
  index: number;
  dayNum: number;
  dateNum: number;
  dateLabel: string;
  fullDate: string;
  poush: string;
}

export interface BookingFormData {
  school: string;
  grade: string;
  teacher: string;
  phone: string;
  email: string;
  count: string;
  note: string;
}

export interface SubmittedBooking {
  id?: number;
  ref: string;
  zone: string;
  date: string;
  poush: string;
  time: string;
  school: string;
  grade: string;
  teacher: string;
  phone: string;
  email: string;
  students: string;
  note: string;
  detail?: string;
}

