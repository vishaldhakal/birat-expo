import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn and Work Platform · Birat Expo 2026",
  description:
    "Discover a career, try the actual work hands-on, and leave with a clear next step towards further training, employment or entrepreneurship. Ten skill and career zones at Birat Expo 2026 (17–26 December 2026). Organised by the Chamber of Industries Morang.",
  openGraph: {
    title: "Learn and Work Platform · Birat Expo 2026",
    description:
      "Ten skill and career zones, live demonstrations and group training sessions for students. 17–26 December 2026.",
  },
};

export default function LearnAndWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

