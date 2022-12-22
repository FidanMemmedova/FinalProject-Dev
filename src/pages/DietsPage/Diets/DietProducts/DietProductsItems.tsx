import React from "react";

import "./DietProducts.scss";
import ProductItem, { IProductProps } from "./Product/ProductItem";

const DietProductsItems: React.FC = () => {
  const [products, setProducts] = React.useState<IProductProps[]>([]);
  React.useEffect(() => {
    fetch("local.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="diet-products">
      {products?.map((item) => (
        <ProductItem {...item} />
      ))}
    </div>
  );
};
export default DietProductsItems;
