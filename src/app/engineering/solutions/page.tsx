import SolutionsLanding from "@/components/engineering/SolutionsLanding";
import SolutionsGrid from "@/components/engineering/SolutionsGrid";

export const metadata = {
  title: "Engineering Solutions | Alnaciim Engineering Portfolio",
  description: "Explore our comprehensive engineering solutions including water infrastructure, power systems, industrial automation and project management.",
};

export default function EngineeringSolutionsPage() {
  return (
    <main className="relative bg-white pt-[60px]">
      <SolutionsLanding />
      <SolutionsGrid />
    </main>
  );
}
