import React, { useEffect, useState } from "react";
import ReportsArchives from "../Components/Reports/ReportsArchives";
import http from "../utils/http-common";
import LoadingSpinner from "../Components/LoadingSpinner";

const ReportLatam = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const subID = "2381";
  useEffect(() => {
    setLoading(true);
    http
      .get("subscriptions/2381")
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

export default ReportLatam;
