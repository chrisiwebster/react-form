import React from "react";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

import "./Form.css";

const Form = ({ setActiveColor, setActiveTextType, setActiveTextColor }) => {
  const [formColor, setFormColor] = useState(null);
  const [formTextColor, setFormTextColor] = useState(null);
  const [formTextType, setFormTextType] = useState("capitalize");

  const onSubmit = (e) => {
    e.preventDefault();
    setActiveColor(formColor);
    setActiveTextType(formTextType);
    setActiveTextColor(formTextColor);
    alert(
      `You changed the from to include ${formColor}, ${formTextColor} and ${formTextType}!`
    );
  };

  const onClickColor = (e) => {
    e.preventDefault();
    setActiveColor(formColor);
  };

  const onClickTextType = (e) => {
    e.preventDefault();
    setActiveTextType(formTextType);
  };

  const onClickTextColor = (e) => {
    e.preventDefault();
    setActiveTextColor(formTextColor);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        feature="colour"
        onChange={(e) => setFormColor(e.target.value)}
      />
      <Button name="Change" type="button" onClick={onClickColor} />
      <Input
        type="text"
        feature="text-colour"
        onChange={(e) => setFormTextColor(e.target.value)}
      />
      <Button name="Change" type="button" onClick={onClickTextColor} />

      <label for="textType">Edit text transform type</label>
      <select id="textType" onChange={(e) => setFormTextType(e.target.value)}>
        <option value=""></option>
        <option value="lowercase">lowercase</option>
        <option value="uppercase">uppercase</option>
        <option value="capitalize">capitalize</option>
      </select>
      <Button name="Change" type="button" onClick={onClickTextType} />

      <Button name="Submit" type="submit" />
    </form>
  );
};

export default Form;
