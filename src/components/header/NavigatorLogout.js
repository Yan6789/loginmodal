import React from "react";
import Button from "../../common/button";
import Login from "../Login";

const NavigatorLogout = ({ setLogin, onOpenLogin }) => {
  return (
    <div>
      <Button
        className="logout-btn"
        type="button"
        onClick={() => {
          setLogin(false);
          onOpenLogin(false);
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default NavigatorLogout;
