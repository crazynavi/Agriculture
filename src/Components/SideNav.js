import React, { useEffect, useState } from "react";
import { isRoleAllowed } from "../utils/isRoleAllowed";
import Logo from "../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { BsCreditCard2Front } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
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
  // // const role = JSON.parse(localStorage.getItem("tokenData")).user_role;
  // let role = [2656,2658,2669,2771,2663,2666,2635,2644,2650,2652,2734];
  // const isAllowed = (list) => {
  //   let isAllowed = false;
  //   role.forEach((element) => {
  //     if (list.indexOf(element) > -1) isAllowed = true;
  //   });
  //   return isAllowed;
  // };
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
            <div className="sub-menu">
              {isRoleAllowed([2656, 2658]) && (
                <NavLink to={"/report-daily"}>Daily Newsletter</NavLink>
              )}
              {isRoleAllowed([2669, 2671]) && (
                <NavLink to={"/report-weekly"}>Weekly Newsletter</NavLink>
              )}
              {isRoleAllowed([2663, 2666]) && (
                <NavLink to={"/report-plus"}>Plus+ Report</NavLink>
              )}
              {isRoleAllowed([2635, 2644]) && (
                <NavLink to={"/report-latam"}>LATAM Newsletter</NavLink>
              )}
              {isRoleAllowed([2650, 2652]) && (
                <NavLink to={"/report-climate"}>Climate Impact</NavLink>
              )}
            </div>
          )}
          {isRoleAllowed([2734]) && (
            <NavLink className="nav-item" to={"/my-account"}>
              <BsCreditCard2Front />
              <span className="ms-2">MY ACCOUNT</span>
            </NavLink>
          )}
          <NavLink className="nav-item" to={"/privacy"}>
            <RiErrorWarningLine />
            <span className="ms-2">PRIVACY POLICY</span>
          </NavLink>
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
            <button
              onClick={() => {
                localStorage.removeItem("tokenData");
                redirectToHome();
              }}
            >
              sign out
            </button>
            <small>Client</small>
            <h3>BRANDON STICKLER</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
