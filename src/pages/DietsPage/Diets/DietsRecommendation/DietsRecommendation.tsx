import "./DietsRecommendation.scss";
import dietsSsectionWallpaper from "../../../../image/DietsPage/diets-section-wallpaper.png";
import { DietsRecommendationSummary } from "./DietsRecommendationSummary/DietsRecommendationSummary";
export const DietsRecommendation: React.FC = () => {
  return (
    <div className="diets-recommendation">
      <img src={dietsSsectionWallpaper} alt="diets-section-wallpaper" />
      <DietsRecommendationSummary></DietsRecommendationSummary>
    </div>
  );
};
