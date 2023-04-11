import './assets/current-weather.css';
import React from 'react';

interface weatherItem {
  description: string;
  icon: string;
}
export interface currentWeatherType {
  city: string;
  name: string;
  main: {
    temp: number;
    feels_like: number;
    wind: number;
    humidity: number;
    pressure: number;
  }
  weather: Array<weatherItem>;
}

const CurrentWeather = (data: currentWeatherType | null) => {
  return (
    <div className="w-96 rounded-md weather text-white bg-zinc-800 mt-4 mx-auto leading-4 p-10">
      <div className="flex justify-between items-center ">
        <div className="text-base leading-4 font-normal m-0">
          <p>{data?.city}</p>
          <p>{data?.weather[0].description}</p>
        </div>
        <div>
          <img className="weather-icon" src={`icons/${data?.weather[0].icon}`} />
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <p className="font-bold text-6xl">{data?.main.temp && Math.round(data?.main.temp)}° C</p>
        <div className="w-1/2">
          <div className="w-full flex justify-between">
            <span>Details</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Feels Like</span>
            <span>{data?.main.feels_like && Math.round(data?.main.feels_like)}° </span>
          </div>
          <div className="w-full flex justify-between">
            <span>Wind</span>
            <span>{data?.main.feels_like} m/s</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Humidity</span>
            <span>{data?.main.humidity}%</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Pressure</span>
            <span>{data?.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
