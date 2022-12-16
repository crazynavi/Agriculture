import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faTimes,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import lang from '../../utils/Language';

const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const BusinessForm = () => {
    const [firstName, setFirstName] = useState("");
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLasttName] = useState("");
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setlastNameFocus] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const addUser = () => {
        let x = document.getElementById("addUser");
        x.className = "";
    }

    const handleCancel = () => {
        setFirstName("");
        setLasttName("");
        setEmail("");
        let x = document.getElementById("addUser");
        x.className = "hide";
    }
    const handleConfirm = () => {
        let x = document.getElementById("addUser");
        x.className = "hide";
        alert("success");
    }
    useEffect(() => {
        setValidFirstName(USER_REGEX.test(firstName));
    }, [firstName]);

    useEffect(() => {
        setValidLastName(USER_REGEX.test(lastName));
    }, [lastName]);
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);
    return (
        <>
            <div className='box-container mt-4'>
                <div className='add-newsletter-btn' onClick={() => { addUser() }}><span><AiOutlinePlus /></span></div>
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
                        <div className="form-items w-100">
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
                        <div className="btn-group d-flex w-100" style={{ justifyContent: "space-around" }}>
                            <button onClick={() => handleConfirm()} className="success-btn">Confirm</button>
                            <button onClick={() => { handleCancel() }} className="cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>
                <div className='newsletter-overflow'>
                    <h1 className='text-center'>USER INFORMATION - DAILY NEWSLETTER</h1>
                    <table className='mt-4'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>{lang.myAccount.firstName}</th>
                                <th>{lang.myAccount.lastName}</th>
                                <th>{lang.myAccount.email}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='remove-newsletter-btn'>
                                    <span><AiOutlineMinus /></span>
                                </td>
                                <td>Brandon</td>
                                <td>Stickler</td>
                                <td>brandon@agresource.com</td>
                            </tr>
                            <tr>
                                <td className='remove-newsletter-btn'>
                                    <span><AiOutlineMinus /></span>
                                </td>
                                <td>Brandon</td>
                                <td>Stickler</td>
                                <td>brandon@agresource.com</td>
                            </tr>
                            <tr>
                                <td className='remove-newsletter-btn'>
                                    <span><AiOutlineMinus /></span>
                                </td>
                                <td>Brandon</td>
                                <td>Stickler</td>
                                <td>brandon@agresource.com</td>
                            </tr>
                            <tr>
                                <td className='remove-newsletter-btn'>
                                    <span><AiOutlineMinus /></span>
                                </td>
                                <td>Brandon</td>
                                <td>Stickler</td>
                                <td>brandon@agresource.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BusinessForm
