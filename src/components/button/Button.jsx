import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, slug, customClass }) => {
  return (
    <a href={slug} className={customClass}>
      {name}
    </a>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
};

export default Button;
