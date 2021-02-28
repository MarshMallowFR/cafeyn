import React from "react";
import PropTypes from "prop-types";

import { navCategoriesHeader } from "../../assets/cafeyn.fixtures";

import "./nav.css";

const Nav = ({ showHeader }) => {
  return (
    <nav id={showHeader ? "main-nav" : "main-nav-active"}>
      <ul className="main-nav-content">
        {navCategoriesHeader.map(({ category, link }) => (
          <a href={link} className="main-nav-item">
            <span className="main-nav-item-bg"></span>
            <span className="main-nav-item-text">{category}</span>
          </a>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  showHeader: PropTypes.bool.isRequired,
};

export default Nav;
