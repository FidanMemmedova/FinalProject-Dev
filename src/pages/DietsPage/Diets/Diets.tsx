import DietProductsItems from "./DietProducts/DietProductsItems";
import "./Diets.scss";
import { DietsRecommendation } from "./DietsRecommendation/DietsRecommendation";


 const Diets: React.FC = () => {
  return (
    <div className="diets">
      <h2>Diets</h2>
      <DietProductsItems/>
      <DietsRecommendation/>
    </div>
  );
};

export default Diets;