import React from "react";
import Button from "../../common/button";

const Logout = ({ setLoginStatus }) => {
  return (
    <div>
      <Button
        className="login_button"
        type="button"
        onClick={() => {
          localStorage.removeItem("token");
          setLoginStatus(false);
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
