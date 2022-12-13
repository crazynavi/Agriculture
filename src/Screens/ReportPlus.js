import React, { useEffect, useState } from "react";
import ReportsArchives from "../Components/Reports/ReportsArchives";
import http from "../utils/http-common";

const ReportPlus = () => {
  const [data, setData] = useState([]);
  const subID = "2380";
  useEffect(() => {
    http.get("subscriptions/2380").then((res) => {
      setData(res.data.data.reports);
      console.log(res.data.data.reports);
    });
  }, []);
  return (
    <>
      <ReportsArchives subdata={data} subID={subID}/>
    </>
  );
};

export default ReportPlus;
