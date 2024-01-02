import React, {useEffect, useRef, useState} from 'react';
import {Text, SafeAreaView, ActivityIndicator, View} from 'react-native';
import {Hour, WeatherData} from '../../api/types';
import ErrorHandling from '../../components/ErrorHandling';
import SearchInput from '../../components/SearchInput';
import {strings} from '../../locale/strings';
import {useWeatherForecast} from '../../react-query/useWeatherForecast';
import {processForecast} from '../../utils/processForecast';
import TestId from '../../utils/testId';
import ForecastCarousel from './components/ForecastCarousel';
import {styles} from './styles';
import WeatherCondition from './components/WeatherCondition';

const defaultCity = 'Berlin';

/**
 * SearchWeatherScreen component for displaying weather forecast.
 * Fetches and displays weather data based on user input.
 */
const SearchWeatherScreen: React.FC = () => {
  // Ref to hold the search input value to avoid re-renders on text change
  const searchInputRef = useRef<string>();
  // State to manage the search input value
  const [searchInput, setSearchInput] = useState<string>();

  // Custom hook to fetch weather forecast based on the search input
  const {
    data: weather,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useWeatherForecast(searchInput ?? defaultCity);

  // State to hold the processed hourly forecast data
  const [hourlyForecast, setHourlyForecast] = useState<Hour[]>([]);

  // Effect to trigger a refetch on first mount to show default location weather
  useEffect(() => {
    refetch();
  }, [refetch]);

  // Effect to process and update hourly forecast data when weather data changes
  useEffect(() => {
    if (weather) {
      setHourlyForecast(processForecast(weather));
    }
  }, [weather]);

  // Handler for search button press
  const handleSearch = async () => {
    setSearchInput(searchInputRef.current);
    // Delaying the refetch to the next event loop cycle
    setTimeout(() => {
      refetch();
    }, 0);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        {/* SearchInput component for user input */}
        <SearchInput
          setSearchQuery={text => {
            searchInputRef.current = text;
          }}
          handleSearch={handleSearch}
          placeHolder={strings.weatherScreen.searchPlaceHolder}
        />
        {isSuccess && (
          <>
            {/* WeatherCondition component to display current weather condition */}
            <WeatherCondition weather={weather as WeatherData} />
            <Text style={styles.foreCastText}>
              {strings.weatherScreen.fiveHourForecast}
            </Text>
            {/* ForecastCarousel component to display hourly forecast */}
            <ForecastCarousel hourlyForecast={hourlyForecast} />
          </>
        )}
        {/* ErrorHandling component to display error messages */}
        <ErrorHandling isError={isError} />
        {isLoading && (
          // Display loading indicator when fetching data
          <ActivityIndicator
            style={styles.loadingIndicator}
            size="large"
            testID={TestId.loadingIndicator}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchWeatherScreen;
