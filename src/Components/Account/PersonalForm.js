import React, { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import lang from "../../utils/Language";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineMinus } from "react-icons/ai";
import http from "../../utils/http-common";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import LoadingSpinner from "../LoadingSpinner";

const style = {
  // appearance: "none",
  backgroundColor: "#EDF1F4",
  border: 0,
  borderRadius: "7px",
  padding: "15px",
  marginTop: "5px",
};
const optionStyle = {
  fontSize: "20px",
};
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const OCCUPATION_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
// const PHONE_NUMBER_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const PHONE_NUMBER_REGEX = /^[0-9]{10,13}$/;

const PersonalForm = (props) => {
  const userRef = useRef();
  const errRef = useRef();

  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const validFirstName = USER_REGEX.test(firstName);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLasttName] = useState("");
  const validLastName = USER_REGEX.test(lastName);
  const [lastNameFocus, setlastNameFocus] = useState(false);

  const [company, setCompany] = useState("");

  const [occupation, setOccupation] = useState("");
  const validOccupation = occupation !== "" ? true : false;
  const [occupationFocus, setOccupationFocus] = useState(false);

  // const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  const [city, setCity] = useState("");

  const [userstate, setUserstate] = useState("");

  const [postal, setPostal] = useState("");

  const [email, setEmail] = useState("");
  const validEmail = EMAIL_REGEX.test(email);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const validPhoneNumber = PHONE_NUMBER_REGEX.test(Number(phoneNumber));
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const { updateState, currentTab } = props;

  const [devices, setDevices] = useState([]);

  const launch_toast = () => {
    let xxx = document.getElementsByClassName("error_toast");
    let x = xxx[0];
    x.className = "error_toast show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  };
  const launch_toast2 = () => {
    let xxx = document.getElementsByClassName("success_toast");
    let x = xxx[0];
    x.className = "success_toast show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  };
  useEffect(() => {
    console.log(updateState);
    console.log(currentTab);
    let validated =
      validEmail &&
      validFirstName &&
      validLastName &&
      validOccupation &&
      validPhoneNumber;
    if ((currentTab === "personal", updateState !== 0)) {
      if (validated) {
        setLoading(true);
        http
          .post("account/update", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phoneNumber,
            country: country,
            city: city,
            state: userstate,
            zip: postal,
            occupation: occupation,
            company: company,
          })
          .then((res) => {
            launch_toast2();
          })
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        launch_toast();
      }
    }
  }, [updateState]);

  useEffect(() => {
    setLoading(true);
    http
      .get("account")
      .then((res) => {
        const data = res.data.data;
        setFirstName(data.first_name);
        setLasttName(data.last_name);
        setEmail(data.email);
        setCompany(data.company);
        setOccupation(data.occupation);
        setCity(data.city);
        setUserstate(data.state);
        setPostal(data.zip);
        setPhoneNumber(data.phone);
        setCountry(data.country);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    http
      .get("get_device_infos")
      .then((res) => {
        setDevices(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, phoneNumber]);

  const cancelDevice = (device) => {
    let key = device.meta_key[8];
    http
      .post("remove_device_info", { device_id: key })
      .then((res) => {
        let new_devices = devices.filter((dev) => {
          return dev != device;
        });
        setDevices(new_devices);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="box-container mt-4">
        <h1 className="text-center">{lang.myAccount.userInformation}</h1>
        {loading && (
          <div className="p-2">
            <LoadingSpinner />
          </div>
        )}
        <div id="toast" className="error_toast">
          <div id="img" className="bg-info">
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div id="desc">{lang.myAccount.youHaveToComplete}</div>
        </div>
        <div id="toast_success" className="success_toast">
          <div id="img" className="bg-info">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div id="desc">{lang.myAccount.updatedSuccessfully}</div>
        </div>
        <div className="form-group mt-4 mb-4">
          <div className="form-items">
            <label htmlFor="username">
              <span className="required-icon">* </span>
              {lang.myAccount.firstName}
              <FontAwesomeIcon
                icon={faCheck}
                className={validFirstName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validFirstName || !firstName ? "hide" : "invalid"}
              />
            </label>
            <input
              disabled={loading}
              type="text"
              id="username"
              name="first_name"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              aria-invalid={validFirstName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(false)}
            />
            <p
              id="uidnote"
              className={
                firstName && !validFirstName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
            </p>
          </div>
          <div className="form-items">
            <label htmlFor="lastname">
              <span className="required-icon">* </span>
              {lang.myAccount.lastName}
              <FontAwesomeIcon
                icon={faCheck}
                className={validLastName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validLastName || !lastName ? "hide" : "invalid"}
              />
            </label>
            <input
              disabled={loading}
              type="text"
              id="lastname"
              name={"last_name"}
              autoComplete="off"
              onChange={(e) => setLasttName(e.target.value)}
              value={lastName}
              aria-invalid={validLastName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setlastNameFocus(true)}
              onBlur={() => setlastNameFocus(false)}
            />
            <p
              id="uidnote"
              className={
                lastName && !validLastName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              {lang.myAccount.lastNameShouldBe}
            </p>
          </div>
          <div className="form-items">
            <label>{lang.myAccount.company}</label>
            <input
              disabled={loading}
              type={"text"}
              name={"company"}
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </div>
          <div className="form-items">
            <label htmlFor="occupation">
              <span className="required-icon">* </span>
              {lang.myAccount.occupation}
              <FontAwesomeIcon
                icon={faCheck}
                className={validOccupation ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validOccupation || !occupation ? "hide" : "invalid"}
              />
            </label>
            <select
              className="form-control"
              style={style}
              name="occupation"
              id="occupation"
              autoComplete="off"
              value={occupation}
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
              aria-invalid={validOccupation ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setOccupationFocus(true)}
              onBlur={() => setOccupationFocus(false)}
            >
              <option style={{}} value=""></option>
              <option style={optionStyle} value="Grain Elevator">
                Grain Elevator
              </option>
              <option style={optionStyle} value="Feed Mixer/manufacturer">
                Feed Mixer/manufacturer
              </option>
              <option style={optionStyle} value="Farmer">
                Farmer
              </option>
              <option style={optionStyle} value="Biofuel Producer">
                Biofuel Producer
              </option>
              <option style={optionStyle} value="Processor">
                Processor
              </option>
              <option style={optionStyle} value="Financial Professiona">
                Financial Professiona
              </option>
              <option style={optionStyle} value="Broker">
                Broker
              </option>
              <option style={optionStyle} value="Trader">
                Trader
              </option>
              <option style={optionStyle} value="Consulting">
                Consulting
              </option>
              <option style={optionStyle} value="Other">
                Other
              </option>
            </select>
            <p
              id="uidnote"
              className={
                occupation && !validOccupation ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              {lang.myAccount.occupationIsRequired}
            </p>
          </div>
          <div className="form-items w-medium">
            <label>{lang.myAccount.country}</label>
            <input
              disabled={loading}
              type={"text"}
              name={"country"}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="form-items w-medium">
            <label>{lang.myAccount.city}</label>
            <input
              disabled={loading}
              type={"text"}
              name={"city"}
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="form-items w-small">
            <label>{lang.myAccount.state}</label>
            <input
              disabled={loading}
              name={"state"}
              value={userstate}
              onChange={(e) => {
                setUserstate(e.target.value);
              }}
              type={"text"}
            />
          </div>
          <div className="form-items w-small">
            <label>{lang.myAccount.postal}</label>
            <input
              disabled={loading}
              name={"postal"}
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
              }}
              type={"text"}
            />
          </div>
          <div className="form-items">
            <label htmlFor="phone">
              <span className="required-icon">* </span>
              {lang.myAccount.phoneNumber}
              <FontAwesomeIcon
                icon={faCheck}
                className={validPhoneNumber ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validPhoneNumber || !phoneNumber ? "hide" : "invalid"
                }
              />
            </label>
            <input
              disabled={loading}
              type="text"
              name="phone_number"
              id="phone"
              autoComplete="off"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              aria-invalid={phoneNumber ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setPhoneNumberFocus(true)}
              onBlur={() => setPhoneNumberFocus(false)}
            />
            <p
              id="uidnote"
              className={
                phoneNumber && !validPhoneNumber ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              {lang.myAccount.validPhoneNumber}
            </p>
          </div>
          <div className="form-items">
            <label htmlFor="email">
              <span className="required-icon">* </span>
              {lang.myAccount.email}
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              />
            </label>
            <input
              disabled={loading}
              type="text"
              id="email"
              name={"email"}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="uidnote"
              className={email && !validEmail ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              {lang.myAccount.validEmail}
            </p>
          </div>
        </div>
      </div>
      <div className="box-container mt-4">
        <h1 className="text-center">{lang.myAccount.devices}</h1>
        <div className="devices-section mt-3 mb-4 d-flex flex-wrap align-items-cener">
          {devices.map((device, index) => {
            return (
              <div
                key={index}
                className="d-flex p-2 justify-content-start align-items-center"
              >
                <span
                  onClick={() => {
                    cancelDevice(device);
                  }}
                  className="me-2"
                >
                  <AiOutlineMinus />
                </span>
                <div>
                  {device.meta_value} {lang.myAccount.deviceAdded}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PersonalForm;
