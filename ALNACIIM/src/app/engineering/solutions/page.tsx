import Navbar from "@/components/Navbar";
import EngineeringFooter from "@/components/engineering/EngineeringFooter";
import SolutionsLanding from "@/components/engineering/SolutionsLanding";
import SolutionsGrid from "@/components/engineering/SolutionsGrid";
import SecondaryStats from "@/components/engineering/SecondaryStats";

export const metadata = {
  title: "Engineering Solutions | Alnaciim Engineering Portfolio",
  description: "Explore our comprehensive engineering solutions including water infrastructure, power systems, industrial automation and project management.",
};

export default function EngineeringSolutionsPage() {
  return (
    <main className="relative bg-white pt-[60px]">
      <Navbar />
      <SolutionsLanding />
      <SolutionsGrid />
      <SecondaryStats />
      <EngineeringFooter />
    </main>
  );
}
