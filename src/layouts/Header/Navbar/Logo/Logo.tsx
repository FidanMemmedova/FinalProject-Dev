import "./Logo.scss";
import logo from './logo.png';

export const Logo: React.FC = () => {
  return (
    <div className="logo-item">
      <a href="#">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </a>
    </div>
  );
};
