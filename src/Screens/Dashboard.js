import React, { useEffect } from 'react'
import DashboardTable from '../Components/DashboardTable'
import Updates from '../Components/Updates'
import WeatherCard from '../Components/Weather/WeatherCard'
import AdsBanner from '../Components/AdsBanner'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { userData } from '../utils/getTokendata'
const Dashboard = () => {
  return (
    <>
      <Updates />
      <div className='dashboard-container'>
        <div className='dashboard-tables'>
          <DashboardTable title={'Corn'} />
          <DashboardTable title={'Soybeans'} />
          <DashboardTable title={'Soybean Meal'} />
          <DashboardTable title={'Soybean Oil'} />
          <DashboardTable title={'Wheat'} />
          <DashboardTable title={'Lean Hogs'} success />
          <DashboardTable title={'Live Cattle'} />
          <DashboardTable title={'Feeder Cattle'} />
        </div>
        <div className='dashboard-weather'>
          <AdsBanner />
          {/* <WeatherCard /> */}
        </div>
      </div>
    </>
  )
}

export default Dashboard
