import "./RecommendationSummaryHeadling.scss";
import arrowright from '../../../../../../image/HomePage/arrow-right.png';
export const RecommendationSummaryHeadling: React.FC = () => {
  return (
    <div className="recommendation_summary_headling">
      <h4>
        We cook – they enjoy every minute of their
        <img
          className="arrow-right"
          src={arrowright}
          alt="arrow"
        />
        lives
      </h4>
    </div>
  );
};

