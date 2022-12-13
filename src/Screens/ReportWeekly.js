import React, { useEffect, useState } from "react";
import ReportsArchives from "../Components/Reports/ReportsArchives";
import http from "../utils/http-common";

const ReportWeekly = () => {
  const [data, setData] = useState([]);
  const subID = "2377";
  useEffect(() => {
    http.get("subscriptions/2377").then((res) => {
      setData(res.data.data.reports);
    });
  }, []);
  return (
    <>
      <ReportsArchives subdata={data} subID={subID}/>
    </>
  );
};

export default ReportWeekly;
