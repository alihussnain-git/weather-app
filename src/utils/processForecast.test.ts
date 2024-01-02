import {processForecast} from './processForecast';

describe('processForecast', () => {
  it('filters hours within the next 5 hours', () => {
    const weatherData = {
      forecast: {
        forecastday: [
          {
            hour: [
              {time_epoch: Math.floor(Date.now() / 1000)}, // Current time
              {time_epoch: Math.floor(Date.now() / 1000) + 3600}, // 1 hour later
              {time_epoch: Math.floor(Date.now() / 1000) + 2 * 3600}, // 2 hours later
              {time_epoch: Math.floor(Date.now() / 1000) + 3 * 3600}, // 3 hours later
              {time_epoch: Math.floor(Date.now() / 1000) + 4 * 3600}, // 4 hours later
              {time_epoch: Math.floor(Date.now() / 1000) + 5 * 3600}, // 5 hours later
              {time_epoch: Math.floor(Date.now() / 1000) + 6 * 3600}, // 6 hours later (should be excluded)
            ],
          },
        ],
      },
    };

    const processedForecast = processForecast(weatherData as any);
    // Expecting only the next 5 hours to be included
    expect(processedForecast).toHaveLength(5);
  });
});
