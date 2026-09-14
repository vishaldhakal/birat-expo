"use client";

import { useGetAvailableSessions } from "@/api/training";
import Programs from "@/components/live-training/programs";
import TrainingPartners from "@/components/live-training/training-partners";
import Hero from "@/components/live-training/hero";
import LiveTrainingHero from "@/components/live-training/live-training-hero";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function LiveTrainingPage() {
  // const { sessions, sessionsLoading } = useGetAvailableSessions();

  // if (sessionsLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <Loader className="animate-spin" />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="min-h-[70vh] flex flex-col justify-center items-center px-4 py-16 text-center">
        <div className="bg-blue-50 border border-blue-100 rounded-full px-5 py-2 text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
          Birat Expo 2026
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-950 uppercase tracking-tight mb-4">
          Coming Soon
        </h1>
        <div className="w-20 h-1.5 bg-blue-600 mb-6 rounded-full"></div>
        <p className="text-base sm:text-lg text-gray-600 max-w-md font-medium leading-relaxed">
          Live Training sessions and schedules will be available shortly. Stay tuned!
        </p>
      </div>

      {/* 
      <LiveTrainingHero />

      <Programs sessions={sessions} />

      <TrainingPartners />

      <div className="py-12 container mt-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 to-violet-700 bg-clip-text text-transparent"></h2>

        <div className="flex justify-center">
          <Image
            src="/LiveTraining.svg"
            alt="Live Training Partner"
            width={500}
            height={400}
            className="h-auto w-auto"
            priority
          />
        </div>
      </div>

      <Hero />
      */}
    </>
  );
}
