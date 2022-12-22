import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";
export const NavMenu: React.FC = () => {
  const liList = [
    "Diets",
    "Calorie calculator",
    "Menu",
    "Delivery",
    "about us",
    "Blog",
    "FAQ",
  ];
  return (
    <nav>
      <ul>
        {liList.map((navItem,index) => {
          return navItem === "Diets" ? (
            <Link to="/diets" key={index}>{navItem}</Link>
          ) : (
            <li key={index}>
              <a href="#">{navItem}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
