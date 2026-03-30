import EngineeringHero from "@/components/engineering/EngineeringHero";
import EngineeringStats from "@/components/engineering/EngineeringStats";
import EngineeringCoreCompetencies from "@/components/engineering/EngineeringCoreCompetencies";
import EngineeringIndustries from "@/components/engineering/EngineeringIndustries";
import TechnicalArchive from "@/components/engineering/TechnicalArchive";
import EngineeringFooter from "@/components/engineering/EngineeringFooter";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Alnaciim Engineering | Precision Engineering. Built to Last.",
  description: "Your engineering partner for industrial infrastructure, water systems, power arrays and automation solutions in the Horn of Africa.",
};

export default function EngineeringPage() {
  return (
    <main className="relative bg-[#FAFBFF]">
      <Navbar />
      <EngineeringHero />
      <EngineeringStats />
      <EngineeringCoreCompetencies />
      <EngineeringIndustries />
      <TechnicalArchive />
      <EngineeringFooter />
    </main>
  );
}
