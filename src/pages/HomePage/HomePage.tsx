import { HeroSection } from "./HeroSection/HeroSection";
import "./HomePage.scss";
import { RecommendationSection } from "./RecommendationSection/RecommendationSection";
export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <RecommendationSection></RecommendationSection>
    </div>
  );
};
