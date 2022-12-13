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
        setShowdetail(true);
        setDetaildata(data);
    }
    useEffect(() => {
        http.get("get-latest-post").then((res)=>{
            setDaily_recent(res.data.data["daily"]);
            setWeekly_recent(res.data.data["weekly"]);
            setPlus_recent(res.data.data["plus"]);
            setLatam_recent(res.data.data["agresource-latam"]);
            setImpact_recent(res.data.data["climate-newsletter"]);
        })
    }, []);
    return (
        <div className='box-container'>
            <h2 className='box-heading'>Latest Updates</h2>
            <div className='d-flex updates justify-content-between align-items-center'>
                <UpdatesCard onClick={()=>{onClick(daily_recent)}} image={daily_recent.image} text={daily_recent.title} timestamp={daily_recent.published_at} />
                <UpdatesCard onClick={()=>{onClick(weekly_recent)}} image={weekly_recent.image} text={weekly_recent.title} timestamp={weekly_recent.published_at} />
                <UpdatesCard onClick={()=>{onClick(plus_recent)}} image={plus_recent.image} text={plus_recent.title} timestamp={plus_recent.published_at} />
                <UpdatesCard onClick={()=>{onClick(latam_recent)}} image={latam_recent.image} text={latam_recent.title} timestamp={latam_recent.published_at} />
                <UpdatesCard onClick={()=>{onClick(impact_recent)}} image={impact_recent.image} text={impact_recent.title} timestamp={impact_recent.published_at} />
            </div>
        </div>
    )
}

export default Updates
