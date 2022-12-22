import "./NavbarItems.scss";
export const NavbarItems: React.FC = () => {
  return (
    <div className="navbar-items">
      <div className="cart">
        <img className="bag" src={require("../../../../image/HomePage/bag.png")} alt="bag" />
      </div>
      <div className="signin-button">
        <button className="sign-in">Sign In</button>
      </div>
    </div>
  );
};
