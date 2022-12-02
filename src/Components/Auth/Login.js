import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/US-Logo.png";
import Button from "./Button";
import FluidInput from "./FluidInput";
import API from  '../../http-common';


async function loginUser(credentials) {

  // return fetch(
  //   "https://agresource.redcliffeltd.com/wp-json/ag/v1/authentication",
  //   {
  //     method: "POST",
  //     error: function (e) {
  //       console.log(e);
  //     },
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(credentials),
  //   }
  // ).then((data) => data.json());
  return API.post('authentication',JSON.stringify(credentials)).then((data) => data.json());
}

export default function Login({ setToken }) {
  const passwordERef = useRef();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isValidated, setIsValidated] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isPassEmpty, setIsPassEmpty] = useState(true);
  const [firstEmpty, setFirstEmpty] = useState(false);
  const [firstPwsEmpty, setFirstPwsEmpty] = useState(false);
  const setFiled = (filedName, fieldValue) => {
    if (filedName === "username") setUserName(fieldValue);
    else setPassword(fieldValue);
  };
  const style = {
    margin: "15px 0",
  };
  const handleSubmit = async (e) => {
    if (isEmpty || isPassEmpty) {
      if (isEmpty) {
        setFirstEmpty(true);
      }
      if (isPassEmpty) {
        setFirstPwsEmpty(true);
      }
      return;
    }
    e.preventDefault();
    const { data } = await loginUser({
      email: username,
      password,
    });
    if (data.message == "success") {
      setToken(data);
    } else {
      setIsValidated(false);
    }
  };
  const handleSubmit2 = async () => {
    if (isEmpty) {
      setFirstEmpty(true);
      return;
    }
    if (isPassEmpty) {
      setFirstPwsEmpty(true);
      return;
    }
    const { data } = await loginUser({
      email: username,
      password,
    });
    if (data.message == "success") {
      setToken(data);
    } else {
      setIsValidated(false);
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="AgResource Company Logo" />
      </div>
      <FluidInput
        setIsEmpty={setIsEmpty}
        firstEmpty={firstEmpty}
        setFirstEmpty={setFirstEmpty}
        type="text"
        label="Username or Email Address"
        id="username"
        style={style}
        field="username"
        setFiled={setFiled}
        onSubmitKeyEvent={() => passwordERef.current.focus()}
      />
      <FluidInput
        setIsEmpty={setIsPassEmpty}
        firstEmpty={firstPwsEmpty}
        setFirstEmpty={setFirstPwsEmpty}
        ref={passwordERef}
        type="password"
        label="password"
        id="password"
        style={style}
        field="password"
        setFiled={setFiled}
        onSubmitKeyEvent={handleSubmit2}
      />
      {!isValidated && (
        <div className="fluid-input" style={{ marginBottom: "15px" }}>
          <div className="fluid-input-holder">
            <input
              style={{
                borderColor: "red",
                backgroundColor: "red",
                color: "white",
              }}
              className="fluid-input-input"
              type="label"
              readOnly
              defaultValue="Invalid Username and Password"
            />
          </div>
        </div>
      )}
      <Button
        buttonText="log in"
        buttonClass="login-button"
        onClick={handleSubmit}
      />
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
