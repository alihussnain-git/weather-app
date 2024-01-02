import {API} from './API';
import {API_KEY} from './environment';
import {WeatherData} from './types';

const WEATHER_FORECAST_URL = `forecast.json?key=${API_KEY}&q=`;

export const fetchWeather = async (
  searchCity: string,
): Promise<WeatherData> => {
  const response = await API.get<WeatherData>(
    WEATHER_FORECAST_URL + searchCity,
  );
  return response;
};
