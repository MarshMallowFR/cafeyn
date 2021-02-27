import React from "react";
import PropTypes from "prop-types";

import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Section from "../components/section/Section";
import Footer from "../components/footer/Footer";
import { navCategoriesSection } from "../assets/cafeyn.fixtures";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <div id="main-section">
        {/* <div className="hightLight-content"></div> */}

        <Nav />
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
