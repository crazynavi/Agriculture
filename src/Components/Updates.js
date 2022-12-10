import React, { useEffect, useState } from 'react'
import Update1 from '../assets/updates-1.jpg'
import Update2 from '../assets/updates-2.jpg'
import Update3 from '../assets/updates-3.jpg'
import UpdatesCard from './UpdatesCard'
import http from '../utils/http-common';


const Updates = (props) => {
    const [daily_recent, setDaily_recent] = useState({});
    const [weekly_recent, setWeekly_recent] = useState({});
    const [plus_recent, setPlus_recent] = useState({});
    const [latam_recent, setLatam_recent] = useState({});
    const [impact_recent, setImpact_recent] = useState({});
    const {setShowdetail, setDetaildata} = props;
    const onClick = (data) =>{
        console.log(data);
        setShowdetail(true);
        setDetaildata(data);
    }
    useEffect(() => {
        http.get("get-latest-post").then((res)=>{
            setDaily_recent(res.data.data["daily"][0]);
            setWeekly_recent(res.data.data["weekly"][0]);
            setPlus_recent(res.data.data["plus"][0]);
            setLatam_recent(res.data.data["agresource-latam"][0]);
            setImpact_recent(res.data.data["climate-impact"][0]);
            console.log(res.data.data);
        })
    }, []);
    return (
        <div className='box-container'>
            <h2 className='box-heading'>Latest Updates</h2>
            <div className='d-flex updates justify-content-between align-items-center'>
                <UpdatesCard onClick={()=>{onClick(daily_recent)}} image={Update1} text={daily_recent.post_title} timestamp={daily_recent.post_date} />
                <UpdatesCard onClick={()=>{onClick(weekly_recent)}} image={Update1} text={weekly_recent.post_title} timestamp={weekly_recent.post_date} />
                <UpdatesCard onClick={()=>{onClick(plus_recent)}} image={Update2} text={plus_recent.post_title} timestamp={plus_recent.post_date} />
                <UpdatesCard onClick={()=>{onClick(latam_recent)}} image={Update1} text={latam_recent.post_title} timestamp={latam_recent.post_date} />
                <UpdatesCard onClick={()=>{onClick(impact_recent)}} image={Update3} text={impact_recent.post_title} timestamp={impact_recent.post_date} />
            </div>
        </div>
    )
}

export default Updates
