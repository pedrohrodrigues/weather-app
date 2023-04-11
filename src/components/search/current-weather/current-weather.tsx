import './assets/current-weather.css';
import React from 'react';

export interface currentWeatherType {
  city: string;
  name: string;
}

const CurrentWeather = (data: currentWeatherType | null) => {
  return (
    <div className="w-96 rounded-md weather text-white bg-zinc-800 mt-4 mx-auto leading-4 p-10">
      <div className="flex justify-between items-center ">
        <div className="text-base leading-4 font-normal m-0">
          <p>Belgrade</p>
          <p>Sunny</p>
        </div>
        <div>
          <img src="icons/sun.svg" />
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <p className="font-bold text-6xl">18 C</p>
        <div className="w-1/2">
          <div className="w-full flex justify-between">
            <span>Details</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Feels Like</span>
            <span>22</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Wind</span>
            <span>2 m/s</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Humidity</span>
            <span>15%</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Pressure</span>
            <span>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
