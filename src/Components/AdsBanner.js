import React, {useEffect, useState} from 'react'
import http from '../utils/http-common';


function AdsBanner() {
 const [banner, setBanner] = useState([]);

 //fetch Banner data
const fetchAdsData = async() => {
    try{
        await http.get(`get-ads`).then(response => {
            setBanner(JSON.parse(response.data))
        });  
    }catch(error){
        // console.log(error.message);
    }  
}

useEffect(() => {
    fetchAdsData();    
},[])

  return (
    <div className='weather-banner'>
        <a target='_blank' rel="noreferrer" href={banner.ads_link}>
            <img src={banner.ads_background_image} alt='' />
        </a>
    </div>
  )
}

export default AdsBanner