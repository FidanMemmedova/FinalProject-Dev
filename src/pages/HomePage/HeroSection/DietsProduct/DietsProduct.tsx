import "../DietsProduct/DietsProduct.scss";

export const DietsProduct: React.FC = () => {
  return (
    <div className="diet-product-first">
      <img
        className="vegan-salad"
        src={require("../../../../image/HomePage/vegan-salad.png")}
        alt="vegan-salad"
      />
      <img
        className="chicken-fillet-with-mushrooms"
        src={require("../../../../image/HomePage/chicken-fillet-with-mushrooms.png")}
        alt="chicken-fillet-with-mushrooms"
      />
    </div>
  );
};
