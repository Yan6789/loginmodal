import React, { useState } from "react";
import "./index.css";

const Input = ({
  children,
  inputLabel,
  className,
  type,
  onChange,
  ifValid,
  value,
  errorMessage,
}) => {
  return (
    <div className="inputContainer">
      <label className="input-label">{inputLabel}</label>
      <input
        className={`userInput ${className} ${ifValid ? "" : "notValid"}`}
        type={type}
        value={value}
        onChange={onChange}
        ifValid={ifValid}
      ></input>{" "}
      {children}
      <div className="error_message">{ifValid ? "" : errorMessage}</div>
    </div>
  );
};

export default Input;
