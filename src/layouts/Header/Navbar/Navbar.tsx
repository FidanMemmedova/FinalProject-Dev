import React from "react";
import { Hamburger } from "./Hamburger/Hamburger";
import { Logo } from "./Logo/Logo";
import "./Navbar.scss";
import { NavbarItems } from "./NavbarItems/NavbarItems";
import { NavMenu } from "./NavMenu/NavMenu";
interface IProps{
  onClickHandler:()=>void;
  active:boolean;
}
export const Navbar: React.FC<IProps> = ({onClickHandler,active}) => {

  return (
    <div className="navbar">
      <Logo />
      <NavMenu />
      <NavbarItems />
      <Hamburger onClickHandler={onClickHandler} active={active} />
    </div>
  );
};
