import { 
    GET_CURRENT_WEATHER_BY_LOCATION 
} from "./types";

import WeatherDataService from "../services/weather-service";

export const getCurrentWeatherByLocation = () => async(dispatch) => {
    try{
        const res = await WeatherDataService.getCurrentWeatherByLocation();       

        dispatch({
            type: GET_CURRENT_WEATHER_BY_LOCATION,
            payload: res.data
        });
        
    } catch(err){
        console.log(err);
    }
}
