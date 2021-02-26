import React from "react";
import { navCategoriesHeader } from "../assets/cafeyn.fixtures";

const Nav = () => {
  return (
    <nav>
      <ul>
        {navCategoriesHeader.map((category) => (
          <li className="nav-item">{category}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
