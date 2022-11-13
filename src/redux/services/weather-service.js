import http  from "../../http-common";

class WeatherDataService
{
    getCurrentWeatherByLocation()
    {
        return http.get(`get-current-weather?lat=41.8781&lng=87.6298`);
    }
}

export default new WeatherDataService();