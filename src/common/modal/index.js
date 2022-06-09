import React from "react";
import "./index.css";

const Modal = ({ children, visible, setVisible }) => {
  return (
    <div className={`modal ${visible ? "" : "invisible"}`}>
      <div
        className="close-icon"
        onClick={() => {
          setVisible(false);
        }}
      >
        X
      </div>
      {children}
    </div>
  );
};

export default Modal;
