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
        {liList.map((navItem) => {
          return navItem === "Diets" ? (
            <Link to="/diets">{navItem}</Link>
          ) : (
            <li>
              <a href="#">{navItem}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
