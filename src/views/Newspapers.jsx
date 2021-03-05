import React, { useState } from "react";
import PropTypes from "prop-types";

import Section from "../components/section/Section";
import Content from "../components/content/Content";
import { navCategoriesSection } from "../assets/cafeyn.fixtures";

const Newspapers = () => {
  const [subCategorie, setSubCategorie] = useState("tout");
  return (
    <>
      <Section
        title={"Quotidiens"}
        description={"L'actu très très chaud"}
        navItems={navCategoriesSection}
        setSubCategorie={setSubCategorie}
        subCategorie={subCategorie}
      />
      <Content subCategorie={subCategorie} />
    </>
  );
};

Newspapers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Newspapers;
