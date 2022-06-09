import React, { useState } from "react";
import Button from "../../common/button";
import Modal from "../../common/modal";
import ModalContent from "./modalContent";
import "./index.css";

const Login = ({ list, setUserList, loginStatus, setLoginStatus }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {" "}
      <Button
        className="login_button"
        onClick={() => {
          setVisible(true);
        }}
      >
        Log in
      </Button>
      <div className="nagivator-login">
        <Modal visible={visible} setVisible={setVisible}>
          <ModalContent
            setVisible={setVisible}
            setLoginStatus={setLoginStatus}
          ></ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
