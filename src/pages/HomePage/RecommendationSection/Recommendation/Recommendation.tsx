import { Feedback } from "./Feedback/Feedback";
import "./Recommendation.scss";
import { RecommendationSummary } from "./RecommendationSummary/RecommendationSummary";

export const Recommendation: React.FC = () => {
  return (
    <div className="recommendation">
        <RecommendationSummary/>
        <Feedback/>
    </div>
  );
};
