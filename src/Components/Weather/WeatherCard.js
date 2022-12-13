import React, { useEffect, useState } from 'react';
import axios from 'axios';
import http from '../../utils/http-common';
import CurrentWeather from '../Weather/CurrentWeather'
import ForecastWeather from '../Weather/ForecastWeather'
import LoadingSpinner from '../LoadingSpinner';


const WeatherCard = () => {    
    const [loading, setLoading] = useState(true);        
    const [locationData, setLocationData] = useState([]);
    const [weatherData, setWeatherData] = useState([]);  
    

     //fetch weather info
     const fetchWeather = async() => {
        setLoading(true);
        try{
            await axios.get(`https://geolocation-db.com/json/`).then(async(response) => {   
                setLocationData(response.data);
                console.log(response.data);
                await http.get(`get-weather?lat=${response.data.latitude}&lng=${response.data.longitude}`).then(res => {                            
                    setWeatherData(res.data);
                })
            });
            
        }catch(error){
            console.log(error.message);
        }            
        setLoading(false);
    }

    useEffect(() => {         
        fetchWeather();         
   }, []);
   

    return (
        <div>
            {loading && <LoadingSpinner />}
            {!loading && (
                <div className='box-container weather-card'>
                    <CurrentWeather location = {locationData} weather = {weatherData.current} />
                    <ForecastWeather weather = {weatherData.daily} />            
                </div>
            )}
        </div>
    )
}

export default WeatherCard
