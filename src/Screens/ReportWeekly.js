import React, { useEffect, useState } from "react";
import ReportsArchives from "../Components/Reports/ReportsArchives";
import http from "../utils/http-common";
import LoadingSpinner from "../Components/LoadingSpinner";

const ReportWeekly = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const subID = "2377";
  useEffect(() => {
    setLoading(true);
    http
      .get("subscriptions/2377")
      .then((res) => {
        setData(res.data.data.reports);
      })
      .then(()=>{setLoading(false);});
  }, []);
  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <ReportsArchives subdata={data} subID={subID} />
        </>
      )}
    </>
  );
};

export default ReportWeekly;
