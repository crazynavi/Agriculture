import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/US-Logo.png";
import Button from "./Button";
import FluidInput from "./FluidInput";

async function loginUser(credentials) {
  return fetch(
    "https://agresource.redcliffeltd.com/wp-json/ag/v1/authentication",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  ).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const setFiled = (filedName, fieldValue) => {
    if (filedName === "username") setUserName(fieldValue);
    else setPassword(fieldValue);
  };
  const style = {
    margin: "15px 0",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await loginUser({
      email:username,
      password,
    });
    console.log(data);
    if (data.message == 'success') {
      setToken(data.token_data);
      localStorage.setItem('userInfo', JSON.stringify(data.user_data));
    } else {
      alert("email and password is not valid")
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="AgResource Company Logo" />
      </div>

      <FluidInput
        type="text"
        label="Username or Email Address"
        id="username"
        style={style}
        field="username"
        setFiled={setFiled}
      />
      <FluidInput
        type="password"
        label="password"
        id="password"
        style={style}
        field="password"
        setFiled={setFiled}
      />
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
