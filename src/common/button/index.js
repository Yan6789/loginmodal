import React from "react";
import "./index.css";

const Button = ({ className, type, onClick, children }) => {
  return (
    <button
      className={`buttonGenal ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
