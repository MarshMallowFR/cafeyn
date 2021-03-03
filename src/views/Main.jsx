import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const Main = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);
  // TODO
  // Mobile
  return (
    <>
      <Header showHeader={showHeader} setShowHeader={setShowHeader} />
      <div id="main-section">
        <Nav showHeader={showHeader} />
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
