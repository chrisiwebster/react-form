import React from "react";
import "./Input.css";

const Input = ({ feature, type, onChange }) => {
  return (
    <div class="inline-div">
      <label for={feature}>{`Edit ${feature}`}</label>
      <input id={feature} type={type} onChange={onChange} />
    </div>
  );
};

Input.defaultProps = {
  feature: "colour",
  type: "text",
};

export default Input;
