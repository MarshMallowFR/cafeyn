import React from "react";
import PropTypes from "prop-types";

import data from "../../json/category_quotidien.json";
import { displayThumbnail } from "../../helpers/displayThumbnailHelper";

import "./content.css";

const Content = ({ subCategorie }) => {
  const allNewsPapers = data.issues.filter(
    ({ publication }) => publication?.category?.name === "Quotidiens"
  );
  return (
    <div className="main-content">
      <div className="main-content-grid">
        {subCategorie === "tout"
          ? displayThumbnail(allNewsPapers)
          : displayThumbnail(
              allNewsPapers.filter(({ publication }) =>
                publication?.category?.subCategories.find(
                  ({ name }) => name.toLowerCase() === subCategorie
                )
              )
            )}
      </div>
    </div>
  );
};

Content.propTypes = {
  subCategorie: PropTypes.string.isRequired,
};

export default Content;
