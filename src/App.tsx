import React, { useState } from 'react';
import Search, { searchDataItem } from './components/search/search';
import CurrentWeather, {
  currentWeatherType
} from './components/search/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';

function App() {
  const [currentWeather, setCurrentWeather] = useState<currentWeatherType | null>(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleOnSearchChange = (searchData: searchDataItem) => {
    const [latitude, longitude] = searchData.value.split(' ');
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const currentForecast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, currentForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentForecast({ city: searchData.label, ...forecastResponse });
        console.log({ currentWeather, currentForecast });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="max-width-md mx-auto my-20">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather {...currentWeather} />}
    </div>
  );
}

export default App;
