import React from "react";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { navCategoriesSection } from "../assets/cafeyn.fixtures";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <Section
        title={"Quotidiens"}
        description={"L'actu très très chaud"}
        navItems={navCategoriesSection}
      />
      {children}
      <Footer />
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
