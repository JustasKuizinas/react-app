import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button: React.FC<any> = (props) => {
  return (
    <button className={"btn " + props.style} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
 
Button.propTypes = {};

Button.defaultProps = {
  style: "",
  onClick: () => {},
};

export default Button;
