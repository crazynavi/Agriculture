import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { isRoleAllowed } from "../utils/isRoleAllowed";
import Logo from "../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { BsCreditCard2Front } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { social } from "../utils/getTokendata";

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
  const social = JSON.parse(localStorage.getItem("tokenData")).social_links;
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="side-nav-container">
      <div style={{ width: "100%" }}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar">
          <NavLink end className="nav-item" to={""}>
            <IoHome />
            <span className="ms-2">{lang.navbar.home}</span>
          </NavLink>
          <div className="nav-item" onClick={() => setMenuOpen(!isMenuOpen)}>
            <SiDatabricks />
            <span className="ms-2">{lang.navbar.reports}</span>
            <AiFillCaretDown className="ms-2" />
          </div>
          {isMenuOpen && (
            <div className="sub-menu" style={{ position: "relative" }}>
              <div className="custom">
                {isRoleAllowed([632, 631, 628]) && (
                  <NavLink to={"report-daily"}>{lang.navbar.daily}</NavLink>
                )}
                {isRoleAllowed([636, 637, 638]) && (
                  <NavLink to={"report-weekly"}>{lang.navbar.reports}</NavLink>
                )}
                {isRoleAllowed([639, 640, 641]) && (
                  <NavLink to={"report-plus"}>{lang.navbar.plus}</NavLink>
                )}
                {isRoleAllowed([642, 643, 644]) && (
                  <NavLink to={"report-latam"}>{lang.navbar.latam}</NavLink>
                )}
                {isRoleAllowed([645, 646, 647]) && (
                  <NavLink to={"report-climate"}>
                    {lang.navbar.climate}
                  </NavLink>
                )}
              </div>
            </div>
          )}

          {isRoleAllowed([119125]) && (
            <NavLink className="nav-item" to={"/my-account"}>
              <BsCreditCard2Front />
              <span className="ms-2">{lang.navbar.myAccount}</span>
            </NavLink>
          )}

          <NavLink className="nav-item" to={"/privacy"}>
            <RiErrorWarningLine />
            <span className="ms-2">{lang.navbar.privacyPolicy}</span>
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
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="ms-2"> {lang.navbar.signOut}</span>
          </p>
        </div>
      </div>
      <div className="w-100">
        <p>{lang.navbar.followAg}</p>
        <div className="social-icons mt-2  d-flex justify-content-between">
          <a href={social.linkdin} target='_blank'>
            <AiFillLinkedin />
          </a>
          <a href={social.twitter} target='_blank'>
            <AiOutlineTwitter />
          </a>
          <a href={social.facebook} target='_blank'>
            <AiFillFacebook />
          </a>
          <a href={social.instagram} target='_blank'>
            <FaInstagramSquare />
          </a>
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
              {/* <h4>{(JSON.parse(localStorage.getItem("tokenData")).user_data.user_name).replace(/^./, str => str.toUpperCase())}</h4> */}
            </div>
            <h3 className="text-center">
              {lang.navbar.hello}{" "}
              {`${
                JSON.parse(localStorage.getItem("tokenData")).user_data
                  .first_name ?? ""
              } ${
                JSON.parse(localStorage.getItem("tokenData")).user_data
                  .last_name ?? ""
              }`}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
