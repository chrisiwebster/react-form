import React from "react";

import "./Button.css";

const Button = ({ type, name, onClick }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  type: "Button",
  name: "Submit",
  class: "button",
};
export default Button;
