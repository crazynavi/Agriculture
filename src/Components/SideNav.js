import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";

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
            <div className="sub-menu">
              <NavLink to={"/report-daily"}>Daily Newsletter</NavLink>
              <NavLink to={"/report-weekly"}>Weekly Newsletter</NavLink>
              <NavLink to={"/report-plus"}>Plus+ Report</NavLink>
              <NavLink to={"/report-latam"}>LATAM Newsletter</NavLink>
              <NavLink to={"/report-climate"}>Climate Impact</NavLink>
            </div>
          )}
          <NavLink className="nav-item" to={"/my-account"}>
            <BsCreditCard2Front />
            <span className="ms-2">MY ACCOUNT</span>
          </NavLink>
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
            <small>Client</small>
            <h3>BRANDON STICKLER</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
