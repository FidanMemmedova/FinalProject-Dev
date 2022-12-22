import React from "react";
import "../Header/Header.scss";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { Navbar } from "./Navbar/Navbar";

export const Header: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false);
  const onClickHandler = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className="container">
      <Navbar onClickHandler ={onClickHandler} active={active} />
      {active && <HamburgerMenu />}
    </div>
  );
};
