import "../DietsProducts/DietsProducts.scss";
export const DietsProducts: React.FC = () => {
  return (
    <div className="diet-product-second">
      <img
        className="pieces-chicken-fillet-with-mushrooms"
        src={require("../../../../image/HomePage/pieces-chicken-fillet-with-mushrooms.png")}
        alt="pieces-chicken-fillet-with-mushrooms"
      />
      <img
        className="fry-chicken-sweet-peppers"
        src={require("../../../../image/HomePage/fry-chicken-sweet-peppers.png")}
        alt="stir-fry-chicken-sweet-peppers-green-beans"
      />
    </div>
  );
};


