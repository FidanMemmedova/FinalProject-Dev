import "../CateringDietsSummary/CateringDietsSummary.scss";
import { CateringDietsSummaryText } from "./CateringDietsSummaryText/CateringDietsSummaryText";
import { DietsSummaryText } from "./DietsSummaryText/DietsSummaryText";
import { DietsSummaryTextItems } from "./DietsSummaryTextItems/DietsSummaryTextItems";

export const CateringDietsSummary: React.FC = () => {
  return (
    <div className="catering-diets-summary">
      <CateringDietsSummaryText />
      <DietsSummaryText />
      <DietsSummaryTextItems />
    </div>
  );
};
