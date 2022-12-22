import { RecommendationReason } from "./RecommendationReason/RecommendationReason";
import "./RecommendationSummary.scss";
import { RecommendationSummaryHeadling } from "./RecommendationSummaryHeadling/RecommendationSummaryHeadling";

export const RecommendationSummary: React.FC = () => {
  return (
    <div className="recommendation_summary">
      <RecommendationSummaryHeadling />
      <RecommendationReason/>
    </div>
  );
};
