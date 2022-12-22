import "./CateringDietsSummaryText.scss";
import redapple from "../../../../../image/HomePage/red-apple.png"
import avocado from "../../../../../image/HomePage/Avocado.png";
export const CateringDietsSummaryText: React.FC = () => {
  return (
    <div className="catering-diets-summary-text">
      <h2 className="premium-quality">Premium quality</h2>
      <h2 className="catering-diets">
        catering diets
        <img
          className="red_apple"
          src={redapple}
          alt="red_apple"
        />
        for
      </h2>
      <div className="exacting">
        <img
          className="avocado"
          src={avocado}
          alt="avocado"
        />
        <h2> exacting</h2>
      </div>
    </div>
  );
};
