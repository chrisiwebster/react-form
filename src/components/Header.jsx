import React from "react";

import "./Header.css";

const Header = ({ activeColor, name, activeTextType, activeTextColor }) => {
  return (
    <header
      style={{
        backgroundColor: activeColor,
        textTransform: activeTextType,
      }}
    >
      <h1 style={{ color: activeTextColor }}>Hello, {name}!</h1>
    </header>
  );
};

Header.defaultProps = {
  name: "Name",
  activeColor: "plum",
  activeTextType: "capitalize",
  activeTextColor: "black",
};

export default Header;
