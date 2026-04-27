import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import FeaturesGrid from "@/components/FeaturesGrid";
import Divisions from "@/components/Divisions";
import AquaSafi from "@/components/AquaSafi";
import ProjectHighlights from "@/components/ProjectHighlights";
import TrustedLeaders from "@/components/TrustedLeaders";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Hero />
      <StatsGrid />
      <Divisions />
      <ProjectHighlights />
      <CTA />
    </main>
  );
}
