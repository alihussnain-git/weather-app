import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {useWeatherForecast as mockUseCityWeather} from '../../react-query/useWeatherForecast';
import SearchWeatherScreen from './SearchWeatherScreen';
import {mockWeatherData} from '../../mocks/mockWeatherData';
import {strings} from '../../locale/strings';
import TestId from '../../utils/testId';

jest.mock('../../react-query/useCityWeather');

describe('SearchWeatherScreen', () => {
  beforeEach(() => {
    // Mock the useCityWeather hook with sample data
    (mockUseCityWeather as jest.Mock).mockReturnValue({
      data: mockWeatherData,
      isLoading: false,
      isSuccess: true,
      isError: false,
      refetch: jest.fn(),
    });
  });

  it('renders search input and handles search', async () => {
    const {getByPlaceholderText, getByText} = render(<SearchWeatherScreen />);

    const searchInput = getByPlaceholderText(
      strings.weatherScreen.searchPlaceHolder,
    );
    fireEvent.changeText(searchInput, 'Berlin');

    const searchButton = getByText(strings.searchInput.search);
    fireEvent.press(searchButton);

    // Wait for the component to render with new data after search
    await waitFor(() => {
      expect(getByText('Berlin, Germany')).toBeTruthy();
      expect(getByText('Forecast for the next 5 hours:')).toBeTruthy();
    });
  });

  it('renders loading indicator while fetching data', async () => {
    (mockUseCityWeather as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
      refetch: jest.fn(),
    });

    const {getByTestId} = render(<SearchWeatherScreen />);
    const loadingIndicator = getByTestId(TestId.loadingIndicator);

    // Wait for the loading indicator to be present in the DOM
    await waitFor(() => {
      expect(loadingIndicator).toBeTruthy();
    });
  });
  it('renders weather condition', async () => {
    const {getByText} = render(<SearchWeatherScreen />);

    // Wait for the component to render with weather data
    await waitFor(() => {
      expect(getByText('Sunny')).toBeTruthy();
    });
  });
});
