import React, { useEffect, useState } from "react";
import ReportsArchives from "../Components/Reports/ReportsArchives";
import http from "../utils/http-common";

const ReportClimate = () => {
  const [data, setData] = useState([]);
  const subID = "2382";
  useEffect(() => {
    http.get("subscriptions/2382").then((res) => {
      console.log(res.data.data);
      setData(res.data.data.reports);
    });
  }, []);
  return (
    <>
      <ReportsArchives subdata={data} subID={subID}/>
    </>
  );
};

export default ReportClimate;
