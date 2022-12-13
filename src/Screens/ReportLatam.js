import React, { useEffect, useState } from "react";
import ReportsArchives from "../Components/Reports/ReportsArchives";
import http from "../utils/http-common";

const ReportLatam = () => {
  const [data, setData] = useState([]);
  const subID = "2381";
  useEffect(() => {
    http.get("subscriptions/2381").then((res) => {
    });
  }, []);
  return (
    <>
      <ReportsArchives subdata={data} subID={subID}/>
    </>
  );
};

export default ReportLatam;
