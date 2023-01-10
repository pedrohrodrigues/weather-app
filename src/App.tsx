import React from 'react';
import logo from './logo.svg';
import Search from './components/search/search';
import CurrentWeather from './components/search/current-weather/current-weather';

function App() {
  const handleOnSearchChange = (searchData: string) => {
    console.log(searchData);
  };
  return (
    <div className="max-width-md mx-auto my-20">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
