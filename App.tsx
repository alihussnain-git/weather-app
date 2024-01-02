import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/react-query/react-query-configs';
import SearchWeatherScreen from './src/screens/weather/SearchWeatherScreen';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" />
      <SearchWeatherScreen />
    </QueryClientProvider>
  );
};

export default App;
