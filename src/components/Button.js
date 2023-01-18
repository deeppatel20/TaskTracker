import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "blue",
};
Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
