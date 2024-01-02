import {useQuery, UseQueryResult} from 'react-query';
import {WeatherAPI} from '../api/API';
import {WeatherData} from '../api/types';

const WEATHER_REQUEST = 'weather_request';

export const useWeatherForecast = (
  searchCity: string,
): UseQueryResult<WeatherData> => {
  return useQuery(
    [WEATHER_REQUEST, searchCity],
    () => WeatherAPI.fetchWeather(searchCity),
    {enabled: false},
  );
};
