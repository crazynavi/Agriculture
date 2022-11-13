import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import WeatherImg from './WeatherImg';

const CurrentWeather = (props) => {    

    //get wind direction
    const getWindDirection = (degree) => {
        let compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

        return compassSector[(degree / 22.5).toFixed(0)];
    }

    const {location, weather} = props;    
    
    return (
        <div>
           <div>
                <h2 className='box-heading'>{location.city},{'\u00A0'} {location.state} {'\u00A0'} {location.countryCode}</h2>
                <div className='d-flex weather-today align-items-center'>
                    <div className='temperature-section d-flex align-items-center'>
                        <WeatherImg icon = {weather.weather[0].icon} />                            
                        <h1>{Math.round(weather.temp)}&#176;F</h1>
                    </div>
                    <div className='weather-info'>
                        <p className='d-flex w-100 weather-description'>
                            Feels like {Math.round(weather.feels_like)}°F. {'\u00A0'} 
                            {weather.weather[0].main} {'\u00A0'} 
                            {weather.weather[0].description}
                        </p>
                        <div className='d-flex w-100 align-items-center'>
                            <p>
                                <TiLocationArrow/>{weather.wind_speed}mph {'\u00A0'}
                                {getWindDirection(weather.wind_deg)}
                            </p>
                            <p>{weather.pressure}hPa</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p>Humidity: {weather.humidity}%</p>
                            <p>UV: {Math.round(weather.uvi)}%</p>
                            <p>Dew point: {Math.round(weather.dew_point)}&#176;F</p>
                            <p>Visibility: {weather.visibility/1000}km</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default CurrentWeather;
