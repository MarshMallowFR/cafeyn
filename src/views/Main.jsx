import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Section from "../components/section/Section";
import Footer from "../components/footer/Footer";
import { navCategoriesSection } from "../assets/cafeyn.fixtures";

const Main = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);
  // TODO
  // Select langues à refaire
  // Animation nav section
  // Mobile
  return (
    <>
      <Header showHeader={showHeader} setShowHeader={setShowHeader} />
      <div id="main-section">
        <Nav showHeader={showHeader} />
        <Section
          title={"Quotidiens"}
          description={"L'actu très très chaud"}
          navItems={navCategoriesSection}
        />
        {children}
      </div>
      <Footer />
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
