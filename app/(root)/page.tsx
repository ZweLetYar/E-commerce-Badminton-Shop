import { CategorySection } from "../../components/home/CategorySection";
import { FeatureStrip } from "../../components/home/FeatureStrip";
import { HeroSection } from "../../components/home/HeroSection";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(circle_at_75%_20%,#e3eed8_0%,transparent_30%),#f6f7f2]">
      <HeroSection />
      <FeatureStrip />
      <CategorySection />
    </div>
  );
}
