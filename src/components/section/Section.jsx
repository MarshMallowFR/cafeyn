import React from "react";

import "./section.css";

const Section = ({ title, description, navItems }) => {
  return (
    <section>
      <div className="section-main">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <nav className="section-nav">
        <ul>
          {navItems.map((item) => (
            <li>
              <a className="section-nav-item" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Section;
