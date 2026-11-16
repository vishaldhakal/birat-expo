export const ZONES = [
  "Career Planning",
  "Financial Literacy",
  "Entrepreneurship",
  "Digital Skills",
  "Health & Wellbeing",
  "Environmental Sustainability",
  "Creative Industries",
  "Science & Technology",
  "Agriculture & Food",
  "Tourism & Hospitality",
];

export const SESSIONS = [
  { label: "Session A", time: "9:30 AM – 11:30 AM", code: "A" },
  { label: "Session B", time: "12:00 PM – 2:00 PM", code: "B" },
  { label: "Session C", time: "3:00 PM – 5:00 PM", code: "C" },
];

export const DAYS = [
  { label: "17 December", d: "1217", poush: "2 Poush 2083", dayNum: 1 },
  { label: "18 December", d: "1218", poush: "3 Poush 2083", dayNum: 2 },
  { label: "19 December", d: "1219", poush: "4 Poush 2083", dayNum: 3 },
  { label: "20 December", d: "1220", poush: "5 Poush 2083", dayNum: 4 },
  { label: "21 December", d: "1221", poush: "6 Poush 2083", dayNum: 5 },
  { label: "22 December", d: "1222", poush: "7 Poush 2083", dayNum: 6 },
  { label: "23 December", d: "1223", poush: "8 Poush 2083", dayNum: 7 },
  { label: "24 December", d: "1224", poush: "9 Poush 2083", dayNum: 8 },
  { label: "25 December", d: "1225", poush: "10 Poush 2083", dayNum: 9 },
  { label: "26 December", d: "1226", poush: "11 Poush 2083", dayNum: 10 },
];

/**
 * Generates slot reference code, e.g. "Z1-1217-A"
 * @param zoneIndex  0-based index from ZONES array
 * @param dayCode    e.g. "1217" from DAYS[d].d
 * @param session    "A" | "B" | "C"
 */
export function generateRef(zoneIndex: number, dayCode: string, session: string): string {
  return `Z${zoneIndex + 1}-${dayCode}-${session}`;
}

