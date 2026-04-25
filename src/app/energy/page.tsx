import EnergyHero from "@/components/energy/EnergyHero";
import EnergyStatsGrid from "@/components/energy/EnergyStatsGrid";
import EnergyMethodology from "@/components/energy/EnergyMethodology";
import EnergyCompetencies from "@/components/energy/EnergyCompetencies";
import EnergyCTA from "@/components/energy/EnergyCTA";

export default function EnergyHome() {
  return (
    <div className="bg-white">
      <EnergyHero />
      <EnergyStatsGrid />
      <EnergyMethodology />
      <EnergyCompetencies />
      <EnergyCTA />
    </div>
  );
}
