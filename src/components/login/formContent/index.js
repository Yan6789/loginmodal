import React, { useState } from "react";
import Input from "../../../common/input";
import Button from "../../../common/button";
import "./index.css";

const FormContent = ({
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
  const [hide, setHide] = useState(true);
  return (
    <form onSubmit={onSubmit}>
      <label className="form_label">{label}</label>
      <div>
        {inputOne_LABEL ? (
          <Input
            inputLabel={inputOne_LABEL}
            type="text"
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
            }}
            ifValid={!error}
            //   errorMessage={"Your email is not valid"}
          ></Input>
        ) : (
          ""
        )}
      </div>
      <div>
        {inputTwo_LABEL ? (
          <Input
            inputLabel={inputTwo_LABEL}
            type={hide ? "password" : "text"}
            value={password}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
            ifValid={!error}
            //      errorMessage="Invalid password input!"
          >
            <p
              className="hide-show"
              onClick={() => {
                setHide(!hide);
              }}
            >
              {hide ? "show" : "hide"}
            </p>
          </Input>
        ) : (
          ""
        )}
      </div>
      <div className="error-message">{error}</div>
      {button_LABEL ? (
        <Button className="button-login" type="submit">
          {button_LABEL}
        </Button>
      ) : (
        ""
      )}
      <div className="input-box">
        <p
          className="click-text"
          onClick={() => {
            setPassword("");
            setEmail("");
            setError(false);
            setFormVisible(linkOne);
          }}
        >
          {linkOne}
        </p>
        <p
          className="click-text"
          onClick={() => {
            setPassword("");
            setEmail("");
            setError(false);
            setFormVisible(linkTwo);
          }}
        >
          {linkTwo}
        </p>
      </div>
    </form>
  );
};

export default FormContent;
