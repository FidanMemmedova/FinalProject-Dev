import "./DietsSummaryTextItems.scss";
import playIcon from "../../../../../image/HomePage/play-icon.png";
export const DietsSummaryTextItems: React.FC = () => {
  return (
    <div className="diets-summary-text-items">
      <button className="adjust_diet_btn">Adjust diet</button>
      <div className="watch_video">
        <img
          className="watch_video_btn"
          src={playIcon}
          alt="watch_video_btn"
        />
        <p>Watch video</p>
      </div>
    </div>
  );
};
