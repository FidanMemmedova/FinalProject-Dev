import "./Product.scss";
export interface IProductProps {
  src?: string;
  alt?: string;
  name: string;
  button1: string;
  button2: string;
  button3: string;
  information: string;
  price: number;
}
 const ProductItem: React.FC<IProductProps> = ({
  src,
  alt,
  name,
  button1,
  button2,
  button3,
  information,
  price,
}) => {
  return (
    <div className="product">
      <img src={require(`../../../../../image/DietsPage/${src}`)} alt={alt} />
      <div className="product-summary">
        <h6 className="product-name">{name}</h6>
        <div className="product-kcal">
          <button>{button1}</button>
          <button>{button2}</button>
          <button>{button3}</button>
        </div>
        <p>{information}</p>
      </div>
      <div className="product-price">
        <p>
          from <span>{price}</span>
          <b>pin</b> /day
        </p>
        <button>Choose</button>
      </div>
    </div>
  );
};

export default ProductItem;