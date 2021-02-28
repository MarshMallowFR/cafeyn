import React from "react";

import { formatDate } from "../../helpers/dateHelper";

import "./thumbnail.css";

const Thumbnail = ({ coverUrl, publication, publicationId, releaseDate }) => {
  return (
    <div key={publicationId} className="thumbnail">
      <a
        href={`https://www.cafeyn.co/fr/publication/${publication?.title}/${publicationId}`}
        className="thumbnail-link"
      >
        <img src={coverUrl} alt="cover newspaper" />
        <div className="thumbnail-content">
          <h3 className="thumbnail-title">{publication?.title}</h3>
          <p className="thumbnail-date">{formatDate(releaseDate)}</p>
        </div>
      </a>
    </div>
  );
};

export default Thumbnail;
