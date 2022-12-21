import React, { useEffect, useState } from "react";
import DashboardTable from "../Components/DashboardTable";
import Updates from "../Components/Updates";
import WeatherCard from "../Components/Weather/WeatherCard";
import AdsBanner from "../Components/AdsBanner";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FcLeft } from "react-icons/fc";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import banner from "../assets/updates-2.jpg";
import Timestamp from "react-timestamp";
import lang from "../utils/Language";
import http from "../utils/http-common";
import LoadingSpinner from "../Components/LoadingSpinner";

const Dashboard = () => {
  const [showdetail, setShowdetail] = useState(false);
  const [detaildata, setDetaildata] = useState({});
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    http.get("get-barchart").then((res) => {
      setData(res.data);
    }).then(()=>{
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (detaildata.title) {
      setTitle(detaildata.title.split(";")[0]);
      const subtitle1 = detaildata.title.split(";")[1]
        ? `${detaildata.title.split(";")[1]};`
        : "";
      const subtitle2 = detaildata.title.split(";")[2]
        ? detaildata.title.split(";")[2]
        : "";
      setSubtitle(subtitle1 + subtitle2);
    }
  }, [detaildata]);
  return showdetail ? (
    <div className="box-container mt-4">
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div
          className="d-flex align-items-center go-back-btn"
          onClick={() => setShowdetail(false)}
        >
          <FcLeft />
          <h2 className="ms-2">{lang.reportArchives.back}</h2>
        </div>
        <div className="d-flex align-items-center">
          <div className="small-text d-flex align-items-center">
            <AiOutlineMinus />
            <h2>A</h2>
          </div>
          <div className="large-text d-flex align-items-center">
            <AiOutlinePlus />
            <h1>A</h1>
          </div>
        </div>
      </div>
      <div className="reports-overflow">
        <div className="archive-date pt-4">
          <h2>
            {title}{" "}
            <Timestamp
              options={{ showTime: 0 }}
              date={detaildata.published_at}
            />{" "}
          </h2>
        </div>
        <div className="archive-image mt-2">
          <img src={banner} alt="" className="w-100" />
        </div>
        <div className="archive-headline mt-2">
          <h1>{subtitle}</h1>
        </div>
        <div
          className="archive-text mt-3"
          dangerouslySetInnerHTML={{ __html: detaildata.content }}
        />
      </div>
    </div>
  ) : (
    <>
      <Updates setShowdetail={setShowdetail} setDetaildata={setDetaildata} />
      <div className="dashboard-container">
        <div className="dashboard-tables">
          {loading&& <LoadingSpinner />}
          {!loading&&data.map((table) => {
            return (
                <DashboardTable key={Object.keys(table)[0]} data={table} />
            );
          })}
        </div>
        <div className="dashboard-weather">
          <AdsBanner />
          <WeatherCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
