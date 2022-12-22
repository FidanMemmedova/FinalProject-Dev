import "../HeroSection/HeroSection.scss";
import { CateringDietsSummary } from "./CateringDietsSummary/CateringDietsSummary";
import { DietsProduct } from "./DietsProduct/DietsProduct";
import { DietsProducts } from "./DietsProducts/DietsProducts";

export const HeroSection: React.FC = () => {
  return (
    <div className="catering-diets">
      <div className="container">
        <DietsProduct></DietsProduct>
        <CateringDietsSummary></CateringDietsSummary>
        <DietsProducts></DietsProducts>
      </div>
    </div>
  );
};
