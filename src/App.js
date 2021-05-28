import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

import Form from "./components/Form";

export default function App() {
  const [activeColor, setActiveColor] = useState("plum");
  const [activeTextType, setActiveTextType] = useState("capitalize");
  const [activeTextColor, setActiveTextColor] = useState("black");
  return (
    <div>
      <Header
        name="Chrisi"
        activeColor={activeColor}
        activeTextType={activeTextType}
        activeTextColor={activeTextColor}
      />
      <Form
        setActiveColor={setActiveColor}
        setActiveTextType={setActiveTextType}
        setActiveTextColor={setActiveTextColor}
      />
      <p>Please use the CSS properties when providing answers!</p>
    </div>
  );
}
