import { Recommendation } from "./Recommendation/Recommendation";
import "../RecommendationSection/RecommendationSection.scss";

export const RecommendationSection: React.FC = () => {
  return (
    <div className="container">
      <Recommendation />
    </div>
  );
};
