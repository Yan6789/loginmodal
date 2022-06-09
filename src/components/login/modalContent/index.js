import React, { useState } from "react";
import FormContent from "../formContent";

import api from "../../api";

const ModalContent = ({ setLoginStatus, setVisible }) => {
  const [formVisible, setFormVisible] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LoginSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await api.loginApi({ email: email, password: password });
    if (response.message === "succeed") {
      localStorage.setItem("token", response.accessToken);
      setLoginStatus(true);
    } else {
      setError("Your email and password not valid");
    }
  };

  const signupHandler = async (event) => {
    event.preventDefault();
    if (email.includes("@") && password.length >= 8) {
      const response = await api.signupApi({
        email: email,
        password: password,
      });
      if (response.message === "succeed") {
        setEmail("");
        setPassword("");
        setFormVisible("Login");
      } else if (response.message === "userExist") {
        setError("This email alrealy exists. Please login");
      }
    } else {
      setError("Your email and password not valid");
    }
  };

  const ReSendSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await api.sentEmailApi({ email: email });
    if (response.status === "200") {
      setFormVisible("Email was sent");
    } else {
      setError(response.message);
    }
  };

  // formhandler to handle the state changes for formVisisble
  const formHandler = () => {
    if (formVisible === "Login") {
      return (
        <FormContent
          error={error}
          setError={setError}
          password={password}
          inputOne_LABEL="Email"
          inputTwo_LABEL="Password"
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          label="Please log in to your account"
          button_LABEL="Login"
          setFormVisible={setFormVisible}
          onSubmit={LoginSubmitHandler}
          linkOne="Signup"
          linkTwo="Forgot password"
        ></FormContent>
      );
    } else if (formVisible === "Signup") {
      return (
        <FormContent
          error={error}
          setError={setError}
          inputOne_LABEL="Email"
          inputTwo_LABEL="Password"
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          label="Please Sign up to your account"
          button_LABEL="Signup"
          setFormVisible={setFormVisible}
          onSubmit={signupHandler}
          linkOne="Login"
        ></FormContent>
      );
    } else if (formVisible === "Forgot password") {
      return (
        <FormContent
          error={error}
          setError={setError}
          email={email}
          inputOne_LABEL="Email"
          setEmail={setEmail}
          label="Reset your password"
          button_LABEL="Send"
          setFormVisible={setFormVisible}
          onSubmit={ReSendSubmitHandler}
        ></FormContent>
      );
    }
    if (formVisible === "Email was sent") {
      return (
        <FormContent label="Your confirmation email was sent"></FormContent>
      );
    }
  };

  return <div className="modal-content">{formHandler()}</div>;
};

export default ModalContent;
