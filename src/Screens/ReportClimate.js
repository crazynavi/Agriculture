import React, { useEffect, useState } from "react";
import ReportsArchives from "../Components/Reports/ReportsArchives";
import http from "../utils/http-common";
import LoadingSpinner from "../Components/LoadingSpinner";

const ReportClimate = () => {
  const [data, setData] = useState([]);
  const subID = "2382";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    http
      .get("subscriptions/2382")
      .then((res) => {
        setData(res.data.data.reports);
      })
      .then(() => {
        setLoading(false);
      });
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

export default ReportClimate;
