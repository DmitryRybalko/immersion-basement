import React from "react";
import "../styles/header.scss";

const Header = ({ text }) => {
  return (
    <div className="data">
      <h2>{text}</h2>
    </div>
  );
};

export default Header;
