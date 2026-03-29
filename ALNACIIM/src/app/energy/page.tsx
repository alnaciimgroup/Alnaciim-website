import EnergyHero from "@/components/energy/EnergyHero";
import EnergyStatsGrid from "@/components/energy/EnergyStatsGrid";
import EnergyFeaturesGrid from "@/components/energy/EnergyFeaturesGrid";
import EnergyDivisions from "@/components/energy/EnergyDivisions";
import EnergyProjectsGrid from "@/components/energy/EnergyProjectsGrid";
import EnergyCTA from "@/components/energy/EnergyCTA";

export default function EnergyHome() {
  return (
    <div className="w-full">
      <EnergyHero />
      <EnergyStatsGrid />
      <EnergyFeaturesGrid />
      <EnergyDivisions />
      <EnergyProjectsGrid limit={2} />
      <EnergyCTA />
    </div>
  );
}
