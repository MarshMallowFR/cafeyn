import React from "react";

import data from "../../json/category_quotidien.json";
import Thumbnail from "../thumbnail/Thumbnail";

import "./content.css";

const Content = () => {
  return (
    <div className="main-content">
      <div className="main-content-grid">
        {data.issues
          .filter(
            ({ publication }) => publication?.category?.name === "Quotidiens"
          )
          .map((newspaper) => (
            <Thumbnail {...newspaper} />
          ))}
      </div>
    </div>
  );
};

export default Content;
