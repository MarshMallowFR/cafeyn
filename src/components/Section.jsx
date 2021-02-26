import React from "react";

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
            <li className="section-nav-item">{item}</li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Section;
