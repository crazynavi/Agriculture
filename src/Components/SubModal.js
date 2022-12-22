import React from "react";
import logo from "../assets/reports-image.png";
import { useNavigate } from "react-router-dom";

const SubModal = ({ setShowModal }) => {
  const navigate = useNavigate();
  return (
    <div className="modal">
      <div className="modal-inner">
        <div className="modal-logo">
          <img src={logo} alt="" />
        </div>
        <div className="modal-content">
          {/* <h3>Why do you wish to cancel your AgResource subscription?</h3> */}
          <h3>Are you sure you would like to subscribe?</h3>
        </div>
        <div className="modal-buttons mt-4">
          <button
            className="danger-btn ms-0"
            onClick={() => {
              navigate("my-account?tab=sub", { replace: true });
            }}
          >
            YES, I WILL
          </button>
          <button
            className="warning-btn ms-4"
            onClick={() => {
              setShowModal(false);
            }}
          >
            NO, DO NOT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubModal;
