import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import { isRoleAllowed } from "../utils/isRoleAllowed";
import Logo from "../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { BsCreditCard2Front } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

import lang from "../utils/Language";

import {
  AiFillCaretDown,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { BrowserRouter, NavLink } from "react-router-dom";
const redirectToHome = () => {
  window.location.href = "";
};
const SideNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="side-nav-container">
      <div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar">
          <NavLink end className="nav-item" to={"/"}>
            <IoHome />
            <span className="ms-2">HOME</span>
          </NavLink>
          <div className="nav-item" onClick={() => setMenuOpen(!isMenuOpen)}>
            <SiDatabricks />
            <span className="ms-2">REPORTS</span>
            <AiFillCaretDown className="ms-2" />
          </div>
          {isMenuOpen && (
            <div className="sub-menu" style={{position: "relative"}}>
              <div className="custom">
              {isRoleAllowed([632, 631, 628]) && (
                <NavLink to={"/report-daily"}>Daily Newsletter</NavLink>
              )}
              {isRoleAllowed([636, 637,638]) && (
                <NavLink to={"/report-weekly"}>Weekly Newsletter</NavLink>
              )}
              {isRoleAllowed([639,640,641]) && (
                <NavLink to={"/report-plus"}>Plus+ Report</NavLink>
              )}
              {isRoleAllowed([642,643,644]) && (
                <NavLink to={"/report-latam"}>LATAM Newsletter</NavLink>
              )}
              {isRoleAllowed([645,646,647]) && (
                <NavLink to={"/report-climate"}>Climate Impact</NavLink>
              )}
              </div>
            </div>
          )}
          {isRoleAllowed([119125]) && (
            <NavLink className="nav-item" to={"/my-account"}>
              <BsCreditCard2Front />
              <span className="ms-2">MY ACCOUNT</span>
            </NavLink>
          )}
          <NavLink className="nav-item" to={"/privacy"}>
            <RiErrorWarningLine />
            <span className="ms-2">PRIVACY POLICY</span>
          </NavLink>
          <p
            className="nav-item bg-black"
            // style={{fontSize:"1rem"}}
              onClick={() => {
                localStorage.removeItem("tokenData");
                localStorage.removeItem("timestamp");
                redirectToHome();
              }}
            > 
               <FontAwesomeIcon icon={faRightFromBracket}/>
               <span className="ms-2">  Sign out</span>
            </p>
        </div>
      </div>
      <div className="w-100">
        <p>Follow AgResource</p>
        <div className="social-icons mt-2  d-flex justify-content-between">
          <AiFillLinkedin />
          <AiOutlineTwitter />
          <AiFillFacebook />
          <FaInstagramSquare />
        </div>
        <div className="d-flex">
          <div className="client-img me-2 align-items-center">
            <img
              src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
              alt=""
            />
          </div>
          <div>
            <div className="d-flex">
            <h4>{(JSON.parse(localStorage.getItem("tokenData")).user_data.user_name).replace(/^./, str => str.toUpperCase())}</h4>

            </div>
            <h3 className="text-center">{`${JSON.parse(localStorage.getItem("tokenData")).user_data.first_name??""} ${JSON.parse(localStorage.getItem("tokenData")).user_data.last_name??""}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
