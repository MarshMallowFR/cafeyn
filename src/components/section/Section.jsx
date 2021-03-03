import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./section.css";

const Section = ({ title, description, navItems, setSubCategorie }) => {
  const [style, setStyle] = useState({});

  const handleClick = (e, item) => {
    setStyle({
      width: e.target.offsetWidth,
      left: e.target.offsetLeft,
    });
    setSubCategorie(item);
  };

  useEffect(() => {
    const navElement = document.getElementsByClassName("section-nav-item")[0];
    if (!navElement) return;
    setStyle({
      width: navElement.offsetWidth,
      left: navElement.offsetLeft,
    });
  }, []);

  return (
    <section>
      <div className="section-main">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <nav className="section-nav">
        <ul>
          <div style={style} className="section-nav-active"></div>
          {navItems.map((item) => (
            <li>
              <span
                className="section-nav-item"
                onClick={(e) => handleClick(e, item)}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setSubCategorie: PropTypes.func.isRequired,
};

export default Section;
