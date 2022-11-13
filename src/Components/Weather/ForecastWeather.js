import React from 'react';
import Moment from 'moment';
import WeatherImg from './WeatherImg';

function ForecastWeather(props) {
    //convert dateFormat
    const convertDate = (dt) => {
        var day = new Date(dt*1000);   
        return Moment(day).format('ddd, MMM DD'); 
    }

    const {weather} = props;    
    
  return (
    <div className='forecast'>
        {weather.map((data, index) => (
            <div className='forecast-row' key={index}>
                <h4 className='forecast-column'>                                
                    {convertDate(data.dt)}
                </h4>
                <div className='forecast-column'>                                
                    <WeatherImg icon = {data.weather[0].icon} />
                    <h4>{Math.round(data.temp.max)}/{Math.round(data.temp.min)}&#176;F</h4>
                </div>
                <h4 className='forecast-column'>{data.weather[0].description}</h4>
            </div>
        ))}                    
    </div>
  )
}

export default ForecastWeather