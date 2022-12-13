import React from "react";
import Image from "../assets/reports-image.png";

const ReportsCard = ({ setShowSingleArchive, data, setID }) => {
  const date = new Date(Number(data.published_at)*1000);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div
      className="reports-card-container mb-4"
      onClick={() => {
        setShowSingleArchive(true);
        setID(data.id);
      }}
    >
      <div className="report-image">
        <img src={Image} alt="" />
      </div>
      <div className="report-summary">
        <p>{data.title}</p>
        <small>{data.subtitle}</small>
      </div>
      <div className="report-date">
        <h2>{monthNames[date.getMonth()]}</h2>
        <h1>{date.getDate()}</h1>
      </div>
    </div>
  );
};

export default ReportsCard;
