import GroupHero from "@/components/GroupHero";
import StatsBar from "@/components/StatsBar";
import DivisionsGrid from "@/components/DivisionsGrid";
import ProjectHighlights from "@/components/ProjectHighlights";

export default function GroupHome() {
  return (
    <div className="bg-white">
      <GroupHero />
      <StatsBar />
      <DivisionsGrid />
      <ProjectHighlights />
    </div>
  );
}
