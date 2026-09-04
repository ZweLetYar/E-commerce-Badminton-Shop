import { CategorySection } from "../../components/home/CategorySection";
import { FeatureStrip } from "../../components/home/FeatureStrip";
import { HeroSection } from "../../components/home/HeroSection";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(circle_at_75%_20%,#27351e_0%,transparent_30%),#090b0b]">
      <HeroSection />
      <FeatureStrip />
      <CategorySection />
    </div>
  );
}
