import EnergyHero from "@/components/energy/EnergyHero";
import EnergyStatsGrid from "@/components/energy/EnergyStatsGrid";
import EnergyMethodology from "@/components/energy/EnergyMethodology";
import EnergyFeaturesGrid from "@/components/energy/EnergyFeaturesGrid";
import EnergyCTA from "@/components/energy/EnergyCTA";

export default function EnergyHome() {
  return (
    <div className="w-full">
      <EnergyHero />
      <EnergyStatsGrid />
      <EnergyMethodology />
      <EnergyFeaturesGrid />
      <EnergyCTA />
    </div>
);
}
