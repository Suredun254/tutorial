import React from "react";
import PropTypes from "prop-types";

// shortcut for introducing props is rafcp

const Testing = (props) => {
  return <div></div>;
};

Testing.propTypes = {
  name: PropTypes.string.isRequired,
  //   its short-cut is name:ptsr
};

export default Testing;
