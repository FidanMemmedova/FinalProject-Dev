import "./Hamburger.scss";
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
interface IHamburgerProps {
  onClickHandler: () => void;
  active: boolean;
}
export const Hamburger: React.FC<IHamburgerProps> = ({ onClickHandler, active }) => {
  return (
    <div className="hamburger-icon" onClick={onClickHandler}>
      {active ? <IoMdClose/> : <FaBars />}
    </div>
  );
};
