import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import FeaturesGrid from "@/components/FeaturesGrid";
import Divisions from "@/components/Divisions";
import AquaSafi from "@/components/AquaSafi";
import TrustedLeaders from "@/components/TrustedLeaders";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Inter'] selection:bg-[#0044FF] selection:text-white text-slate-800 overflow-x-hidden">
      <Hero />
      <StatsGrid />
      <FeaturesGrid />
      <Divisions />
      
      {/* Retained Modules */}
      <AquaSafi />
      <TrustedLeaders />
      <CTA />
    </div>
  );
}
