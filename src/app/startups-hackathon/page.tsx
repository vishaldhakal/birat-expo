import StartupsHackathonHero from "@/components/startups-hackathon/startup-hackathon-hero";
import StartupProblemStatement from "@/components/startups-hackathon/startup-problem-statement";
import ContactInformation from "@/components/contact-information";

export default function StartupsHackathonPage() {
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
          Startups & Hackathon details and application forms will be available shortly. Stay tuned!
        </p>
      </div>

      {/* 
      <StartupsHackathonHero />
      <StartupProblemStatement />
      <ContactInformation />
      */}
    </>
  );
}
