import React from "react";
import FormContent from "../formContent";
import { loginApi } from "../../api";
const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  inputTwo_LABEL,
  inputOne_LABEL,
  error,
  setError,
  label,
  button_LABEL,
  onSubmit,
  setFormVisible,
  linkOne,
  linkTwo,
}) => {
  const LoginSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await loginApi({
      email: email,
      password: password,
    });
    if (response.message === "succeed") {
      setLoginStatus(true);
    } else {
      setError(true);
    }
  };
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
};

export default LoginForm;
