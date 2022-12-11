import React, { useEffect, useState } from "react";
import DashboardTable from "../Components/DashboardTable";
import Updates from "../Components/Updates";
import WeatherCard from "../Components/Weather/WeatherCard";
import AdsBanner from "../Components/AdsBanner";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FcLeft } from 'react-icons/fc'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import banner from '../assets/updates-2.jpg'
import Timestamp from 'react-timestamp'

const Dashboard = () => {
  const [showdetail, setShowdetail] = useState(false);
  const [detaildata, setDetaildata] = useState({});
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  useEffect(() => {
    if(detaildata.title){
    setTitle((detaildata.title).split(";")[0]);
    const subtitle1 = (detaildata.title).split(";")[1]?`${(detaildata.title).split(";")[1]};`:"";
    const subtitle2 = (detaildata.title).split(";")[2]?(detaildata.title).split(";")[2]:"";
    setSubtitle(subtitle1+subtitle2);
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
          <h2 className="ms-2">Archives</h2>
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
          <h2>{title} <Timestamp date={detaildata.date}/> </h2>
        </div>
        <div className="archive-image mt-2">
          <img src={banner} alt="" className="w-100" />
        </div>
        <div className="archive-headline mt-2">
          <h1>
            {subtitle}
          </h1>
        </div>
        <div className="archive-text mt-3" dangerouslySetInnerHTML={{ __html: detaildata.content}} />
          {/* <h2>
            AgResource Farm Marketing Advice for Wednesday: 1/ No new advice.
          </h2>
          <p className="mt-4">
            <b>6:30 AM CT CBOT Values:</b> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="mt-2">
            <b>6:30 AM CT CBOT Values:</b> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="mt-2">
            <b>6:30 AM CT CBOT Values:</b> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="mt-2">
            <b>6:30 AM CT CBOT Values:</b> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p> */}
          {/* {detaildata.post_content} */}
      </div>
    </div>
  ) : (
    <>
      <Updates setShowdetail={setShowdetail} setDetaildata={setDetaildata} />
      <div className="dashboard-container">
        <div className="dashboard-tables">
          <DashboardTable title={"Corn"} />
          <DashboardTable title={"Soybeans"} />
          <DashboardTable title={"Soybean Meal"} />
          <DashboardTable title={"Soybean Oil"} />
          <DashboardTable title={"Wheat"} />
          <DashboardTable title={"Lean Hogs"} success />
          <DashboardTable title={"Live Cattle"} />
          <DashboardTable title={"Feeder Cattle"} />
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
