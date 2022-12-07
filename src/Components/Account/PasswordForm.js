import React, { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import http from '../../utils/http-common';

const style = {
  appearance: "none",
  backgroundColor: "#EDF1F4",
  border: 0,
  borderRadius: "7px",
  padding: "15px",
  marginTop: "5px",
};
const optionStyle = {
  fontSize: "20px",
};
const PWD_REGEX = /^[a-zA-Z0-9!@#$%]{6,20}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PasswordForm = (props) => {

  const userRef = useRef();
  const errRef = useRef();

  const [password, setPassword] = useState("");

  const [pwd, setpwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setmatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("You have to complete all the fields...");

  const [success, setSuccess] = useState(false);

  const launch_toast = (errMsg) => {
    setErrMsg(errMsg);
    let xxx = document.getElementsByClassName("error_toast");
    let x = xxx[0];
    x.className = "error_toast show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
  }
  const launch_toast2 = () => {
    let xxx = document.getElementsByClassName("success_toast");
    let x = xxx[0];
    x.className = "success_toast show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
  }
  const { updateState, currentTab } = props;
  useEffect(() => {
    let validated = validPwd && validMatch && password != "";
    if (currentTab === "password", updateState !== 0) {
      if (validated) {
        http.post("account/password/update", { current_password: password, new_password: pwd, confirm_password: matchPwd })
          .then((res) => {
            launch_toast2();
          })
          .catch(
            (err) => {
              if (err.response.data.data.message === "incorrect current password") { launch_toast(err.response.data.data.message) }
              else { launch_toast("server in not connected") }
            });
      } else {
        launch_toast("You have to complete all the fields...");
      }
    }
  }, [updateState])
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  return (
    <>
      <div className="box-container mt-4">
        <h1 className="text-center">PASSWORD INFORMATION</h1>
        <div id="toast" className="error_toast">
          <div id="img" className="bg-info">
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div id="desc">{errMsg}</div>
        </div>
        <div id="toast_success" className="success_toast">
          <div id="img" className="bg-info">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div id="desc">Updated Successfully</div>
        </div>
        <div className="form-group mt-4 mb-4" style={{ flexDirection: "column", alignItems: "center" }}>
          <div className="form-items">
            <label>
              <span className="required-icon">* </span>
              Current
              <FontAwesomeIcon
                icon={faCheck}
                className={password !== "" ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={password !== "" || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              name={"password"}
              autoComplete={"off"}
              ref={userRef}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={"text"}
            />
          </div>
          <div className="form-items">
            <label htmlFor="password">
              <span className="required-icon">* </span>
              New Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              name={"pwd"}
              type="password"
              id="password"
              autoComplete={"off"}
              onChange={(e) => setpwd(e.target.value)}
              value={pwd}
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              password is at least 6 letters
            </p>
          </div>
          <div className="form-items">
            <label htmlFor="confirm_pwd">
              <span className="required-icon">* </span>
              Confirm Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              name={"confrim_pwd"}
              id="confirm_pwd"
              onChange={(e) => setmatchPwd(e.target.value)}
              value={matchPwd}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the new password field.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordForm;
