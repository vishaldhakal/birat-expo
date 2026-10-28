import ThematicHero from "@/components/thematic/thematic-hero";
import ThematicBackground from "@/components/thematic/thematic-background";
import ThematicWhy from "@/components/thematic/thematic-why";
import ThematicSessions from "@/components/thematic/thematic-sessions";
import ProposalDetails from "@/components/thematic/proposal/proposal-details";

export default function ThematicPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner */}
      <ThematicHero />

      {/* 01 Background & Context */}
      <ThematicBackground />

      {/* 02 Strategic Imperative */}
      <ThematicWhy />

      {/* Thematic Days (Day 1, Day 2, Day 3) */}
      <ThematicSessions />

      {/* Proposal Details continuously below Day 3 (Objectives, Alignment, Targets, Chamber Participation, Wall & Banners, Results, Conclusion, Coordination) */}
      <ProposalDetails />
    </main>
  );
}
