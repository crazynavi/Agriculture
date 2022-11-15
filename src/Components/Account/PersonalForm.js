import React, { useState } from "react";

import { AiOutlineMinus } from "react-icons/ai";
const style = {
    appearance: "none",
    backgroundColor: "#EDF1F4",
    border: 0,
    borderRadius: "7px",
    padding: "15px",
    marginTop: "5px",
}
const optionStyle={
    fontSize:"20px",
}
const PersonalForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [company, setCompany] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userstate, setUserstate] = useState("");
  const [postal, setPostal] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [psw, setpsw] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <>
      <div className="box-container mt-4">
        <h1 className="text-center">USER INFORMATION</h1>
        <div className="form-group mt-4 mb-4">
          <div className="form-items">
            <label>First Name:</label>
            <input
              name="firstName"
              type={"text"}
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-items">
            <label>Last Name:</label>
            <input name={"lastName"} type={"text"} required/>
          </div>
          <div className="form-items">
            <label>Company:</label>
            <input
              type={"text"}
              name={"company"}
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </div>
          <div className="form-items">
            <label>Occupation:</label>
            <select
              className="form-control"
              style={style}
              name="occupation"
              id="occupation"
              value={occupation}
              onChange={(e)=>{setOccupation(e.target.value)}}
              required
            >
              <option style={{}} value=""></option>
              <option style={optionStyle} value="Grain Elevator">Grain Elevator</option>
              <option style={optionStyle} value="Feed Mixer/manufacturer">Feed Mixer/manufacturer</option>
              <option style={optionStyle} value="Farmer">Farmer</option>
              <option style={optionStyle} value="Biofuel Producer">Biofuel Producer</option>
              <option style={optionStyle} value="Processor">Processor</option>
              <option style={optionStyle} value="Financial Professiona">Financial Professiona</option>
              <option style={optionStyle} value="Broker">Broker</option>
              <option style={optionStyle} value="Trader">Trader</option>
              <option style={optionStyle} value="Consulting">Consulting</option>
              <option style={optionStyle} value="Other">Other</option>
            </select>
          </div>
          <div className="form-items w-100">
            <label>Address:</label>
            <input
              type={"text"}
              name={"address"}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="form-items w-medium">
            <label>Country:</label>
            <input
              type={"text"}
              name={"country"}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="form-items w-medium">
            <label>City:</label>
            <input
              type={"text"}
              name={"city"}
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="form-items w-xs">
            <label>State:</label>
            <input
              name={"state"}
              value={userstate}
              onChange={(e) => {
                setUserstate(e.target.value);
              }}
              type={"text"}
            />
          </div>
          <div className="form-items w-small">
            <label>Postal:</label>
            <input
              name={"postal"}
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
              }}
              type={"text"}
            />
          </div>
          <div className="form-items">
            <label>Email Address:</label>
            <input
              name={"email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type={"email"}
              required
            />
          </div>
          <div className="form-items">
            <label>Phone Number (in the form xxx-xxx-xxxx):</label>
            <input
              name={"phone"}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type={"tel"}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div className="form-items w-equal-width">
            <label>Current Password</label>
            <input
              name={"password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={"password"}
              required
            />
          </div>
          <div className="form-items w-equal-width">
            <label>New Password</label>
            <input
              name={"psw"}
              value={psw}
              onChange={(e) => {
                setpsw(e.target.value);
              }}
              type={"password"}
              required
            />
          </div>
          <div className="form-items w-equal-width">
            <label>Confirm Password</label>
            <input
              name={"confirm"}
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
              type={"password"}
              required
            />
          </div>
        </div>
      </div>
      <div className="box-container mt-4">
        <h1 className="text-center">DEVICES</h1>
        <div className="devices-section mt-3 mb-4 d-flex justify-content-between align-items-cener">
          <div className="d-flex justify-content-between align-items-center">
            <span>
              <AiOutlineMinus />
            </span>
            <div>IOS Device Added:</div>
            <div> 08/05/2022</div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>
              <AiOutlineMinus />
            </span>
            <div>IOS Device Added:</div> <div>08/05/2022</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalForm;
