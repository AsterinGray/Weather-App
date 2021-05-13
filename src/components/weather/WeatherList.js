import React from 'react';
import { useRecoilValue } from 'recoil';

import { currentWeatherData } from '../../recoil/store';
import { unixToTime } from '../../utils/dateTime.utils';
import WeatherCard from './WeatherCard';

const WeatherList = () => {
  const data = useRecoilValue(currentWeatherData);

  return (
    <React.Fragment>
      <h1 className="text-medium">Current Weather</h1>
      <div className="weather-list">
        <WeatherCard title="Humidity" data={data.main.humidity} attr="%" />
        <WeatherCard title="Pressure" data={data.main.pressure} attr="mb" />
        <WeatherCard title="Wind" data={data.wind.speed} attr="km/h" />
        <WeatherCard title="Clouds" data={data.clouds.all} attr="%" />
        <WeatherCard title="Sunrise" data={unixToTime(data.sys.sunrise)} />
        <WeatherCard title="Sunset" data={unixToTime(data.sys.sunset)} />
      </div>
    </React.Fragment>
  );
};

export default WeatherList;
