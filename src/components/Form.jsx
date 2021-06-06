import React from "react";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

import "./Form.css";

const Form = ({ setActiveColor, setActiveTextType, setActiveTextColor }) => {
  const [formColor, setFormColor] = useState(null);
  const [formTextColor, setFormTextColor] = useState(null);
  const [formTextType, setFormTextType] = useState("capitalize");
  const [logIn, setLogIn] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  //Log in form
  const onLoginSubmit = (e) => {
    e.preventDefault();

    emailError || nameError ? alert("Fix form errors.") : setLogIn(true);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    newName.length === 0
      ? setNameError("Please provide a valid name.")
      : setNameError(null);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    newEmail.length === 0
      ? setEmailError("Please provide an email address.")
      : !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ? setEmailError("Please provide a valid email.")
      : setEmailError("");
  };

  //Changing form
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
    <div>
      {!logIn && (
        <form id="log-in-form" onSubmit={onLoginSubmit}>
          <p id="intro">
            Before you can use this form, we'd like to learn a bit about you!
          </p>
          <Input
            label="Name:"
            type="text"
            id="name"
            value={name}
            onBlur={handleNameChange}
            onChange={handleNameChange}
            error={nameError}
          />
          <Input
            label="Email:"
            type="email"
            id="email"
            required
            value={email}
            onBlur={handleEmailChange}
            onChange={handleEmailChange}
            error={emailError}
          />
          <Button type="submit" name="Get access!" />
        </form>
      )}
      {logIn && (
        <form id="change-form" onSubmit={onSubmit}>
          <Input
            type="text"
            id="colour"
            onChange={(e) => setFormColor(e.target.value)}
            label="Change background colour:"
          />
          <Button name="Change" type="button" onClick={onClickColor} />
          <Input
            type="text"
            id="text-colour"
            onChange={(e) => setFormTextColor(e.target.value)}
            label="Change text colour:"
          />
          <Button name="Change" type="button" onClick={onClickTextColor} />

          <label htmlFor="textType">Change text transform type:</label>
          <select
            id="textType"
            onChange={(e) => setFormTextType(e.target.value)}
          >
            <option value=""></option>
            <option value="lowercase">lowercase</option>
            <option value="uppercase">uppercase</option>
            <option value="capitalize">capitalize</option>
          </select>
          <Button name="Change" type="button" onClick={onClickTextType} />

          <Button name="Submit" type="submit" />
        </form>
      )}
    </div>
  );
};

export default Form;
