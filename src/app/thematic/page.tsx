import ThematicHero from "@/components/thematic/thematic-hero";
import ThematicBackground from "@/components/thematic/thematic-background";
import ThematicWhy from "@/components/thematic/thematic-why";
import ProposalNav from "@/components/thematic/proposal/proposal-nav";
import ProposalObjectives from "@/components/thematic/proposal/proposal-objectives";
import ProposalAlignment from "@/components/thematic/proposal/proposal-alignment";
import ProposalTargets from "@/components/thematic/proposal/proposal-targets";
import ProposalProgram from "@/components/thematic/proposal/proposal-program";
import ProposalChamberParticipation from "@/components/thematic/proposal/proposal-chamber-participation";
import ProposalOpportunityWall from "@/components/thematic/proposal/proposal-opportunity-wall";
import ProposalExpectedResults from "@/components/thematic/proposal/proposal-expected-results";
import ProposalConclusion from "@/components/thematic/proposal/proposal-conclusion";
import ProposalCoordination from "@/components/thematic/proposal/proposal-coordination";

export default function ThematicPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <ThematicHero />
      <ThematicBackground />
      <ThematicWhy />

      {/* Sticky Quick-Navigation Across Proposal Sections 03 - 11 */}
      <ProposalNav />

      {/* 03 Objectives */}
      <ProposalObjectives />

      {/* 04 Alignment with Birat Expo 2026 */}
      <ProposalAlignment />

      {/* 05 Indicative Targets */}
      <ProposalTargets />

      {/* 06 Three Days Program at a Glance */}
      <ProposalProgram />

      {/* 07 Opportunity Connect: Chamber Participation */}
      <ProposalChamberParticipation />

      {/* 08 Opportunity Wall and Banners */}
      <ProposalOpportunityWall />

      {/* 09 Expected Results */}
      <ProposalExpectedResults />

      {/* 10 Conclusion */}
      <ProposalConclusion />

      {/* 11 Participation and Coordination */}
      <ProposalCoordination />
    </main>
  );
}
