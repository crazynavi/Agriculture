import React, { useEffect, useState } from "react";
import ReportsArchives from "../Components/Reports/ReportsArchives";
import http from "../utils/http-common";
import LoadingSpinner from "../Components/LoadingSpinner";
import lang from "../utils/Language";

const ReportDaily = () => {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("morning");
  const [subdata, setSubdata] = useState([]);
  const [detailstatus, setDetailstatus] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    http
      .get("subscriptions/2376")
      .then((res) => {
        setData(res.data.data.reports);
        const partdata = res.data.data.reports.filter((value) => {
          return value.edition === "am";
        });
        setSubdata(partdata);
      })
      .then(()=>{setLoading(false)});
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      switch (tab) {
        case "morning":
          setSubdata(
            data.filter((value) => {
              return value.edition === "am";
            })
          );
          break;
        case "noon":
          setSubdata(
            data.filter((value) => {
              return value.edition === "noon";
            })
          );
          break;
        case "evening":
          setSubdata(
            data.filter((value) => {
              return value.edition === "pm";
            })
          );
          break;
        case "saturday":
          setSubdata(
            data.filter((value) => {
              return value.edition === "saturday review";
            })
          );
          break;
        case "sunday":
          setSubdata(
            data.filter((value) => {
              return value.edition === "sunday week ahead";
            })
          );
          break;
        default:
          setSubdata(
            data.filter((value) => {
              return value.edition === "breaking analysis";
            })
          );
          break;
      }
    }
  }, [tab]);
  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <div className="top-tabs">
            <div
              onClick={() => {
                setTab("morning");
                setDetailstatus(!detailstatus);
              }}
              className={tab === "morning" ? "active" : ""}
            >
              {lang.reportDaily.morning}
            </div>
            <div
              onClick={() => {
                setTab("noon");
                setDetailstatus(!detailstatus);
              }}
              className={tab === "noon" ? "active" : ""}
            >
              {lang.reportDaily.noon}
            </div>
            <div
              onClick={() => {
                setTab("evening");
                setDetailstatus(!detailstatus);
              }}
              className={tab === "evening" ? "active" : ""}
            >
              {lang.reportDaily.evening}
            </div>
            <div
              onClick={() => {
                setTab("saturday");
                setDetailstatus(!detailstatus);
              }}
              className={tab === "saturday" ? "active" : ""}
            >
              {lang.reportDaily.saturday}
            </div>
            <div
              onClick={() => {
                setTab("sunday");
                setDetailstatus(!detailstatus);
              }}
              className={tab === "sunday" ? "active" : ""}
            >
              {lang.reportDaily.sunday}
            </div>
            <div
              onClick={() => {
                setTab("breaking");
                setDetailstatus(!detailstatus);
              }}
              className={tab === "breaking" ? "active" : ""}
            >
              {lang.reportDaily.breaking}
            </div>
          </div>
          <ReportsArchives
            detailstatus={detailstatus}
            subdata={subdata}
            subID={"2376"}
          />
        </>
      )}
    </>
  );
};

export default ReportDaily;
