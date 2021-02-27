import React from "react";
import { navCategoriesHeader } from "../../assets/cafeyn.fixtures";

import "./nav.css";

const Nav = () => {
  return (
    <nav id="main-nav">
      <ul className="main-nav-content">
        {navCategoriesHeader.map(({ category, link }) => (
          <li>
            <a href={link} className="main-nav-item">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
