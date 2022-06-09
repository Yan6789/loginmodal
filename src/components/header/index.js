import React from "react";
import "./index.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1 className="header-title">Management</h1>
        <span>chuwa</span>
      </div>
      {props.children}
    </div>
  );
};

export default Header;
