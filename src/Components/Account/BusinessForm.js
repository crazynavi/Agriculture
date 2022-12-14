import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/reports-image.png";
import http from "../../utils/http-common";
import lang from "../../utils/Language";
import LoadingSpinner from "../LoadingSpinner";

const ROLE_CODES = {
  631: "Daily Month",
  632: "Daily Year",
  637: "Weekly Month",
  636: "Weekly Year",
  640: "Plus Month",
  639: "Plus Year",
  643: "Latam Month",
  642: "Latam Year",
  646: "Impact Month",
  645: "Impact Year",
};

const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const style = {
  appearance: "none",
  backgroundColor: "#EDF1F4",
  border: 0,
  borderRadius: "7px",
  padding: "15px",
  marginTop: "5px",
  width: "100%",
};
const optionStyle = {
  fontSize: "20px",
};
const BusinessForm = () => {
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLasttName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setlastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [role, setrole] = useState("");
  const [validrole, setValidrole] = useState(false);
  const [roleFocus, setroleFocus] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [cancelItem, setCancelItem] = useState({});

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [list, setList] = useState([]);
  const [allowed, setAllowed] = useState({});

  const addUser = () => {
    let x = document.getElementById("addUser");
    x.className = "";
  };
  const launch_toast = (errMsg) => {
    setErrMsg(errMsg);
    let xxx = document.getElementsByClassName("error_toast");
    let x = xxx[0];
    x.className = "error_toast show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  };
  const launch_toast2 = (successMsg) => {
    setSuccessMsg(successMsg);
    let xxx = document.getElementsByClassName("success_toast");
    let x = xxx[0];
    x.className = "success_toast show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  };

  const cancelSub = () => {
    const { first_name, last_name, id, role, subscription_id } = cancelItem;
    const email = cancelItem.forward_email;
    http
      .post("subscription-userinfo-remove", {
        first_name,
        last_name,
        email,
        id,
        subscription_id,
      })
      .then((res) => {
        setList(
          list.filter(
            (item) =>
              item.forward_email != email ||
              item.id != id ||
              item.subscription_id != subscription_id
          )
        );
        setAllowed({
          ...allowed,
          [role]: allowed[role] + 1,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setFirstName("");
    setLasttName("");
    setEmail("");
    let x = document.getElementById("addUser");
    x.className = "hide";
  };

  const handleConfirm = () => {
    if (validFirstName && validLastName && validEmail && validrole) {
      if (allowed[role] !== undefined && allowed[role] > 0) {
        http
          .post("subscription-assign", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            role_id: role,
          })
          .then((res) => {
            launch_toast2("added successfully");
            setEmail("");
            setFirstName("");
            setLasttName("");
            setrole("");
            let x = document.getElementById("addUser");
            x.className = "hide";
            setList([
              {
                first_name: firstName,
                last_name: lastName,
                forward_email: email,
                role: role,
                subscription_id: res.data.data.subscription_id,
                id: res.data.data.lastid,
              },
              ...list,
            ]);
          })
          .then(() => {
            setAllowed({
              ...allowed,
              [role]: allowed[role] - 1,
            });
          })
          .catch((err) => {
            launch_toast(err.response.data.data.message);
          });
      } else {
        launch_toast("You need to buy extra subscriptions");
      }
    } else {
      launch_toast("Please complete all the fields");
    }
  };

  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);

  useEffect(() => {
    setLoading(true);
    http.get("business-available-subscription-lists").then((res) => {
      setAllowed(res.data.data[0]);
    });
    http.get("account-business").then((res) => {
      setList(res.data.data);
      console.log(res.data.data);
    }).then(()=>setLoading(false));
  }, []);
  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastName));
  }, [lastName]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setValidrole(role !== "" ? true : false);
  }, [role]);
  return (
    <>
      <div className="box-container mt-4">
        {loading && (
          <div className="p-2">
            <LoadingSpinner />
          </div>
        )}
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
          <div id="desc">{successMsg}</div>
        </div>
        <div
          className="add-newsletter-btn"
          onClick={() => {
            addUser();
          }}
        >
          <span>
            <AiOutlinePlus />
          </span>
        </div>
        <div id="addUser" className="hide">
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
                type="text"
                id="username"
                name="first_name"
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
                {lang.myAccount.firstNameShouldBe}
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
            <div className="form-items">
              <label htmlFor="role">
                <span className="required-icon">* </span>
                Please choose the subscription type
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validrole ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validrole || !role ? "hide" : "invalid"}
                />
              </label>
              <div className="subtype-selection">
                <select
                  className="form-control"
                  style={style}
                  name="role"
                  id="role"
                  autoComplete="off"
                  value={role}
                  onChange={(e) => {
                    setrole(e.target.value);
                  }}
                  aria-invalid={validrole ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setroleFocus(true)}
                  onBlur={() => setroleFocus(false)}
                >
                  <option style={optionStyle} value=""></option>
                  {allowed[631] && (
                    <option style={optionStyle} value="631">
                      Daily Month ({allowed["631"]})
                    </option>
                  )}
                  {allowed["632"] && (
                    <option style={optionStyle} value="632">
                      Daily Year ({allowed["632"]})
                    </option>
                  )}
                  {allowed["637"] && (
                    <option style={optionStyle} value="637">
                      Weekly Month ({allowed["637"]})
                    </option>
                  )}
                  {allowed["636"] && (
                    <option style={optionStyle} value="636">
                      Weekly Year ({allowed["636"]})
                    </option>
                  )}
                  {allowed["640"] && (
                    <option style={optionStyle} value="640">
                      Plus Month ({allowed["640"]})
                    </option>
                  )}
                  {allowed["639"] && (
                    <option style={optionStyle} value="639">
                      Plus Year ({allowed["639"]})
                    </option>
                  )}
                  {allowed["643"] && (
                    <option style={optionStyle} value="643">
                      Latam Month ({allowed["643"]})
                    </option>
                  )}
                  {allowed["642"] && (
                    <option style={optionStyle} value="642">
                      Latam Year ({allowed["642"]})
                    </option>
                  )}
                  {allowed["646"] && (
                    <option style={optionStyle} value="646">
                      Impact Month ({allowed["646"]})
                    </option>
                  )}
                  {allowed["645"] && (
                    <option style={optionStyle} value="645">
                      Impact Year ({allowed["645"]})
                    </option>
                  )}
                </select>
              </div>
              <p
                id="uidnote"
                className={role && !validrole ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                {lang.myAccount.roleIsRequired}
              </p>
            </div>
            <div
              className="btn-group d-flex w-100"
              style={{ justifyContent: "space-around" }}
            >
              <button onClick={() => handleConfirm()} className="success-btn">
                Confirm
              </button>
              <button
                onClick={() => {
                  handleCancel();
                }}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="newsletter-overflow">
          <h1 className="text-center">USER INFORMATION - DAILY NEWSLETTER</h1>
          <table className="mt-4">
            <thead>
              <tr>
                <th></th>
                <th>{lang.myAccount.firstName}</th>
                <th>{lang.myAccount.lastName}</th>
                <th>{lang.myAccount.email}</th>
                <th>Subscription Type</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, key) => {
                return (
                  <tr key={key}>
                    <td className="remove-newsletter-btn">
                      <span
                        onClick={() => {
                          setShowModal(true);
                          setCancelItem(item);
                        }}
                      >
                        <AiOutlineMinus />
                      </span>
                    </td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.forward_email}</td>
                    <td>{ROLE_CODES[item.role]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-inner">
              <div className="modal-logo">
                <img src={logo} alt="" />
              </div>
              <div className="modal-content">
                <h3>Are you sure you would like to delete?</h3>
              </div>
              <div className="modal-buttons mt-4">
                <button
                  className="warning-btn"
                  onClick={() => {
                    cancelSub();
                    setShowModal(false);
                  }}
                >
                  YES, DELETE
                </button>
                <button
                  className="danger-btn"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  NO, DO NOT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BusinessForm;
