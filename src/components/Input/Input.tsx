import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = (props) => {
  return (
    <div className={"inpt " + props.style}>
      <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

Input.defaultProps = {
  value: "",
  style: "",
  type: "text",
  placeholder: "",
  onChange: () => {},
  onKeyDown: () => {},
};

export default Input;
