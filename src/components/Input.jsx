import React from "react";
import "./Input.css";

const Input = ({ id, type, onChange, label, error, onBlur }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={onChange} onBlur={onBlur} />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

Input.defaultProps = {
  feature: "colour",
  type: "text",
};

export default Input;
